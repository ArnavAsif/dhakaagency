import ArolaxEngine from "@/components/ArolaxEngine";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Preloader from "@/components/layout/Preloader";
import ScrollToTop from "@/components/layout/ScrollToTop";
import VideoPopup from "@/components/layout/VideoPopup";
import AboutSection from "@/components/sections/AboutSection";
import AmbassadorVideosSection from "@/components/sections/AmbassadorVideosSection";
import BlogSection from "@/components/sections/BlogSection";
import BrandMarqueeSection from "@/components/sections/BrandMarqueeSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import CtaBannerSection from "@/components/sections/CtaBannerSection";
import FaqSection from "@/components/sections/FaqSection";
import FullBannerSection from "@/components/sections/FullBannerSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechStackSection from "@/components/sections/TechStackSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import WorkProcessSection from "@/components/sections/WorkProcessSection";

export default function Home() {
  return (
    <>
      <Preloader />

      <div id="wcf--top--scroll" />

      <ScrollToTop />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div id="page" className="hfeed site">
            <Header />

            <main>
              <div
                data-elementor-type="wp-page"
                data-elementor-id="6"
                className="elementor elementor-6"
              >
                <HeroSection />
                <BrandMarqueeSection />
                <AboutSection />
                <WorkProcessSection />
                <WhyChooseUsSection />
                <TechStackSection />
                <CaseStudiesSection />
                <ServicesSection />
                <FullBannerSection />
                <TestimonialsSection />
                <AmbassadorVideosSection />
                <FaqSection />
                <CtaBannerSection />
                <BlogSection />
              </div>
            </main>

            <Footer />
          </div>
        </div>
      </div>

      <VideoPopup />

      <ArolaxEngine />
    </>
  );
}
