"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { TextCharReveal, TextWordReveal } from "../animations/TextReveal";
import VideoModal from "../ui/VideoModal";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-white">
      {/* Background Floating Swirl */}
      <div className="absolute -bottom-20 -left-20 w-[420px] h-[420px] pointer-events-none opacity-60 z-0 animate-float-subtle">
        <Image
          src="/assets/images/intro-shape.webp"
          alt="Abstract swirl shape"
          width={420}
          height={420}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Top Floating Badge */}
        <div className="hidden lg:block absolute -top-8 right-1/4 animate-float">
          <Image
            src="/assets/images/intro-shape-1.png"
            alt="Decorative badge"
            width={90}
            height={50}
            className="w-auto h-auto object-contain"
          />
        </div>

        {/* Main Grid: Left Typography & Right Hero Composite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (Headline + CTA) */}
          <div className="lg:col-span-7">
            {/* Top Line: WE ARE SKILLED IN */}
            <div className="overflow-hidden">
              <h1 className="font-teko text-7xl sm:text-8xl md:text-[130px] lg:text-[150px] leading-[0.85] font-bold uppercase tracking-tight text-[#121212]">
                <TextCharReveal text="WE ARE SKILLED IN" delay={0.1} stagger={0.03} />
              </h1>
            </div>

            {/* Middle Line: WEB DESIGN | AND | development */}
            <div className="flex flex-wrap items-baseline gap-4 md:gap-6 mt-2">
              <div className="flex flex-col">
                <span className="w-12 h-[1px] bg-black/20 mb-1"></span>
                <span className="font-teko text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-[#121212] leading-none">
                  WEB <br /> DESIGN
                </span>
                <span className="w-12 h-[1px] bg-black/20 mt-1"></span>
              </div>

              <span className="font-teko text-7xl sm:text-8xl md:text-[130px] lg:text-[150px] leading-[0.85] font-bold uppercase tracking-tight text-[#121212]">
                <TextCharReveal text="AND" delay={0.35} stagger={0.04} />
              </span>

              <span className="font-teko text-3xl sm:text-4xl md:text-5xl lowercase tracking-wider text-[#121212] italic">
                development
              </span>
            </div>

            {/* Description & Action Button */}
            <div className="mt-8 md:mt-12 max-w-xl">
              <p className="text-base sm:text-lg text-[#555555] font-dm leading-relaxed mb-8">
                <TextWordReveal
                  text="We are a full-service digital agency that builds fascinating user experiences. our team creates and exceptional UI design and functionality."
                  delay={0.5}
                />
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <Link
                    href="#contact"
                    className="group inline-flex items-center gap-3 bg-[#121212] hover:bg-[#FF845D] text-white px-8 py-4 rounded-full font-teko text-2xl uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:gap-4 cursor-pointer"
                  >
                    <span>GET STARTED NOW</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>

                {/* Scroll Indicator */}
                <div className="hidden sm:block">
                  <Image
                    src="/assets/images/Scroll.png"
                    alt="Scroll indicator"
                    width={38}
                    height={60}
                    className="w-auto h-12 object-contain animate-bounce"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Composite Visual Artwork */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex flex-col items-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5]">
              {/* Spinning Circular Badge */}
              <div className="absolute -top-6 -left-6 z-20 w-24 h-24 md:w-28 md:h-28">
                <Image
                  src="/assets/images/text-img.webp"
                  alt="Rotating badge"
                  width={112}
                  height={112}
                  className="w-full h-full object-contain animate-spin-slow"
                />
              </div>

              {/* Hand Illustration Graphic */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-10 left-0 z-10 w-[55%] h-auto"
              >
                <Image
                  src="/assets/images/Group-1000003642.png"
                  alt="Illustration"
                  width={210}
                  height={420}
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </motion.div>

              {/* Main Photo (Rounded Portrait) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-0 right-0 z-0 w-[65%] h-[88%] rounded-[40px] overflow-hidden shadow-2xl bg-[#EFEFEF]"
              >
                <Image
                  src="/assets/images/1-1.jpg"
                  alt="Creative Designer"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>

            {/* Video Popup CTA Bar below artwork */}
            <div className="w-full max-w-[420px] mt-4 flex items-center justify-between bg-white border border-black/10 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-[#121212] group-hover:bg-[#FF845D] text-white flex items-center justify-center transition-colors">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <div className="text-left">
                  <span className="font-kanit text-sm uppercase tracking-wider font-semibold text-[#121212] block">
                    WATCH VIDEO
                  </span>
                  <span className="text-xs text-[#888888] font-dm">
                    Agency Presentation
                  </span>
                </div>
              </button>

              <div className="flex items-center gap-2 pl-4 border-l border-black/10">
                <Image
                  src="/assets/images/thumb.webp"
                  alt="User avatars"
                  width={90}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
                <span className="text-xs font-kanit font-medium text-[#555555]">
                  18k+ clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
