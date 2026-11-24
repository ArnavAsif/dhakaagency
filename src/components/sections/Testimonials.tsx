"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TextWordReveal } from "../animations/TextReveal";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "We full service digital agency that build’s fascinating users experiences. Our team creates exceptional UI design and high-performance functionality for world-class brands.",
    author: "CEYHAN ÖZÇIVIT",
    role: "Mid-Level Developer",
    avatar: "/assets/images/test-img-3.webp",
  },
  {
    id: 2,
    quote:
      "Working with Arolax has been a transformative experience for our product line. The speed of execution and attention to micro-animations made all the difference.",
    author: "ÖZGE TÖRER",
    role: "Mid-Level Web Designer",
    avatar: "/assets/images/test-img-3.webp",
  },
  {
    id: 3,
    quote:
      "The engineering capability combined with strategic design delivered beyond our expectations. Our conversion increased by 42% in just two months.",
    author: "TUYA TEREKH",
    role: "Senior Developer",
    avatar: "/assets/images/test-img-3.webp",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5">
            <span className="text-xs font-dm uppercase tracking-widest text-[#FF845D] font-bold block mb-3">
              TESTIMONIALS
            </span>
            <h2 className="font-teko text-5xl sm:text-7xl md:text-8xl font-bold uppercase leading-[0.88] tracking-tight text-[#121212] mb-6">
              <TextWordReveal text="TRUSTED CLIENTS TESTIMONIAL" delay={0.1} />
            </h2>
            <p className="text-base sm:text-lg font-dm text-[#555555] leading-relaxed mb-8">
              Consumers today rely heavily on digital means to research products. We
              research a brand of blend engaging with it, delivering memorable user journeys.
            </p>

            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[#121212] hover:bg-[#FF845D] text-white px-8 py-4 rounded-full font-teko text-2xl uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
            >
              <span>EXPLORE US MORE</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-4 mt-12">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full border border-black/10 hover:border-black hover:bg-[#121212] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full border border-black/10 hover:border-black hover:bg-[#121212] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
              <span className="text-sm font-dm text-[#888888] font-medium ml-2">
                0{currentIndex + 1} / 0{TESTIMONIALS.length}
              </span>
            </div>
          </div>

          {/* Right Column: 3D Stack Card */}
          <div className="lg:col-span-7 relative flex justify-center">
            <div className="relative w-full max-w-xl min-h-[420px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 40, rotateY: 15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -40, rotateY: -15 }}
                  transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                  className="w-full bg-[#F6F3F0] rounded-[36px] p-8 md:p-12 shadow-xl relative overflow-hidden"
                >
                  {/* Top Quote SVG & Rating Stars */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 opacity-80">
                      <Image
                        src="/assets/images/quote-style-1.svg"
                        alt="Quote Mark"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <Image
                        src="/assets/images/rating.png"
                        alt="5 Star Rating"
                        width={110}
                        height={22}
                        className="h-5 w-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Quote Text */}
                  <p className="font-dm text-lg md:text-xl text-[#222222] leading-relaxed mb-10 italic">
                    “{current.quote}”
                  </p>

                  {/* Author Meta */}
                  <div className="flex items-center gap-4 pt-6 border-t border-black/10">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-sm flex-shrink-0">
                      <Image
                        src={current.avatar}
                        alt={current.author}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-teko text-3xl font-bold uppercase tracking-wider text-[#121212] leading-tight">
                        {current.author}
                      </h4>
                      <p className="font-kanit text-sm text-[#777777]">
                        {current.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
