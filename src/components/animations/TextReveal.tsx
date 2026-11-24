"use client";

import React from "react";
import { motion } from "framer-motion";

interface TextCharRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function TextCharReveal({
  text,
  className = "",
  delay = 0.1,
  stagger = 0.03,
}: TextCharRevealProps) {
  const characters = text.split("");

  return (
    <span className={`inline-block ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: 25, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: delay + index * stagger,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

interface TextWordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function TextWordReveal({
  text,
  className = "",
  delay = 0.1,
  stagger = 0.05,
}: TextWordRevealProps) {
  const words = text.split(" ");

  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.85,
              delay: delay + index * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
