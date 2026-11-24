"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TextWordReveal } from "../animations/TextReveal";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "HOW DOES THE AGILE MANIFESTO ADDRESS PLANNING?",
    answer:
      "Overcomplicate thing heve calling it’s good to know or more info. sometimes people put the frequently asked question section on their contact page but you can create your own page and put it right in your on website navigation menu or website footer so it’s easy to find.",
  },
  {
    id: 2,
    question: "REFLECTS YOUR AUDIENCE’S NEED?",
    answer:
      "Overcomplicate thing heve calling it’s good to know or more info. sometimes people put the frequently asked question section on their contact page but you can create your own page and put it right in your on website navigation menu or website footer so it’s easy to find.",
  },
  {
    id: 3,
    question: "WHAT IS A STATEMENT OF WORK IN PROJECT MANAGEMENT?",
    answer:
      "Overcomplicate thing heve calling it’s good to know or more info. sometimes people put the frequently asked question section on their contact page but you can create your own page and put it right in your on website navigation menu or website footer so it’s easy to find.",
  },
  {
    id: 4,
    question: "WHEN IS AN FAQ PAGE APPROPRIATE?",
    answer:
      "Overcomplicate thing heve calling it’s good to know or more info. sometimes people put the frequently asked question section on their contact page but you can create your own page and put it right in your on website navigation menu or website footer so it’s easy to find.",
  },
  {
    id: 5,
    question: "WHAT QUESTIONS BELONG ON AN FAQ PAGE?",
    answer:
      "Overcomplicate thing heve calling it’s good to know or more info. sometimes people put the frequently asked question section on their contact page but you can create your own page and put it right in your on website navigation menu or website footer so it’s easy to find.",
  },
  {
    id: 6,
    question: "ALIGN WITH YOUR BRAND LOOK AND FEEL?",
    answer:
      "Overcomplicate thing heve calling it’s good to know or more info. sometimes people put the frequently asked question section on their contact page but you can create your own page and put it right in your on website navigation menu or website footer so it’s easy to find.",
  },
  {
    id: 7,
    question: "HOW TO BECOME AN AGILE PROJECT MANAGER?",
    answer:
      "Overcomplicate thing heve calling it’s good to know or more info. sometimes people put the frequently asked question section on their contact page but you can create your own page and put it right in your on website navigation menu or website footer so it’s easy to find.",
  },
  {
    id: 8,
    question: "HOW TO MANAGE AGILE TEAMS?",
    answer:
      "Overcomplicate thing heve calling it’s good to know or more info. sometimes people put the frequently asked question section on their contact page but you can create your own page and put it right in your on website navigation menu or website footer so it’s easy to find.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-xs font-dm uppercase tracking-widest text-[#FF845D] font-bold block mb-3">
              HELP & SUPPORT
            </span>
            <h2 className="font-teko text-5xl sm:text-7xl md:text-8xl font-bold uppercase leading-[0.88] tracking-tight text-[#121212] mb-6">
              <TextWordReveal text="FREQUENTLY ASKED QUESTIONS" delay={0.1} />
            </h2>
            <p className="text-base sm:text-lg font-dm text-[#555555] leading-relaxed">
              Frequently asked question (FAQ) pages to find answers quickly and
              understand how our agile delivery model works for your team.
            </p>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.id}
                  className="border border-black/10 rounded-2xl overflow-hidden transition-colors duration-200"
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-black/2 transition-colors"
                  >
                    <span className="font-teko text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#121212] leading-snug">
                      {item.question}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? "bg-[#FF845D] text-white" : "bg-black/5 text-[#121212]"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base font-dm text-[#666666] leading-relaxed border-t border-black/5 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
