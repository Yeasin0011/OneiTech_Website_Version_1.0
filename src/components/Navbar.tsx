"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Desktop floating nav – hidden on small screens */}
      <DesktopNavbar className="top-2 hidden md:block" />
      {/* Mobile header – visible only on small screens */}
      <MobileNavbar />
    </div>
  );
}

/* ── Desktop nav (unchanged look) ──────────────────────────── */
function DesktopNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services" href="/services">
          <div className="flex gap-4">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/services/software-dev-and-erp-solution">Software Development and ERP Solution</HoveredLink>
              <HoveredLink href="/services/network-solutions">Network Solutions</HoveredLink>
              <HoveredLink href="/services/backup-and-disaster-recovery">Backup and Disaster Recovery</HoveredLink>
              <HoveredLink href="/services/marketing-consultancy">Marketing Consultancy</HoveredLink>
              <HoveredLink href="/services/cloud-onboarding-services">Cloud Onboarding/Services</HoveredLink>
              <HoveredLink href="/services/cyber-security">Cyber Security</HoveredLink>
            </div>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="flex gap-4">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Freight Management</HoveredLink>
              <HoveredLink href="/interface-design">HRM</HoveredLink>
              <HoveredLink href="/seo">Accounting</HoveredLink>
            </div>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Fixed Asset MGT</HoveredLink>
              <HoveredLink href="/interface-design">Provident Fund MGT</HoveredLink>
              <HoveredLink href="/seo">Hospital MGT</HoveredLink>
              <HoveredLink href="/branding">CRM</HoveredLink>
              <HoveredLink href="/branding">Vat MGT</HoveredLink>
              <HoveredLink href="/branding">Income Tax Return MGT</HoveredLink>
            </div>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact" href="/contact" />
        <MenuItem setActive={setActive} active={active} item="About Us" href="/about">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">About</HoveredLink>
            <HoveredLink href="/about#team">Team Members & Culture</HoveredLink>
            <HoveredLink href="/about#clients">Our Clients</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

/* ── Mobile nav (hamburger) ─────────────────────────────────── */
function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden fixed top-0 inset-x-0 z-50">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#020817] border-b border-white/[0.1]"
           style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}>
        <Link href="/" onClick={close}>
          <Image src="/logo.png" alt="OneiTech" width={80} height={40} className="object-contain" />
        </Link>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="w-11 h-11 flex flex-col items-center justify-center gap-[5px] text-white"
        >
          <span className={cn("block w-6 h-0.5 bg-current transition-all duration-300", open && "rotate-45 translate-y-[7px]")} />
          <span className={cn("block w-6 h-0.5 bg-current transition-all duration-300", open && "opacity-0")} />
          <span className={cn("block w-6 h-0.5 bg-current transition-all duration-300", open && "-rotate-45 -translate-y-[7px]")} />
        </button>
      </div>

      {/* Slide-down menu */}
      {open && (
        <div className="bg-[#020817] border-b border-white/[0.1] shadow-xl overflow-y-auto max-h-[80vh]">
          <nav className="flex flex-col divide-y divide-white/[0.08] px-4">

            {/* Services */}
            <div>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className="w-full flex items-center justify-between py-4 text-white text-base font-medium"
              >
                Services
                <svg className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="flex flex-col gap-3 pb-4 pl-3 text-sm text-gray-300">
                  <Link href="/services" onClick={close} className="hover:text-teal-400 transition-colors">All Services</Link>
                  <Link href="/services/software-dev-and-erp-solution" onClick={close} className="hover:text-teal-400 transition-colors">Software Dev & ERP Solution</Link>
                  <Link href="/services/network-solutions" onClick={close} className="hover:text-teal-400 transition-colors">Network Solutions</Link>
                  <Link href="/services/backup-and-disaster-recovery" onClick={close} className="hover:text-teal-400 transition-colors">Backup & Disaster Recovery</Link>
                  <Link href="/services/marketing-consultancy" onClick={close} className="hover:text-teal-400 transition-colors">Marketing Consultancy</Link>
                  <Link href="/services/cloud-onboarding-services" onClick={close} className="hover:text-teal-400 transition-colors">Cloud Onboarding/Services</Link>
                  <Link href="/services/cyber-security" onClick={close} className="hover:text-teal-400 transition-colors">Cyber Security</Link>
                </div>
              )}
            </div>

            {/* Products */}
            <div>
              <button
                onClick={() => setProductsOpen((v) => !v)}
                className="w-full flex items-center justify-between py-4 text-white text-base font-medium"
              >
                Products
                <svg className={cn("w-4 h-4 transition-transform", productsOpen && "rotate-180")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productsOpen && (
                <div className="flex flex-col gap-3 pb-4 pl-3 text-sm text-gray-300">
                  <Link href="/web-dev" onClick={close} className="hover:text-teal-400 transition-colors">Freight Management</Link>
                  <Link href="/interface-design" onClick={close} className="hover:text-teal-400 transition-colors">HRM</Link>
                  <Link href="/seo" onClick={close} className="hover:text-teal-400 transition-colors">Accounting</Link>
                  <Link href="/web-dev" onClick={close} className="hover:text-teal-400 transition-colors">Fixed Asset MGT</Link>
                  <Link href="/interface-design" onClick={close} className="hover:text-teal-400 transition-colors">Provident Fund MGT</Link>
                  <Link href="/seo" onClick={close} className="hover:text-teal-400 transition-colors">Hospital MGT</Link>
                  <Link href="/branding" onClick={close} className="hover:text-teal-400 transition-colors">CRM</Link>
                  <Link href="/branding" onClick={close} className="hover:text-teal-400 transition-colors">Vat MGT</Link>
                  <Link href="/branding" onClick={close} className="hover:text-teal-400 transition-colors">Income Tax Return MGT</Link>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link href="/contact" onClick={close} className="py-4 text-white text-base font-medium hover:text-teal-400 transition-colors">
              Contact
            </Link>

            {/* About */}
            <div>
              <button
                onClick={() => setAboutOpen((v) => !v)}
                className="w-full flex items-center justify-between py-4 text-white text-base font-medium"
              >
                About Us
                <svg className={cn("w-4 h-4 transition-transform", aboutOpen && "rotate-180")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutOpen && (
                <div className="flex flex-col gap-3 pb-4 pl-3 text-sm text-gray-300">
                  <Link href="/about" onClick={close} className="hover:text-teal-400 transition-colors">About</Link>
                  <Link href="/about#team" onClick={close} className="hover:text-teal-400 transition-colors">Team Members & Culture</Link>
                  <Link href="/about#clients" onClick={close} className="hover:text-teal-400 transition-colors">Our Clients</Link>
                </div>
              )}
            </div>

          </nav>
        </div>
      )}
    </div>
  );
}


