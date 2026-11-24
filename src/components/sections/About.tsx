"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextWordReveal } from "../animations/TextReveal";

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top Section Tagline */}
        <div className="mb-16 md:mb-20 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121212]/5 text-[#121212] font-teko text-xl tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF845D]"></span>
            01 WHO WE ARE
          </div>
          <h2 className="font-teko text-4xl sm:text-6xl md:text-7xl leading-[0.95] font-bold uppercase tracking-tight text-[#121212]">
            <TextWordReveal
              text="HAVE A BRILLIANT IDEA BOOST THE GROWTH DEVELOPMENT AGENCY YOUR BRANDING!"
              delay={0.1}
            />
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Stats & Description */}
          <div className="lg:col-span-5">
            <div className="border-b border-black/10 pb-8 mb-8">
              <span className="font-teko text-7xl sm:text-8xl md:text-9xl font-bold leading-none text-[#121212] block">
                32K+
              </span>
              <p className="font-kanit text-lg sm:text-xl text-[#555555] font-medium mt-1">
                happy clients of our Services
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#555555] font-dm leading-relaxed mb-8">
              Consumers today rely heavily on digital means to research products. We
              research a brand of blend engaging with it, according to the meanwhile, 51%
              of consumers.
            </p>

            <Link
              href="#services"
              className="group inline-flex items-center gap-3 bg-[#121212] hover:bg-[#FF845D] text-white px-8 py-4 rounded-full font-teko text-2xl uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
            >
              <span>EXPLORE US MORE</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          {/* Right Column: Composite Illustration & Faster Service Card */}
          <div className="lg:col-span-7 relative">
            <div className="relative bg-[#F6F3F0] rounded-[36px] p-8 md:p-12 overflow-hidden shadow-sm">
              {/* Floating Ok Sticker with Wiggle Animation */}
              <div className="absolute top-6 right-6 z-20 w-16 h-16 md:w-20 md:h-20 animate-wiggle">
                <Image
                  src="/assets/images/ok-img.webp"
                  alt="OK badge"
                  width={93}
                  height={98}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>

              {/* Floating Shape */}
              <div className="absolute -bottom-6 -left-6 z-10 w-28 h-auto opacity-70 animate-float">
                <Image
                  src="/assets/images/react-shape.webp"
                  alt="Design Shape"
                  width={142}
                  height={87}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                {/* Visual Image */}
                <div className="md:col-span-6 relative">
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2">
                    <Image
                      src="/assets/images/img-r-1.webp"
                      alt="Product Preview"
                      width={330}
                      height={209}
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm">
                    <Image
                      src="/assets/images/thumb.png"
                      alt="Team avatars"
                      width={120}
                      height={50}
                      className="h-7 w-auto object-contain"
                    />
                    <Image
                      src="/assets/images/quote-right.webp"
                      alt="Quote icon"
                      width={24}
                      height={20}
                      className="w-auto h-5 object-contain opacity-40"
                    />
                  </div>
                </div>

                {/* 1.8x Faster Service Stat Card */}
                <div className="md:col-span-6 flex flex-col justify-center">
                  <span className="font-teko text-7xl sm:text-8xl md:text-9xl font-bold leading-none text-[#121212] block">
                    1.8x
                  </span>
                  <span className="font-teko text-2xl uppercase tracking-wider text-[#121212] font-semibold -mt-2 mb-3 block">
                    FASTER SERVICE
                  </span>
                  <p className="text-sm font-dm text-[#666666] leading-relaxed">
                    Make your business prosper with our great team of experts. We’ll make your vision come alive with unmatched speed and precision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
