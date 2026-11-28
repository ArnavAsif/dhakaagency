import {
  DEFAULT_CONTAINER_SETTINGS,
  IMAGE_NONE_SETTINGS,
  TEXT_MOVE_DEFAULT_SETTINGS,
  TEXT_NONE_SETTINGS,
  WIDGET_NONE_ANIMATION_SETTINGS,
} from "@/components/shared/elementorSettings";
import { SERVICE_ROWS } from "@/data/website-data";

const SERVICE_ROW_SETTINGS =
  '{"wcf_enable_cursor_hover_effect_text":"View","wcf_enable_hover_image":"yes","wcf_enable_hover_image_editor":"yes","wcf-animation":"fade","fade-from":"left","aae_method":"from","aae_trigger":"on_scroll","delay":0.15,"data-duration":1.5,"ease":"power2.out","fade-offset":50,"wcf_enable_pin_area":"no","aae_enable_header_sticky_area":"no","wcf_enable_horizontal_scroll":"no"}';

export default function ServicesSection() {
  return (
    <div
      className="elementor-element elementor-element-64acaf5 e-con-full e-flex wcf-starter-animations-none e-con e-parent"
      data-id="64acaf5"
      data-element_type="container"
      data-e-type="container"
      data-settings={DEFAULT_CONTAINER_SETTINGS}
      id="services"
    >
      <div
        className="elementor-element elementor-element-b0617ee e-flex e-con-boxed wcf-starter-animations-none e-con e-child"
        data-id="b0617ee"
        data-element_type="container"
        data-e-type="container"
        data-settings={DEFAULT_CONTAINER_SETTINGS}
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-f82f639 e-con-full e-flex wcf-starter-animations-none e-con e-child"
            data-id="f82f639"
            data-element_type="container"
            data-e-type="container"
            data-settings={DEFAULT_CONTAINER_SETTINGS}
          >
            <div
              className="elementor-element elementor-element-0b6a18d e-con-full e-flex wcf-starter-animations-none e-con e-child"
              data-id="0b6a18d"
              data-element_type="container"
              data-e-type="container"
              data-settings={DEFAULT_CONTAINER_SETTINGS}
            >
              <div
                className="elementor-element elementor-element-2041531 wcf-t-animation-word wcf-starter-animations-none elementor-widget elementor-widget-wcf--title"
                data-id="2041531"
                data-element_type="widget"
                data-e-type="widget"
                data-settings='{"wcf_text_animation":"word","text_stagger":0.03,"text_translate_x":50,"wcf_starter_animations":"none","wcf_anim_duration":1000,"wcf_anim_delay":0,"wcf_anim_ease":"ease","aae_text_trigger":"on_scroll","text_delay":0.15,"text_duration":1,"text_translate_y":0,"wcf-animation":"none"}'
                data-widget_type="wcf--title.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="wcf--title">
                    Solutions Engineered
                    <br />
                    for Growth
                  </h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-91d8e8a e-con-full e-flex wcf-starter-animations-none e-con e-child"
                data-id="91d8e8a"
                data-element_type="container"
                data-e-type="container"
                data-settings={DEFAULT_CONTAINER_SETTINGS}
              >
                <div
                  className="elementor-element elementor-element-ec66696 elementor-widget__width-initial wcf-t-animation-text_move wcf-starter-animations-none elementor-widget elementor-widget-text-editor"
                  data-id="ec66696"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings={TEXT_MOVE_DEFAULT_SETTINGS}
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>
                      A step-by-step breakdown of how Dhaka Agency’s core digital services drive
                      measurable business scalability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {SERVICE_ROWS.map((row) => (
            <div
              key={row.rowDataId}
              className={`aae-disable-transition elementor-element elementor-element-${row.rowDataId} e-con-full e-flex wcf-starter-animations-none e-con e-child`}
              data-id={row.rowDataId}
              data-element_type="container"
              data-e-type="container"
              data-settings={SERVICE_ROW_SETTINGS}
            >
              <div
                className={`elementor-element elementor-element-${row.numColDataId} e-con-full e-flex wcf-starter-animations-none e-con e-child`}
                data-id={row.numColDataId}
                data-element_type="container"
                data-e-type="container"
                data-settings={DEFAULT_CONTAINER_SETTINGS}
              >
                <div
                  className={`elementor-element elementor-element-${row.numWidgetDataId} wcf-starter-animations-none wcf-t-animation-none elementor-widget elementor-widget-heading`}
                  data-id={row.numWidgetDataId}
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings={TEXT_NONE_SETTINGS}
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{row.num}</h2>
                  </div>
                </div>
              </div>
              <div
                className={`elementor-element elementor-element-${row.titleColDataId} e-con-full e-flex wcf-starter-animations-none e-con e-child`}
                data-id={row.titleColDataId}
                data-element_type="container"
                data-e-type="container"
                data-settings={DEFAULT_CONTAINER_SETTINGS}
              >
                <div
                  className={`elementor-element elementor-element-${row.titleWidgetDataId} wcf-starter-animations-none wcf-t-animation-none elementor-widget elementor-widget-heading`}
                  data-id={row.titleWidgetDataId}
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings={TEXT_NONE_SETTINGS}
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      <a href={row.href} target="_blank" rel="noopener noreferrer">
                        {row.title}
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className={`elementor-element elementor-element-${row.bodyColDataId} e-con-full e-flex wcf-starter-animations-none e-con e-child`}
                data-id={row.bodyColDataId}
                data-element_type="container"
                data-e-type="container"
                data-settings={DEFAULT_CONTAINER_SETTINGS}
              >
                <div
                  className={`elementor-element elementor-element-${row.descWidgetDataId} wcf-starter-animations-none wcf-t-animation-none elementor-widget elementor-widget-text-editor`}
                  data-id={row.descWidgetDataId}
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings={TEXT_NONE_SETTINGS}
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>{row.description}</p>
                  </div>
                </div>
                <div
                  className={`elementor-element elementor-element-${row.listWidgetDataId} elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list`}
                  data-id={row.listWidgetDataId}
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings={WIDGET_NONE_ANIMATION_SETTINGS}
                  data-widget_type="icon-list.default"
                >
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      {row.features.map((feature) => (
                        <li key={feature} className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <i
                              aria-hidden="true"
                              className="arolax-theme arolax-wcf-icon icon-wcf-wcf-plus"
                            />
                          </span>
                          <span className="elementor-icon-list-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className={`elementor-element elementor-element-${row.imgOuterColDataId} e-con-full e-flex wcf-starter-animations-none e-con e-child`}
                data-id={row.imgOuterColDataId}
                data-element_type="container"
                data-e-type="container"
                data-settings={DEFAULT_CONTAINER_SETTINGS}
              >
                <div
                  className={`elementor-element elementor-element-${row.imgInnerColDataId} e-con-full e-flex wcf-starter-animations-none e-con e-child`}
                  data-id={row.imgInnerColDataId}
                  data-element_type="container"
                  data-e-type="container"
                  data-settings={DEFAULT_CONTAINER_SETTINGS}
                >
                  <div
                    className={`elementor-element elementor-element-${row.imgWidgetDataId} wcf-starter-animations-none elementor-widget elementor-widget-wcf--image`}
                    data-id={row.imgWidgetDataId}
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
                          width={45}
                          height={45}
                          src={row.imgSrc}
                          className={`attachment-full size-full ${row.wpImageClass}`}
                          alt={row.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
