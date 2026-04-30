import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequestLog = new Map<string, number[]>();

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return req.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (ipRequestLog.get(ip) || []).filter(
    (timestamp) => now - timestamp < WINDOW_MS
  );

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    ipRequestLog.set(ip, recent);
    return true;
  }

  recent.push(now);
  ipRequestLog.set(ip, recent);
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(input: string): string {
  return input.replace(/\s+/g, " ").trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const ip = getClientIp(req);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const website = clean(String(body?.website ?? ""));
    if (website) {
      // Return success for bots so they stop retrying.
      return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
    }

    const name = clean(String(body?.name ?? ""));
    const email = clean(String(body?.email ?? ""));
    const subject = clean(String(body?.subject ?? ""));
    const message = clean(String(body?.message ?? ""));

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !toEmail || !fromEmail) {
      return NextResponse.json(
        { message: "Server email is not configured. Please contact support." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `OneiTech Website <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `IP: ${ip}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
