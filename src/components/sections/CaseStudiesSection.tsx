import type { CSSProperties } from "react";

import { GalleryCardArrowIcon } from "@/components/shared/ArolaxIcons";
import {
  DEFAULT_CONTAINER_SETTINGS,
  WIDGET_NONE_ANIMATION_SETTINGS,
} from "@/components/shared/elementorSettings";
import {
  CASE_STUDIES_ROW_ONE,
  CASE_STUDIES_ROW_TWO,
  type CaseStudyItem,
} from "@/data/website-data";

function CaseStudyCard({ item }: { item: CaseStudyItem }) {
  return (
    <a className="item" href={item.href} target="_blank" rel="nofollow noopener noreferrer">
      <div className="source">
        {item.mediaType === "video" ? (
          <video
            muted
            loop
            playsInline
            preload="none"
            poster={item.poster}
            data-lazy-autoplay="true"
            data-src={item.src}
          />
        ) : (
          <img decoding="async" src={item.src} alt={item.title} />
        )}
      </div>
      <div className="content-wrap">
        <div className="icon-wrap">
          <div className="icon">
            <GalleryCardArrowIcon />
          </div>
        </div>
        <div className="content">
          <h2 className="title">{item.title}</h2>
          <p className="desc">{item.desc}</p>
        </div>
      </div>
    </a>
  );
}

export default function CaseStudiesSection() {
  return (
    <div
      className="elementor-element elementor-element-42802ad e-con-full e-flex wcf-starter-animations-none e-con e-parent"
      data-id="42802ad"
      data-element_type="container"
      data-e-type="container"
      data-settings={DEFAULT_CONTAINER_SETTINGS}
      id="case-studies"
    >
      <div
        className="elementor-element elementor-element-5e9e211 e-con-full e-flex wcf-starter-animations-none e-con e-child"
        data-id="5e9e211"
        data-element_type="container"
        data-e-type="container"
        data-settings={DEFAULT_CONTAINER_SETTINGS}
      >
        <div
          className="elementor-element elementor-element-c0148db e-con-full e-flex wcf-starter-animations-none e-con e-child"
          data-id="c0148db"
          data-element_type="container"
          data-e-type="container"
          data-settings={DEFAULT_CONTAINER_SETTINGS}
        >
          <div
            className="elementor-element elementor-element-adeb6c6 e-con-full e-flex wcf-starter-animations-none e-con e-child"
            data-id="adeb6c6"
            data-element_type="container"
            data-e-type="container"
            data-settings={DEFAULT_CONTAINER_SETTINGS}
          >
            <div
              className="elementor-element elementor-element-54e3a56 elementor-widget elementor-widget-arolax--gallery"
              data-id="54e3a56"
              data-element_type="widget"
              data-e-type="widget"
              data-settings={WIDGET_NONE_ANIMATION_SETTINGS}
              data-widget_type="arolax--gallery.default"
            >
              <div className="elementor-widget-container">
                <div className="gallery--slider">
                  <div className="g-slider--title">
                    <div
                      className="progress-circle"
                      style={{ "--value": 0 } as CSSProperties}
                    />
                    <h2 className="g-title">Case Studies</h2>
                  </div>
                  <div className="g-slider--one-wrap" dir="ltr">
                    <div className="g-slider--one">
                      {CASE_STUDIES_ROW_ONE.map((item) => (
                        <CaseStudyCard key={item.title} item={item} />
                      ))}
                    </div>
                  </div>
                  <div className="g-slider--two-wrap" dir="rtl">
                    <div className="g-slider--two">
                      {CASE_STUDIES_ROW_TWO.map((item) => (
                        <CaseStudyCard key={item.title} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
