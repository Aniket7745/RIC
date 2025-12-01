"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Factory, Maximize2, Shield, Truck, ListChecks } from "lucide-react";

// Top-level Products for the featured cards
const featuredProducts = [
  {
    img: "/product/StructuralStee.png",
    title: "Structural Steel",
    slug: "structural-steel",
    description: "The backbone of modern construction. We supply high-grade angles, channels, and sections guaranteed to meet BIS IS2062 standards for exceptional strength and longevity."
  },
  {
    img: "/product/TMT.png",
    title: "TMT Bars",
    slug: "tmt-bars",
    description: "High-quality Fe500 and Fe550 grade Thermo-Mechanically Treated (TMT) bars, essential for earthquake-resistant structures and heavy-load applications. Consistent supply and quality."
  },
  {
    img: "/product/SteelBilletss.png",
    title: "Steel Billets",
    slug: "steel-billets",
    description: "Semi-finished steel products used as raw material for rolling mills. We stock standard sizes (100x100 mm, 125x125 mm) ensuring purity and uniform quality for further processing."
  },
];

// Comprehensive Product Range
const productCategories = [
  { category: "Steel Billets", specs: "100x100 mm, 125x125 mm", emphasis: true },
  { category: "TMT Bars", specs: "Fe500/Fe550 grade", emphasis: true },
  { category: "Structural Steel", specs: "ISMC Channels, ISA Angles", emphasis: true },
  { category: "Other Sections", specs: "MS Rounds & Flats, I Beams, H Beams", emphasis: false },
  { category: "Ferro Alloys", specs: "Silico Manganese (SiMn), Ferro Manganese (FeMn)", emphasis: false },
  { category: "Specialty", specs: "Industrial-grade iron rods & custom sections", emphasis: false },
];

// Key Benefits
const keyBenefits = [
  { icon: Maximize2, title: "Grade Consistency", description: "Guaranteed adherence to specified standards like BIS IS2062 through rigorous quality checks." },
  { icon: Shield, title: "Financial Backing", description: "Working capital support from Axis, HDFC, and ICICI Banks ensures a consistent and reliable supply chain." },
  { icon: Truck, title: "Logistics Focused", description: "Our warehousing-driven model ensures just-in-time, reliable delivery across Eastern India." },
];


export default function ProductsPage() {
  return (
    <div className="w-full">

      {/* ========================= HEADER / HERO ========================= */}
      <section className="relative h-[40vh] md:h-[65vh] flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="/factory.jpg" // Placeholder path for a product inventory image
            alt="RIC STEEL Product Range"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/70 dark:bg-black/80" />

        <div className="relative z-10 text-white text-center p-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-lg mb-2"
          >
            Industrial Steel Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl font-light opacity-80"
          >
            Structural Integrity. Inventory Ready. Delivered Reliably.
          </motion.p>
        </div>
      </section>

      {/* --- */}

      {/* ========================= FEATURED PRODUCTS (Product Spotlight - MOBILE OPTIMIZED) ========================= */}
      <section className="py-16 md:py-28 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">


          <div className="space-y-16 md:space-y-24">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                // On mobile, it's always a single column. On md and up, it alternates.
                className="grid md:grid-cols-2 gap-6 md:gap-10 items-center"
              >
                {/* Product Image Section */}
                <div
                  className={`h-64 sm:h-80 relative rounded-xl shadow-2xl overflow-hidden ${index % 2 !== 0 ? "md:order-2" : "md:order-1" // Order changes only on desktop
                    }`}
                >
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-cover object-center transition duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 90vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-neutral-900/10" />
                </div>

                {/* Product Content Section */}
                <div
                  className={`p-2 text-center md:p-4 ${index % 2 !== 0 ? "md:order-1 md:text-right" : "md:order-2 md:text-left" // Alignment changes only on desktop
                    }`}
                >
                  <span className="text-red-600 font-semibold uppercase tracking-wider text-xs mb-2 block">
                    {index + 1}. Featured Product
                  </span>
                  <h3 className="text-3xl font-bold mb-3 md:text-4xl text-gray-900 dark:text-white">{product.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base mb-5 md:text-lg">
                    {product.description}
                  </p>

                  {/* Buttons: Always justify-center on mobile, conditionally justified on desktop */}
                  <div className={`flex justify-center gap-3 md:gap-4 ${index % 2 !== 0 ? "md:justify-end" : "md:justify-start"
                    }`}>
                    <a
                      href={`/products/${product.slug}`}
                      className="px-4 py-2 text-sm border border-red-600 text-red-600 font-medium rounded-md hover:bg-red-600 hover:text-white transition duration-300 shadow-md"
                    >
                      Technical Data
                    </a>
                    <a
                      href="/enquiry"
                      className="px-4 py-2 text-sm bg-red-600 text-white font-medium rounded-md shadow-lg hover:bg-red-700 transition duration-300"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* ========================= FULL PRODUCT RANGE & SPECIFICATIONS (Mobile Optimized Table) ========================= */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center flex items-center justify-center text-gray-900 dark:text-white"
          >
            <ListChecks className="h-6 w-6 md:h-7 md:w-7 text-red-600 mr-3" />
            Full Inventory & Specifications
          </motion.h2>

          <div className="space-y-px border border-gray-300 dark:border-neutral-700 rounded-xl overflow-hidden shadow-xl dark:shadow-2xl">

            {/* Header Row - Hidden on Mobile */}
            <div className="hidden md:grid grid-cols-3 bg-gray-200 dark:bg-neutral-700 p-4 font-bold text-sm uppercase tracking-wider text-gray-700 dark:text-gray-300">
              <div className="col-span-1">PRODUCT CATEGORY</div>
              <div className="col-span-2">KEY SPECIFICATIONS</div>
            </div>

            {/* Product Rows - Mobile Stacks Category over Specs */}
            {productCategories.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                // Use block on mobile, grid on md+
                className={`block md:grid md:grid-cols-3 p-4 transition duration-200 
                  ${item.emphasis
                    ? 'bg-white border-l-4 border-red-600 hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800'
                    : 'bg-gray-100 hover:bg-white dark:bg-neutral-950 dark:hover:bg-neutral-900'
                  }`}
              >
                {/* Category - Always visible */}
                <div className="font-semibold text-base text-gray-900 dark:text-white md:col-span-1 md:text-lg">
                  {item.category}
                </div>
                {/* Specs - Stacks below category on mobile (removed vertical margin for tighter packing) */}
                <div className="text-gray-700 dark:text-gray-400 text-sm md:text-base md:col-span-2 md:mt-0">
                  <span className="md:hidden text-red-600 font-medium">Specs: </span>
                  {item.specs}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center text-gray-700 dark:text-gray-300 mt-6 md:mt-8 text-base md:text-lg"
          >
            Contact us for full product specifications, updated data sheets, and custom size requirements.
          </motion.p>
        </div>
      </section>

      {/* --- */}

      {/* ========================= WHY CHOOSE RIC STEEL BENEFITS (Mobile Optimized) ========================= */}
      <section className="py-16 md:py-20 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-900 dark:text-white"
          >
            The RIC STEEL Product Advantage
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 md:p-6 bg-gray-50 dark:bg-neutral-900 rounded-xl shadow-lg border-t-4 border-red-600 text-center"
              >
                <benefit.icon className="h-8 w-8 md:h-10 md:w-10 text-red-600 mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- */}

      {/* ========================= CALL TO ACTION: ENQUIRY ========================= */}
      <section className="py-10 md:py-12 bg-gray-50 dark:bg-neutral-800 border-t border-gray-200 dark:border-neutral-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-lg font-medium mb-3 md:mb-4 text-gray-900 dark:text-white">
            Ready to place a bulk order or discuss custom requirements?
          </p>
          <motion.a
            href="/enquiry"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center justify-center px-6 md:px-10 py-3 md:py-4 border border-transparent text-base md:text-lg font-medium rounded-md shadow-2xl text-white bg-red-600 hover:bg-red-700 transition duration-300 transform hover:-translate-y-0.5"
          >
            Start Your Business Enquiry <Factory className="ml-2 h-4 w-4 md:ml-3 md:h-5 md:w-5" />
          </motion.a>
        </div>
      </section>

    </div>
  );
}
