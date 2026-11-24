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
    // Force manual scroll restoration to guarantee hero entry & preloader play from top on reload
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
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

    // ====================================================
    // 5. PRELOADER & HERO ENTRY ANIMATION SEQUENCE
    // ====================================================
    const preloaderEl = document.querySelector<HTMLElement>("#arolax-preloader");
    const countEl = document.querySelector<HTMLElement>(".arolax-preloader-count");
    const barEl = document.querySelector<HTMLElement>(".arolax-preloader-bar");

    // Freeze page while preloader runs
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const heroTl = gsap.timeline({
      defaults: { ease: "power2.out" },
      paused: true,
    });

    const startHeroSequence = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";

      if (preloaderEl) {
        gsap.to(preloaderEl, {
          yPercent: -100,
          duration: 0.85,
          ease: "power4.inOut",
          onComplete: () => {
            preloaderEl.style.display = "none";
            ScrollTrigger.refresh();
          },
        });
      }

      setTimeout(() => {
        heroTl.play();
      }, 150);
    };

    const counterObj = { val: 0 };
    const loaderTl = gsap.timeline({
      onUpdate: () => {
        const rounded = Math.round(counterObj.val);
        if (countEl) countEl.textContent = rounded.toString();
        if (barEl) barEl.style.width = `${Math.min(100, rounded)}%`;
      },
    });

    loaderTl.to(counterObj, {
      val: 80,
      duration: 0.5,
      ease: "power1.out",
    });

    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    const windowReady = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve(true);
      } else {
        window.addEventListener("load", () => resolve(true), { once: true });
      }
    });

    Promise.all([fontsReady, windowReady]).then(() => {
      loaderTl.to(counterObj, {
        val: 100,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          setTimeout(startHeroSequence, 100);
        },
      });
    });

    // (A) "WE ARE SKILLED IN" - Staggered Character Slide
    const heroTitle = document.querySelector<HTMLElement>(".elementor-element-ac8608d .wcf--title");
    if (heroTitle && !heroTitle.dataset.splitDone) {
      heroTitle.dataset.splitDone = "1";
      const text = heroTitle.textContent?.trim() || "";
      heroTitle.innerHTML = "";
      const words = text.split(" ");
      const charSpans: HTMLElement[] = [];

      words.forEach((word: string, wIdx: number) => {
        const wordWrap = document.createElement("span");
        wordWrap.style.display = "inline-block";
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

        heroTitle.appendChild(wordWrap);
        if (wIdx < words.length - 1) {
          heroTitle.appendChild(document.createTextNode(" "));
        }
      });

      heroTl.fromTo(
        charSpans,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1.1, stagger: 0.035 },
        0
      );
    }

    // (B) Right-side Composite Artwork: Red Semicircle & Two Men
    const heroRightImages = document.querySelectorAll<HTMLElement>(
      ".elementor-element-81b8cf6, .elementor-element-cb48386"
    );
    if (heroRightImages.length) {
      heroTl.fromTo(
        heroRightImages,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "transform",
        },
        0.25
      );
    }

    // (C) "WEB DESIGN" with Top/Bottom Accent Lines
    const webDesignEl = document.querySelector<HTMLElement>(".elementor-element-f6b85e2 .elementor-heading-title");
    const webDesignLines = document.querySelectorAll<HTMLElement>(
      ".elementor-element-24178fa, .elementor-element-cd9cff7"
    );
    if (webDesignEl && !webDesignEl.dataset.splitDone) {
      webDesignEl.dataset.splitDone = "1";
      const text = webDesignEl.textContent?.trim() || "";
      webDesignEl.innerHTML = "";
      const words = text.split(/\s+/);
      const spans: HTMLElement[] = [];

      words.forEach((word) => {
        const wrap = document.createElement("span");
        wrap.style.display = "inline-block";
        wrap.style.perspective = "600px";
        wrap.style.marginRight = "0.2em";

        const span = document.createElement("span");
        span.textContent = word;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transformOrigin = "top center -40";
        wrap.appendChild(span);
        webDesignEl.appendChild(wrap);
        spans.push(span);
      });

      heroTl.fromTo(
        spans,
        { opacity: 0, rotationY: -40, y: 15 },
        { opacity: 1, rotationY: 0, y: 0, duration: 0.9, stagger: 0.04 },
        0.35
      );
      heroTl.fromTo(
        webDesignLines,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8, transformOrigin: "left center" },
        0.35
      );
    }

    // (D) "AND"
    const andEl = document.querySelector<HTMLElement>(".elementor-element-70f26dc .wcf--title");
    if (andEl && !andEl.dataset.splitDone) {
      andEl.dataset.splitDone = "1";
      const text = andEl.textContent?.trim() || "";
      andEl.innerHTML = "";
      const wrap = document.createElement("span");
      wrap.style.display = "inline-block";
      wrap.style.perspective = "600px";

      const span = document.createElement("span");
      span.textContent = text;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transformOrigin = "top center -40";
      wrap.appendChild(span);
      andEl.appendChild(wrap);

      heroTl.fromTo(
        span,
        { opacity: 0, rotationY: -40, y: 15 },
        { opacity: 1, rotationY: 0, y: 0, duration: 0.9 },
        0.48
      );
    }

    // (E) "development" Neon Green Capsule & 3D Emoji Avatar
    const devCapsule = document.querySelector<HTMLElement>(".elementor-element-624b12c");
    if (devCapsule) {
      heroTl.fromTo(
        devCapsule,
        { opacity: 0, y: 45 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
        0.55
      );
    }

    // (F) Floating Down Arrow Icon ( ↓ )
    const downArrow = document.querySelector<HTMLElement>(".elementor-element-1df6f7d");
    if (downArrow) {
      heroTl.fromTo(
        downArrow,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.65
      );
      gsap.to(downArrow, {
        y: 6,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // (G) 3D Emoji Head Avatar Floating
    const emojiHead = document.querySelector<HTMLElement>(".elementor-element-34c3477");
    if (emojiHead) {
      gsap.to(emojiHead, {
        y: -7,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // (H) Paragraph Text Word-by-Word Reveal
    const descEl = document.querySelector<HTMLElement>(
      ".elementor-element-9a42484 .elementor-widget-container > *"
    );
    if (descEl && !descEl.dataset.splitDone) {
      descEl.dataset.splitDone = "1";
      const rawText = (descEl.innerHTML || "")
        .replace(/<br\s*\/?>/gi, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      descEl.innerHTML = "";
      const words = rawText.split(" ");
      const wordSpans: HTMLElement[] = [];

      words.forEach((word) => {
        const wrap = document.createElement("span");
        wrap.style.display = "inline-block";
        wrap.style.verticalAlign = "top";
        wrap.style.marginRight = "0.28em";

        const span = document.createElement("span");
        span.textContent = word;
        span.style.display = "inline-block";
        span.style.opacity = "0";

        wrap.appendChild(span);
        descEl.appendChild(wrap);
        wordSpans.push(span);
      });

      heroTl.fromTo(
        wordSpans,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.02 },
        0.75
      );
    }

    // (I) "GET STARTED NOW ->"
    const getStartedBtn = document.querySelector<HTMLElement>(".elementor-element-819ca57");
    if (getStartedBtn) {
      heroTl.fromTo(
        getStartedBtn,
        { opacity: 0, x: -45 },
        { opacity: 1, x: 0, duration: 1.1, ease: "power2.out" },
        0.9
      );
    }

    // (J) Watch Video Button & Crown Doodle
    const watchVideoBtn = document.querySelector<HTMLElement>(
      ".elementor-element-2e8d545, .elementor-element-22e300c"
    );
    const crownDoodle = document.querySelector<HTMLElement>(
      ".elementor-element-baa7444, .elementor-repeater-item-01dbe21"
    );
    if (watchVideoBtn) {
      heroTl.fromTo(
        watchVideoBtn,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.9, ease: "back.out(1.5)" },
        0.6
      );
    }
    if (crownDoodle) {
      heroTl.fromTo(
        crownDoodle,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1 },
        0.5
      );
      gsap.to(crownDoodle, {
        y: -6,
        rotation: 3,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // (K) "We have 18k+ customers word-wide" Badge
    const customersBadge = document.querySelector<HTMLElement>(".elementor-element-dfe69e2");
    if (customersBadge) {
      heroTl.fromTo(
        customersBadge,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        0.8
      );
    }

    // ====================================================
    // 6. CONTINUOUS BRAND MARQUEE SLIDER
    // ====================================================
    const marqueeSection = document.querySelector<HTMLElement>(".elementor-element-078aa45");
    const brandSliderWidget = document.querySelector<HTMLElement>(".elementor-element-f5003e6");

    if (marqueeSection && brandSliderWidget) {
      // Entry fade-up on scroll
      gsap.fromTo(
        brandSliderWidget,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: marqueeSection,
            start: "top 88%",
            once: true,
          },
        }
      );
    }

    const brandSliderEl = document.querySelector<HTMLElement>(
      ".elementor-widget-wcf--brand-slider .swiper"
    );
    if (brandSliderEl) {
      const swiperWrapper = brandSliderEl.querySelector(".swiper-wrapper");
      if (swiperWrapper) {
        const slides = Array.from(swiperWrapper.children);
        // Duplicate slides multiple times to guarantee completely seamless infinite loop
        if (slides.length > 0 && slides.length < 24) {
          slides.forEach((s) => swiperWrapper.appendChild(s.cloneNode(true)));
          slides.forEach((s) => swiperWrapper.appendChild(s.cloneNode(true)));
          slides.forEach((s) => swiperWrapper.appendChild(s.cloneNode(true)));
        }
      }

      new Swiper(brandSliderEl, {
        modules: [Autoplay],
        loop: true,
        slidesPerView: 2,
        spaceBetween: 25,
        speed: 5000,
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

    // ====================================================
    // 8. DOWNSTREAM SECTION SCROLL ANIMATIONS
    // ====================================================
    // Fade animations for non-hero containers
    document
      .querySelectorAll<HTMLElement>('[data-settings*=\'"wcf-animation":"fade"\']')
      .forEach((el) => {
        // Skip hero items already animated by heroTl
        if (el.closest(".elementor-element-d3528ce") || el.closest(".elementor-element-078aa45")) {
          return;
        }
        if (el.dataset.fadeInit) return;
        el.dataset.fadeInit = "1";

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

    // Character stagger animations for non-hero elements
    document
      .querySelectorAll<HTMLElement>('[data-settings*=\'"wcf_text_animation":"char"\']')
      .forEach((el) => {
        if (el.closest(".elementor-element-d3528ce")) return;
        const titleEl = el.querySelector<HTMLElement>(".wcf--title, h1, h2, h3, h4") || el;
        const text = titleEl.textContent?.trim();
        if (!text || titleEl.dataset.splitDone) return;
        titleEl.dataset.splitDone = "1";

        titleEl.innerHTML = "";
        const words = text.split(" ");
        const charSpans: HTMLElement[] = [];

        words.forEach((word: string, wIdx: number) => {
          const wordWrap = document.createElement("span");
          wordWrap.style.display = "inline-block";
          wordWrap.style.whiteSpace = "nowrap";

          Array.from(word).forEach((char: string) => {
            const charSpan = document.createElement("span");
            charSpan.textContent = char;
            charSpan.style.display = "inline-block";
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
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 1.1,
            stagger: 0.035,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

    // Word stagger animations for non-hero elements
    document
      .querySelectorAll<HTMLElement>('[data-settings*=\'"wcf_text_animation":"word"\']')
      .forEach((el) => {
        if (el.closest(".elementor-element-d3528ce")) return;
        const titleEl = el.querySelector<HTMLElement>(".wcf--title, .elementor-widget-container > *") || el;
        const text = titleEl.textContent?.trim();
        if (!text || titleEl.dataset.splitDone) return;
        titleEl.dataset.splitDone = "1";

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
            duration: 1.2,
            stagger: 0.03,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

    // 3D Perspective rotation for non-hero elements
    document
      .querySelectorAll<HTMLElement>('[data-settings*=\'"wcf_text_animation":"text_move"\']')
      .forEach((el) => {
        if (el.closest(".elementor-element-d3528ce")) return;
        const titleEl = el.querySelector<HTMLElement>(".wcf--title, h1, h2, h3, h4, .elementor-heading-title") || el;
        const text = titleEl.textContent?.trim();
        if (!text || titleEl.dataset.splitDone) return;
        titleEl.dataset.splitDone = "1";

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
          { opacity: 0, rotationY: -40, y: 15 },
          {
            opacity: 1,
            rotationY: 0,
            y: 0,
            duration: 1,
            stagger: 0.02,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

    // ----------------------------------------------------
    // 9. Rotating Badges & Wiggle Stickers Physics
    // ----------------------------------------------------
    document.querySelectorAll<HTMLElement>('img[src*="text-img.webp"]').forEach((img) => {
      gsap.to(img, {
        rotation: 360,
        duration: 16,
        repeat: -1,
        ease: "none",
      });
    });

    document.querySelectorAll<HTMLElement>(".wcf-live-anim-wiggle").forEach((el) => {
      gsap.to(el, {
        rotation: 8,
        duration: 1.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });

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
    const videoTriggers = document.querySelectorAll<HTMLElement>(
      '.wcf--video-popup, [data-widget_type*="video-popup"], a[href*="youtube.com"]'
    );

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

    // Refresh ScrollTrigger after fonts load
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });

    // ----------------------------------------------------
    // Cleanup on unmount
    // ----------------------------------------------------
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
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
