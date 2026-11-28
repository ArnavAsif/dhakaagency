import { UnderlineArrowIcon } from "@/components/shared/ArolaxIcons";
import {
  CLASSIC_BG_CONTAINER_SETTINGS,
  DEFAULT_CONTAINER_SETTINGS,
  TEXT_REVEAL_DEFAULT_SETTINGS,
} from "@/components/shared/elementorSettings";

export default function CtaBannerSection() {
  return (
    <div
      className="elementor-element elementor-element-19cf871 e-con-full e-flex wcf-starter-animations-none e-con e-parent"
      data-id="19cf871"
      data-element_type="container"
      data-e-type="container"
      data-settings={DEFAULT_CONTAINER_SETTINGS}
    >
      <div
        className="elementor-element elementor-element-b55df37 e-con-full e-flex wcf-starter-animations-none e-con e-child"
        data-id="b55df37"
        data-element_type="container"
        data-e-type="container"
        data-settings={DEFAULT_CONTAINER_SETTINGS}
      >
        <div
          className="elementor-element elementor-element-584081f e-con-full e-flex wcf-starter-animations-none e-con e-child"
          data-id="584081f"
          data-element_type="container"
          data-e-type="container"
          data-settings={CLASSIC_BG_CONTAINER_SETTINGS}
        >
          <div
            className="elementor-element elementor-element-c0a4105 wcf-t-animation-text_reveal elementor-widget-mobile__width-inherit elementor-widget__width-initial wcf-starter-animations-none elementor-widget elementor-widget-wcf--title"
            data-id="c0a4105"
            data-element_type="widget"
            data-e-type="widget"
            data-settings={TEXT_REVEAL_DEFAULT_SETTINGS}
            data-widget_type="wcf--title.default"
          >
            <div className="elementor-widget-container">
              <h2 className="wcf--title">Let’s Build Something Amazing Together</h2>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-10aeb51 elementor-widget elementor-widget-wcf--button"
            data-id="10aeb51"
            data-element_type="widget"
            data-e-type="widget"
            data-settings='{"wcf-animation":"fade","data-duration":1.15,"aae_method":"from","aae_trigger":"on_scroll","delay":0.15,"fade-from":"bottom","ease":"power2.out","fade-offset":50}'
            data-widget_type="wcf--button.default"
          >
            <div className="elementor-widget-container">
              <div className="wcf__btn icon-position-after">
                <a
                  href="https://nomaddigitalbd.com/quotation"
                  className="wcf-btn-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <UnderlineArrowIcon />
                  Request Free Quotation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
