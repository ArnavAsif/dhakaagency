import {
  DEFAULT_CONTAINER_SETTINGS,
  TEXT_MOVE_DEFAULT_SETTINGS,
  TEXT_REVEAL_DEFAULT_SETTINGS,
} from "@/components/shared/elementorSettings";
import { FAQ_ITEMS } from "@/data/website-data";

export default function FaqSection() {
  return (
    <div
      className="elementor-element elementor-element-5236ee7 e-con-full e-flex wcf-starter-animations-none e-con e-parent"
      data-id="5236ee7"
      data-element_type="container"
      data-e-type="container"
      data-settings={DEFAULT_CONTAINER_SETTINGS}
      id="faq"
    >
      <div
        className="elementor-element elementor-element-25efe08 e-flex e-con-boxed wcf-starter-animations-none e-con e-child"
        data-id="25efe08"
        data-element_type="container"
        data-e-type="container"
        data-settings={DEFAULT_CONTAINER_SETTINGS}
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-1e2f190 e-con-full e-flex wcf-starter-animations-none e-con e-child"
            data-id="1e2f190"
            data-element_type="container"
            data-e-type="container"
            data-settings={DEFAULT_CONTAINER_SETTINGS}
          >
            <div
              className="elementor-element elementor-element-ba51773 e-con-full e-flex wcf-starter-animations-none e-con e-child"
              data-id="ba51773"
              data-element_type="container"
              data-e-type="container"
              data-settings={DEFAULT_CONTAINER_SETTINGS}
            >
              <div
                className="elementor-element elementor-element-ef4b26e wcf-t-animation-text_reveal wcf-starter-animations-none elementor-widget elementor-widget-wcf--title"
                data-id="ef4b26e"
                data-element_type="widget"
                data-e-type="widget"
                data-settings={TEXT_REVEAL_DEFAULT_SETTINGS}
                data-widget_type="wcf--title.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="wcf--title">Frequently Asked Questions</h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-8b8c468 elementor-widget__width-initial wcf-t-animation-text_move wcf-starter-animations-none elementor-widget elementor-widget-text-editor"
                data-id="8b8c468"
                data-element_type="widget"
                data-e-type="widget"
                data-settings={TEXT_MOVE_DEFAULT_SETTINGS}
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p>
                    Answers to common questions about Dhaka Agency’s Paid Ads, SEO, Analytics, and
                    Web Development services.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-6d773a1 e-con-full e-flex wcf-starter-animations-none e-con e-child"
              data-id="6d773a1"
              data-element_type="container"
              data-e-type="container"
              data-settings={DEFAULT_CONTAINER_SETTINGS}
            >
              <div
                className="elementor-element elementor-element-374aed0 elementor-widget elementor-widget-accordion"
                data-id="374aed0"
                data-element_type="widget"
                data-e-type="widget"
                data-settings='{"wcf-animation":"fade","fade-from":"left","fade-offset":40,"aae_method":"from","aae_trigger":"on_scroll","delay":0.15,"data-duration":1.5,"ease":"power2.out"}'
                data-widget_type="accordion.skin-wcf-accordion"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-accordion" data-active="yes">
                    {FAQ_ITEMS.map((item) => (
                      <div key={item.idSuffix} className="elementor-accordion-item">
                        <div
                          id={`elementor-tab-title-${item.idSuffix}`}
                          className="elementor-tab-title"
                          data-active={item.defaultActive}
                          data-indexkey={item.indexKey}
                        >
                          <span
                            className="elementor-accordion-icon elementor-accordion-icon-right"
                            aria-hidden="true"
                          >
                            <span className="elementor-accordion-icon-closed">
                              <i className="arolax-theme arolax-wcf-icon icon-wcf-wcf-plus" />
                            </span>
                            <span className="elementor-accordion-icon-opened">
                              <i className="arolax-theme arolax-wcf-icon icon-wcf-minus" />
                            </span>
                          </span>
                          <div className="elementor-accordion-title" tabIndex={0}>
                            {item.question}
                          </div>
                        </div>
                        <div
                          id={`elementor-tab-content-${item.idSuffix}`}
                          className="elementor-tab-content elementor-clearfix"
                          data-active={item.defaultActive}
                          data-indexkey={item.indexKey}
                        >
                          <p>{item.answer}</p>
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
