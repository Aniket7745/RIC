"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Boxes, Factory, Truck, RefreshCcw, Landmark, Aperture, CheckCircle2, Zap } from "lucide-react";

// Animation variant for step cards (Duration reduced to 0.4s)
const cardVariants = {
  hidden: { opacity: 0, y: 30 }, // Reduced Y shift
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }, // Faster duration
};

// Data for the Operational Flow steps
const operationSteps = [
  {
    icon: Factory,
    title: "1. Strategic Sourcing",
    description: "High-grade steel, TMT bars, and structural steel acquired directly from accredited national mills.",
  },
  {
    icon: Boxes,
    title: "2. Inventory Management",
    description: "Secured, multi-location warehousing in Kolkata & Howrah for optimal stocking and swift retrieval.",
  },
  {
    icon: RefreshCcw,
    title: "3. Rigorous Quality Control",
    description: "Mandatory QC checks: chemical composition analysis, dimensional accuracy, and material hardness testing.",
  },
  {
    icon: Truck,
    title: "4. Last-Mile Distribution",
    description: "Reliable, expedited logistics network guaranteeing just-in-time delivery across all major industrial zones.",
  },
];

// Data for Key Metrics
const keyMetrics = [
  { value: "30+", label: "Years of Service", icon: Landmark },
  { value: "50K+ MT", label: "Annual Throughput", icon: Aperture },
  { value: "99%", label: "On-Time Delivery", icon: CheckCircle2 },
];


export default function OperationsPage() {
  return (
    <div className="w-full">

      {/* ========================= HEADER / HERO ========================= */}
      <section className="relative h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          animate={{ y: [-20, 0, -20] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        >
          <video
            src="/product/herosection.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay for readability and depth */}
        <div className="absolute inset-0 bg-black/70 dark:bg-black/80" />

        {/* Title Block */}
        <div className="relative z-10 text-white text-center p-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} // Reduced Y shift
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }} // Faster duration and reduced delay
            className="text-5xl sm:text-7xl font-extrabold tracking-tight drop-shadow-lg mb-3"
          >
            Operational Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} // Reduced Y shift
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }} // Faster duration and reduced delay
            className="text-xl md:text-2xl font-light opacity-80"
          >
            Precision in Trading, Rigor in Logistics, Commitment to Quality.
          </motion.p>
        </div>
      </section>

      {/* --- */}

      {/* ========================= KEY METRICS ========================= */}
      <section className="py-10 bg-white dark:bg-neutral-900 shadow-inner">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }} // Simplified initial state
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.4 }} // Faster duration and minimal delay
              className="p-4 rounded-xl"
            >
              <metric.icon className="h-10 w-10 text-red-600 mx-auto mb-3" />
              <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-1">
                {metric.value}
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- */}

      {/* ========================= OPERATIONS OVERVIEW & FLOW ========================= */}
      <section className="pt-16 md:pt-20 pb-12 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} // Faster duration
            className="text-3xl md:text-4xl font-bold text-center mb-6"
          >
            The RIC STEEL Trading Edge
          </motion.h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto text-lg mb-12">
            Our Trading-First model is powered by a robust financial backbone, efficient warehousing, and a relentless focus on material integrity. This integrated approach guarantees maximum reliability and speed for our clients.
          </p>

          {/* OPERATION STEPS - Faster Animation */}
          <div className="grid md:grid-cols-4 gap-6">
            {operationSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }} // Removed sequencing delay
                className="p-6 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
              >

                {/* Step Icon */}
                <step.icon className="h-10 w-10 text-red-600 mb-4" />

                {/* Step Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>

                {/* Step Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {step.description}
                </p>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- */}

      {/* ========================= REGIONAL HUBS ========================= */}
      <section className="py-16 bg-white dark:bg-neutral-900 border-t dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} // Faster duration
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
          >
            Strategic Regional Presence
          </motion.h2>

          <p className="text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Our operational strength is rooted in the Kolkata and Howrah industrial regions, serving as critical logistics gateways to the entire Eastern India manufacturing and construction ecosystem.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }} // Reduced X shift
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }} // Faster duration
            >
              <h3 className="text-2xl font-semibold mb-3">Kolkata Hub</h3>
              <Image src="/factory.jpg" alt="Kolkata Steel Market" width={600} height={400} className="rounded-xl shadow-lg object-cover w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }} // Reduced X shift
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }} // Faster duration
            >
              <h3 className="text-2xl font-semibold mb-3">Howrah Industrial Zone</h3>
              <Image src="/factory.jpg" alt="Howrah Steel Trading" width={600} height={400} className="rounded-xl shadow-lg object-cover w-full h-auto" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* --- */}

      {/* ========================= INDUSTRIES SERVED ========================= */}
      <section className="py-16 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} // Faster duration
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            A Reliable Partner to Key Industries
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Construction Sector",
              "Infrastructure Projects",
              "Fabrication Units",
              "MSME Manufacturing"
            ].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 10 }} // Simplified and reduced motion
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3 }} // Very fast duration, removed delay
                className="p-5 bg-white dark:bg-neutral-800 rounded-lg shadow-md border-t-4 border-red-600 flex items-center justify-center h-full"
              >
                <Zap className="h-5 w-5 text-red-600 mr-3 shrink-0" />
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200 text-left flex-grow">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
