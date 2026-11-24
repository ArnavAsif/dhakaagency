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
