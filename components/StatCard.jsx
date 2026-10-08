"use client";
import React, { forwardRef } from "react";

/**
 * StatCard Component
 * Displays a single key impact metric with glassmorphism, glow accents,
 * and high-contrast typography.
 * Supports GSAP count-up targeting via `data-target` and `.stat-counter`.
 */
const StatCard = forwardRef(function StatCard(
  {
    targetValue,
    suffix = "",
    prefix = "",
    title,
    description,
    accent = "green", // "green" | "cyan" | "amber" | "red"
    badge,
    className = "",
  },
  ref
) {
  // Theme styling map for automotive neon aesthetic
  const accentStyles = {
    green: {
      border: "hover:border-[#00ff87]/50 border-white/[0.08]",
      glow: "hover:shadow-[0_0_30px_-5px_rgba(0,255,135,0.25)]",
      text: "text-[#00ff87]",
      badge: "bg-[#00ff87]/10 text-[#00ff87] border-[#00ff87]/30",
      indicator: "bg-[#00ff87]",
    },
    cyan: {
      border: "hover:border-[#60efff]/50 border-white/[0.08]",
      glow: "hover:shadow-[0_0_30px_-5px_rgba(96,239,255,0.25)]",
      text: "text-[#60efff]",
      badge: "bg-[#60efff]/10 text-[#60efff] border-[#60efff]/30",
      indicator: "bg-[#60efff]",
    },
    amber: {
      border: "hover:border-[#ff9f1c]/50 border-white/[0.08]",
      glow: "hover:shadow-[0_0_30px_-5px_rgba(255,159,28,0.25)]",
      text: "text-[#ff9f1c]",
      badge: "bg-[#ff9f1c]/10 text-[#ff9f1c] border-[#ff9f1c]/30",
      indicator: "bg-[#ff9f1c]",
    },
    red: {
      border: "hover:border-[#ff3366]/50 border-white/[0.08]",
      glow: "hover:shadow-[0_0_30px_-5px_rgba(255,51,102,0.25)]",
      text: "text-[#ff3366]",
      badge: "bg-[#ff3366]/10 text-[#ff3366] border-[#ff3366]/30",
      indicator: "bg-[#ff3366]",
    },
  }[accent] || {
    border: "border-white/[0.08]",
    glow: "",
    text: "text-white",
    badge: "bg-white/10 text-white border-white/20",
    indicator: "bg-white",
  };

  return (
    <div
      ref={ref}
      className={`stat-card relative group rounded-2xl bg-[#0f1116]/80 backdrop-blur-xl p-5 sm:p-6 transition-all duration-300 ease-out border ${accentStyles.border} ${accentStyles.glow} ${className}`}
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Top subtle highlight line */}
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      {/* Header with badge / indicator */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${accentStyles.indicator} animate-pulse`} />
          <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400">
            {badge || "Metric"}
          </span>
        </div>
        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${accentStyles.badge}`}>
          LIVE
        </span>
      </div>

      {/* Hero Stat Number */}
      <div className="flex items-baseline gap-1 my-1">
        {prefix && (
          <span className="text-2xl sm:text-3xl font-display font-semibold text-zinc-400">
            {prefix}
          </span>
        )}
        <span
          className={`stat-counter text-4xl sm:text-5xl font-extrabold tracking-tight font-display ${accentStyles.text}`}
          data-target={targetValue}
        >
          0
        </span>
        {suffix && (
          <span className={`text-2xl sm:text-3xl font-bold font-display ${accentStyles.text}`}>
            {suffix}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide mt-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1 leading-relaxed">
        {description}
      </p>

      {/* Ambient background glow inside card */}
      <div
        className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-10 blur-2xl pointer-events-none transition-opacity duration-300 group-hover:opacity-25"
        style={{
          background: accent === "green" ? "#00ff87" : accent === "cyan" ? "#60efff" : accent === "amber" ? "#ff9f1c" : "#ff3366",
        }}
      />
    </div>
  );
});

export default StatCard;
