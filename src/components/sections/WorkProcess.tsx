"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { TextWordReveal } from "../animations/TextReveal";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "PROJECT\nMANAGEMENT",
    desc: "Creative Design team on demand that can design, build, ship and scale your real has development agency.",
    img: "/assets/images/s-1.webp",
    features: ["Mobile & Web Design", "Interaction Design", "UX Research & Plan"],
  },
  {
    step: "02",
    title: "PRODUCT\nMANAGEMENT",
    desc: "Creative Design team on demand that can design, build, ship and scale your real has development agency.",
    img: "/assets/images/s-2.webp",
    features: ["Mobile & Web Design", "Interaction Design", "UX Research & Plan"],
  },
  {
    step: "03",
    title: "WEB\nDESIGN",
    desc: "Creative Design team on demand that can design, build, ship and scale your real has development agency.",
    img: "/assets/images/s-3.webp",
    features: ["Mobile & Web Design", "Interaction Design", "UX Research & Plan"],
  },
  {
    step: "04",
    title: "BACKEND\nDEVELOPMENT",
    desc: "Creative Design team on demand that can design, build, ship and scale your real has development agency.",
    img: "/assets/images/s-4.webp",
    features: ["Mobile & Web Design", "Interaction Design", "UX Research & Plan"],
  },
];

export default function WorkProcess() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-xs font-dm uppercase tracking-widest text-[#FF845D] font-bold block mb-3">
              WORK PROCESS
            </span>
            <h2 className="font-teko text-5xl sm:text-7xl md:text-8xl font-bold uppercase leading-[0.88] tracking-tight text-[#121212]">
              <TextWordReveal text="WE PROVIDE PREMIUM AROLAX SERVICE" delay={0.1} />
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base sm:text-lg font-dm text-[#555555] leading-relaxed">
              Our ability to combine expertise and systems thinking is what fuels us as a
              team to deliver flawless digital excellence.
            </p>
          </div>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group bg-[#F6F3F0] rounded-[28px] p-8 flex flex-col justify-between hover:bg-[#121212] hover:text-white transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <div>
                {/* Step Number & Preview Image */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-teko text-5xl font-bold text-[#FF845D]">
                    {step.step}.
                  </span>
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/80 p-1 group-hover:scale-110 transition-transform">
                    <Image
                      src={step.img}
                      alt={step.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Step Title & Description */}
                <h3 className="font-teko text-4xl sm:text-5xl font-bold uppercase leading-[0.92] tracking-tight mb-4 whitespace-pre-line group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm font-dm text-[#666666] group-hover:text-[#C1C1C1] leading-relaxed mb-6 transition-colors">
                  {step.desc}
                </p>
              </div>

              {/* Checklist Features */}
              <div className="pt-6 border-t border-black/10 group-hover:border-white/10 space-y-2.5 transition-colors">
                {step.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs font-dm">
                    <div className="w-4 h-4 rounded-full bg-[#FF845D] text-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-[#333333] group-hover:text-[#EFEFEF] transition-colors">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
