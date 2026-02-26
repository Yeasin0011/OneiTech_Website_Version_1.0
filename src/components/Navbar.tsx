"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
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
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">UI/UX Design</HoveredLink>
            <HoveredLink href="/interface-design">End User Workplace Support</HoveredLink>
            <HoveredLink href="/seo">Web and App Development</HoveredLink>
            <HoveredLink href="/branding">Automation and IOT</HoveredLink>
            <HoveredLink href="/branding">Domain, Hosting and Email Services</HoveredLink>
            <HoveredLink href="/branding">AI and Machine Learning</HoveredLink>
          </div> */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="flex gap-4">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Freight Management</HoveredLink>
              <HoveredLink href="/interface-design">HRM</HoveredLink>
              <HoveredLink href="/seo">Accounting</HoveredLink>

              {/* <HoveredLink href="/branding">Event MGT</HoveredLink>
              <HoveredLink href="/branding">Site Engineer Remote MGT</HoveredLink>
              <HoveredLink href="/branding">Tele Medicine</HoveredLink> */}
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
        <MenuItem setActive={setActive} active={active} item="Contact" href="/contact">
        </MenuItem>
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


