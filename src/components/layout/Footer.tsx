import { SocialIconSvg } from "@/components/shared/ArolaxIcons";
import {
  DEFAULT_CONTAINER_SETTINGS,
  FOOTER_BG_CONTAINER_SETTINGS,
  TEXT_MOVE_DEFAULT_SETTINGS,
  TEXT_NONE_SETTINGS,
  TEXT_REVEAL_DEFAULT_SETTINGS,
  WIDGET_NONE_ANIMATION_SETTINGS,
} from "@/components/shared/elementorSettings";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/data/website-data";

export default function Footer() {
  return (
    <div
      data-elementor-type="wp-post"
      data-elementor-id="1386"
      className="elementor elementor-1386"
      id="contact"
    >
      <div
        className="elementor-element elementor-element-6f1edb4 e-flex e-con-boxed wcf-starter-animations-none e-con e-parent"
        data-id="6f1edb4"
        data-element_type="container"
        data-e-type="container"
        data-settings={FOOTER_BG_CONTAINER_SETTINGS}
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-8a1ff10 elementor-widget__width-initial wcf-t-animation-text_move wcf-starter-animations-none elementor-widget elementor-widget-wcf--title"
            data-id="8a1ff10"
            data-element_type="widget"
            data-e-type="widget"
            data-settings={TEXT_MOVE_DEFAULT_SETTINGS}
            data-widget_type="wcf--title.default"
          >
            <div className="elementor-widget-container">
              <h2 className="wcf--title">🖐️ Dhaka, Bangladesh · +8801644474317</h2>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-fc7f1a3 elementor-widget__width-initial wcf-t-animation-text_move wcf-starter-animations-none elementor-widget elementor-widget-wcf--title"
            data-id="fc7f1a3"
            data-element_type="widget"
            data-e-type="widget"
            data-settings={TEXT_MOVE_DEFAULT_SETTINGS}
            data-widget_type="wcf--title.default"
          >
            <div className="elementor-widget-container">
              <h2 className="wcf--title">Let’s Talk with us</h2>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-056e84e underline-offset wcf-t-animation-text_reveal wcf-starter-animations-none elementor-widget elementor-widget-heading"
            data-id="056e84e"
            data-element_type="widget"
            data-e-type="widget"
            data-settings={TEXT_REVEAL_DEFAULT_SETTINGS}
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
                <a href="mailto:nomaddigitalbd@gmail.com">nomaddigitalbd@gmail.com</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className="elementor-element elementor-element-bfc9cf1 e-flex e-con-boxed wcf-starter-animations-none e-con e-parent"
        data-id="bfc9cf1"
        data-element_type="container"
        data-e-type="container"
        data-settings={FOOTER_BG_CONTAINER_SETTINGS}
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-e647c8d e-con-full e-flex wcf-starter-animations-none e-con e-child"
            data-id="e647c8d"
            data-element_type="container"
            data-e-type="container"
            data-settings={DEFAULT_CONTAINER_SETTINGS}
          >
            <div
              className="elementor-element elementor-element-f1f20d5 wcf-starter-animations-none wcf-t-animation-none elementor-widget elementor-widget-wcf--title"
              data-id="f1f20d5"
              data-element_type="widget"
              data-e-type="widget"
              data-settings={TEXT_NONE_SETTINGS}
              data-widget_type="wcf--title.default"
            >
              <div className="elementor-widget-container">
                <h2 className="wcf--title">© 2026 Dhaka Agency. All rights reserved.</h2>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-a45e836 e-con-full e-flex wcf-starter-animations-none e-con e-child"
            data-id="a45e836"
            data-element_type="container"
            data-e-type="container"
            data-settings={DEFAULT_CONTAINER_SETTINGS}
          >
            <div
              className="elementor-element elementor-element-be962dd elementor-icon-list--layout-inline elementor-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
              data-id="be962dd"
              data-element_type="widget"
              data-e-type="widget"
              data-settings={WIDGET_NONE_ANIMATION_SETTINGS}
              data-widget_type="icon-list.default"
            >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items elementor-inline-items">
                  {FOOTER_LINKS.map((link) => (
                    <li key={link.label} className="elementor-icon-list-item elementor-inline-item">
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <span className="elementor-icon-list-text">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-7f73dcc e-con-full e-flex wcf-starter-animations-none e-con e-child"
            data-id="7f73dcc"
            data-element_type="container"
            data-e-type="container"
            data-settings={DEFAULT_CONTAINER_SETTINGS}
          >
            <div
              className="elementor-element elementor-element-e03ae04 elementor-widget elementor-widget-wcf--social-icons"
              data-id="e03ae04"
              data-element_type="widget"
              data-e-type="widget"
              data-settings={WIDGET_NONE_ANIMATION_SETTINGS}
              data-widget_type="wcf--social-icons.default"
            >
              <div className="elementor-widget-container">
                <div className="wcf--social-icons">
                  <ul>
                    {SOCIAL_LINKS.map((social) => (
                      <li key={social.label}>
                        <a
                          className={`elementor-icon wcf-social-icon social-icon- ${social.repeaterClass}`}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="elementor-screen-only">{social.label}</span>
                          <SocialIconSvg icon={social.icon} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
