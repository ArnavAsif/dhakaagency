"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FullBanner() {
  return (
    <section className="relative w-full h-[380px] sm:h-[480px] md:h-[620px] overflow-hidden bg-[#121212]">
      <motion.div
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full"
      >
        <Image
          src="/assets/images/lg-img-1536x760.webp"
          alt="Creative Studio Showcase"
          fill
          className="object-cover object-center brightness-95"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </motion.div>
    </section>
  );
}
