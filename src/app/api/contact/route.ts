import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;
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

  // Evict any IP whose timestamps have all aged out, so the map doesn't
  // grow forever with entries for visitors who never come back.
  ipRequestLog.forEach((timestamps, loggedIp) => {
    const active = timestamps.filter((timestamp) => now - timestamp < WINDOW_MS);
    if (active.length === 0) {
      ipRequestLog.delete(loggedIp);
    } else if (active.length !== timestamps.length) {
      ipRequestLog.set(loggedIp, active);
    }
  });

  const recent = ipRequestLog.get(ip) || [];

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  recent.push(now);
  ipRequestLog.set(ip, recent);
  return false;
}

function isValidEmail(email: string): boolean {
  return email.length <= MAX_FIELD_LENGTH && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(input: string): string {
  return input.replace(/\s+/g, " ").trim();
}

function isTrustedOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true;

  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!isTrustedOrigin(req)) {
      return NextResponse.json(
        { message: "Request origin not allowed." },
        { status: 403 }
      );
    }

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

    if (
      name.length > MAX_FIELD_LENGTH ||
      subject.length > MAX_FIELD_LENGTH ||
      message.length > MAX_MESSAGE_LENGTH
    ) {
      return NextResponse.json(
        { message: "One or more fields exceed the maximum allowed length." },
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
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { message: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
