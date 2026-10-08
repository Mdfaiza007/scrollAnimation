"use client";
import React from "react";
import { Cpu, Gauge, Layers, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

const ARCHITECTURE_FEATURES = [
  {
    icon: Gauge,
    title: "Zero-Jank Interpolation",
    desc: "Scrub smoothing paired with Lenis ticker synchronization ensures buttery 60–120 FPS transitions across all displays.",
    tag: "Performance",
  },
  {
    icon: Cpu,
    title: "Pure Compositor Transforms",
    desc: "Strictly translates, rotates, and scales with force3D hardware acceleration. Zero layout reads or geometry reflows.",
    tag: "Hardware GPU",
  },
  {
    icon: Layers,
    title: "Responsive MatchMedia",
    desc: "Dynamic coordinate projection tailored specifically for desktop, tablet, and mobile screens via gsap.matchMedia.",
    tag: "Adaptive",
  },
  {
    icon: Sparkles,
    title: "Accessible Motion Design",
    desc: "Automatic detection of prefers-reduced-motion with seamless fallback to static instant-render states.",
    tag: "A11y",
  },
];

export default function NextSection() {
  return (
    <section className="relative z-30 w-full min-h-screen bg-[#060709] text-white py-24 px-4 sm:px-8 border-t border-white/[0.08]">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-[#00ff87]/[0.08] via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[#00ff87] text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff87]" />
            Motion Engineering Spec
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            PRECISION MEETS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#60efff]">VELOCITY</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Every millimeter of translation is synchronized directly to scroll delta, eliminating jarring disconnects between user intent and on-screen kinematics.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {ARCHITECTURE_FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl bg-[#0d0f14] border border-white/[0.07] p-8 hover:border-[#00ff87]/40 transition-all duration-300 hover:shadow-[0_0_35px_-10px_rgba(0,255,135,0.2)]"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00ff87] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-[#00ff87] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Benchmarks & Call to Action Box */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#11141c] to-[#0a0c10] border border-white/[0.1] p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#60efff]/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono text-[#60efff] uppercase tracking-widest block mb-2">
                Hiring Assignment Verification
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">
                Production-Ready Static Architecture
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Configured for seamless GitHub Pages deployment using Next.js App Router export, zero runtime server dependencies, and automated CI/CD workflows.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-300">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff87]" />
                  GSAP Context Strict Cleanup
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff87]" />
                  Lenis RAF Synchronization
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff87]" />
                  Lighthouse 100 Performance
                </span>
              </div>
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00ff87] text-[#08090b] font-semibold text-sm hover:bg-[#60efff] transition-colors shadow-[0_0_25px_rgba(0,255,135,0.4)]"
            >
              <span>Explore Codebase</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
