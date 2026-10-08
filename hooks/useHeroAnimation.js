import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * ANIMATION CONFIGURATION CONSTANTS
 * Centralized easing curves, durations, and spatial offsets for motion design tuning.
 */
export const ANIMATION_CONFIG = {
  // Initial load timeline parameters
  INTRO: {
    LETTER_DURATION: 0.85,
    LETTER_STAGGER: 0.035,
    LETTER_Y_OFFSET: 42,
    CAR_ENTER_DURATION: 1.25,
    CAR_ENTER_X_OFFSET: -90,
    CAR_ENTER_SCALE: 0.94,
    STAT_CARD_DURATION: 0.8,
    STAT_CARD_STAGGER: 0.15,
    STAT_CARD_Y_OFFSET: 35,
    COUNTER_DURATION: 1.8,
  },
  // ScrollTrigger scrub configuration
  SCROLL: {
    SCRUB_SMOOTHING: 1.2, // Smoothed interpolation lag in seconds
    PIN_SPACER_DISTANCE: "+=180%", // Vertical pin duration
    HEADLINE_PARALLAX_Y: -65,
    HEADLINE_PARALLAX_OPACITY: 0.25,
    BG_PARALLAX_X: -160,
    BG_PARALLAX_Y: -35,
  },
  // Motion easing presets
  EASES: {
    TITLE_IN: "power3.out",
    CAR_IN: "power2.out",
    STATS_IN: "power3.out",
    COUNTER: "power2.out",
    ROAD_SCRUB: "none", // 1:1 linear mapping to scroll progress
  },
};

/**
 * useHeroAnimation
 * Orchestrates initial load timeline and scroll-driven pinned Scrub.
 * Utilizes gsap.context() for bulletproof React strict-mode lifecycle management
 * and gsap.matchMedia() for responsive desktop, tablet, and mobile coordinate tracking.
 *
 * @param {Object} refs - DOM references to animated elements
 */
export function useHeroAnimation({
  containerRef,
  headlineRef,
  carRef,
  carWrapperRef,
  trailRef,
  statsRef,
  bgLayerRef,
  roadRef,
}) {
  useEffect(() => {
    if (!containerRef.current) return;

    // Detect user preference for reduced motion (WCAG compliance)
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // gsap.context records all animations for clean revert on unmount/hot-reload
    const ctx = gsap.context(() => {
      // -------------------------------------------------------------
      // 1. ACCESSIBILITY: REDUCED MOTION SAFE MODE
      // -------------------------------------------------------------
      if (prefersReducedMotion) {
        gsap.set(
          [
            headlineRef.current?.querySelectorAll(".hero-letter"),
            carWrapperRef.current,
            carRef.current,
            trailRef.current,
            statsRef.current?.querySelectorAll(".stat-card"),
          ],
          { opacity: 1, x: 0, y: 0, filter: "none", clearProps: "transform" }
        );

        // Immediate number target display
        const counters = statsRef.current?.querySelectorAll(".stat-counter") || [];
        counters.forEach((el) => {
          el.textContent = el.getAttribute("data-target") || "0";
        });
        return;
      }

      // -------------------------------------------------------------
      // 2. INITIAL LOAD TIMELINE (~2.2s total duration)
      // Staggered letters -> car entrance -> cards reveal -> number count-up
      // -------------------------------------------------------------
      const introTl = gsap.timeline({
        id: "hero-intro-timeline",
        defaults: { ease: ANIMATION_CONFIG.EASES.TITLE_IN },
      });

      // A. Headline letter stagger (opacity 0 -> 1, y: 42 -> 0, blur -> sharp)
      const letters = headlineRef.current?.querySelectorAll(".hero-letter") || [];
      if (letters.length > 0) {
        introTl.fromTo(
          letters,
          {
            opacity: 0,
            y: ANIMATION_CONFIG.INTRO.LETTER_Y_OFFSET,
            filter: "blur(10px)",
            force3D: true,
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: ANIMATION_CONFIG.INTRO.LETTER_DURATION,
            stagger: ANIMATION_CONFIG.INTRO.LETTER_STAGGER,
            ease: ANIMATION_CONFIG.EASES.TITLE_IN,
          }
        );
      }

      // B. Car entrance slide/fade-in (isolated on carWrapper to avoid scroll property conflict)
      const carTarget = carWrapperRef.current || carRef.current;
      if (carTarget) {
        introTl.fromTo(
          carTarget,
          {
            opacity: 0,
            x: ANIMATION_CONFIG.INTRO.CAR_ENTER_X_OFFSET,
            scale: ANIMATION_CONFIG.INTRO.CAR_ENTER_SCALE,
            force3D: true,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: ANIMATION_CONFIG.INTRO.CAR_ENTER_DURATION,
            ease: ANIMATION_CONFIG.EASES.CAR_IN,
          },
          "-=0.6" // Smooth overlap with headline reveal
        );
      }

      // C. Impact stats cards staggered entrance
      const cards = statsRef.current?.querySelectorAll(".stat-card") || [];
      if (cards.length > 0) {
        introTl.fromTo(
          cards,
          {
            opacity: 0,
            y: ANIMATION_CONFIG.INTRO.STAT_CARD_Y_OFFSET,
            force3D: true,
          },
          {
            opacity: 1,
            y: 0,
            duration: ANIMATION_CONFIG.INTRO.STAT_CARD_DURATION,
            stagger: ANIMATION_CONFIG.INTRO.STAT_CARD_STAGGER,
            ease: ANIMATION_CONFIG.EASES.STATS_IN,
          },
          "-=0.7"
        );
      }

      // D. Number count-up from 0 to target value
      const counters = statsRef.current?.querySelectorAll(".stat-counter") || [];
      counters.forEach((el) => {
        const rawTarget = parseFloat(el.getAttribute("data-target")) || 0;
        const countObj = { val: 0 };

        introTl.to(
          countObj,
          {
            val: rawTarget,
            duration: ANIMATION_CONFIG.INTRO.COUNTER_DURATION,
            ease: ANIMATION_CONFIG.EASES.COUNTER,
            onUpdate: () => {
              el.textContent = Math.round(countObj.val);
            },
          },
          "-=0.9" // Concurrently counts as cards settle into place
        );
      });

      // -------------------------------------------------------------
      // 3. RESPONSIVE SCROLL-DRIVEN PINNED ANIMATION (gsap.matchMedia)
      // Strictly modifies GPU-accelerated transform (translate, scale, rotate) & opacity.
      // -------------------------------------------------------------
      const mm = gsap.matchMedia();

      // DESKTOP BREAKPOINT (>= 1024px)
      mm.add("(min-width: 1024px)", () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: ANIMATION_CONFIG.SCROLL.PIN_SPACER_DISTANCE,
            pin: true,
            scrub: ANIMATION_CONFIG.SCROLL.SCRUB_SMOOTHING,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Dynamic car road travel across the viewport
        if (carRef.current) {
          scrollTl.fromTo(
            carRef.current,
            { x: 0, rotation: 0, scale: 1 },
            {
              x: () => {
                const roadWidth = roadRef.current ? roadRef.current.clientWidth : window.innerWidth;
                const carWidth = carRef.current.clientWidth || 400;
                return Math.max(0, roadWidth - carWidth - 40);
              },
              scale: 1.08,
              rotation: 1.2, // Subtle dynamic yaw angle under acceleration
              force3D: true,
              ease: ANIMATION_CONFIG.EASES.ROAD_SCRUB,
            },
            0
          );
        }

        // Kinetic light trail expanding behind the car
        if (trailRef.current) {
          scrollTl.fromTo(
            trailRef.current,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: () => {
                const roadWidth = roadRef.current ? roadRef.current.clientWidth : window.innerWidth;
                const carWidth = carRef.current ? carRef.current.clientWidth : 400;
                const travelDistance = Math.max(0, roadWidth - carWidth - 40);
                return Math.min(1, (travelDistance + 120) / roadWidth);
              },
              transformOrigin: "left center",
              force3D: true,
              ease: ANIMATION_CONFIG.EASES.ROAD_SCRUB,
            },
            0
          );
        }

        // Headline parallax depth shift and fade
        if (headlineRef.current) {
          scrollTl.to(
            headlineRef.current,
            {
              y: ANIMATION_CONFIG.SCROLL.HEADLINE_PARALLAX_Y,
              opacity: ANIMATION_CONFIG.SCROLL.HEADLINE_PARALLAX_OPACITY,
              scale: 0.98,
              force3D: true,
              ease: "none",
            },
            0
          );
        }

        // Background parallax velocity drift
        if (bgLayerRef.current) {
          scrollTl.to(
            bgLayerRef.current,
            {
              x: ANIMATION_CONFIG.SCROLL.BG_PARALLAX_X,
              y: ANIMATION_CONFIG.SCROLL.BG_PARALLAX_Y,
              force3D: true,
              ease: "none",
            },
            0
          );
        }

        // Stat cards subtle depth recession
        if (cards.length > 0) {
          scrollTl.to(
            cards,
            {
              y: -30,
              opacity: 0.35,
              stagger: 0.05,
              force3D: true,
              ease: "none",
            },
            0
          );
        }
      });

      // TABLET BREAKPOINT (768px <= width < 1024px)
      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: ANIMATION_CONFIG.SCROLL.SCRUB_SMOOTHING,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        if (carRef.current) {
          scrollTl.fromTo(
            carRef.current,
            { x: 0, scale: 0.95, rotation: 0 },
            {
              x: () => {
                const roadWidth = roadRef.current ? roadRef.current.clientWidth : window.innerWidth;
                const carWidth = carRef.current.clientWidth || 310;
                return Math.max(0, roadWidth - carWidth - 25);
              },
              scale: 1.02,
              rotation: 1,
              force3D: true,
              ease: "none",
            },
            0
          );
        }

        if (trailRef.current) {
          scrollTl.fromTo(
            trailRef.current,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 0.95, transformOrigin: "left center", force3D: true, ease: "none" },
            0
          );
        }

        if (headlineRef.current) {
          scrollTl.to(
            headlineRef.current,
            { y: -45, opacity: 0.3, force3D: true, ease: "none" },
            0
          );
        }

        if (cards.length > 0) {
          scrollTl.to(
            cards,
            { y: -25, opacity: 0.4, stagger: 0.04, force3D: true, ease: "none" },
            0
          );
        }
      });

      // MOBILE BREAKPOINT (< 768px)
      mm.add("(max-width: 767px)", () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=130%",
            pin: true,
            scrub: 1.0,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        if (carRef.current) {
          scrollTl.fromTo(
            carRef.current,
            { x: 0, scale: 0.85 },
            {
              x: () => {
                const roadWidth = roadRef.current ? roadRef.current.clientWidth : window.innerWidth;
                const carWidth = carRef.current.clientWidth || 230;
                return Math.max(80, roadWidth - carWidth - 15);
              },
              scale: 0.92,
              force3D: true,
              ease: "none",
            },
            0
          );
        }

        if (trailRef.current) {
          scrollTl.fromTo(
            trailRef.current,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 0.92, transformOrigin: "left center", force3D: true, ease: "none" },
            0
          );
        }

        if (headlineRef.current) {
          scrollTl.to(
            headlineRef.current,
            { y: -30, opacity: 0.35, force3D: true, ease: "none" },
            0
          );
        }

        if (cards.length > 0) {
          scrollTl.to(
            cards,
            { y: -20, opacity: 0.45, stagger: 0.03, force3D: true, ease: "none" },
            0
          );
        }
      });

      // Trigger recalculation of layout metrics
      ScrollTrigger.refresh();
    }, containerRef);

    // Guaranteed cleanup on unmount or fast refresh
    return () => {
      ctx.revert();
    };
  }, [containerRef, headlineRef, carRef, carWrapperRef, trailRef, statsRef, bgLayerRef, roadRef]);
}
