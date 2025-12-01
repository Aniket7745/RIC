"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Factory } from "lucide-react";

export default function EnquiryPage() {
  return (
    <div className="w-full">

      {/* ========================= HEADER / HERO ========================= */}
      <section className="bg-gray-900 dark:bg-black text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-tight"
          >
            Start Your Steel Enquiry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl font-light opacity-80"
          >
            Tell us about your project requirements and we will connect you with a specialist.
          </motion.p>
        </div>
      </section>

      {/* --- */}

      {/* ========================= CONTACT & FORM CONTAINER ========================= */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="grid lg:grid-cols-3 gap-10 bg-white dark:bg-neutral-900 shadow-2xl rounded-xl p-6 md:p-10">

            {/* Left Column: Contact Details */}
            <div className="lg:col-span-1 bg-red-600 rounded-lg p-6 text-white shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="mb-6 opacity-90">
                Prefer to speak directly? Reach out to our sales and logistics team.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">Email Address</span>
                    <a href="mailto:sales@ricsteel.com" className="opacity-80 hover:underline">
                      sales@ricsteel.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">Phone Number</span>
                    <a href="tel:+918000012345" className="opacity-80 hover:underline">
                      +91 8000 012 345
                    </a>
                  </div>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">Head Office</span>
                    <span className="block opacity-80">
                      101, Business Tower, Kolkata, West Bengal, India
                    </span>
                  </div>
                </li>
                <li className="flex items-center">
                  <Factory className="h-5 w-5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">Warehouse & Logistics</span>
                    <span className="block opacity-80">
                      Regional Warehouse Hubs across Eastern India
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column: Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 p-2"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Request a Quote</h2>

              <form action="#" method="POST" className="space-y-5">

                {/* Name & Email (Two Columns on Desktop) */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white transition duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Business Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white transition duration-200"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white transition duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company / Firm Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white transition duration-200"
                    />
                  </div>
                </div>

                {/* Product Interest (Dropdown) */}
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Primary Product Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white transition duration-200 appearance-none pr-8"
                  >
                    <option value="" disabled selected>Select a product category</option>
                    <option value="structural_steel">Structural Steel Sections</option>
                    <option value="tmt_bars">TMT Rebars (Fe 500/550)</option>
                    <option value="steel_billets">Steel Billets (Raw Material)</option>
                    <option value="ferro_alloys">Ferro Alloys (SiMn, FeMn)</option>
                    <option value="general_enquiry">General/Other Enquiry</option>
                  </select>
                </div>

                {/* Project Details (Textarea) */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Project Details & Quantity Required (e.g., 50 tonnes, 100x100mm)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white transition duration-200"
                    placeholder="Specify the grade, size, quantity, and delivery timeline."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-red-600 hover:bg-red-700 transition duration-300 transform hover:-translate-y-0.5"
                >
                  Submit Enquiry
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
