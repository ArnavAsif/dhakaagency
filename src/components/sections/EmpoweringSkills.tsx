"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TextWordReveal } from "../animations/TextReveal";

const TABS = [
  {
    id: "creativity",
    name: "CREATIVITY",
    desc: "Add the best talent on the market, an agile skilled management & seamless involvement.",
    img: "/assets/images/graph-with-img.png",
  },
  {
    id: "relationships",
    name: "RELATIONSHIPS",
    desc: "Add the best talent on the market, an agile skilled management & seamless involvement.",
    img: "/assets/images/t1.webp",
  },
  {
    id: "responsibility",
    name: "RESPONSIBILITY",
    desc: "Add the best talent on the market, an agile skilled management & seamless involvement.",
    img: "/assets/images/t2.webp",
  },
  {
    id: "cost-effective",
    name: "COST EFFECTIVE",
    desc: "Add the best talent on the market, an agile skilled management & seamless involvement.",
    img: "/assets/images/t3.webp",
  },
];

export default function EmpoweringSkills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <h2 className="font-teko text-5xl sm:text-7xl md:text-8xl font-bold uppercase leading-[0.88] tracking-tight text-[#121212] mb-4">
            <TextWordReveal text="EMPOWERING SKILLS TO HELP YOU!" delay={0.1} />
          </h2>
          <p className="text-base sm:text-lg font-dm text-[#555555] leading-relaxed">
            Add the best talent on the market, an agile skilled management & seamless
            involvement to power your next big milestone.
          </p>
        </div>

        {/* Tab Layout: Left Tabs List & Right Animated Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive Tab Accordion/List */}
          <div className="lg:col-span-5 space-y-4">
            {TABS.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-6 sm:p-8 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-[#121212] text-white border-[#121212] shadow-xl"
                      : "bg-[#FAFAFA] text-[#121212] border-black/5 hover:bg-black/5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-teko text-3xl sm:text-4xl uppercase tracking-wider font-bold">
                      {tab.name}
                    </h3>
                    <span
                      className={`font-teko text-2xl font-bold ${
                        isActive ? "text-[#FF845D]" : "text-black/30"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <p
                    className={`text-sm font-dm leading-relaxed ${
                      isActive ? "text-[#C1C1C1]" : "text-[#666666]"
                    }`}
                  >
                    {tab.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Tab Image with Smooth Transitions */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] flex items-center justify-center bg-[#F6F3F0] rounded-[36px] p-6 sm:p-10 overflow-hidden shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
                className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white p-3"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={TABS[activeTab].img}
                    alt={TABS[activeTab].name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
