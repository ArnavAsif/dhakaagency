"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextWordReveal } from "../animations/TextReveal";

const BLOG_POSTS = [
  {
    id: 1,
    title: "AROLAX DEVELOPMENT TECH AGENCY WE TALENT MEET OPPORTUNITY",
    author: "Written by Admin",
    date: "June 20, 2024",
    excerpt: "We lead by the design philosophy that every deal only visually…",
    img: "/assets/images/about-2.webp",
  },
  {
    id: 2,
    title: "AROLAX SELECTED 32+ BEST WEB AGENCY AND DEVELOPMENT TOOL",
    author: "Written by Admin",
    date: "June 18, 2024",
    excerpt: "We lead by the design philosophy that every deal only visually…",
    img: "/assets/images/about-1.webp",
  },
  {
    id: 3,
    title: "AROLAX SELECTED 32+ BEST WEB AGENCY AND DEVELOPMENT TOOL",
    author: "Written by Admin",
    date: "June 15, 2024",
    excerpt: "Welcome to Arolax Agency Theme Sites. This is your first post. Edit or delete it, then start writing!",
    img: "/assets/images/blog-1.webp",
  },
];

export default function Blog() {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-xs font-dm uppercase tracking-widest text-[#FF845D] font-bold block mb-3">
              LATEST ARTICLES
            </span>
            <h2 className="font-teko text-5xl sm:text-7xl md:text-8xl font-bold uppercase leading-[0.88] tracking-tight text-[#121212]">
              <TextWordReveal text="JOURNAL INSIGHT OF AROLAX" delay={0.1} />
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="max-w-xs text-sm font-dm text-[#666666] leading-relaxed">
              Our ability to combine expertise and systems thinking is what fuels us as
              a team.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-[#121212] hover:bg-[#FF845D] text-white px-7 py-3.5 rounded-full font-teko text-xl uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>ALL BLOG</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between cursor-pointer border border-black/5"
            >
              <div>
                {/* Featured Thumbnail */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#ECEAE6]">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 text-xs font-dm text-[#888888] mb-3">
                    <span className="text-[#FF845D] font-semibold">{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-teko text-3xl sm:text-4xl font-bold uppercase leading-tight text-[#121212] group-hover:text-[#FF845D] transition-colors mb-3">
                    {post.title}
                  </h3>

                  <p className="text-sm font-dm text-[#666666] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-8 pb-8 pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="font-teko text-xl uppercase tracking-wider text-[#121212] font-semibold group-hover:text-[#FF845D] transition-colors">
                  READ STORY
                </span>
                <div className="w-9 h-9 rounded-full bg-black/5 group-hover:bg-[#FF845D] group-hover:text-white text-[#121212] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
