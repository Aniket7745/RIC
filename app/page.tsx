"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { ArrowRight, Boxes, ShieldCheck, Truck } from "lucide-react";

export default function HomePage() {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const products = [
    { img: "/product/StructuralStee.png", title: "Structural Steel", slug: "structural-steel" },
    { img: "/product/TMT.png", title: "TMT Bars", slug: "tmt-bars" },
    { img: "/product/SteelBilletss.png", title: "Steel Billets", slug: "steel-billets" },
  ];

  return (
    <div className="w-full">

      {/* ========================= FULLSCREEN PARALLAX HERO ========================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

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

        {/* OPTIMIZED OVERLAY (Perfect for Light + Dark Mode) */}
        <div
          className="
            absolute inset-0 
            bg-gradient-to-b 
            from-black/60 via-black/45 to-black/35 
            dark:from-black/80 dark:via-black/60 dark:to-black/40
            backdrop-blur-[2px]
          "
        />

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl">
            Precision. Strength.
            <span className="text-red-600"> Performance.</span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mt-6 max-w-2xl mx-auto drop-shadow-xl">
            High-quality steel trading & industrial solutions backed by strong supply
            chain, warehousing, and multi-bank financing.
          </p>

          {/* HERO BUTTONS */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {/* EXPLORE PRODUCTS */}
            <Link href="/products">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white shadow-xl hover:shadow-2xl"
              >
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            {/* LEARN MORE BUTTON */}
            <Button
              size="lg"
              variant="outline"
              className="
                border-white/90 text-white 
                bg-black/20 dark:bg-white/10
                hover:bg-white/20 hover:border-white
                backdrop-blur-md
                transition
              "
              onClick={() => {
                aboutRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Learn More
            </Button>

            {/* CONTACT BUTTON */}
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="
                  border-white/90 text-white 
                  bg-black/20 dark:bg-white/10
                  hover:bg-white/20 hover:border-white
                  backdrop-blur-md
                  transition
                "
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ========================= WHY CHOOSE US ========================= */}
      <section className="py-20 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">

          {/* SECTION TITLE */}
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Why Choose RIC STEEL?
          </motion.h2>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">

            {/* CARD 1 */}
            <motion.div
              className="
                p-4 md:p-6
                bg-white dark:bg-neutral-900 
                border border-gray-200 dark:border-neutral-800
                rounded-xl shadow-sm md:shadow-md
                hover:shadow-xl transition cursor-pointer
                flex items-start gap-4
              "
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <Truck className="h-6 w-6 md:h-10 md:w-10 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Strong Supply Chain</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mt-1 leading-relaxed">
                  Reliable sourcing and fast logistics throughout India.
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              className="
                p-4 md:p-6
                bg-white dark:bg-neutral-900 
                border border-gray-200 dark:border-neutral-800
                rounded-xl shadow-sm md:shadow-md
                hover:shadow-xl transition cursor-pointer
                flex items-start gap-4
              "
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.7 }}
            >
              <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <ShieldCheck className="h-6 w-6 md:h-10 md:w-10 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Quality-Assured Materials</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mt-1 leading-relaxed">
                  Steel sourced & tested to meet industrial standards.
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              className="
                p-4 md:p-6
                bg-white dark:bg-neutral-900 
                border border-gray-200 dark:border-neutral-800
                rounded-xl shadow-sm md:shadow-md
                hover:shadow-xl transition cursor-pointer
                flex items-start gap-4
              "
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <Boxes className="h-6 w-6 md:h-10 md:w-10 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Financing-Backed Operations</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mt-1 leading-relaxed">
                  Supported by major banks for uninterrupted supply.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>



      {/* ========================= PRODUCT SHOWCASE ========================= */}
      <section className="py-16 md:py-20 bg-gray-100 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12"
          >
            Our Steel Products
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {products.map((product, i) => (
              <motion.div
                key={i}
                className="
                  rounded-xl overflow-hidden
                  bg-white dark:bg-neutral-950
                  border border-gray-200 dark:border-neutral-800
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                  flex flex-col
                "
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-40 md:h-56 bg-white dark:bg-black flex items-center justify-center p-3 md:p-4">
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={300}
                    height={200}
                    className="object-contain max-h-[95%]"
                  />
                </div>

                <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-4 flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                    {product.title}
                  </h3>

                  <div className="flex gap-3 mt-auto">
                    <Link href={`/products/${product.slug}`} className="flex-1">
                      <Button
                        variant="outline"
                        className="
                          w-full py-2 text-sm md:text-base
                          border-red-600 text-red-600
                          hover:bg-red-600 hover:text-white
                          transition-colors
                        "
                      >
                        View
                      </Button>
                    </Link>

                    <Link href="/enquiry" className="flex-1">
                      <Button
                        className="
                          w-full py-2 text-sm md:text-base
                          bg-red-600 hover:bg-red-700 text-white
                          transition-colors
                        "
                      >
                        Enquiry
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= ABOUT SECTION ========================= */}
      <section ref={aboutRef} className="py-20 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About RIC STEEL</h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Established in 2019 in Kolkata, RIC STEEL operates in steel trading,
              stocking, and limited processing...
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
              <li>✔ Multi-bank financing ensures smooth operations</li>
              <li>✔ Warehousing-driven stock management</li>
              <li>✔ Industrial-grade quality adherence</li>
              <li>✔ Expanding domestic & regional reach</li>
            </ul>

            <Button className="mt-8 bg-red-600 text-white hover:bg-red-700">
              Learn More
            </Button>
          </div>

          <Image
            src="/factory.jpg"
            alt="Steel Plant"
            width={600}
            height={400}
            className="rounded-lg shadow-lg border border-gray-200 dark:border-neutral-800"
          />

        </div>
      </section>

    </div>
  );
}
