"use client";
import React, { useRef } from "react";
import CarVisual from "@/components/CarVisual";
import StatCard from "@/components/StatCard";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { ChevronDown, Sparkles, Activity, ShieldCheck, Zap } from "lucide-react";

/**
 * Headline text tokens for accessible letter-by-letter staggered animation.
 */
const HEADLINE_WORDS = [
  { text: "WELCOME", id: "w1" },
  { text: "ITZ", id: "w2" },
  { text: "FIZZ", id: "w3" },
];

/**
 * High-impact metric statistics
 */
const STATS_DATA = [
  {
    targetValue: 87,
    suffix: "%",
    title: "Faster Delivery",
    description: "Zero-latency motion pipeline & optimized 60fps frame budgets.",
    accent: "green",
    badge: "Velocity",
    icon: Zap,
  },
  {
    targetValue: 3,
    suffix: "x",
    title: "Engagement",
    description: "Immersive kinetic interactions and tactile depth cues.",
    accent: "cyan",
    badge: "Growth",
    icon: Activity,
  },
  {
    targetValue: 99,
    suffix: "%",
    title: "Satisfaction",
    description: "Flawless rendering performance across mobile and desktop displays.",
    accent: "amber",
    badge: "Quality",
    icon: ShieldCheck,
  },
  {
    targetValue: 40,
    suffix: "%",
    title: "Cost Saved",
    description: "GPU-accelerated compositing minimizing CPU overhead.",
    accent: "red",
    badge: "Efficiency",
    icon: Sparkles,
  },
];

/**
 * Hero Component
 * 100vh pinned scroll-driven experience showcasing the kinetic hypercar,
 * staggered letter reveal, counting metrics, and fluid responsive design.
 */
export default function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const carRef = useRef(null);
  const carWrapperRef = useRef(null);
  const trailRef = useRef(null);
  const statsRef = useRef(null);
  const bgLayerRef = useRef(null);
  const roadRef = useRef(null);

  // Initialize unified GSAP load timeline & scroll trigger choreography
  useHeroAnimation({
    containerRef,
    headlineRef,
    carRef,
    carWrapperRef,
    trailRef,
    statsRef,
    bgLayerRef,
    roadRef,
  });

  return (
    <section
      ref={containerRef}
      className="hero-section relative w-full h-screen min-h-[700px] max-h-screen overflow-hidden bg-[#08090b] text-white flex flex-col justify-between select-none"
      aria-label="Hero Section"
    >
      {/* ------------------------------------------------------------- */}
      {/* 1. BACKGROUND PARALLAX & ATMOSPHERIC GRID */}
      {/* ------------------------------------------------------------- */}
      <div
        ref={bgLayerRef}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ willChange: "transform" }}
      >
        {/* Ambient radial lighting flares */}
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-[#00ff87]/[0.08] blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-[#60efff]/[0.09] blur-[150px]" />

        {/* Perspective speed grid lines */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)",
          }}
        />

        {/* Horizontal aerodynamic light streaks */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[26%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ff87]/40 to-transparent" />
          <div className="absolute top-[52%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#60efff]/30 to-transparent" />
          <div className="absolute top-[76%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. TOP TELEMETRY BAR & HEADLINE */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-20 pt-7 sm:pt-9 md:pt-12 px-4 sm:px-8 max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Telemetry pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-2 sm:mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono font-medium tracking-widest text-zinc-300 uppercase">
            AERODYNAMIC TELEMETRY // 01 HERO
          </span>
        </div>

        {/* Accessible, fluid letter-spaced headline using clamp() */}
        <h1
          ref={headlineRef}
          aria-label="WELCOME ITZ FIZZ"
          className="headline-container text-center font-display font-black text-white uppercase leading-none drop-shadow-md select-none"
          style={{
            fontSize: "clamp(2rem, 5.5vw, 6.5rem)",
            letterSpacing: "clamp(0.14em, 2vw, 0.32em)",
            willChange: "transform, opacity",
          }}
        >
          {HEADLINE_WORDS.map((word) => (
            <span key={word.id} className="inline-block whitespace-nowrap mx-1.5 sm:mx-2.5 md:mx-4">
              {word.text.split("").map((char, charIndex) => (
                <span
                  key={`${word.id}-${charIndex}`}
                  className="hero-letter inline-block transition-colors duration-200 hover:text-[#00ff87]"
                  aria-hidden="true"
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3. TRACK & CAR VELOCITY CORRIDOR */}
      {/* ------------------------------------------------------------- */}
      <div
        ref={roadRef}
        className="relative z-10 w-full my-auto py-2 sm:py-3 overflow-hidden"
      >
        {/* Track roadway backdrop */}
        <div className="relative w-full h-[150px] sm:h-[185px] md:h-[215px] bg-[#0c0e12] border-y border-white/[0.09] flex items-center shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
          {/* Track asphalt texture & illuminated curb lines */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00ff87]/50 via-[#60efff]/40 to-[#00ff87]/50" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#00ff87]/50 via-[#60efff]/40 to-[#00ff87]/50" />

          {/* Road center dashed line markers */}
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #60efff 0px, #60efff 45px, transparent 45px, transparent 75px)",
            }}
          />

          {/* Kinetic energy light trail following behind car */}
          <div
            ref={trailRef}
            className="absolute left-0 inset-y-0 w-full origin-left pointer-events-none z-10"
            style={{
              transform: "scaleX(0)",
              willChange: "transform",
              background:
                "linear-gradient(90deg, rgba(0, 255, 135, 0.45) 0%, rgba(96, 239, 255, 0.35) 75%, rgba(96, 239, 255, 0.8) 100%)",
              boxShadow: "0 0 40px 4px rgba(0, 255, 135, 0.35)",
            }}
          >
            {/* Pulsing trail core */}
            <div className="absolute inset-y-0 right-0 w-20 bg-white/70 blur-sm" />
          </div>

          {/* Entrance wrapper + Scroll translation node */}
          <div
            ref={carWrapperRef}
            className="relative z-20 will-change-transform"
          >
            <div
              ref={carRef}
              className="w-[230px] sm:w-[310px] md:w-[380px] lg:w-[440px] pl-2 sm:pl-4 flex-shrink-0"
              style={{ willChange: "transform" }}
            >
              <CarVisual />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 4. IMPACT STATS GRID (3-4 Key Metrics) */}
      {/* ------------------------------------------------------------- */}
      <div
        ref={statsRef}
        className="relative z-20 pb-4 sm:pb-6 md:pb-8 px-4 sm:px-8 max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {STATS_DATA.map((stat) => (
            <StatCard
              key={stat.title}
              targetValue={stat.targetValue}
              suffix={stat.suffix}
              title={stat.title}
              description={stat.description}
              accent={stat.accent}
              badge={stat.badge}
            />
          ))}
        </div>

        {/* Scroll indicator prompt */}
        <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 text-zinc-500 font-mono text-[10px] sm:text-xs tracking-wider uppercase">
          <span>Scroll down to accelerate</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#00ff87]" />
        </div>
      </div>
    </section>
  );
}
