"use client"
// This is the main Server Component file: app/contact/page.tsx
import { MapPin, Mail, Clock, Phone, Send, Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react"; // Required for React.ElementType type

// ========================= STATIC DATA (Server Rendered) =========================
const contactInfo = {
  address: [
    "11/A, Maharshi Debendra Road",
    "1st Floor, Room No. 11",
    "Kolkata-700007, West Bengal, India",
  ],
  generalEmail: "ricstlpl@gmail.com",
  salesEmail: "sales@ricsteel.com",
  businessHours: "Mon - Sat: 10:00 AM - 6:00 PM",
};

// ========================= STATIC COMPONENTS (Server Rendered) =========================

// Define a TypeScript interface for the component props
interface ContactDetailCardProps {
  icon: React.ElementType; // The icon component (e.g., MapPin)
  title: string;
  content: string | string[];
  link?: string;
}

// Component for a single static contact detail block
// FIX: Apply the interface to the component props
const ContactDetailCard = ({ icon: Icon, title, content, link }: ContactDetailCardProps) => (
  <div className="flex flex-col items-center text-center p-5 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 transition duration-300">
    <Icon className="h-7 w-7 text-red-600 mb-3" />
    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <div className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
      {Array.isArray(content) ? (
        content.map((line, index) => <p key={index}>{line}</p>)
      ) : link ? (
        <a href={link} className="text-red-600 hover:text-red-700 dark:hover:text-red-500 font-medium transition duration-200 block">
          {content}
        </a>
      ) : (
        <p>{content}</p>
      )}
    </div>
  </div>
);

// Loading State/Skeleton (Server Rendered initially)
const LoadingSkeleton = () => (
  <div className="grid md:grid-cols-2 gap-10 min-h-[500px] items-center justify-center p-6">
    <div className="space-y-4 p-8 bg-white dark:bg-neutral-800 rounded-xl shadow-2xl animate-pulse">
      <div className="h-6 bg-gray-200 dark:bg-neutral-700 rounded w-3/4 mx-auto md:mx-0 mb-8"></div>
      <div className="grid grid-cols-2 gap-4"><div className="h-10 bg-gray-200 dark:bg-neutral-700 rounded-lg"></div><div className="h-10 bg-gray-200 dark:bg-neutral-700 rounded-lg"></div></div>
      <div className="grid grid-cols-2 gap-4"><div className="h-10 bg-gray-200 dark:bg-neutral-700 rounded-lg"></div><div className="h-10 bg-gray-200 dark:bg-neutral-700 rounded-lg"></div></div>
      <div className="h-32 bg-gray-200 dark:bg-neutral-700 rounded-lg"></div>
      <div className="h-12 bg-red-700/50 rounded-md"></div>
    </div>
    <div className="bg-gray-200 dark:bg-neutral-800 rounded-xl shadow-2xl overflow-hidden h-64 md:h-full flex items-center justify-center border-4 border-red-600/50">
      <Loader2 className="h-8 w-8 text-red-600 animate-spin" />
      <p className="ml-3 text-gray-700 dark:text-gray-300">Loading Map...</p>
    </div>
  </div>
);


// ========================= DYNAMIC IMPORT (Code Splitting and Client Isolation) =========================
const DynamicContactSection = dynamic(
  // The loader function imports framer-motion and defines the Client Component wrapper
  async () => {
    // Dynamically import the heavy client library here.
    const { motion } = await import("framer-motion");

    // This component applies the motion wrapper to the static content above.
    const MotionContactForm = () => (
      <>
        {/* Wrap both the Form and the Map in separate motion containers for stagger effect */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Render the form section here */}
            <div className="p-6 md:p-8 bg-white dark:bg-neutral-800 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center md:text-left">
                Send Us Your Business Enquiry
              </h3>
              <form className="space-y-4">
                {/* Form fields */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input type="text" placeholder="Full Name*" required className="w-full p-3 border border-gray-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-red-600 focus:border-red-600 outline-none transition text-sm" />
                  <input type="text" placeholder="Company Name" className="w-full p-3 border border-gray-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-red-600 focus:border-red-600 outline-none transition text-sm" />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input type="email" placeholder="Work Email*" required className="w-full p-3 border border-gray-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-red-600 focus:border-red-600 outline-none transition text-sm" />
                  <input type="tel" placeholder="Phone Number*" required className="w-full p-3 border border-gray-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-red-600 focus:border-red-600 outline-none transition text-sm" />
                </div>
                <textarea rows={4} placeholder="Your requirements (Product, Quantity, Location)*" required className="w-full p-3 border border-gray-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-700/50 text-gray-900 dark:placeholder-gray-400 focus:ring-red-600 focus:border-red-600 outline-none resize-none transition text-sm" />
                <button type="submit" className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-medium rounded-md shadow-lg text-white bg-red-600 hover:bg-red-700 transition duration-300 transform hover:-translate-y-0.5">
                  Send Enquiry <Send className="ml-2 h-5 w-5" />
                </button>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 pt-1">
                  *We aim to respond to all business enquiries within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="md:order-last order-last rounded-xl shadow-2xl overflow-hidden h-64 md:h-full md:min-h-[300px] border-4 border-red-600/50"
          >
            {/* Render the map section here */}
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://maps.google.com/maps?q=11%2FA%2C%20Maharshi%20Debendra%20Road%2C%201st%20Floor%2C%20Room%20No.%2011%2C%20Kolkata-700007%2C%20West%20Bengal%2C%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen // FIX: Changed allowFullScreen="" to allowFullScreen for correct boolean typing
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RIC STEEL Registered Office Location"
            ></iframe>
          </motion.div>
        </div>
      </>
    );

    // We return the component itself
    return MotionContactForm;
  },
  {
    loading: () => <LoadingSkeleton />, // Server renders this
    ssr: false, // Prevents server rendering of the client component boundary
  }
);


// ========================= MAIN PAGE (Server Component) =========================
export default function ContactPage() {
  return (
    <div className="w-full">

      {/* ========================= HEADER / HERO ========================= */}
      <section className="py-16 md:py-32 bg-gray-100 dark:bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Start a Conversation
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            The fastest way to get a customized quote for structural and industrial steel is by using the form below.
          </p>
        </div>
      </section>

      <hr className="border-gray-200 dark:border-neutral-800" />

      {/* ========================= MAP AND CONTACT FORM SECTION (Lazy Loaded) ========================= */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* This renders the loading skeleton first, improving performance. */}
          <DynamicContactSection />
        </div>
      </section>

      <hr className="border-gray-200 dark:border-neutral-800" />

      {/* ========================= STATIC CONTACT DETAILS GRID ========================= */}
      <section className="py-16 md:py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Other Ways to Reach Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <ContactDetailCard icon={MapPin} title="Office Address" content={contactInfo.address} />
            <ContactDetailCard icon={Mail} title="Sales Email" content={contactInfo.salesEmail} link={`mailto:${contactInfo.salesEmail}`} />
            <ContactDetailCard icon={Mail} title="General Email" content={contactInfo.generalEmail} link={`mailto:${contactInfo.generalEmail}`} />
            <ContactDetailCard icon={Clock} title="Business Hours" content={contactInfo.businessHours} />

          </div>
          {/* Final Phone CTA integrated below the grid */}
          <div className="text-center mt-12">
            <p className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
              For Urgent Inquiries:
            </p>
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center justify-center px-6 py-3 border border-red-600 text-red-600 font-medium rounded-md hover:bg-red-600 hover:text-white transition duration-300 shadow-md"
            >
              <Phone className="mr-2 h-5 w-5" /> Call Us Now (+91 XXXXXXXXXX)
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
