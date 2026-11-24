"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function ArolaxEngine() {
  useEffect(() => {
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

    lenis.on("scroll", ScrollTrigger.update);
    const tickerCb = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    // ----------------------------------------------------
    // 2. Responsive Navigation & Mobile Menu Toggle
    // ----------------------------------------------------
    const navMenu = document.querySelector(".wcf__nav-menu");
    const hamburger = document.querySelector(".wcf-menu-hamburger");
    const closeBtn = document.querySelector(".wcf-menu-close");
    const overlay = document.querySelector(".wcf-menu-overlay");

    const updateNavMode = () => {
      if (!navMenu) return;
      if (window.innerWidth >= 1024) {
        navMenu.classList.add("desktop-menu-active");
        navMenu.classList.remove("mobile-menu-active", "wcf-nav-is-toggled");
      } else {
        navMenu.classList.add("mobile-menu-active");
        navMenu.classList.remove("desktop-menu-active");
      }
    };
    updateNavMode();
    window.addEventListener("resize", updateNavMode);

    const openMenu = () => navMenu?.classList.add("wcf-nav-is-toggled");
    const closeMenu = () => navMenu?.classList.remove("wcf-nav-is-toggled");

    hamburger?.addEventListener("click", openMenu);
    closeBtn?.addEventListener("click", closeMenu);
    overlay?.addEventListener("click", closeMenu);

    // Mobile submenu toggle
    const menuItemsWithChildren = document.querySelectorAll(".menu-item-has-children > a");
    menuItemsWithChildren.forEach((link) => {
      link.addEventListener("click", (e) => {
        if (window.innerWidth < 1024) {
          e.preventDefault();
          const parent = link.parentElement;
          parent?.classList.toggle("active");
        }
      });
    });

    // ----------------------------------------------------
    // 3. Fullscreen Search Popup Overlay
    // ----------------------------------------------------
    const searchWrapper = document.querySelector(".search--wrapper");
    const searchToggle = document.querySelector(".wcf-search-toggle");
    const searchClose = document.querySelector(".search--wrapper .toggle--close");

    const toggleSearch = (e: Event) => {
      e.preventDefault();
      searchWrapper?.classList.toggle("search-visible");
      const input = searchWrapper?.querySelector('input[type="search"]') as HTMLInputElement;
      if (searchWrapper?.classList.contains("search-visible") && input) {
        setTimeout(() => input.focus(), 300);
      }
    };

    const closeSearch = (e: Event) => {
      e.preventDefault();
      searchWrapper?.classList.remove("search-visible");
    };

    searchToggle?.addEventListener("click", toggleSearch);
    searchClose?.addEventListener("click", closeSearch);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        searchWrapper?.classList.remove("search-visible");
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // ----------------------------------------------------
    // 4. Magnetic Buttons (Explore Us, Circular CTAs)
    // ----------------------------------------------------
    const magneticBtns = document.querySelectorAll<HTMLElement>(".btn-wrapper, .wcf-btn-circle");
    magneticBtns.forEach((btnWrapper) => {
      const btnItem = btnWrapper.querySelector<HTMLElement>(".btn-item") || btnWrapper;

      const onMouseMove = (e: MouseEvent) => {
        const rect = btnWrapper.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        const moveX = ((relX - rect.width / 2) / rect.width) * 50;
        const moveY = ((relY - rect.height / 2) / rect.height) * 50;

        gsap.to(btnItem, {
          x: moveX,
          y: moveY,
          duration: 0.35,
          ease: "power2.out",
        });
      };

      const onMouseLeave = () => {
        gsap.to(btnItem, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.4)",
        });
      };

      btnWrapper.addEventListener("mousemove", onMouseMove);
      btnWrapper.addEventListener("mouseleave", onMouseLeave);
    });

    // ----------------------------------------------------
    // 5. Parallax Speed Physics for Elements with [data-speed]
    // ----------------------------------------------------
    document.querySelectorAll<HTMLElement>("[data-speed]").forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-speed") || "1");
      if (speed !== 1 && !isNaN(speed)) {
        const yOffset = (1 - speed) * 160;
        gsap.to(el, {
          y: yOffset,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    // ----------------------------------------------------
    // 6. Elementor "fade" & "slide" Container Animations
    // ----------------------------------------------------
    document.querySelectorAll<HTMLElement>('[data-settings*=\'"wcf-animation":"fade"\'').forEach((el) => {
      if ((el as HTMLElement).dataset.fadeInit) return;
      (el as HTMLElement).dataset.fadeInit = "1";

      let settings: any = {};
      try {
        settings = JSON.parse(el.getAttribute("data-settings") || "{}");
      } catch (e) {}

      const duration = settings["data-duration"] || 1;
      const delay = settings.delay || 0;
      const offset = settings["fade-offset"] || 40;
      const fadeFrom = settings["fade-from"] || "bottom";
      const ease = settings.ease === "bounce" ? "bounce.out" : settings.ease || "power2.out";

      let initX = 0;
      let initY = 0;
      if (fadeFrom === "bottom") initY = offset;
      else if (fadeFrom === "top") initY = -offset;
      else if (fadeFrom === "left") initX = -offset;
      else if (fadeFrom === "right") initX = offset;

      gsap.fromTo(
        el,
        { opacity: 0, x: initX, y: initY },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: duration,
          delay: delay,
          ease: ease,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    // ----------------------------------------------------
    // 7. Text Split Animations (Char, Word, 3D Move, Reveal)
    // ----------------------------------------------------
    const initTextAnimations = () => {
      // Character Stagger Animation
      document.querySelectorAll<HTMLElement>('[data-settings*=\'"wcf_text_animation":"char"\'').forEach((el) => {
        const titleEl = el.querySelector<HTMLElement>(".wcf--title, h1, h2, h3, h4") || el;
        const text = titleEl.textContent?.trim();
        if (!text || titleEl.dataset.splitDone) return;
        titleEl.dataset.splitDone = "1";

        let settings: any = {};
        try {
          settings = JSON.parse(el.getAttribute("data-settings") || "{}");
        } catch (e) {}

        const duration = settings.text_duration || 1.1;
        const stagger = settings.text_stagger || 0.035;
        const translateX = settings.text_translate_x || 40;

        titleEl.innerHTML = "";
        const words = text.split(" ");
        const charSpans: HTMLElement[] = [];

        words.forEach((word: string, wIdx: number) => {
          const wordWrap = document.createElement("span");
          wordWrap.style.display = "inline-block";
          wordWrap.style.position = "relative";
          wordWrap.style.whiteSpace = "nowrap";

          Array.from(word).forEach((char: string) => {
            const charSpan = document.createElement("span");
            charSpan.textContent = char;
            charSpan.style.display = "inline-block";
            charSpan.style.position = "relative";
            charSpan.style.opacity = "0";
            wordWrap.appendChild(charSpan);
            charSpans.push(charSpan);
          });

          titleEl.appendChild(wordWrap);
          if (wIdx < words.length - 1) {
            titleEl.appendChild(document.createTextNode(" "));
          }
        });

        gsap.fromTo(
          charSpans,
          { opacity: 0, x: translateX },
          {
            opacity: 1,
            x: 0,
            duration: duration,
            stagger: stagger,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // Word Stagger Animation
      document.querySelectorAll<HTMLElement>('[data-settings*=\'"wcf_text_animation":"word"\'').forEach((el) => {
        const titleEl = el.querySelector<HTMLElement>(".wcf--title, .elementor-widget-container > *") || el;
        const text = titleEl.textContent?.trim();
        if (!text || titleEl.dataset.splitDone) return;
        titleEl.dataset.splitDone = "1";

        let settings: any = {};
        try {
          settings = JSON.parse(el.getAttribute("data-settings") || "{}");
        } catch (e) {}

        const duration = settings.text_duration || 1.2;
        const stagger = settings.text_stagger || 0.03;

        titleEl.innerHTML = "";
        const words = text.split(" ");
        const wordSpans: HTMLElement[] = [];

        words.forEach((word: string) => {
          const wrap = document.createElement("span");
          wrap.style.display = "inline-block";
          wrap.style.overflow = "hidden";
          wrap.style.verticalAlign = "top";
          wrap.style.marginRight = "0.28em";

          const wordSpan = document.createElement("span");
          wordSpan.textContent = word;
          wordSpan.style.display = "inline-block";
          wordSpan.style.opacity = "0";

          wrap.appendChild(wordSpan);
          titleEl.appendChild(wrap);
          wordSpans.push(wordSpan);
        });

        gsap.fromTo(
          wordSpans,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: duration,
            stagger: stagger,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // 3D Perspective Rotation Animation
      document.querySelectorAll<HTMLElement>('[data-settings*=\'"wcf_text_animation":"text_move"\'').forEach((el) => {
        const titleEl = el.querySelector<HTMLElement>(".wcf--title, h1, h2, h3, h4, .elementor-heading-title") || el;
        const text = titleEl.textContent?.trim();
        if (!text || titleEl.dataset.splitDone) return;
        titleEl.dataset.splitDone = "1";

        let settings: any = {};
        try {
          settings = JSON.parse(el.getAttribute("data-settings") || "{}");
        } catch (e) {}

        const duration = settings.text_duration || 1;
        const stagger = settings.text_stagger || 0.02;
        const rotationY = settings.text_rotation || -40;

        titleEl.innerHTML = "";
        const words = text.split(" ");
        const wordSpans: HTMLElement[] = [];

        words.forEach((word: string) => {
          const wrap = document.createElement("span");
          wrap.style.display = "inline-block";
          wrap.style.perspective = "600px";
          wrap.style.marginRight = "0.22em";

          const wordSpan = document.createElement("span");
          wordSpan.textContent = word;
          wordSpan.style.display = "inline-block";
          wordSpan.style.opacity = "0";
          wordSpan.style.transformOrigin = "top center -40";

          wrap.appendChild(wordSpan);
          titleEl.appendChild(wrap);
          wordSpans.push(wordSpan);
        });

        gsap.fromTo(
          wordSpans,
          { opacity: 0, rotationY: rotationY, y: 15 },
          {
            opacity: 1,
            rotationY: 0,
            y: 0,
            duration: duration,
            stagger: stagger,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    };
    initTextAnimations();

    // ----------------------------------------------------
    // 8. Rotating Badges & Wiggle Stickers Physics
    // ----------------------------------------------------
    document.querySelectorAll<HTMLElement>('img[src*="text-img.webp"]').forEach((img) => {
      gsap.to(img, {
        rotation: 360,
        duration: 16,
        repeat: -1,
        ease: "none",
      });
    });

    document.querySelectorAll<HTMLElement>(".floating-element, .wcf-live-anim-wiggle").forEach((el) => {
      if (el.classList.contains("wcf-live-anim-wiggle")) {
        gsap.to(el, {
          rotation: 8,
          duration: 1.8,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      } else {
        gsap.to(el, {
          y: -12,
          duration: 2.8,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }
    });

    // ----------------------------------------------------
    // 9. Continuous Brand Marquee Slider
    // ----------------------------------------------------
    const brandSliderEl = document.querySelector<HTMLElement>(".elementor-widget-wcf--brand-slider .swiper");
    if (brandSliderEl) {
      const swiperWrapper = brandSliderEl.querySelector(".swiper-wrapper");
      if (swiperWrapper) {
        const slides = Array.from(swiperWrapper.children);
        if (slides.length > 0 && slides.length < 18) {
          // Duplicate slides to allow smooth continuous infinite loop
          slides.forEach((s) => swiperWrapper.appendChild(s.cloneNode(true)));
          slides.forEach((s) => swiperWrapper.appendChild(s.cloneNode(true)));
        }
      }

      new Swiper(brandSliderEl, {
        modules: [Autoplay],
        loop: true,
        slidesPerView: 2,
        spaceBetween: 25,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        },
        breakpoints: {
          640: { slidesPerView: 3, spaceBetween: 35 },
          880: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
          1366: { slidesPerView: 5, spaceBetween: 60 },
        },
      });
    }

    // ----------------------------------------------------
    // 10. Case Study Horizontal Pinned Gallery (GSAP MatchMedia)
    // ----------------------------------------------------
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const galleryScope = document.querySelector<HTMLElement>(".elementor-widget-arolax--gallery");
      if (!galleryScope) return;

      const sections = galleryScope.querySelectorAll<HTMLElement>(".g-slider--one .item");
      const sections2 = galleryScope.querySelectorAll<HTMLElement>(".g-slider--two .item");
      const progressCircle = galleryScope.querySelector<HTMLElement>(".progress-circle");

      let scrollTimer: any = null;
      const updateProgress = (self: any) => {
        if (progressCircle) {
          progressCircle.style.opacity = "1";
          if (scrollTimer) clearTimeout(scrollTimer);
          scrollTimer = setTimeout(() => {
            progressCircle.style.opacity = "0";
          }, 350);

          const scrolled = (self.progress * 100).toFixed(0);
          progressCircle.style.setProperty("--value", scrolled);
        }
      };

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

      gsap.to(sections2, {
        xPercent: 150,
        ease: "none",
        scrollTrigger: {
          trigger: galleryScope,
          pin: false,
          scrub: 1,
        },
      });
    });

    // ----------------------------------------------------
    // 11. Testimonials: 3D Stack Cards Swiper
    // ----------------------------------------------------
    const testSliderEl = document.querySelector<HTMLElement>(".arolax_testimonial_slider.swiper");
    if (testSliderEl) {
      new Swiper(testSliderEl, {
        modules: [EffectCards, Navigation, Pagination],
        effect: "cards",
        grabCursor: true,
        loop: true,
        cardsEffect: {
          slideShadows: false,
          perSlideOffset: 14,
          perSlideRotate: 4,
        },
        navigation: {
          nextEl: ".wcf-arrow-next",
          prevEl: ".wcf-arrow-prev",
        },
      });
    }

    // ----------------------------------------------------
    // 12. Interactive Tabs
    // ----------------------------------------------------
    const tabs = document.querySelectorAll<HTMLElement>(".wcf--tabs, .arolax--tabs");
    tabs.forEach((tabWrap) => {
      const titles = tabWrap.querySelectorAll<HTMLElement>(".tab-title");
      const contents = tabWrap.querySelectorAll<HTMLElement>(".tab-content-item, [class*='tab-content']");

      titles.forEach((title, idx) => {
        title.addEventListener("click", (e) => {
          e.preventDefault();
          titles.forEach((t) => {
            t.classList.remove("active");
            t.setAttribute("aria-selected", "false");
          });
          title.classList.add("active");
          title.setAttribute("aria-selected", "true");

          contents.forEach((c, cIdx) => {
            if (cIdx === idx) {
              c.style.display = "block";
              gsap.fromTo(c, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.35 });
            } else {
              c.style.display = "none";
            }
          });
        });
      });
    });

    // ----------------------------------------------------
    // 13. FAQ Accordion
    // ----------------------------------------------------
    const accordions = document.querySelectorAll<HTMLElement>(".elementor-accordion, .wcf-accordion");
    accordions.forEach((acc) => {
      const titles = acc.querySelectorAll<HTMLElement>(".elementor-tab-title, .wcf-accordion-title");
      titles.forEach((title) => {
        title.addEventListener("click", () => {
          const content = title.nextElementSibling as HTMLElement;
          const isActive = title.classList.contains("elementor-active");

          if (isActive) {
            title.classList.remove("elementor-active");
            if (content) content.style.display = "none";
          } else {
            titles.forEach((t) => {
              t.classList.remove("elementor-active");
              const c = t.nextElementSibling as HTMLElement;
              if (c) c.style.display = "none";
            });

            title.classList.add("elementor-active");
            if (content) {
              content.style.display = "block";
              gsap.fromTo(content, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.35 });
            }
          }
        });
      });
    });

    // ----------------------------------------------------
    // 14. Video Popup Modal
    // ----------------------------------------------------
    const videoPopupWrap = document.getElementById("wcf-aae-global--popup-js");
    const videoTriggers = document.querySelectorAll<HTMLElement>('.wcf--video-popup, [data-widget_type*="video-popup"], a[href*="youtube.com"]');

    videoTriggers.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (videoPopupWrap) {
          videoPopupWrap.style.display = "flex";
          videoPopupWrap.classList.add("wcf--popup-active");
          const iframe = videoPopupWrap.querySelector("iframe");
          if (iframe) {
            iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
          }
        }
      });
    });

    const popupCloseBtn = videoPopupWrap?.querySelector(".wcf--popup-close, .close");
    popupCloseBtn?.addEventListener("click", () => {
      if (videoPopupWrap) {
        videoPopupWrap.style.display = "none";
        videoPopupWrap.classList.remove("wcf--popup-active");
        const iframe = videoPopupWrap.querySelector("iframe");
        if (iframe) iframe.src = "";
      }
    });

    // ----------------------------------------------------
    // 15. Scroll-To-Top Circular Progress & Smooth Return
    // ----------------------------------------------------
    const scrollToTopBtn = document.querySelector<HTMLElement>(".wcf-scroll-to-top");
    if (scrollToTopBtn) {
      const progressPath = scrollToTopBtn.querySelector(".progress-circle path") as SVGPathElement;
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
        if (scroll > 150) {
          scrollToTopBtn.classList.add("show-scroll-to-top");
        } else {
          scrollToTopBtn.classList.remove("show-scroll-to-top");
        }
      };

      window.addEventListener("scroll", updateScrollProgress, { passive: true });
      scrollToTopBtn.addEventListener("click", () => {
        lenis.scrollTo(0);
      });
    }

    // ----------------------------------------------------
    // Cleanup on unmount
    // ----------------------------------------------------
    return () => {
      window.removeEventListener("resize", updateNavMode);
      window.removeEventListener("keydown", handleKeyDown);
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
      mm.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null;
}
