import {
  DEFAULT_CONTAINER_SETTINGS,
  FOOTER_BG_CONTAINER_SETTINGS,
  TEXT_MOVE_DEFAULT_SETTINGS,
  WIDGET_NONE_ANIMATION_SETTINGS,
} from "@/components/shared/elementorSettings";
import { AMBASSADOR_VIDEOS } from "@/data/website-data";

export default function AmbassadorVideosSection() {
  return (
    <div
      className="elementor-element elementor-element-fcd8226 e-con-full e-flex wcf-starter-animations-none e-con e-parent"
      data-id="fcd8226"
      data-element_type="container"
      data-e-type="container"
      data-settings={FOOTER_BG_CONTAINER_SETTINGS}
      id="ambassador"
    >
      <div
        className="elementor-element elementor-element-96d9bbe e-con-full e-flex wcf-starter-animations-none e-con e-child"
        data-id="96d9bbe"
        data-element_type="container"
        data-e-type="container"
        data-settings={DEFAULT_CONTAINER_SETTINGS}
      >
        <div
          className="elementor-element elementor-element-1b2b26b e-con-full e-flex wcf-starter-animations-none e-con e-child"
          data-id="1b2b26b"
          data-element_type="container"
          data-e-type="container"
          data-settings={DEFAULT_CONTAINER_SETTINGS}
        >
          <div
            className="elementor-element elementor-element-0b69af0 wcf-t-animation-text_move wcf-starter-animations-none elementor-widget elementor-widget-wcf--title"
            data-id="0b69af0"
            data-element_type="widget"
            data-e-type="widget"
            data-settings={TEXT_MOVE_DEFAULT_SETTINGS}
            data-widget_type="wcf--title.default"
          >
            <div className="elementor-widget-container">
              <h2 className="wcf--title">
                Meet Our Ambassador
                <br />
                &amp; Growth Videos
              </h2>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-20c1746 e-con-full e-flex wcf-starter-animations-none e-con e-child"
            data-id="20c1746"
            data-element_type="container"
            data-e-type="container"
            data-settings={DEFAULT_CONTAINER_SETTINGS}
          >
            <div
              className="elementor-element elementor-element-919a4d7 elementor-widget__width-initial wcf-t-animation-text_move wcf-starter-animations-none elementor-widget elementor-widget-text-editor"
              data-id="919a4d7"
              data-element_type="widget"
              data-e-type="widget"
              data-settings={TEXT_MOVE_DEFAULT_SETTINGS}
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  Meet Reggy (Frankfurt am Main, Germany) — Author, Hotel Owner &amp; Action Taker
                  Coach partnering with Dhaka Agency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="elementor-element elementor-element-a4778ac e-flex e-con-boxed wcf-starter-animations-none e-con e-child"
        data-id="a4778ac"
        data-element_type="container"
        data-e-type="container"
        data-settings={DEFAULT_CONTAINER_SETTINGS}
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-5f87198 e-con-full e-flex wcf-starter-animations-none e-con e-child"
            data-id="5f87198"
            data-element_type="container"
            data-e-type="container"
            data-settings={DEFAULT_CONTAINER_SETTINGS}
          >
            <div
              className="elementor-element elementor-element-c24eaaf e-con-full e-flex wcf-starter-animations-none e-con e-child"
              data-id="c24eaaf"
              data-element_type="container"
              data-e-type="container"
              data-settings={DEFAULT_CONTAINER_SETTINGS}
            >
              {AMBASSADOR_VIDEOS.map((item) => (
                <div
                  key={item.widgetDataId}
                  data-speed={item.dataSpeed}
                  className={`elementor-element elementor-element-${item.widgetDataId} elementor-widget-mobile_extra__width-initial elementor-widget elementor-widget-wcf--team`}
                  data-id={item.widgetDataId}
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings={WIDGET_NONE_ANIMATION_SETTINGS}
                  data-widget_type="wcf--team.default"
                >
                  <div className="elementor-widget-container">
                    <div className="wcf--team style-1">
                      <div className="thumb">
                        <div className="nomad-video-card">
                          <video
                            src={item.videoSrc}
                            poster={item.poster}
                            controls
                            playsInline
                            preload="none"
                            className="nomad-video-el"
                          />
                        </div>
                      </div>
                      <div className="content">
                        <h3 className="name">
                          <a href={item.href} target="_blank" rel="noopener noreferrer">
                            {item.title}
                          </a>
                        </h3>
                        <div className="designation">{item.designation}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
