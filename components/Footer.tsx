"use client";

import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, LucideIcon } from "lucide-react";
import React, { ReactNode } from 'react';

// 1. Define types for the Button component's props
interface ButtonProps {
  children: ReactNode;
  size?: string;
  variant?: 'default' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
}

// The Button component is included here for the component to be runnable
const Button = ({ children, variant, className, onClick, href }: ButtonProps) => {
  // Base style for all buttons
  const baseStyle = "px-6 py-3 rounded-md text-base font-medium shadow-md transition duration-300 ease-in-out transform hover:scale-[1.01] flex items-center justify-center";
  let variantStyle = "";

  // Conditional styling based on variant
  if (variant === "outline") {
    variantStyle = "border border-current bg-transparent";
  } else {
    variantStyle = "bg-red-600 text-white hover:bg-red-700";
  }

  // Determine the tag type (a for links, button for actions)
  const Tag = href ? 'a' : 'button';

  // Construct props dynamically
  const tagProps = {
    className: `${baseStyle} ${variantStyle} ${className}`,
    onClick: onClick,
    // Only include href if Tag is 'a'
    ...(href && { href: href })
  };

  return (
    <Tag {...tagProps}>
      {children}
    </Tag>
  );
};


// Dummy data for contact info
const contactInfo = {
  address: [
    "11/A, Maharshi Debendra Road",
    "Kolkata-700007, West Bengal, India",
  ],
  generalEmail: "ricstlpl@gmail.com",
  salesEmail: "sales@ricsteel.com",
  phone: "+91 98765 43210" // Dummy number
};

// Define type for quick links
interface LinkItem {
  name: string;
  href: string;
}

const quickLinks: LinkItem[] = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const legalLinks: LinkItem[] = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Sitemap", href: "/sitemap" },
];

// Define type for social media links
interface SocialLinkItem {
  icon: LucideIcon;
  href: string;
  name: string;
}

// New social media link data
const socialLinks: SocialLinkItem[] = [
  { icon: Facebook, href: "https://facebook.com/ricsteel", name: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/ricsteel", name: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/ricsteel", name: "LinkedIn" },
];


export default function Footer() {
  return (
    // Theme Optimization: bg-black for light, dark:bg-neutral-950 for dark mode.
    <footer className="bg-black dark:bg-neutral-950 text-gray-400 border-t border-red-600/30">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

        {/* Main Grid: Responsive layout adjusted from 2 columns on mobile (auto-stacking) 
                    to 4 columns on medium screens, and 5 columns on large screens. */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-6 md:gap-x-10">

          {/* Column 1: Logo & Mission (Spans 2 columns on mobile for prominence) */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            {/* Theme Optimization: Text remains white on dark background in both modes */}
            <div className="text-3xl font-extrabold text-white">
              RIC <span className="text-red-600">STEEL</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-gray-300 dark:text-gray-400">
              Your trusted partner for structural, industrial, and specialized steel products in India and beyond.
            </p>
            {/* Button is dark-mode compatible */}
            <Button
              href="/contact"
              className="mt-2 text-sm px-4 py-2 bg-red-700 hover:bg-red-800"
            >
              Get a Quote
            </Button>

            {/* New: Social Links Section */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit RIC STEEL on ${link.name}`}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Auto-span 1 column on mobile) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-2 border-b border-red-600/50 pb-1">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-red-500 transition duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Products (Auto-span 1 column on mobile) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-2 border-b border-red-600/50 pb-1">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-red-500 transition duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="/products/tmt-bars" className="hover:text-red-500 transition duration-200">
                  TMT Bars
                </a>
              </li>
              <li>
                <a href="/products/structural-steel" className="hover:text-red-500 transition duration-200">
                  Structural Steel
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (Spans 2 columns on mobile) */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-2 border-b border-red-600/50 pb-1">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <address className="not-italic">
                  {contactInfo.address.map((line, index) => (
                    <span key={index} className="block">{line}</span>
                  ))}
                </address>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-red-500 transition duration-200">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                <a href={`mailto:${contactInfo.salesEmail}`} className="hover:text-red-500 transition duration-200">
                  {contactInfo.salesEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 dark:border-neutral-800 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} RIC STEEL. All rights reserved. | Built with Precision & Performance.
          </p>
        </div>

      </div>
    </footer>
  );
}
