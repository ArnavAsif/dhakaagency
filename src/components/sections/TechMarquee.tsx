"use client";

import React from "react";
import Image from "next/image";

const TECH_ITEMS = [
  { name: "WORDPRESS", logo: "/assets/images/wordpress.webp" },
  { name: "REACT.JS", logo: "/assets/images/react.webp" },
  { name: "NODE.JS", logo: "/assets/images/node.webp" },
  { name: "FLUTTER", logo: "/assets/images/flutter.webp" },
  { name: "REDUX", logo: "/assets/images/redux.webp" },
];

export default function TechMarquee() {
  const repeated = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <section className="py-12 bg-[#121212] text-white overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 mb-6">
        <h3 className="font-kanit text-lg sm:text-xl text-[#FF845D] font-medium tracking-wide text-center uppercase">
          Our Arolax Technology Expertise includes
        </h3>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Infinite Running Marquee */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-20">
          {repeated.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-4 flex-shrink-0 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-teko text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white group-hover:text-[#FF845D] transition-colors">
                {item.name}
              </span>
              <span className="text-white/20 text-2xl font-bold ml-4">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
