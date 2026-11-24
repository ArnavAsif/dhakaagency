"use client";

import React from "react";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// All Sections
import Hero from "@/components/sections/Hero";
import BrandSlider from "@/components/sections/BrandSlider";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import EmpoweringSkills from "@/components/sections/EmpoweringSkills";
import TechMarquee from "@/components/sections/TechMarquee";
import CaseStudies from "@/components/sections/CaseStudies";
import WorkProcess from "@/components/sections/WorkProcess";
import FullBanner from "@/components/sections/FullBanner";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Blog from "@/components/sections/Blog";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollToTop />
      <Header />
      <main id="smooth-content" className="relative">
        <Hero />
        <BrandSlider />
        <About />
        <Services />
        <EmpoweringSkills />
        <TechMarquee />
        <CaseStudies />
        <WorkProcess />
        <FullBanner />
        <Testimonials />
        <Team />
        <FAQ />
        <CTA />
        <Blog />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
