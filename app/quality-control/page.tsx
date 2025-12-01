"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Microscope, Scaling, Wrench, FileText, Zap } from "lucide-react";

// Animation variant for content blocks
const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Data sourced from the provided documents
const qaPractices = [
  {
    icon: Scaling,
    title: "Dimensional Accuracy",
    description: "Rigorous checks ensure all structural sections meet specified tolerances and measurements.",
  },
  {
    icon: Wrench,
    title: "Hardness Testing",
    description: "Material hardness tests are performed to confirm structural integrity and performance.",
  },
  {
    icon: Microscope,
    title: "Chemical Composition Analysis",
    description: "Detailed analysis verifies the exact chemical makeup, ensuring compliance with grade specifications.",
  },
];

const standards = [
  { title: "Structural Steel Standard", details: "Adherence to BIS IS2062 for all structural steel products.", icon: CheckCircle },
  { title: "Metallurgical Norms", details: "General adherence to stringent industrial-grade metallurgical norms.", icon: CheckCircle },
];


export default function QualityControlPage() {
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


        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/70 dark:bg-black/80" />

        {/* Title Block */}
        <div className="relative z-10 text-white text-center p-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight drop-shadow-lg mb-3"
          >
            Quality Control
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-light opacity-80"
          >
            Adherence to stringent quality and metallurgical standards is our core commitment.
          </motion.p>
        </div>
      </section>

      {/* ========================= QUALITY COMMITMENT OVERVIEW ========================= */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-center mb-6"
          >
            Guaranteeing Material Integrity
          </motion.h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto text-lg mb-12">
            Every product supplied by RIC STEEL undergoes mandatory inspections to ensure it meets both industry requirements and client specifications. Our processes are designed for reliability from the source to delivery.
          </p>

          {/* QC Practices Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {qaPractices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border-t-4 border-red-600"
              >
                <practice.icon className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{practice.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <hr className="max-w-5xl mx-auto dark:border-neutral-800" />

      {/* ========================= STANDARDS & COMPLIANCE ========================= */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <CheckCircle className="h-7 w-7 text-red-600 mr-3" />
              Compliance & Standards
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We ensure our products meet recognized national standards crucial for construction and heavy industry use.
            </p>
            <div className="space-y-4">
              {standards.map((standard, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-neutral-850 rounded-lg">
                  <standard.icon className="h-6 w-6 text-green-600 mt-1 shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{standard.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{standard.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Documentation & Readiness */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <FileText className="h-7 w-7 text-red-600 mr-3" />
              Documentation & Future
            </h2>

            <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-red-600 mt-1 shrink-0" />
                <span className="ml-3">
                  Material Test Certificates (MTC): Available upon request for major product supplies.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-red-600 mt-1 shrink-0" />
                <span className="ml-3">
                  ISO-Ready Infrastructure: Our operational framework and facilities are prepared for ISO certification.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-red-600 mt-1 shrink-0" />
                <span className="ml-3">
                  Custom Specs: Full product specifications and detailed data sheets can be provided upon request.
                </span>
              </li>
            </ul>

          </motion.div>

        </div>
      </section>

      <hr className="max-w-5xl mx-auto dark:border-neutral-800" />

      {/* ========================= CALL TO ACTION (Reusing style from previous section) ========================= */}
      <section className="py-16 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Need Specific Quality Documentation?
          </motion.h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Our team is ready to provide Material Test Certificates (MTC) and answer all technical queries regarding our structural steel, TMT bars, and other offerings.
          </p>

          <motion.a
            href="/contact" // Link to the contact/enquiry page
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-red-600 hover:bg-red-700 transition duration-300"
          >
            Request MTC & Technical Data <Zap className="ml-2 h-5 w-5" />
          </motion.a>

        </div>
      </section>

    </div>
  );
}
