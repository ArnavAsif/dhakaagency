"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextWordReveal } from "../animations/TextReveal";

const SERVICES = [
  {
    step: "01",
    title: "DEDICATED\nTEAM",
    desc: "Find the best fit engineers led by senior, seasoned, and skilled our tech- lead.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 60 60" fill="none">
        <path
          d="M30 0C24.7 0 19.5 1.4 15 4.1C14.3 4.5 13.6 4.9 12.9 5.4C7.4 9.2 3.4 14.7 1.4 21C-0.6 27.3 -0.4 34.2 1.9 40.4C2 40.7 2.1 41 2.2 41.3C2.4 41.7 2.6 42.2 2.8 42.7C5.9 49 10.5 53.7 16.3 56.7C22.1 59.6 28.6 60.7 35 59.6C41.4 58.5 47.3 55.4 51.7 50.7C56.2 46 59 40 59.8 33.6C60 32.2 60 30.7 60 30C60 22.1 56.8 14.4 51.2 8.8C45.6 3.2 38 0 30 0Z"
          fill="#121212"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "PRODUCT\nTEAM",
    desc: "Get top-notch service from an experienced Product Designer Manager team.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 60 60" fill="none">
        <path
          d="M30 0C24.7 0 19.5 1.4 15 4.1C14.3 4.5 13.6 4.9 12.9 5.4C7.4 9.2 3.4 14.7 1.4 21C-0.6 27.3 -0.4 34.2 1.9 40.4C2 40.7 2.1 41 2.2 41.3C2.4 41.7 2.6 42.2 2.8 42.7C5.9 49 10.5 53.7 16.3 56.7C22.1 59.6 28.6 60.7 35 59.6C41.4 58.5 47.3 55.4 51.7 50.7C56.2 46 59 40 59.8 33.6C60 32.2 60 30.7 60 30C60 22.1 56.8 14.4 51.2 8.8C45.6 3.2 38 0 30 0Z"
          fill="#121212"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "END-TO-END\nTEAM",
    desc: "Hire an elite squad of leading have professionals to turn idea into an ready-to-market product",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 62 61" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 8.5V26.5C27 30.1 24.1 33 20.5 33C16.9 33 14 30.1 14 26.5V8.5C14 4.9 16.9 2 20.5 2C24.1 2 27 4.9 27 8.5ZM12 8.5C12 3.8 15.8 0 20.5 0C25.2 0 29 3.8 29 8.5V26.5C29 31.2 25.2 35 20.5 35C15.8 35 12 31.2 12 26.5V8.5ZM41.5 22C44.5 22 47 19.5 47 16.5C47 13.5 44.5 11 41.5 11C38.5 11 36 13.5 36 16.5C36 19.5 38.5 22 41.5 22Z"
          fill="#121212"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#C8F31D] text-[#121212] pt-24 pb-28 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <h2 className="font-teko text-5xl sm:text-7xl md:text-8xl font-bold uppercase leading-[0.88] tracking-tight">
              <TextWordReveal text="TAKE CHARGE STEERING YOUR PRODUCT" delay={0.1} />
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base sm:text-lg font-dm text-[#121212]/80 leading-relaxed font-medium">
              Our ability to combine expertise and systems thinking is what fuels us as a
              team. We craft transformative digital solutions.
            </p>
          </div>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group bg-white rounded-[28px] p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden cursor-pointer min-h-[380px]"
            >
              {/* Top Row: Icon & Step */}
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#C8F31D]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <span className="font-teko text-3xl text-black/20 group-hover:text-[#121212] transition-colors font-bold">
                  {service.step}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-teko text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[#121212] mb-3 leading-[0.95] whitespace-pre-line group-hover:text-[#FF845D] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm font-dm text-[#666666] leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Arrow Button */}
              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="font-teko text-xl uppercase tracking-wider text-[#121212] font-semibold">
                  LEARN MORE
                </span>
                <div className="w-10 h-10 rounded-full bg-[#121212] group-hover:bg-[#FF845D] text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
