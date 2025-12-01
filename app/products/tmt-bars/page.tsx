"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, ShieldCheck, Download, Activity, Globe } from "lucide-react";

// 1. DUMMY DATA FOR TMT BARS
const productData = {
  title: "TMT Rebars (Fe 500/Fe 550 Grade)",
  tagline: "High Ductility and Strength for Earthquake-Resistant Structures.",
  heroImage: "/product/TMT.png",
  fullDescription: "Our Thermo-Mechanically Treated (TMT) bars are the result of cutting-edge technology, ensuring a strong outer layer and a ductile inner core. This unique structure provides superior bonding strength with concrete and exceptional resistance to seismic activity. They are indispensable for high-rise buildings, bridges, and critical infrastructure projects, meeting all relevant BIS standards for safety and reliability.",
};

const technicalSpecs = [
  { spec: "Standard Grade", value: "Fe 500 / Fe 550 D", emphasis: true },
  { spec: "Manufacturing Process", value: "Thermo-Mechanical Treatment (TMT)" },
  { spec: "Elongation (min)", value: "12 - 18% (Excellent Ductility)" },
  { spec: "Yield Stress (min)", value: "500 MPa / 550 MPa" },
  { spec: "Available Diameters", value: "8 mm to 32 mm" },
];

const availableSections = [
  { icon: Activity, type: "Fe 500 Grade", sizes: "Standard construction applications" },
  { icon: Globe, type: "Fe 550 D Grade", sizes: "Heavy-duty and seismic zone projects" },
  { icon: Zap, type: "Custom Lengths", sizes: "Available upon bulk order request" },
];

// 2. MAIN COMPONENT
export default function TMTBarPage() {
  return (
    <div className="w-full">

      {/* ========================= HERO: PRODUCT HEADER ========================= */}
      <section className="relative h-[50vh] flex items-end overflow-hidden pb-10">
        <div className="absolute inset-0">
          <Image
            src={productData.heroImage}
            alt={productData.title}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-white"
        >
          <p className="text-sm uppercase tracking-widest text-red-400 mb-2">RIC STEEL Product Detail</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">{productData.title}</h1>
          <p className="text-xl font-light opacity-90">{productData.tagline}</p>
        </motion.div>
      </section>

      {/* ========================= OVERVIEW & DESCRIPTION ========================= */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-10">

          {/* Left Column: Full Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Product Overview</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {productData.fullDescription}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/enquiry"
                className="flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
              >
                Get a Custom Quote
              </a>
            </div>
          </motion.div>

          {/* Right Column: Key Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-xl shadow-xl border-l-4 border-red-600 self-start"
          >
            <ShieldCheck className="h-8 w-8 text-red-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Earthquake Resistance</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              The unique **ferrite-pearlite structure** provides superior ductility (flexibility) essential for absorbing energy during seismic events.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ========================= TECHNICAL SPECIFICATIONS TABLE ========================= */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          >
            Technical Specifications
          </motion.h2>

          <div className="border border-gray-300 dark:border-neutral-700 rounded-xl overflow-hidden shadow-lg">
            {technicalSpecs.map((item, index) => (
              <motion.div
                key={item.spec}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`grid grid-cols-2 p-4 text-sm md:text-base transition duration-200
                            ${item.emphasis
                    ? 'bg-white font-semibold dark:bg-neutral-900'
                    : 'bg-gray-100 dark:bg-neutral-800'
                  }`}
              >
                <div className="text-gray-900 dark:text-white border-r border-gray-200 dark:border-neutral-700">
                  {item.spec}
                </div>
                <div className="text-right pl-4 text-gray-700 dark:text-gray-300">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= AVAILABLE SECTIONS/SIZES ========================= */}
      <section className="py-16 md:py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white"
          >
            Available Grades & Applications
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {availableSections.map((section, index) => (
              <motion.div
                key={section.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
              >
                <section.icon className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{section.type}</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm">
                  <span className="font-medium text-red-600">Application:</span> {section.sizes}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
