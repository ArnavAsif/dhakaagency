import {
  CLASSIC_BG_CONTAINER_SETTINGS,
  DEFAULT_CONTAINER_SETTINGS,
} from "@/components/shared/elementorSettings";
import { PARTNER_LOGOS } from "@/data/website-data";

export default function BrandMarqueeSection() {
  return (
    <div
      className="elementor-element elementor-element-078aa45 e-con-full e-flex wcf-starter-animations-none e-con e-parent"
      data-id="078aa45"
      data-element_type="container"
      data-e-type="container"
      data-settings={CLASSIC_BG_CONTAINER_SETTINGS}
    >
      <div
        className="elementor-element elementor-element-a796447 e-con-full e-flex wcf-starter-animations-none e-con e-child"
        data-id="a796447"
        data-element_type="container"
        data-e-type="container"
        data-settings={DEFAULT_CONTAINER_SETTINGS}
      >
        <div
          className="elementor-element elementor-element-8068804 e-con-full e-flex wcf-starter-animations-none e-con e-child"
          data-id="8068804"
          data-element_type="container"
          data-e-type="container"
          data-settings={CLASSIC_BG_CONTAINER_SETTINGS}
        />
        <div
          className="elementor-element elementor-element-450b92c e-con-full e-flex wcf-starter-animations-none e-con e-child"
          data-id="450b92c"
          data-element_type="container"
          data-e-type="container"
          data-settings={CLASSIC_BG_CONTAINER_SETTINGS}
        >
          <div
            className="elementor-element elementor-element-f5003e6 elementor-widget elementor-widget-wcf--brand-slider"
            data-id="f5003e6"
            data-element_type="widget"
            data-e-type="widget"
            data-settings='{"wcf-animation":"fade","data-duration":0.75,"fade-offset":40,"aae_method":"from","aae_trigger":"on_scroll","delay":0.15,"fade-from":"bottom","ease":"power2.out"}'
            data-widget_type="wcf--brand-slider.default"
          >
            <div className="elementor-widget-container">
              <div
                className="wcf__slider-wrapper wcf--brand-slider-wrapper"
                data-settings='{"loop":true,"speed":5000,"allowTouchMove":false,"slidesPerView":"5","spaceBetween":20,"autoplay":{"delay":1,"disableOnInteraction":true,"pauseOnMouseEnter":false},"grid":{"rows":null,"fill":"row"},"breakpoints":{"767":{"slidesPerView":"2","spaceBetween":20},"880":{"slidesPerView":"4","spaceBetween":20},"1024":{"slidesPerView":"3","spaceBetween":20},"1200":{"slidesPerView":"5","spaceBetween":20},"1366":{"slidesPerView":"5","spaceBetween":20},"2400":{"slidesPerView":"5","spaceBetween":20}}}'
              >
                <div className="wcf__slider swiper" dir="ltr" style={{ position: "static" }}>
                  <div className="swiper-wrapper">
                    {PARTNER_LOGOS.map((logo) => (
                      <div key={logo.src} className="swiper-slide">
                        <img
                          decoding="async"
                          className="swiper-slide-image"
                          src={logo.src}
                          alt={logo.alt}
                        />
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
