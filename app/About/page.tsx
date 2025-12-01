"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* ========================= HERO ========================= */}
      <section className="relative h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden">

        <Image
          src="/factory.jpg"
          alt="RIC Steel Factory"
          fill
          className="object-cover brightness-[0.55] md:brightness-[0.7]"
        />

        {/* Red overlay tint */}
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-center text-4xl md:text-6xl font-extrabold text-white px-4 leading-tight"
        >
          About <span className="text-red-600">RIC STEEL</span>
        </motion.h1>
      </section>



      {/* ========================= ABOUT COMPANY ========================= */}
      <section className="py-16 md:py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-5xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* TEXT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">
              Who We Are
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
              Established in 2019 in Kolkata, RIC STEEL is part of the Beriwala
              Group — a trusted name in steel and construction sectors. We
              specialize in steel trading, stocking, and limited processing.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg mt-4">
              With strong financing from Axis Bank, ICICI Bank, and HDFC Bank,
              we ensure uninterrupted operations, reliable sourcing, and
              high-quality steel supply across industries.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 text-base md:text-lg">
              <li>✔ <span className="text-red-600 font-semibold">Multi-bank financing</span> ensures smooth workflow</li>
              <li>✔ <span className="text-red-600 font-semibold">Warehouse-led stocking</span> for faster delivery</li>
              <li>✔ <span className="text-red-600 font-semibold">MTC-certified steel</span> for industrial safety</li>
              <li>✔ <span className="text-red-600 font-semibold">Pan-India logistics</span> network</li>
            </ul>
          </div>

          <Image
            src="/factory2.jpg"
            alt="Steel Industry"
            width={600}
            height={400}
            className="rounded-xl shadow-md border border-gray-200 dark:border-neutral-800 w-full object-cover"
          />
        </div>
      </section>



      {/* ========================= LEADERSHIP ========================= */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-5xl mx-auto px-5 md:px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-red-600">
            Leadership Team
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">

            {/* Leader 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-5 md:p-6 rounded-xl border bg-white dark:bg-neutral-950 dark:border-neutral-800 shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-red-600">Rajesh Beriwala</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
                A senior industry expert leading strategic growth for RIC STEEL,
                contributing decades of experience in steel and real estate sectors.
              </p>
            </motion.div>

            {/* Leader 2 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-5 md:p-6 rounded-xl border bg-white dark:bg-neutral-950 dark:border-neutral-800 shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-red-600">Aayush Beriwala</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
                Leads operations and expansion, ensuring strong regional presence,
                logistics efficiency, and customer satisfaction.
              </p>
            </motion.div>

          </div>
        </div>
      </section>



      {/* ========================= OPERATIONS ========================= */}
      <section className="py-16 md:py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">
              Our Operations
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
              RIC STEEL runs a warehouse-driven trading model backed by strong
              supply chains and partnerships with reliable rolling mills.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 text-base md:text-lg">
              <li>✔ Sourcing → Stocking → QC Testing → Distribution</li>
              <li>✔ Warehouses across Kolkata & Howrah</li>
              <li>✔ Serving fabrication, construction & manufacturing sectors</li>
            </ul>
          </div>

          <Image
            src="/factory3.jpg"
            alt="Operations"
            width={600}
            height={400}
            className="rounded-xl shadow-md border border-gray-200 dark:border-neutral-800 w-full object-cover"
          />
        </div>
      </section>



      {/* ========================= QUALITY CONTROL ========================= */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-5xl mx-auto px-5 md:px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-red-600">
            Quality Control & Certifications
          </h2>

          <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            RIC STEEL supplies BIS IS2062 certified steel with complete Material Test
            Certificates (MTC). Every batch undergoes metallurgical testing for:
          </p>

          <ul className="mt-6 max-w-lg mx-auto text-gray-700 dark:text-gray-300 space-y-3 ">
            <li>✔ Chemical Composition</li>
            <li>✔ Hardness & Strength</li>
            <li>✔ Dimensional Accuracy</li>
            <li>✔ Surface Quality Assurance</li>
          </ul>

        </div>
      </section>

    </div>
  );
}
