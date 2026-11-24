import React from "react";
import ArolaxEngine from "@/components/ArolaxEngine";
import {
  headerHTML,
  mainHTML,
  footerHTML,
  scrollToTopHTML,
  videoPopupHTML,
} from "@/data/arolax-html";

export default function Home() {
  return (
    <>
      {/* High-Performance Smooth Page Preloader */}
      <div id="arolax-preloader" className="arolax-preloader">
        <div className="arolax-preloader-content">
          <div className="arolax-preloader-logo">
            <span className="arolax-preloader-title">AROLAX</span>
            <span className="arolax-preloader-dot">.</span>
          </div>
          <div className="arolax-preloader-bar-wrap">
            <div className="arolax-preloader-bar" />
          </div>
          <div className="arolax-preloader-counter">
            <span className="arolax-preloader-count">0</span>%
          </div>
        </div>
      </div>

      <div id="wcf--top--scroll" />

      {/* Scroll to Top Circle Button */}
      <div dangerouslySetInnerHTML={{ __html: scrollToTopHTML }} />

      {/* Smooth Scroll Content Container */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div id="page" className="hfeed site">
            {/* Header (.elementor-47) */}
            <div dangerouslySetInnerHTML={{ __html: headerHTML }} />

            {/* Main Content (.elementor-6) with all 14 sections */}
            <main dangerouslySetInnerHTML={{ __html: mainHTML }} />

            {/* Footer (.elementor-1386) */}
            <div dangerouslySetInnerHTML={{ __html: footerHTML }} />
          </div>
        </div>
      </div>

      {/* Video Popup Modal Wrapper */}
      <div dangerouslySetInnerHTML={{ __html: videoPopupHTML }} />

      {/* Animation & Interaction Engine */}
      <ArolaxEngine />
    </>
  );
}
