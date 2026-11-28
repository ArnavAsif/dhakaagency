import { WhyChooseTabIcon } from "@/components/shared/ArolaxIcons";
import {
  DEFAULT_CONTAINER_SETTINGS,
  TEXT_REVEAL_DEFAULT_SETTINGS,
} from "@/components/shared/elementorSettings";
import { WHY_CHOOSE_TABS } from "@/data/website-data";

export default function WhyChooseUsSection() {
  return (
    <div
      className="elementor-element elementor-element-4d99757 e-con-full e-flex wcf-starter-animations-none e-con e-parent"
      data-id="4d99757"
      data-element_type="container"
      data-e-type="container"
      data-settings={DEFAULT_CONTAINER_SETTINGS}
    >
      <div
        className="elementor-element elementor-element-25ea5cf e-flex e-con-boxed wcf-starter-animations-none e-con e-child"
        data-id="25ea5cf"
        data-element_type="container"
        data-e-type="container"
        data-settings={DEFAULT_CONTAINER_SETTINGS}
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-d9e9e16 e-con-full e-flex wcf-starter-animations-none e-con e-child"
            data-id="d9e9e16"
            data-element_type="container"
            data-e-type="container"
            data-settings={DEFAULT_CONTAINER_SETTINGS}
          >
            <div
              className="elementor-element elementor-element-3409d79 e-con-full e-flex wcf-starter-animations-none e-con e-child"
              data-id="3409d79"
              data-element_type="container"
              data-e-type="container"
              data-settings={DEFAULT_CONTAINER_SETTINGS}
            >
              <div
                className="elementor-element elementor-element-147489e wcf-t-animation-text_reveal wcf-starter-animations-none elementor-widget elementor-widget-heading"
                data-id="147489e"
                data-element_type="widget"
                data-e-type="widget"
                data-settings={TEXT_REVEAL_DEFAULT_SETTINGS}
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    Why Top Brands
                    <br />
                    Choose Dhaka Agency!
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-dee62e1 e-con-full e-flex wcf-starter-animations-none e-con e-child"
              data-id="dee62e1"
              data-element_type="container"
              data-e-type="container"
              data-settings={DEFAULT_CONTAINER_SETTINGS}
            >
              <div
                className="elementor-element elementor-element-c5d064d elementor-widget__width-initial wcf-t-animation-text_move wcf-starter-animations-none elementor-widget elementor-widget-text-editor"
                data-id="c5d064d"
                data-element_type="widget"
                data-e-type="widget"
                data-settings='{"text_transform_origin":"top center -50","wcf_text_animation":"text_move","text_delay":0.3,"wcf_starter_animations":"none","wcf_anim_duration":1000,"wcf_anim_delay":0,"wcf_anim_ease":"ease","aae_text_trigger":"on_scroll","text_duration":1,"text_stagger":0.02,"text_rotation_di":"x","text_rotation":"-80","wcf-animation":"none"}'
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p>
                    We combine high-level technical expertise with data-backed digital marketing
                    strategies to maximize your ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-8ae8728 e-con-full e-flex wcf-starter-animations-none e-con e-child"
            data-id="8ae8728"
            data-element_type="container"
            data-e-type="container"
            data-settings={DEFAULT_CONTAINER_SETTINGS}
          >
            <div
              className="elementor-element elementor-element-451d2d9 wcf-tabs-direction-row wcf-tabs-mobile elementor-widget elementor-widget-arolax--tabs"
              data-id="451d2d9"
              data-element_type="widget"
              data-e-type="widget"
              data-settings='{"wcf-animation":"fade","aae_method":"from","aae_trigger":"on_scroll","delay":0.15,"fade-from":"bottom","data-duration":1.5,"ease":"power2.out","fade-offset":50}'
              data-widget_type="arolax--tabs.default"
            >
              <div className="elementor-widget-container">
                <div className="wcf--tabs arolax--tabs">
                  <div className="tabs-wrapper" role="tablist">
                    {WHY_CHOOSE_TABS.map((tab) => (
                      <div
                        key={tab.idSuffix}
                        id={`tab-title-${tab.idSuffix}`}
                        className="tab-title tab-desktop-title"
                        aria-selected={tab.defaultSelected}
                        data-tab={tab.tabNumber}
                        role="tab"
                        tabIndex={tab.defaultSelected ? 0 : -1}
                        aria-controls={`tab-content-${tab.idSuffix}`}
                      >
                        <div className="icon">
                          <WhyChooseTabIcon icon={tab.icon} />
                        </div>
                        <div className="content">
                          <div className="title">{tab.title}</div>
                          <p className="desc">{tab.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="tabs-content-wrapper">
                    {WHY_CHOOSE_TABS.map((tab) => (
                      <div key={tab.idSuffix} className="tab-item">
                        <div
                          className="tab-title tab-mobile-title"
                          aria-selected={tab.defaultSelected}
                          data-tab={tab.tabNumber}
                          role="tab"
                          tabIndex={tab.defaultSelected ? 0 : -1}
                          aria-controls={`tab-content-${tab.idSuffix}`}
                          aria-expanded="false"
                        >
                          <div className="icon">
                            <WhyChooseTabIcon icon={tab.icon} />
                          </div>
                          <div className="content">
                            <div className="title">{tab.title}</div>
                            <p className="desc">{tab.description}</p>
                          </div>
                        </div>
                        <div
                          id={`tab-content-${tab.idSuffix}`}
                          className="tab-content"
                          data-tab={tab.tabNumber}
                          role="tabpanel"
                          aria-labelledby={`tab-title-${tab.idSuffix}`}
                          tabIndex={0}
                        >
                          <p>
                            <img
                              loading="lazy"
                              decoding="async"
                              className={tab.imageClassName}
                              src={tab.imageSrc}
                              alt={tab.title}
                              width={740}
                              height={510}
                              sizes="(max-width: 740px) 100vw, 740px"
                            />
                          </p>
                        </div>
                      </div>
                    ))}
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
