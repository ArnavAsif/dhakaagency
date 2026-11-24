"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextWordReveal } from "../animations/TextReveal";

export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#121212] text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Title */}
        <div className="max-w-2xl">
          <h2 className="font-teko text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tight text-white leading-[0.9]">
            <TextWordReveal text="LET’S START YOUR EXPERIENCE WITH AROLAX" delay={0.1} />
          </h2>
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="mailto:hello@example.com"
            className="group inline-flex items-center gap-4 bg-[#FF845D] hover:bg-white text-white hover:text-[#121212] px-10 py-5 rounded-full font-teko text-2xl md:text-3xl uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
          >
            <span>LET’S GET IN TOUCH</span>
            <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
