"use client";

import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Swiper from "swiper";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

function parseSettings(el: Element): Record<string, string | number | undefined> {
  try {
    return JSON.parse(el.getAttribute("data-settings") || "{}");
  } catch {
    return {};
  }
}

function getWidgetTextTarget(widgetEl: HTMLElement): HTMLElement {
  const container = widgetEl.querySelector<HTMLElement>(".elementor-widget-container");
  if (container) {
    const children = Array.from(container.children).filter(
      (c): c is HTMLElement =>
        c instanceof HTMLElement && c.tagName !== "STYLE" && c.tagName !== "SCRIPT"
    );
    if (children.length > 0) {
      return children[children.length - 1];
    }
  }
  return widgetEl;
}

/**
 * Splits text nodes inside `root` into word spans (or char spans inside word spans)
 * while preserving nested inline markup (e.g. `.highlight`, `.highlight-2`, `<br>`, `<img>`).
 */
function splitWordsOrChars(
  root: HTMLElement,
  mode: "word" | "char"
): { words: HTMLElement[]; chars: HTMLElement[] } {
  const words: HTMLElement[] = [];
  const chars: HTMLElement[] = [];

  const processNode = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || "";
      if (!text.trim()) return;

      const frag = document.createDocumentFragment();
      const tokens = text.split(/(\s+)/);

      tokens.forEach((token) => {
        if (!token) return;
        if (/^\s+$/.test(token)) {
          frag.appendChild(document.createTextNode(" "));
          return;
        }

        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block";
        wordSpan.style.position = "relative";

        if (mode === "char") {
          wordSpan.style.whiteSpace = "nowrap";
          Array.from(token).forEach((ch) => {
            const charSpan = document.createElement("span");
            charSpan.textContent = ch;
            charSpan.style.display = "inline-block";
            charSpan.style.position = "relative";
            wordSpan.appendChild(charSpan);
            chars.push(charSpan);
          });
        } else {
          wordSpan.textContent = token;
        }

        frag.appendChild(wordSpan);
        words.push(wordSpan);
      });

      node.parentNode?.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const elNode = node as HTMLElement;
      if (elNode.tagName === "BR" || elNode.tagName === "IMG" || elNode.tagName === "SVG") return;
      Array.from(elNode.childNodes).forEach(processNode);
    }
  };

  Array.from(root.childNodes).forEach(processNode);
  return { words, chars };
}

/**
 * Groups an element's rendered words/inline elements into visual line wrappers
 * matching GSAP SplitText `{ type: "lines" }` or `{ type: "lines,words,chars" }`.
 */
function splitIntoVisualLines(
  root: HTMLElement,
  options: { lineClass?: string; splitChars?: boolean }
): { lines: HTMLElement[]; chars: HTMLElement[] } {
  // First tokenize direct/nested content into measurable inline units while keeping <br> and inline elements
  const units: Array<{ node: Node; isBreak?: boolean }> = [];

  const collectUnits = (parent: Node) => {
    Array.from(parent.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const text = child.textContent || "";
        const tokens = text.split(/(\s+)/);
        tokens.forEach((token) => {
          if (!token) return;
          if (/^\s+$/.test(token)) {
            units.push({ node: document.createTextNode(" ") });
          } else {
            const span = document.createElement("span");
            span.style.display = "inline-block";
            span.textContent = token;
            units.push({ node: span });
          }
        });
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        const el = child as HTMLElement;
        if (el.tagName === "BR") {
          units.push({ node: el, isBreak: true });
        } else if (el.tagName === "IMG" || el.tagName === "SVG") {
          units.push({ node: el });
        } else if (
          el.tagName === "A" ||
          el.tagName === "SPAN" ||
          el.tagName === "STRONG" ||
          el.tagName === "EM"
        ) {
          // Preserve styling/href of inline tags by splitting their words into cloned shells
          const text = el.textContent || "";
          const tokens = text.split(/(\s+)/);
          tokens.forEach((token) => {
            if (!token) return;
            if (/^\s+$/.test(token)) {
              units.push({ node: document.createTextNode(" ") });
            } else {
              const clone = el.cloneNode(false) as HTMLElement;
              clone.style.display = "inline-block";
              clone.textContent = token;
              units.push({ node: clone });
            }
          });
        } else {
          units.push({ node: el });
        }
      }
    });
  };

  collectUnits(root);

  root.innerHTML = "";
  units.forEach((u) => root.appendChild(u.node));

  // Measure visual line breaks using bounding client rects
  const lineBuckets: Node[][] = [];
  let currentBucket: Node[] = [];
  let currentTop: number | null = null;

  units.forEach((u) => {
    if (u.isBreak) {
      if (currentBucket.length > 0) {
        lineBuckets.push(currentBucket);
        currentBucket = [];
        currentTop = null;
      }
      return;
    }

    if (u.node.nodeType === Node.ELEMENT_NODE) {
      const rect = (u.node as HTMLElement).getBoundingClientRect();
      const top = Math.round(rect.top);
      if (currentTop !== null && Math.abs(top - currentTop) > 6 && currentBucket.length > 0) {
        lineBuckets.push(currentBucket);
        currentBucket = [];
      }
      if (currentBucket.length === 0) {
        currentTop = top;
      }
    }

    currentBucket.push(u.node);
  });

  if (currentBucket.length > 0) {
    lineBuckets.push(currentBucket);
  }

  root.innerHTML = "";
  const lines: HTMLElement[] = [];
  const chars: HTMLElement[] = [];

  lineBuckets.forEach((bucket) => {
    // Trim leading/trailing whitespace text nodes on each line
    while (
      bucket.length &&
      bucket[0].nodeType === Node.TEXT_NODE &&
      !(bucket[0].textContent || "").trim()
    ) {
      bucket.shift();
    }
    while (
      bucket.length &&
      bucket[bucket.length - 1].nodeType === Node.TEXT_NODE &&
      !(bucket[bucket.length - 1].textContent || "").trim()
    ) {
      bucket.pop();
    }
    if (!bucket.length) return;

    const lineEl = document.createElement("span");
    lineEl.style.display = "block";
    lineEl.style.position = "relative";
    if (options.lineClass) {
      lineEl.className = options.lineClass;
    }

    bucket.forEach((n) => {
      if (options.splitChars && n.nodeType === Node.ELEMENT_NODE) {
        const el = n as HTMLElement;
        if (el.tagName !== "IMG" && el.tagName !== "SVG" && el.textContent) {
          const wordText = el.textContent;
          el.textContent = "";
          el.style.whiteSpace = "nowrap";
          Array.from(wordText).forEach((ch) => {
            const chSpan = document.createElement("span");
            chSpan.textContent = ch;
            chSpan.style.display = "inline-block";
            chSpan.style.position = "relative";
            el.appendChild(chSpan);
            chars.push(chSpan);
          });
        }
      }
      lineEl.appendChild(n);
    });

    root.appendChild(lineEl);
    lines.push(lineEl);
  });

  return { lines, chars };
}

export default function ArolaxEngine() {
  useEffect(() => {
    let cancelled = false;
    const cleanups: Array<() => void> = [];
    const timers: number[] = [];

    const addTimer = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timers.push(id);
      return id;
    };

    const listen = <T extends EventTarget>(
      target: T | null | undefined,
      event: string,
      handler: EventListenerOrEventListenerObject,
      options?: AddEventListenerOptions | boolean
    ) => {
      if (!target) return;
      target.addEventListener(event, handler, options);
      cleanups.push(() => target.removeEventListener(event, handler, options));
    };

    // ----------------------------------------------------
    // 0. Initial Scroll & Lazy Background Unlock
    // ----------------------------------------------------
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    document.querySelectorAll<HTMLElement>(".e-con.e-parent").forEach((el) => {
      el.classList.add("e-lazyloaded");
    });

    // Keep native lazy loading on below-the-fold images; only promote hero images
    document
      .querySelectorAll<HTMLImageElement>(".elementor-element-5973527 img[loading='lazy']")
      .forEach((img) => {
        img.loading = "eager";
      });

    // Lazy-load & autoplay background videos only when scrolled near viewport
    const lazyVideos = document.querySelectorAll<HTMLVideoElement>(
      'video[data-lazy-autoplay="true"][data-src]'
    );
    if (lazyVideos.length > 0 && "IntersectionObserver" in window) {
      const videoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = entry.target as HTMLVideoElement;
            if (entry.isIntersecting) {
              const src = video.getAttribute("data-src");
              if (src && !video.src) {
                video.src = src;
                video.load();
              }
              video.play().catch(() => {
                // ignore autoplay policy errors
              });
            } else if (!video.paused) {
              video.pause();
            }
          });
        },
        { rootMargin: "300px 0px" }
      );
      lazyVideos.forEach((v) => videoObserver.observe(v));
      cleanups.push(() => videoObserver.disconnect());
    }

    // ----------------------------------------------------
    // 1. Lenis Smooth Scroll Synced with GSAP ScrollTrigger
    // ----------------------------------------------------
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });
    lenis.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);

    const tickerCb = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);
    cleanups.push(() => {
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    });

    listen(window, "beforeunload", () => {
      window.scrollTo(0, 0);
    });
    listen(window, "pageshow", (e) => {
      if ((e as PageTransitionEvent).persisted) {
        if (window.location.hash) {
          history.replaceState(null, "", window.location.pathname + window.location.search);
        }
        window.scrollTo(0, 0);
        lenis.scrollTo(0, { immediate: true, force: true });
      }
    });

    // ----------------------------------------------------
    // 2. Reference Orbit Preloader (.wcf-preloader)
    // ----------------------------------------------------
    const preloaderEl = document.querySelector<HTMLElement>("#arolax-preloader");
    if (preloaderEl) {
      document.body.classList.add("wcf-preloader-active");
      preloaderEl.style.display = "flex";
      preloaderEl.style.opacity = "1";
      preloaderEl.style.pointerEvents = "auto";

      let preloaderHidden = false;
      const hidePreloader = () => {
        if (cancelled || preloaderHidden) return;
        preloaderHidden = true;
        document.body.classList.remove("wcf-preloader-active");
        preloaderEl.style.opacity = "0";
        preloaderEl.style.pointerEvents = "none";
        addTimer(() => {
          preloaderEl.style.display = "none";
          window.scrollTo(0, 0);
          lenis.scrollTo(0, { immediate: true, force: true });
          ScrollTrigger.refresh();
        }, 200);
      };

      // Hide preloader promptly once fonts are ready, with a hard 800ms ceiling so slow external resources never stall the page
      const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
      const maxWait = new Promise<void>((resolve) => {
        addTimer(resolve, 800);
      });

      Promise.race([fontsReady, maxWait]).then(() => {
        addTimer(hidePreloader, 120);
      });

      cleanups.push(() => {
        document.body.classList.remove("wcf-preloader-active");
      });
    }

    // ----------------------------------------------------
    // 3. Responsive Navigation & Mobile Menu Toggle
    // ----------------------------------------------------
    const navMenu = document.querySelector<HTMLElement>(".wcf__nav-menu");
    const hamburger = document.querySelector<HTMLElement>(".wcf-menu-hamburger");
    const closeBtn = document.querySelector<HTMLElement>(".wcf-menu-close");
    const overlay = document.querySelector<HTMLElement>(".wcf-menu-overlay");

    const updateNavMode = () => {
      if (!navMenu) return;
      if (window.innerWidth > 1024) {
        navMenu.classList.add("desktop-menu-active");
        navMenu.classList.remove("mobile-menu-active", "wcf-nav-is-toggled");
      } else {
        navMenu.classList.add("mobile-menu-active");
        navMenu.classList.remove("desktop-menu-active");
      }
    };
    updateNavMode();
    listen(window, "resize", updateNavMode);

    const openMenu = () => navMenu?.classList.add("wcf-nav-is-toggled");
    const closeMenu = () => navMenu?.classList.remove("wcf-nav-is-toggled");

    listen(hamburger, "click", openMenu);
    listen(closeBtn, "click", closeMenu);
    listen(overlay, "click", closeMenu);

    document.querySelectorAll<HTMLElement>(".menu-item-has-children > a").forEach((link) => {
      listen(link, "click", (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          link.parentElement?.classList.toggle("active");
        }
      });
    });

    // Smooth-scroll in-page anchor links without leaving a #hash that jumps on reload
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
      listen(anchor, "click", (e) => {
        const href = anchor.getAttribute("href");
        if (!href || href === "#") return;
        if (
          window.innerWidth <= 1024 &&
          anchor.parentElement?.classList.contains("menu-item-has-children")
        ) {
          return;
        }
        const target = document.querySelector<HTMLElement>(href);
        if (!target) return;
        e.preventDefault();
        closeMenu();
        lenis.scrollTo(href === "#hero" ? 0 : target);
      });
    });

    // ----------------------------------------------------
    // 4. Fullscreen Search Popup Overlay
    // ----------------------------------------------------
    const searchWrapper = document.querySelector<HTMLElement>(".search--wrapper");
    const searchToggle = document.querySelector<HTMLElement>(".wcf-search-toggle");
    const searchClose = document.querySelector<HTMLElement>(".search--wrapper .toggle--close");

    listen(searchToggle, "click", (e) => {
      e.preventDefault();
      searchWrapper?.classList.toggle("search-visible");
      const input = searchWrapper?.querySelector<HTMLInputElement>('input[type="search"]');
      if (searchWrapper?.classList.contains("search-visible") && input) {
        addTimer(() => input.focus(), 250);
      }
    });

    listen(searchClose, "click", (e) => {
      e.preventDefault();
      searchWrapper?.classList.remove("search-visible");
    });

    // ----------------------------------------------------
    // 5. Magnetic Buttons & Circular Hover Fill (exact animations.min.js)
    // ----------------------------------------------------
    document.querySelectorAll<HTMLElement>(".btn-wrapper").forEach((btnWrapper) => {
      const btnItem = btnWrapper.querySelector<HTMLElement>(".btn-item") || btnWrapper;

      listen(btnWrapper, "mousemove", (evt) => {
        const e = evt as MouseEvent;
        const rect = btnWrapper.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        const moveX = ((relX - rect.width / 2) / rect.width) * 80;
        const moveY = ((relY - rect.height / 2) / rect.height) * 80;

        gsap.to(btnItem, {
          x: moveX,
          y: moveY,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      listen(btnWrapper, "mouseleave", () => {
        gsap.to(btnItem, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });

    document.querySelectorAll<HTMLElement>(".btn-hover-bgchange").forEach((btn) => {
      const span = document.createElement("span");
      btn.appendChild(span);
      cleanups.push(() => span.remove());

      const updatePos = (evt: Event) => {
        const e = evt as MouseEvent;
        const rect = btn.getBoundingClientRect();
        span.style.left = `${e.clientX - rect.left}px`;
        span.style.top = `${e.clientY - rect.top}px`;
      };

      listen(btn, "mouseenter", updatePos);
      listen(btn, "mouseout", updatePos);
    });

    // ----------------------------------------------------
    // 6. Continuous Brand Marquee Slider (exact slider.min.js config)
    // ----------------------------------------------------
    const brandSliderEl = document.querySelector<HTMLElement>(
      ".elementor-widget-wcf--brand-slider .swiper"
    );
    if (brandSliderEl) {
      const swiperWrapper = brandSliderEl.querySelector<HTMLElement>(".swiper-wrapper");
      if (swiperWrapper) {
        const origSlides = Array.from(swiperWrapper.children).filter(
          (s) => !s.classList.contains("arolax-cloned-slide")
        );
        if (origSlides.length > 0 && origSlides.length < 18) {
          for (let round = 0; round < 2; round++) {
            origSlides.forEach((s) => {
              const clone = s.cloneNode(true) as HTMLElement;
              clone.classList.add("arolax-cloned-slide");
              swiperWrapper.appendChild(clone);
            });
          }
        }
      }

      const brandSwiper = new Swiper(brandSliderEl, {
        modules: [Autoplay],
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 5000,
        allowTouchMove: false,
        autoplay: {
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        },
        breakpoints: {
          767: { slidesPerView: 4, spaceBetween: 20 },
          880: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
          1200: { slidesPerView: 5, spaceBetween: 20 },
          1366: { slidesPerView: 5, spaceBetween: 20 },
        },
      });

      cleanups.push(() => {
        brandSwiper.destroy(true, true);
        brandSliderEl.querySelectorAll(".arolax-cloned-slide").forEach((c) => c.remove());
      });
    }

    // ----------------------------------------------------
    // 7. Testimonials 3D Stack Cards Swiper (zero loop warnings!)
    // ----------------------------------------------------
    const testSliderEl = document.querySelector<HTMLElement>(".arolax_testimonial_slider.swiper");
    if (testSliderEl) {
      const swiperWrapper = testSliderEl.querySelector<HTMLElement>(".swiper-wrapper");
      if (swiperWrapper) {
        const origSlides = Array.from(swiperWrapper.children).filter(
          (s) => !s.classList.contains("arolax-cloned-slide")
        );
        // Keep 3 slides total so 2 stacked cards fan cleanly behind the active card (matches reference)
        if (origSlides.length > 0 && origSlides.length < 3) {
          const clone = origSlides[0].cloneNode(true) as HTMLElement;
          clone.classList.add("arolax-cloned-slide");
          swiperWrapper.appendChild(clone);
        }
      }

      const testSwiper = new Swiper(testSliderEl, {
        modules: [Autoplay, EffectCards, Navigation, Pagination],
        effect: "cards",
        grabCursor: true,
        loop: false,
        rewind: true,
        slidesPerView: 1,
        speed: 500,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        cardsEffect: {
          slideShadows: true,
          rotate: true,
          perSlideOffset: 8,
          perSlideRotate: 2,
        },
        navigation: {
          nextEl: ".elementor-element-e060fd7 .wcf-arrow-next",
          prevEl: ".elementor-element-e060fd7 .wcf-arrow-prev",
        },
        pagination: {
          el: ".elementor-element-e060fd7 .swiper-pagination",
          clickable: true,
        },
      });

      cleanups.push(() => {
        testSwiper.destroy(true, true);
        testSliderEl.querySelectorAll(".arolax-cloned-slide").forEach((c) => c.remove());
      });
    }

    // ----------------------------------------------------
    // 8. Empowering Skills Interactive Tabs (exact arolax-tabs.js)
    // ----------------------------------------------------
    document.querySelectorAll<HTMLElement>(".arolax--tabs, .wcf--tabs").forEach((tabWrap) => {
      const allTitles = Array.from(tabWrap.querySelectorAll<HTMLElement>(".tab-title"));
      const allContents = Array.from(tabWrap.querySelectorAll<HTMLElement>(".tab-content"));
      if (!allTitles.length || !allContents.length) return;

      // Default initial state: hide all content, activate first title + matching mobile/desktop title, show first content
      allContents.forEach((c, idx) => {
        c.style.display = idx === 0 ? "block" : "none";
      });
      allTitles.forEach((t) => t.classList.remove("active"));

      const firstControl = allTitles[0].getAttribute("aria-controls");
      if (firstControl) {
        allTitles
          .filter((t) => t.getAttribute("aria-controls") === firstControl)
          .forEach((t) => t.classList.add("active"));
      } else {
        allTitles[0].classList.add("active");
      }

      allTitles.forEach((title) => {
        listen(title, "click", (e) => {
          e.preventDefault();
          if (title.classList.contains("active")) return;

          const activeTabId = title.getAttribute("aria-controls");
          allTitles.forEach((t) => t.classList.remove("active"));
          if (activeTabId) {
            allTitles
              .filter((t) => t.getAttribute("aria-controls") === activeTabId)
              .forEach((t) => t.classList.add("active"));
          } else {
            title.classList.add("active");
          }

          allContents.forEach((c) => {
            if (activeTabId && c.id === activeTabId) {
              c.style.display = "block";
              gsap.fromTo(c, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" });
            } else {
              c.style.display = "none";
            }
          });
        });
      });
    });

    // ----------------------------------------------------
    // 9. FAQ Accordion (exact wcf--global-core.min.js)
    // ----------------------------------------------------
    document.querySelectorAll<HTMLElement>(".elementor-accordion").forEach((wrapper) => {
      const items = Array.from(wrapper.querySelectorAll<HTMLElement>(".elementor-accordion-item"));
      const isDefaultActive = wrapper.getAttribute("data-active") === "yes";

      items.forEach((item) => {
        const title = item.querySelector<HTMLElement>(".elementor-tab-title");
        const content = item.querySelector<HTMLElement>(".elementor-tab-content");
        if (!title || !content) return;

        const openOnInit = isDefaultActive && title.getAttribute("data-active") === "yes";
        if (openOnInit) {
          title.classList.add("elementor-active");
          content.classList.add("elementor-active");
          content.style.display = "block";
        } else {
          title.classList.remove("elementor-active");
          content.classList.remove("elementor-active");
          content.style.display = "none";
        }

        listen(title, "click", () => {
          const isOpen = title.classList.contains("elementor-active");

          // Close sibling items
          items.forEach((other) => {
            if (other === item) return;
            const ot = other.querySelector<HTMLElement>(".elementor-tab-title");
            const oc = other.querySelector<HTMLElement>(".elementor-tab-content");
            if (ot && oc && ot.classList.contains("elementor-active")) {
              ot.classList.remove("elementor-active");
              oc.classList.remove("elementor-active");
              gsap.to(oc, {
                height: 0,
                opacity: 0,
                duration: 0.28,
                ease: "power2.inOut",
                onComplete: () => {
                  oc.style.display = "none";
                  oc.style.height = "";
                  oc.style.opacity = "";
                },
              });
            }
          });

          if (isOpen) {
            title.classList.remove("elementor-active");
            content.classList.remove("elementor-active");
            gsap.to(content, {
              height: 0,
              opacity: 0,
              duration: 0.28,
              ease: "power2.inOut",
              onComplete: () => {
                content.style.display = "none";
                content.style.height = "";
                content.style.opacity = "";
              },
            });
          } else {
            title.classList.add("elementor-active");
            content.classList.add("elementor-active");
            content.style.display = "block";
            content.style.overflow = "hidden";
            const targetHeight = content.scrollHeight;
            gsap.fromTo(
              content,
              { height: 0, opacity: 0 },
              {
                height: targetHeight,
                opacity: 1,
                duration: 0.32,
                ease: "power2.out",
                onComplete: () => {
                  content.style.height = "";
                  content.style.overflow = "";
                },
              }
            );
          }
        });
      });
    });

    // ----------------------------------------------------
    // 10. Video Popup Modal (exact aae-video-popup.min.js)
    // ----------------------------------------------------
    const videoPopupWrap = document.getElementById("wcf-aae-global--popup-js");
    const popupBox = videoPopupWrap?.querySelector<HTMLElement>(".wcf--popup-video");
    const popupContainer = videoPopupWrap?.querySelector<HTMLElement>(
      ".aae-popup-content-container"
    );
    const popupCloseBtn = videoPopupWrap?.querySelector<HTMLElement>(".wcf--popup-close");
    let videoTimeline: gsap.core.Timeline | null = null;

    const closeVideoPopup = () => {
      if (!videoPopupWrap) return;
      if (videoTimeline) {
        videoTimeline.timeScale(1.6).reverse();
        videoTimeline = null;
      } else {
        gsap.set(videoPopupWrap, { opacity: 0, visibility: "hidden" });
      }
      addTimer(() => {
        if (popupContainer) popupContainer.innerHTML = "";
      }, 450);
    };

    document.querySelectorAll<HTMLElement>(".wcf-popup-btn").forEach((btn) => {
      listen(btn, "click", (e) => {
        e.preventDefault();
        if (!videoPopupWrap || !popupBox || !popupContainer) return;

        const src =
          btn.getAttribute("data-src") ||
          "https://sgp1.digitaloceanspaces.com/hafsnitcontent/videos/0509-1747336236402.mp4";
        const overlayColor = btn.getAttribute("data-overlay-color");
        if (overlayColor) videoPopupWrap.style.backgroundColor = overlayColor;

        popupContainer.innerHTML = /\.(mp4|webm|ogg)(\?.*)?$/i.test(src)
          ? `<video src="${src}" controls autoplay playsinline></video>`
          : `<iframe src="${src}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;

        gsap.set(popupBox, { clearProps: "transform,filter" });
        videoTimeline = gsap
          .timeline({ defaults: { ease: "power2.inOut" } })
          .to(videoPopupWrap, {
            scaleY: 0.01,
            x: 1,
            opacity: 1,
            visibility: "visible",
            duration: 0.35,
          })
          .to(videoPopupWrap, { scaleY: 1, duration: 0.45 })
          .fromTo(
            popupBox,
            { scaleX: 1, scaleY: 0, opacity: 0 },
            { scaleX: 1, scaleY: 1, opacity: 1, visibility: "visible", duration: 0.55 },
            "-=0.3"
          );
      });
    });

    listen(popupCloseBtn, "click", closeVideoPopup);
    listen(videoPopupWrap, "click", (e) => {
      if (e.target === videoPopupWrap) closeVideoPopup();
    });

    listen(window, "keydown", (e) => {
      if ((e as KeyboardEvent).key === "Escape") {
        searchWrapper?.classList.remove("search-visible");
        closeMenu();
        if (videoTimeline) closeVideoPopup();
      }
    });

    // ----------------------------------------------------
    // 11. Scroll-To-Top Circular Progress & Smooth Return
    // ----------------------------------------------------
    const scrollToTopBtn = document.querySelector<HTMLElement>(".wcf-scroll-to-top");
    if (scrollToTopBtn) {
      const progressPath = scrollToTopBtn.querySelector<SVGPathElement>(".progress-circle path");
      let pathLength = 0;
      if (progressPath) {
        pathLength = progressPath.getTotalLength();
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = `${pathLength}`;
      }

      const updateScrollProgress = () => {
        const scroll = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (progressPath && maxScroll > 0) {
          const progress = pathLength - (scroll * pathLength) / maxScroll;
          progressPath.style.strokeDashoffset = `${progress}`;
        }
        if (scroll > 100) {
          scrollToTopBtn.classList.add("show-scroll-to-top");
        } else {
          scrollToTopBtn.classList.remove("show-scroll-to-top");
        }
      };

      updateScrollProgress();
      listen(window, "scroll", updateScrollProgress, { passive: true });
      listen(scrollToTopBtn, "click", () => lenis.scrollTo(0));
    }

    // ----------------------------------------------------
    // 12. GSAP Scroll & Text Animations (Wrapped in gsap.context for clean StrictMode revert!)
    // ----------------------------------------------------
    const gsapCtx = gsap.context(() => {
      // (A) Fade animations — exact match to animations.min.js fade_animation()
      document
        .querySelectorAll<HTMLElement>('[data-settings*=\'"wcf-animation":"fade"\']')
        .forEach((el) => {
          const settings = parseSettings(el);
          if (settings["wcf-animation"] !== "fade") return;

          const duration = Number(settings["data-duration"] ?? 1.5);
          const delay = Number(settings.delay ?? 0.15);
          const offset = Number(settings["fade-offset"] ?? 50);
          const fadeFrom = settings["fade-from"] || "bottom";
          const rawEase = String(settings.ease || "power2.out");
          const ease = rawEase === "bounce" ? "bounce.out" : rawEase;

          const fromVars: gsap.TweenVars = {
            opacity: 0,
            duration,
            delay,
            ease,
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          };

          if (fadeFrom === "bottom") fromVars.y = offset;
          else if (fadeFrom === "top") fromVars.y = -offset;
          else if (fadeFrom === "left") fromVars.x = -offset;
          else if (fadeFrom === "right") fromVars.x = offset;

          gsap.from(el, fromVars);
        });

      // (B) Image Reveal animation — exact match to animations.min.js image_animation("reveal")
      document
        .querySelectorAll<HTMLElement>('[data-settings*=\'"wcf-image-animation":"reveal"\']')
        .forEach((el) => {
          const settings = parseSettings(el);
          if (settings["wcf-image-animation"] !== "reveal") return;

          const startFrom = String(settings.aae_a_start_from || "right");
          const ease = String(settings["image-ease"] || "power2.out");
          const wrap =
            el.querySelector<HTMLElement>(".wcf--image") ||
            el.querySelector<HTMLElement>(".elementor-widget-container");
          const img = el.querySelector<HTMLElement>("img");
          if (!wrap || !img) return;

          if (wrap.parentElement) {
            wrap.parentElement.style.overflow = "hidden";
          }
          wrap.style.overflow = "hidden";

          const wrapFrom: gsap.TweenVars = { duration: 1.5, ease };
          const imgFrom: gsap.TweenVars = { scale: 1.3, duration: 1.5, ease };

          switch (startFrom) {
            case "left":
              wrapFrom.xPercent = 100;
              imgFrom.xPercent = -100;
              break;
            case "right":
              wrapFrom.xPercent = -100;
              imgFrom.xPercent = 100;
              break;
            case "top":
              wrapFrom.yPercent = 100;
              imgFrom.yPercent = -100;
              break;
            case "bottom":
              wrapFrom.yPercent = -100;
              imgFrom.yPercent = 100;
              break;
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: wrap,
              start: "top 80%",
              once: true,
            },
          });

          tl.from(wrap, wrapFrom, 0).from(img, imgFrom, 0);
        });

      // (C) ScrollSmoother-equivalent `data-speed` parallax across ALL 9 parallax elements
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        document.querySelectorAll<HTMLElement>("[data-speed]").forEach((el) => {
          const speed = parseFloat(el.getAttribute("data-speed") || "1");
          if (isNaN(speed) || speed === 1) return;

          // Target the inner container so outer fade-in transforms never conflict
          const target = el.querySelector<HTMLElement>(".elementor-widget-container") || el;
          const travel = (1 - speed) * 220;

          gsap.fromTo(
            target,
            { y: -travel * 0.5 },
            {
              y: travel * 0.5,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });

        // (D) Case Study Horizontal Pinned Gallery — exact match to arolax-gallery.js
        const galleryScope = document.querySelector<HTMLElement>(
          ".elementor-widget-arolax--gallery"
        );
        if (galleryScope) {
          const sections = galleryScope.querySelectorAll<HTMLElement>(".g-slider--one .item");
          const sections2 = galleryScope.querySelectorAll<HTMLElement>(".g-slider--two .item");
          const progressCircle = galleryScope.querySelector<HTMLElement>(".progress-circle");

          let scrollTimer: number | null = null;
          const updateProgress = (self: ScrollTrigger) => {
            if (!progressCircle) return;
            progressCircle.style.opacity = "1";
            if (scrollTimer !== null) window.clearTimeout(scrollTimer);
            scrollTimer = window.setTimeout(() => {
              progressCircle.style.opacity = "0";
            }, 300);
            progressCircle.style.setProperty("--value", (self.progress * 100).toFixed(0));
          };

          if (sections.length) {
            gsap.to(sections, {
              xPercent: -150,
              ease: "none",
              scrollTrigger: {
                trigger: galleryScope,
                pin: true,
                pinSpacing: true,
                scrub: 1,
                onUpdate: updateProgress,
              },
            });
          }

          if (sections2.length) {
            gsap.to(sections2, {
              xPercent: 150,
              ease: "none",
              scrollTrigger: {
                trigger: galleryScope,
                pin: false,
                scrub: 1,
              },
            });
          }
        }
      });
    });

    // (E) Text Animations — initialized after fonts are ready (exact match to animations.min.js)
    let textCtx: gsap.Context | null = null;
    const fontsPromise = document.fonts ? document.fonts.ready : Promise.resolve();

    fontsPromise.then(() => {
      if (cancelled) return;

      textCtx = gsap.context(() => {
        document
          .querySelectorAll<HTMLElement>("[data-settings*='wcf_text_animation']")
          .forEach((el) => {
            const settings = parseSettings(el);
            const animType = settings.wcf_text_animation;
            if (!animType || animType === "none") return;

            const target = getWidgetTextTarget(el);
            if (!target || !target.textContent?.trim()) return;

            const originalHTML = target.innerHTML;
            cleanups.push(() => {
              target.innerHTML = originalHTML;
            });

            if (animType === "char" || animType === "word") {
              const duration = Number(settings.text_duration ?? 1);
              const delay = Number(settings.text_delay ?? 0.15);
              const stagger = Number(settings.text_stagger ?? 0.02);
              const tx =
                settings.text_translate_x !== undefined ? Number(settings.text_translate_x) : 0;
              const ty =
                settings.text_translate_y !== undefined ? Number(settings.text_translate_y) : 0;

              const { words, chars } = splitWordsOrChars(target, animType);
              const items = animType === "char" ? chars : words;
              if (!items.length) return;

              const fromVars: gsap.TweenVars = {
                duration,
                autoAlpha: 0,
                delay,
                stagger,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 88%",
                  once: true,
                },
              };
              if (tx) fromVars.x = tx;
              if (ty) fromVars.y = ty;

              gsap.from(items, fromVars);
            } else if (animType === "text_move") {
              const duration = Number(settings.text_duration ?? 1);
              const delay = Number(settings.text_delay ?? 0.15);
              const stagger = Number(settings.text_stagger ?? 0.02);
              const dir = settings.text_rotation_di === "y" ? "y" : "x";
              const rot = Number(settings.text_rotation ?? -80);
              const origin = settings.text_transform_origin || "top center -50";

              const moveTargets: HTMLElement[] =
                target.classList.contains("wcf--text") && target.children.length > 0
                  ? Array.from(target.children).filter(
                      (c): c is HTMLElement => c instanceof HTMLElement
                    )
                  : [target];

              const allLines: HTMLElement[] = [];
              moveTargets.forEach((mt) => {
                gsap.set(mt, { perspective: 400 });
                const { lines } = splitIntoVisualLines(mt, {});
                allLines.push(...lines);
              });

              if (!allLines.length) return;

              const fromVars: gsap.TweenVars = {
                duration,
                delay,
                opacity: 0,
                force3D: true,
                transformOrigin: origin,
                stagger,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 88%",
                  once: true,
                },
              };
              if (dir === "x") fromVars.rotationX = rot;
              else fromVars.rotationY = rot;

              gsap.from(allLines, fromVars);
            } else if (animType === "text_reveal") {
              const duration = Number(settings.text_duration ?? 1);
              const delay = Number(settings.text_delay ?? 0.15);
              const stagger = Number(settings.text_stagger ?? 0.02);

              const { chars } = splitIntoVisualLines(target, {
                lineClass: "anim-reveal-line",
                splitChars: true,
              });
              if (!chars.length) return;

              gsap.from(chars, {
                duration,
                delay,
                ease: "circ.out",
                y: 80,
                stagger,
                opacity: 0,
                scrollTrigger: {
                  trigger: el,
                  start: "top 88%",
                  once: true,
                },
              });
            }
          });
      });

      ScrollTrigger.refresh();
    });

    // Refresh ScrollTrigger whenever images finish loading
    let refreshTimer: number | null = null;
    const scheduleRefresh = () => {
      if (refreshTimer !== null) window.clearTimeout(refreshTimer);
      refreshTimer = addTimer(() => ScrollTrigger.refresh(), 120);
    };

    document.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
      if (!img.complete) {
        listen(img, "load", scheduleRefresh, { once: true });
      }
    });

    // ----------------------------------------------------
    // Cleanup on unmount (StrictMode safe!)
    // ----------------------------------------------------
    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
      textCtx?.revert();
      gsapCtx.revert();
      // Run DOM/listener/Swiper cleanups in reverse order
      for (let i = cleanups.length - 1; i >= 0; i--) {
        try {
          cleanups[i]();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return null;
}
