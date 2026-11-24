"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextWordReveal } from "../animations/TextReveal";

const CASE_STUDIES = [
  {
    id: 1,
    title: "Mastartery",
    category: "Design - 2019",
    img: "/assets/images/project-1.webp",
  },
  {
    id: 2,
    title: "Mastartery",
    category: "Design - 2019",
    img: "/assets/images/project-2.webp",
  },
  {
    id: 3,
    title: "Agencey",
    category: "Design - 2019",
    img: "/assets/images/Rectangle-7031.webp",
  },
  {
    id: 4,
    title: "Consultant",
    category: "Design - 2019",
    img: "/assets/images/Rectangle-7030.webp",
  },
  {
    id: 5,
    title: "Mastartery",
    category: "Design - 2019",
    img: "/assets/images/project-4.webp",
  },
  {
    id: 6,
    title: "Mastartery",
    category: "Design - 2019",
    img: "/assets/images/project-5.webp",
  },
];

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 text-[#121212] font-teko text-xl tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF845D]"></span>
            PORTFOLIO SHOWCASE
          </div>
          <h2 className="font-teko text-6xl sm:text-8xl md:text-9xl font-bold uppercase tracking-tight text-[#121212] leading-[0.88]">
            <TextWordReveal text="CASE STUDY" delay={0.1} />
          </h2>
        </div>

        <p className="max-w-md text-[#666666] font-dm text-base leading-relaxed">
          Explore our award-winning design and development work that transformed
          ambitious brands into global industry leaders.
        </p>
      </div>

      {/* Horizontal Interactive Sliding Gallery */}
      <div
        ref={containerRef}
        className="w-full overflow-x-auto no-scrollbar px-6 md:px-12 pb-8 cursor-grab active:cursor-grabbing"
      >
        <div className="flex gap-8 w-max">
          {CASE_STUDIES.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative w-[320px] sm:w-[420px] md:w-[480px] bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image Preview Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#ECEAE6]">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Floating Arrow Badge */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-[#121212] group-hover:bg-[#FF845D] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg group-hover:rotate-45">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Information */}
              <div className="p-8 flex items-center justify-between bg-white border-t border-black/5">
                <div>
                  <h3 className="font-teko text-4xl sm:text-5xl uppercase font-bold text-[#121212] group-hover:text-[#FF845D] transition-colors leading-none mb-1">
                    {project.title}
                  </h3>
                  <span className="text-sm font-dm text-[#888888] font-medium tracking-wide">
                    {project.category}
                  </span>
                </div>

                <span className="font-teko text-2xl font-bold text-black/20 group-hover:text-[#121212] transition-colors">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
