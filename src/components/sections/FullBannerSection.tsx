import {
  DEFAULT_CONTAINER_SETTINGS,
  IMAGE_NONE_SETTINGS,
} from "@/components/shared/elementorSettings";

export default function FullBannerSection() {
  return (
    <div
      className="elementor-element elementor-element-28a08b0 e-con-full e-flex wcf-starter-animations-none e-con e-parent"
      data-id="28a08b0"
      data-element_type="container"
      data-e-type="container"
      data-settings={DEFAULT_CONTAINER_SETTINGS}
    >
      <div
        data-speed="0.85"
        className="elementor-element elementor-element-31f5bcb wcf-starter-animations-none elementor-widget elementor-widget-wcf--image"
        data-id="31f5bcb"
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
              width={1920}
              height={950}
              src="/assets/images/nomad/page-web.jpg"
              className="attachment-full size-full wp-image-19"
              alt="Dhaka Agency Web Engineering & Growth"
              sizes="(max-width: 1920px) 100vw, 1920px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
