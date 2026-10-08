"use client";
import React from "react";

/**
 * CarVisual Component
 * Renders an ultra-detailed, precision-engineered top-view hypercar.
 * Oriented horizontally facing right (+X direction of travel).
 * Scalable SVG with realistic gradients, light beams, reflections, and shadow layers.
 */
export default function CarVisual({ className = "" }) {
  return (
    <div className={`relative select-none pointer-events-none ${className}`}>
      {/* Dynamic ambient ground shadow / glow */}
      <div 
        className="absolute inset-0 -bottom-4 translate-y-3 blur-xl opacity-80 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(0, 255, 135, 0.25) 0%, rgba(0,0,0,0.85) 60%, transparent 80%)"
        }}
      />

      <svg
        viewBox="0 0 560 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl relative z-10"
        aria-label="High-performance aerodynamic electric hypercar top view"
      >
        <defs>
          {/* Headlight forward beam projection */}
          <linearGradient id="headlightBeamTop" x1="0%" y1="50%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60efff" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#60efff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#60efff" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="headlightBeamBottom" x1="0%" y1="50%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60efff" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#60efff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#60efff" stopOpacity="0" />
          </linearGradient>

          {/* Car body metallic gradient */}
          <linearGradient id="carBodyGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#1a1d24" />
            <stop offset="18%" stopColor="#242833" />
            <stop offset="40%" stopColor="#101216" />
            <stop offset="50%" stopColor="#2c313e" />
            <stop offset="60%" stopColor="#101216" />
            <stop offset="82%" stopColor="#242833" />
            <stop offset="100%" stopColor="#1a1d24" />
          </linearGradient>

          {/* Canopy / Cockpit glass reflection */}
          <linearGradient id="cockpitGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#080a0f" />
            <stop offset="35%" stopColor="#16253b" />
            <stop offset="60%" stopColor="#0a121c" />
            <stop offset="100%" stopColor="#05070a" />
          </linearGradient>

          {/* Windshield highlight sweep */}
          <linearGradient id="glassSweep" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#60efff" stopOpacity="0.4" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="70%" stopColor="#60efff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Carbon fiber accent stripe */}
          <linearGradient id="carbonStripe" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#ff3366" />
            <stop offset="50%" stopColor="#00ff87" />
            <stop offset="100%" stopColor="#60efff" />
          </linearGradient>

          {/* Rear exhaust heat / LED glow */}
          <radialGradient id="exhaustGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff3366" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#ff3366" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* 1. FORWARD HEADLIGHT BEAMS */}
        <g opacity="0.65" className="car-headlights">
          {/* Top beam */}
          <polygon
            points="460,78 555,20 555,85 460,82"
            fill="url(#headlightBeamTop)"
          />
          {/* Bottom beam */}
          <polygon
            points="460,142 555,200 555,135 460,138"
            fill="url(#headlightBeamBottom)"
          />
        </g>

        {/* 2. CHASSIS SHADOW */}
        <path
          d="M 68 62 
             C 120 48, 200 44, 310 46 
             C 380 47, 430 64, 478 88 
             C 486 98, 486 122, 478 132 
             C 430 156, 380 173, 310 174 
             C 200 176, 120 172, 68 158 
             C 52 148, 52 72, 68 62 Z"
          fill="#000000"
          opacity="0.85"
          filter="blur(5px)"
        />

        {/* 3. WHEELS & TIRES */}
        {/* Front Top Wheel */}
        <rect x="365" y="32" width="56" height="18" rx="6" fill="#121417" stroke="#252a33" strokeWidth="2" />
        <rect x="375" y="36" width="36" height="10" rx="3" fill="#1c2029" />
        <rect x="385" y="38" width="16" height="6" rx="2" fill="#00ff87" opacity="0.85" />

        {/* Front Bottom Wheel */}
        <rect x="365" y="170" width="56" height="18" rx="6" fill="#121417" stroke="#252a33" strokeWidth="2" />
        <rect x="375" y="174" width="36" height="10" rx="3" fill="#1c2029" />
        <rect x="385" y="176" width="16" height="6" rx="2" fill="#00ff87" opacity="0.85" />

        {/* Rear Top Wheel */}
        <rect x="120" y="30" width="62" height="20" rx="7" fill="#121417" stroke="#252a33" strokeWidth="2" />
        <rect x="130" y="34" width="42" height="12" rx="4" fill="#1c2029" />
        <rect x="142" y="37" width="18" height="6" rx="2" fill="#00ff87" opacity="0.85" />

        {/* Rear Bottom Wheel */}
        <rect x="120" y="170" width="62" height="20" rx="7" fill="#121417" stroke="#252a33" strokeWidth="2" />
        <rect x="130" y="174" width="42" height="12" rx="4" fill="#1c2029" />
        <rect x="142" y="177" width="18" height="6" rx="2" fill="#00ff87" opacity="0.85" />

        {/* 4. MAIN AERODYNAMIC BODY */}
        <path
          d="M 64 74
             C 85 70, 115 62, 160 56
             C 210 50, 290 52, 360 56
             C 410 59, 445 74, 474 95
             C 479 100, 481 110, 481 110
             C 481 110, 479 120, 474 125
             C 445 146, 410 161, 360 164
             C 290 168, 210 170, 160 164
             C 115 158, 85 150, 64 146
             C 52 136, 50 120, 50 110
             C 50 100, 52 84, 64 74 Z"
          fill="url(#carBodyGrad)"
          stroke="#384050"
          strokeWidth="1.5"
        />

        {/* Front splitter / aerodynamic nose cone */}
        <path
          d="M 456 90
             C 470 98, 482 106, 484 110
             C 482 114, 470 122, 456 130
             L 468 110 Z"
          fill="#0c0e12"
          stroke="#00ff87"
          strokeWidth="1"
          opacity="0.9"
        />

        {/* Front hood aerodynamic ducts */}
        <path
          d="M 370 82 C 400 86, 420 92, 440 98 L 436 102 C 416 97, 396 92, 368 89 Z"
          fill="#0b0d11"
          stroke="#1e232d"
          strokeWidth="0.8"
        />
        <path
          d="M 370 138 C 400 134, 420 128, 440 122 L 436 118 C 416 123, 396 128, 368 131 Z"
          fill="#0b0d11"
          stroke="#1e232d"
          strokeWidth="0.8"
        />

        {/* 5. COCKPIT & CANOPY GLASS */}
        <path
          d="M 205 84
             C 255 76, 325 78, 350 86
             C 362 90, 368 100, 368 110
             C 368 120, 362 130, 350 134
             C 325 142, 255 144, 205 136
             C 192 128, 188 118, 188 110
             C 188 102, 192 92, 205 84 Z"
          fill="url(#cockpitGlass)"
          stroke="#475569"
          strokeWidth="1.5"
        />

        {/* Windshield curved reflection highlight */}
        <path
          d="M 290 82
             C 330 84, 355 92, 364 106
             C 360 102, 340 92, 305 88 Z"
          fill="url(#glassSweep)"
        />

        {/* Cockpit roof center spine & intake */}
        <rect x="235" y="107" width="75" height="6" rx="3" fill="#11141a" stroke="#252c38" strokeWidth="0.8" />
        <line x1="220" y1="110" x2="350" y2="110" stroke="#00ff87" strokeWidth="1" strokeDasharray="6 4" opacity="0.6" />

        {/* 6. SIDE MIRRORS */}
        {/* Top side mirror */}
        <path d="M 312 60 C 318 52, 328 50, 332 54 C 330 62, 322 66, 314 65 Z" fill="#1b1f28" stroke="#3d4657" strokeWidth="1" />
        {/* Bottom side mirror */}
        <path d="M 312 160 C 318 168, 328 170, 332 166 C 330 158, 322 154, 314 155 Z" fill="#1b1f28" stroke="#3d4657" strokeWidth="1" />

        {/* 7. REAR ENGINE LOUVERS & DIFFUSER */}
        {/* Engine cover slats */}
        <line x1="125" y1="92" x2="175" y2="92" stroke="#0e1116" strokeWidth="2" strokeLinecap="round" />
        <line x1="120" y1="101" x2="182" y2="101" stroke="#0e1116" strokeWidth="2" strokeLinecap="round" />
        <line x1="120" y1="110" x2="184" y2="110" stroke="#0e1116" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="120" y1="119" x2="182" y2="119" stroke="#0e1116" strokeWidth="2" strokeLinecap="round" />
        <line x1="125" y1="128" x2="175" y2="128" stroke="#0e1116" strokeWidth="2" strokeLinecap="round" />

        {/* Active Rear Wing / Spoiler */}
        <path
          d="M 60 72
             C 70 70, 78 72, 82 78
             L 82 142
             C 78 148, 70 150, 60 148
             C 56 138, 54 122, 54 110
             C 54 98, 56 82, 60 72 Z"
          fill="#13161c"
          stroke="#ff3366"
          strokeWidth="1.2"
        />

        {/* 8. HIGH-INTENSITY LED HEADLIGHT CLUSTERS */}
        {/* Upper headlight cluster */}
        <polygon points="450,78 468,82 462,88 444,82" fill="#60efff" filter="drop-shadow(0 0 6px #60efff)" />
        <circle cx="462" cy="82" r="3" fill="#ffffff" />

        {/* Lower headlight cluster */}
        <polygon points="450,142 468,138 462,132 444,138" fill="#60efff" filter="drop-shadow(0 0 6px #60efff)" />
        <circle cx="462" cy="138" r="3" fill="#ffffff" />

        {/* 9. REAR FULL-WIDTH LED TAILLIGHT BLADE */}
        <path
          d="M 64 78 C 58 92, 56 102, 56 110 C 56 118, 58 128, 64 142"
          stroke="#ff3366"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="drop-shadow(0 0 8px #ff3366)"
        />

        {/* Dual exhaust center glow */}
        <circle cx="53" cy="105" r="4" fill="url(#exhaustGlow)" />
        <circle cx="53" cy="115" r="4" fill="url(#exhaustGlow)" />
      </svg>
    </div>
  );
}
