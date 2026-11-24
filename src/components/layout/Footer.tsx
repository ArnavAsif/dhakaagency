"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextCharReveal } from "../animations/TextReveal";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top Hello Badge */}
        <div className="mb-4">
          <span className="font-teko text-3xl md:text-4xl uppercase tracking-wider text-[#FF845D]">
            HELLO !
          </span>
        </div>

        {/* Massive Headline */}
        <div className="mb-8">
          <h2 className="font-teko text-7xl sm:text-9xl md:text-[140px] lg:text-[160px] leading-[0.85] font-bold uppercase tracking-tight">
            <span className="block hover:text-[#FF845D] transition-colors duration-300">
              LET’S TALK
            </span>
            <span className="block text-[#C1C1C1] hover:text-white transition-colors duration-300">
              WITH US
            </span>
          </h2>
        </div>

        {/* Email Address */}
        <div className="mb-20">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 font-kanit text-2xl sm:text-4xl md:text-5xl font-medium text-white hover:text-[#FF845D] transition-colors duration-200 group border-b-2 border-white/20 pb-2 hover:border-[#FF845D]"
          >
            <span>hello@example.com</span>
            <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </a>
        </div>

        {/* Middle Divider */}
        <div className="border-t border-white/10 pt-10 pb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Copyright */}
          <div className="font-teko text-2xl uppercase tracking-wider text-[#999999]">
            © 2024-25 CROWDYFLOW AGENCY
          </div>

          {/* Quick Agency Links */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {["AGENCY", "CAREER", "PRIVACY", "TERMS & CONDITION"].map((link) => (
              <Link
                key={link}
                href="#"
                className="font-teko text-2xl uppercase tracking-wider text-[#C1C1C1] hover:text-[#FF845D] transition-colors duration-150"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {["Facebook", "Twitter", "Youtube", "Linkedin"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm font-dm text-[#C1C1C1] hover:text-[#FF845D] transition-colors duration-150"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
