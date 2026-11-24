"use client";

import React from "react";
import Image from "next/image";

const BRAND_LOGOS = [
  { name: "Brand 1", src: "/assets/images/logo-1.webp", width: 120, height: 50 },
  { name: "Brand 2", src: "/assets/images/logo-2.webp", width: 106, height: 50 },
  { name: "Brand 3", src: "/assets/images/logo-3.webp", width: 123, height: 50 },
  { name: "Brand 4", src: "/assets/images/logo-4.webp", width: 115, height: 50 },
  { name: "Brand 5", src: "/assets/images/logo-5.webp", width: 111, height: 50 },
  { name: "Brand 6", src: "/assets/images/logo-6.webp", width: 123, height: 50 },
];

export default function BrandSlider() {
  const repeatedLogos = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="py-12 md:py-16 border-t border-b border-black/5 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 mb-4">
        <span className="text-xs font-dm uppercase tracking-widest text-[#888888] font-semibold block text-center">
          TRUSTED BY WORLD CLASS COMPANIES
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Infinite Marquee Track */}
        <div className="animate-marquee flex items-center gap-16 md:gap-24 py-4">
          {repeatedLogos.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 cursor-pointer"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                className="h-9 md:h-11 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
