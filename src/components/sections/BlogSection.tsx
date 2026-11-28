import { UnderlineArrowIcon } from "@/components/shared/ArolaxIcons";
import {
  DEFAULT_CONTAINER_SETTINGS,
  TEXT_MOVE_DEFAULT_SETTINGS,
  TEXT_REVEAL_DEFAULT_SETTINGS,
  WIDGET_NONE_ANIMATION_SETTINGS,
} from "@/components/shared/elementorSettings";
import { BLOG_ARTICLES } from "@/data/website-data";

export default function BlogSection() {
  return (
    <div
      className="elementor-element elementor-element-63d2ea4 e-con-full e-flex wcf-starter-animations-none e-con e-parent"
      data-id="63d2ea4"
      data-element_type="container"
      data-e-type="container"
      data-settings={DEFAULT_CONTAINER_SETTINGS}
      id="blog"
    >
      <div
        className="elementor-element elementor-element-245e458 e-flex e-con-boxed wcf-starter-animations-none e-con e-child"
        data-id="245e458"
        data-element_type="container"
        data-e-type="container"
        data-settings={DEFAULT_CONTAINER_SETTINGS}
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-6b4597b e-con-full e-flex wcf-starter-animations-none e-con e-child"
            data-id="6b4597b"
            data-element_type="container"
            data-e-type="container"
            data-settings={DEFAULT_CONTAINER_SETTINGS}
          >
            <div
              className="elementor-element elementor-element-e02963a e-con-full e-flex wcf-starter-animations-none e-con e-child"
              data-id="e02963a"
              data-element_type="container"
              data-e-type="container"
              data-settings={DEFAULT_CONTAINER_SETTINGS}
            >
              <div
                className="elementor-element elementor-element-def310a wcf-t-animation-text_reveal wcf-starter-animations-none elementor-widget elementor-widget-heading"
                data-id="def310a"
                data-element_type="widget"
                data-e-type="widget"
                data-settings={TEXT_REVEAL_DEFAULT_SETTINGS}
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    Articles &amp; Experts Guide
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-4e6304e e-con-full e-flex wcf-starter-animations-none e-con e-child"
              data-id="4e6304e"
              data-element_type="container"
              data-e-type="container"
              data-settings={DEFAULT_CONTAINER_SETTINGS}
            >
              <div
                className="elementor-element elementor-element-2c55b17 elementor-widget__width-initial wcf-t-animation-text_move wcf-starter-animations-none elementor-widget elementor-widget-text-editor"
                data-id="2c55b17"
                data-element_type="widget"
                data-e-type="widget"
                data-settings={TEXT_MOVE_DEFAULT_SETTINGS}
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p>
                    Actionable insights on Paid Marketing, Web Analytics, SEO, CRO, and Web
                    Development from the Dhaka Agency team.
                  </p>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-72a168d elementor-widget elementor-widget-wcf--button"
                data-id="72a168d"
                data-element_type="widget"
                data-e-type="widget"
                data-settings='{"wcf-animation":"fade","fade-from":"left","data-duration":1.15,"aae_method":"from","aae_trigger":"on_scroll","delay":0.15,"ease":"power2.out","fade-offset":50}'
                data-widget_type="wcf--button.default"
              >
                <div className="elementor-widget-container">
                  <div className="wcf__btn icon-position-after">
                    <a
                      href="https://nomaddigitalbd.com/blogs"
                      className="wcf-btn-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <UnderlineArrowIcon />
                      All Articles
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-8325eb8 e-con-full e-flex wcf-starter-animations-none e-con e-child"
            data-id="8325eb8"
            data-element_type="container"
            data-e-type="container"
            data-settings={DEFAULT_CONTAINER_SETTINGS}
          >
            <div
              className="elementor-element elementor-element-5944f3f e-con-full e-flex wcf-starter-animations-none e-con e-child"
              data-id="5944f3f"
              data-element_type="container"
              data-e-type="container"
              data-settings={DEFAULT_CONTAINER_SETTINGS}
            >
              <div
                className="elementor-element elementor-element-74fb5e6 wcf--image-effect-zoom-in elementor-widget elementor-widget-wcf--posts"
                data-id="74fb5e6"
                data-element_type="widget"
                data-e-type="widget"
                data-settings={WIDGET_NONE_ANIMATION_SETTINGS}
                data-widget_type="wcf--posts.default"
              >
                <div className="elementor-widget-container">
                  <div className="wcf__posts style-4">
                    <div className="wcf-posts">
                      {BLOG_ARTICLES.map((post) => (
                        <article key={post.href} className={post.articleClass}>
                          <div className="thumb">
                            <a
                              href={post.href}
                              aria-label={post.thumbAriaLabel}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                loading="lazy"
                                decoding="async"
                                width={post.imgWidth}
                                height={post.imgHeight}
                                src={post.imgSrc}
                                className={`attachment-full size-full ${post.wpImageClass}`}
                                alt={post.imgAlt}
                                sizes={post.sizes}
                              />
                            </a>
                          </div>

                          <div className="content">
                            <div className="author">
                              <div className="author-img">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  alt="Dhaka Agency"
                                  src="/assets/images/nomad/nomad-avatar.png"
                                  className="avatar avatar-60 photo"
                                  height={60}
                                  width={60}
                                />
                              </div>
                              <div className="author-bio">
                                <p>
                                  Written by{" "}
                                  <a
                                    href="https://nomaddigitalbd.com/about-us"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Dhaka Agency
                                  </a>
                                </p>
                              </div>
                            </div>
                            <ul className="wcf-meta" />
                            <h3 className="title">
                              <a href={post.href} target="_blank" rel="noopener noreferrer">
                                {post.title}
                              </a>
                            </h3>
                            <div className="desc">
                              <p>{post.excerpt}</p>
                            </div>
                          </div>
                        </article>
                      ))}
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
