"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Factory, Zap, ShieldCheck, Ruler, Truck } from "lucide-react";

// 1. DUMMY DATA FOR STEEL BILLETS
const productData = {
  title: "Steel Billets (Primary Raw Material)",
  tagline: "High Purity, Uniform Quality for Re-Rolling Applications.",
  heroImage: "/product/SteelBilletss.png",
  fullDescription: "Our Steel Billets are semi-finished, cast steel products of specified dimensions, ideal for subsequent rolling into finished products like TMT bars and structural sections. Produced via continuous casting, they guarantee minimal impurities, excellent surface finish, and consistent chemical composition, maximizing efficiency and quality in your downstream manufacturing process.",
};

const technicalSpecs = [
  { spec: "Standard Sizes", value: "100x100 mm, 125x125 mm", emphasis: true },
  { spec: "Casting Process", value: "Continuous Casting" },
  { spec: "Carbon Content", value: "Customizable based on rolling requirements" },
  { spec: "Purity", value: "Low residual elements" },
  { spec: "Surface Finish", value: "Free from major defects (scabs, cracks)" },
];

const availableSections = [
  { icon: Factory, type: "Rolling Mill Ready", sizes: "Perfect feedstock for rebar and section mills" },
  { icon: Ruler, type: "Dimensional Tolerance", sizes: "Strictly maintained dimensions for seamless operation" },
  { icon: Truck, type: "Logistics", sizes: "Bulk handling and transportation optimized" },
];

// 2. MAIN COMPONENT
export default function SteelBilletsPage() {
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
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Purity and Consistency</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Manufactured using **Continuous Casting** for superior internal cleanliness and consistent metallurgical properties batch after batch.
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
            Key Advantages for Rolling Mills
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
                  <span className="font-medium text-red-600">Detail:</span> {section.sizes}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
