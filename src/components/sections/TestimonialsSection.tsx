import { CircleBtnArrowIcon } from "@/components/shared/ArolaxIcons";
import {
  DEFAULT_CONTAINER_SETTINGS,
  TEXT_MOVE_DEFAULT_SETTINGS,
  TEXT_REVEAL_DEFAULT_SETTINGS,
} from "@/components/shared/elementorSettings";
import { TESTIMONIALS } from "@/data/website-data";

export default function TestimonialsSection() {
  return (
    <div
      className="elementor-element elementor-element-ccc8a29 e-con-full e-flex wcf-starter-animations-none e-con e-parent"
      data-id="ccc8a29"
      data-element_type="container"
      data-e-type="container"
      data-settings={DEFAULT_CONTAINER_SETTINGS}
      id="testimonials"
    >
      <div
        className="elementor-element elementor-element-53e41ed e-flex e-con-boxed wcf-starter-animations-none e-con e-child"
        data-id="53e41ed"
        data-element_type="container"
        data-e-type="container"
        data-settings={DEFAULT_CONTAINER_SETTINGS}
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-ea97da2 e-con-full e-flex wcf-starter-animations-none e-con e-child"
            data-id="ea97da2"
            data-element_type="container"
            data-e-type="container"
            data-settings={DEFAULT_CONTAINER_SETTINGS}
          >
            <div
              className="elementor-element elementor-element-b819196 e-con-full e-flex wcf-starter-animations-none e-con e-child"
              data-id="b819196"
              data-element_type="container"
              data-e-type="container"
              data-settings={DEFAULT_CONTAINER_SETTINGS}
            >
              <div
                className="elementor-element elementor-element-cf686d2 wcf-t-animation-text_reveal wcf-starter-animations-none elementor-widget elementor-widget-wcf--title"
                data-id="cf686d2"
                data-element_type="widget"
                data-e-type="widget"
                data-settings={TEXT_REVEAL_DEFAULT_SETTINGS}
                data-widget_type="wcf--title.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="wcf--title">What Our Verified Clients Say</h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-fa9ab0b elementor-widget__width-initial wcf-t-animation-text_move wcf-starter-animations-none elementor-widget elementor-widget-text-editor"
                data-id="fa9ab0b"
                data-element_type="widget"
                data-e-type="widget"
                data-settings={TEXT_MOVE_DEFAULT_SETTINGS}
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p>
                    Rated 5.0 across verified client reviews — proven results in Google Ads, SEO,
                    and custom web development.
                  </p>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-519d6f2 elementor-widget elementor-widget-wcf--button"
                data-id="519d6f2"
                data-element_type="widget"
                data-e-type="widget"
                data-settings='{"wcf-animation":"fade","data-duration":1,"fade-offset":60,"ease":"bounce","aae_method":"from","aae_trigger":"on_scroll","delay":0.15,"fade-from":"bottom"}'
                data-widget_type="wcf--button.default"
              >
                <div className="elementor-widget-container">
                  <div className="wcf__btn icon-position-after">
                    <div className="btn-wrapper">
                      <a
                        href="https://nomaddigitalbd.com/case-studies"
                        className="wcf-btn-circle btn-item btn-hover-bgchange"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CircleBtnArrowIcon />
                        View Case Studies
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-3376026 e-con-full e-flex wcf-starter-animations-none e-con e-child"
              data-id="3376026"
              data-element_type="container"
              data-e-type="container"
              data-settings={DEFAULT_CONTAINER_SETTINGS}
            >
              <div
                className="elementor-element elementor-element-e060fd7 elementor-widget elementor-widget-arolax--testimonial"
                data-id="e060fd7"
                data-element_type="widget"
                data-e-type="widget"
                data-settings='{"wcf-animation":"fade","fade-from":"left","aae_method":"from","aae_trigger":"on_scroll","delay":0.15,"data-duration":1.5,"ease":"power2.out","fade-offset":50}'
                data-widget_type="arolax--testimonial.default"
              >
                <div className="elementor-widget-container">
                  <div
                    className="arolax_testimonial_wrapper arolax__testimonial-4"
                    data-settings='{"loop":true,"speed":500,"allowTouchMove":"false","slidesPerView":"1","spaceBetween":20,"effect":"cards","autoplay":{"delay":3000,"disableOnInteraction":"true"},"navigation":{"nextEl":".elementor-element-e060fd7 .wcf-arrow-next","prevEl":".elementor-element-e060fd7 .wcf-arrow-prev"},"pagination":{"el":".elementor-element-e060fd7 .swiper-pagination","clickable":true},"breakpoints":{"767":{"slidesPerView":"1"},"880":{"slidesPerView":"1"},"1024":{"slidesPerView":"1"},"1200":{"slidesPerView":"1"},"1366":{"slidesPerView":"1"},"2400":{"slidesPerView":"1"}}}'
                  >
                    <div
                      className="arolax_testimonial_slider swiper"
                      style={{ position: "static" }}
                      dir="ltr"
                    >
                      <div className="swiper-wrapper">
                        {TESTIMONIALS.map((item) => (
                          <div key={item.name} className="swiper-slide">
                            <div className="slide elementor-repeater-item-6af42b7">
                              <div className="content">
                                <div className="logo">
                                  <img
                                    decoding="async"
                                    src="/assets/images/rating.png"
                                    alt="Quote"
                                  />
                                </div>
                                <div className="top_text">{item.topText}</div>
                                <div className="feedback">{item.feedback}</div>
                                <div className="quote">
                                  <img
                                    decoding="async"
                                    src="/assets/images/quote-style-1.svg"
                                    alt="Quote"
                                  />
                                </div>
                              </div>
                              <div className="wrap">
                                <div className="image">
                                  <img
                                    decoding="async"
                                    src={item.avatarSrc}
                                    alt={item.name}
                                  />
                                </div>
                                <div className="info">
                                  <div className="name">{item.name}</div>
                                  <div className="designation">{item.designation}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="ts-navigation">
                      <div className="wcf-arrow wcf-arrow-prev" role="button" tabIndex={0}>
                        <i
                          aria-hidden="true"
                          className="arolax-theme arolax-wcf-icon icon-wcf-arrow-left"
                        />
                      </div>
                      <div className="wcf-arrow wcf-arrow-next" role="button" tabIndex={0}>
                        <i
                          aria-hidden="true"
                          className="arolax-theme arolax-wcf-icon icon-wcf-arrow-right-1"
                        />
                      </div>
                    </div>

                    <div className="ts-pagination">
                      <div className="swiper-pagination" />
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
