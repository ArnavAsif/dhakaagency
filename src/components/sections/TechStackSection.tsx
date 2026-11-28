import {
  DEFAULT_CONTAINER_SETTINGS,
  IMAGE_NONE_SETTINGS,
  TEXT_NONE_SETTINGS,
} from "@/components/shared/elementorSettings";
import { TECH_STACK_ITEMS } from "@/data/website-data";

export default function TechStackSection() {
  return (
    <div
      className="elementor-element elementor-element-d3c07c3 e-con-full e-flex wcf-starter-animations-none e-con e-parent"
      data-id="d3c07c3"
      data-element_type="container"
      data-e-type="container"
      data-settings={DEFAULT_CONTAINER_SETTINGS}
    >
      <div
        className="elementor-element elementor-element-551c9ea e-flex e-con-boxed wcf-starter-animations-none e-con e-child"
        data-id="551c9ea"
        data-element_type="container"
        data-e-type="container"
        data-settings={DEFAULT_CONTAINER_SETTINGS}
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-3671fd6 e-con-full e-flex wcf-starter-animations-none e-con e-child"
            data-id="3671fd6"
            data-element_type="container"
            data-e-type="container"
            data-settings={DEFAULT_CONTAINER_SETTINGS}
          >
            <div
              className="elementor-element elementor-element-a4be3b8 e-con-full e-flex wcf-starter-animations-none e-con e-child"
              data-id="a4be3b8"
              data-element_type="container"
              data-e-type="container"
              data-settings={DEFAULT_CONTAINER_SETTINGS}
            >
              <div
                className="elementor-element elementor-element-436615a wcf-t-animation-text_reveal wcf-starter-animations-none elementor-widget elementor-widget-heading"
                data-id="436615a"
                data-element_type="widget"
                data-e-type="widget"
                data-settings='{"wcf_text_animation":"text_reveal","text_duration":0.5,"text_stagger":0.01,"wcf_starter_animations":"none","wcf_anim_duration":1000,"wcf_anim_delay":0,"wcf_anim_ease":"ease","aae_text_trigger":"on_scroll","text_delay":0.15,"wcf-animation":"none"}'
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    What Dhaka Agency Masters Best
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-a87a989 e-con-full e-flex wcf-starter-animations-none e-con e-child"
              data-id="a87a989"
              data-element_type="container"
              data-e-type="container"
              data-settings={DEFAULT_CONTAINER_SETTINGS}
            >
              {TECH_STACK_ITEMS.map((item) => (
                <div
                  key={item.containerDataId}
                  className={`aae-disable-transition elementor-element elementor-element-${item.containerDataId} e-con-full e-flex wcf-starter-animations-none e-con e-child`}
                  data-id={item.containerDataId}
                  data-element_type="container"
                  data-e-type="container"
                  data-settings={item.containerSettings}
                >
                  <div
                    className={`elementor-element elementor-element-${item.imageWidgetDataId} wcf-starter-animations-none elementor-widget elementor-widget-wcf--image`}
                    data-id={item.imageWidgetDataId}
                    data-element_type="widget"
                    data-e-type="widget"
                    data-settings={IMAGE_NONE_SETTINGS}
                    data-widget_type="wcf--image.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="wcf--image">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={item.width}
                          height={item.height}
                          src={item.imageSrc}
                          className={`attachment-full size-full ${item.wpImageClass}`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`elementor-element elementor-element-${item.headingWidgetDataId} wcf-starter-animations-none wcf-t-animation-none elementor-widget elementor-widget-heading`}
                    data-id={item.headingWidgetDataId}
                    data-element_type="widget"
                    data-e-type="widget"
                    data-settings={TEXT_NONE_SETTINGS}
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        {item.title}
                      </h2>
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
