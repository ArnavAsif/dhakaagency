import {
  DEFAULT_CONTAINER_SETTINGS,
  WIDGET_NONE_ANIMATION_SETTINGS,
} from "@/components/shared/elementorSettings";
import { NAV_MENU_ITEMS } from "@/data/website-data";

export default function Header() {
  return (
    <div data-elementor-type="wp-post" data-elementor-id="47" className="elementor elementor-47">
      <div
        className="elementor-element elementor-element-e072e0e e-con-full e-flex wcf-starter-animations-none e-con e-parent"
        data-id="e072e0e"
        data-element_type="container"
        data-e-type="container"
        data-settings={DEFAULT_CONTAINER_SETTINGS}
      >
        <div
          className="elementor-element elementor-element-7154d70 e-con-full e-flex wcf-starter-animations-none e-con e-child"
          data-id="7154d70"
          data-element_type="container"
          data-e-type="container"
          data-settings={DEFAULT_CONTAINER_SETTINGS}
        >
          <div
            className="elementor-element elementor-element-55cb238 elementor-widget elementor-widget-wcf--site-logo"
            data-id="55cb238"
            data-element_type="widget"
            data-e-type="widget"
            data-settings={WIDGET_NONE_ANIMATION_SETTINGS}
            data-widget_type="wcf--site-logo.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-image">
                <a href="#hero" aria-label="Dhaka Agency">
                  <img
                    width={184}
                    height={48}
                    src="/assets/images/dhaka-agency-logo.svg"
                    className="attachment-full size-full wp-image-7351"
                    alt="Dhaka Agency"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-36aa0a2 e-con-full e-flex wcf-starter-animations-none e-con e-child"
          data-id="36aa0a2"
          data-element_type="container"
          data-e-type="container"
          data-settings={DEFAULT_CONTAINER_SETTINGS}
        >
          <div
            className="elementor-element elementor-element-6904d66 elementor-widget elementor-widget-wcf--nav-menu"
            data-id="6904d66"
            data-element_type="widget"
            data-e-type="widget"
            data-settings='{"mobile_menu_breakpoint":"tablet","onpsc_duration":1,"ease_type":"power2.out","wcf-animation":"none"}'
            data-widget_type="wcf--nav-menu.default"
          >
            <div className="elementor-widget-container">
              <div className="mobile-sub-back" style={{ display: "none" }}>
                <svg
                  aria-hidden="true"
                  className="e-font-icon-svg e-fas-arrow-left"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
                </svg>{" "}
                Back{" "}
              </div>
              <div className="wcf__nav-menu desktop-menu-active mobile-menu-right hover-pointer-">
                <button className="wcf-menu-hamburger" type="button" aria-label="hamburger-icon">
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-fas-bars"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
                  </svg>
                </button>
                <div className="wcf-nav-menu-container">
                  <ul id="menu-mega-menu" className="wcf-nav-menu-nav menu-layout-horizontal">
                    {NAV_MENU_ITEMS.map((item) =>
                      item.subMenu ? (
                        <li key={item.label} className="menu-item menu-item-has-children">
                          <a href={item.href} className="wcf-nav-item">
                            {item.label}
                            <span className="wcf-submenu-indicator">
                              <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fas-angle-down"
                                viewBox="0 0 320 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                              </svg>
                            </span>
                          </a>
                          <ul className="sub-menu">
                            {item.subMenu.map((sub) => (
                              <li key={sub.label} className="menu-item">
                                <a href={sub.href} target="_blank" rel="noopener noreferrer">
                                  {sub.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={item.label} className="menu-item">
                          <a href={item.href} className="wcf-nav-item">
                            {item.label}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                  <button className="wcf-menu-close" type="button">
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-times"
                      viewBox="0 0 352 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                    </svg>
                  </button>
                </div>
                <div className="wcf-menu-overlay" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-7660472 e-con-full e-flex wcf-starter-animations-none e-con e-child"
          data-id="7660472"
          data-element_type="container"
          data-e-type="container"
          data-settings={DEFAULT_CONTAINER_SETTINGS}
        >
          <div
            className="elementor-element elementor-element-b50f876 elementor-widget elementor-widget-wcf--blog--search--form"
            data-id="b50f876"
            data-element_type="widget"
            data-e-type="widget"
            data-settings={WIDGET_NONE_ANIMATION_SETTINGS}
            data-widget_type="wcf--blog--search--form.default"
          >
            <div className="elementor-widget-container">
              <div className="search--wrapper style-full-screen ">
                <div className="wcf-search-toggle" role="button" tabIndex={0}>
                  <div className="toggle--open">
                    <i
                      aria-hidden="true"
                      className="arolax-theme arolax-wcf-icon icon-wcf-search"
                    />{" "}
                    <span className="elementor-screen-only">Search</span>
                  </div>
                </div>
                <div className="wcf-search-container">
                  <div className="toggle--close" role="button" tabIndex={0}>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-window-close"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
                    </svg>{" "}
                    <span className="elementor-screen-only">Close this search box</span>
                  </div>
                  <form
                    className="wcf-search-form"
                    action="https://nomaddigitalbd.com/"
                    method="get"
                    role="search"
                  >
                    <label className="elementor-screen-only" htmlFor="wcf-search-form-b50f876">
                      Search{" "}
                    </label>
                    <input
                      id="wcf-search-form-b50f876"
                      placeholder="Search..."
                      className="wcf-search-form__input "
                      type="search"
                      name="s"
                      defaultValue=""
                      autoComplete="off"
                    />
                    <button
                      id="wcf-search-form-b50f876"
                      className="wcf-search-form__submit"
                      type="submit"
                      aria-label="Search"
                    >
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg e-fas-search"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                      </svg>{" "}
                      <span className="elementor-screen-only">Search</span>
                    </button>
                  </form>
                  <div className="selected-category-display" />
                </div>
                <div className="aae--live-search-results" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
