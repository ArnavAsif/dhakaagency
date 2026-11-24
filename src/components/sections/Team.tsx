"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextWordReveal } from "../animations/TextReveal";

const TEAM_MEMBERS = [
  {
    name: "CEYHAN ÖZÇIVIT",
    role: "Mid-Level Developer",
    img: "/assets/images/team-1.jpg",
  },
  {
    name: "ÖZGE TÖRER",
    role: "Mid-Level Web Designer",
    img: "/assets/images/team-2.jpg",
  },
  {
    name: "TUYA TEREKH",
    role: "Senior Developer",
    img: "/assets/images/team-3.jpg",
  },
  {
    name: "AŞENUR ÖZKAN",
    role: "Lead Developer",
    img: "/assets/images/team-4.jpg",
  },
];

const SOCIAL_ICONS = [
  // Facebook
  (
    <svg key="fb" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  // Twitter / X
  (
    <svg key="tw" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  // LinkedIn
  (
    <svg key="li" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  // Instagram
  (
    <svg key="ig" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
];

export default function Team() {
  return (
    <section className="py-24 md:py-32 bg-[#121212] text-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-xs font-dm uppercase tracking-widest text-[#FF845D] font-bold block mb-3">
              EXPERT TEAM
            </span>
            <h2 className="font-teko text-5xl sm:text-7xl md:text-8xl font-bold uppercase leading-[0.88] tracking-tight">
              <TextWordReveal text="INTRODUCING AROLAX SKILLED TEAM!" delay={0.1} />
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base sm:text-lg font-dm text-[#C1C1C1] leading-relaxed">
              Our ability to combine expertise and systems thinking is what fuels us as a
              team to craft groundbreaking digital products.
            </p>
          </div>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-[#1E1E22] rounded-[30px] overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Photo Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#2A2A2E]">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Social Links Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {SOCIAL_ICONS.map((icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-[#FF845D] text-white flex items-center justify-center transition-colors shadow-md"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Member Details */}
              <div className="p-6 text-center border-t border-white/10">
                <h3 className="font-teko text-3xl font-bold uppercase tracking-wider text-white group-hover:text-[#FF845D] transition-colors leading-tight mb-1">
                  {member.name}
                </h3>
                <p className="font-kanit text-sm text-[#A0A0A0]">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
