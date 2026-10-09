"use client";
import React from "react";
import { Gauge, Github } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none px-4 sm:px-8 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00ff87] to-[#60efff] p-[1.5px] shadow-[0_0_20px_rgba(0,255,135,0.35)]">
            <div className="w-full h-full bg-[#090b0e] rounded-[10px] flex items-center justify-center">
              <span className="font-display font-black text-sm text-white">IF</span>
            </div>
          </div>
          <div>
            <div className="font-display font-extrabold text-sm sm:text-base tracking-wider text-white">
              ITZ FIZZ <span className="text-[#00ff87]">STUDIO</span>
            </div>
            <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">
              Kinetic Motion System
            </div>
          </div>
        </div>

        {/* Telemetry pill & controls */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs font-mono text-zinc-300">
            <Gauge className="w-3.5 h-3.5 text-[#00ff87]" />
            <span>120 FPS SYNC</span>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 backdrop-blur-md text-zinc-300 hover:text-white transition-all flex items-center gap-2 text-xs font-medium"
            aria-label="View on GitHub"
          >
            <Github className="w-4 h-4" />
            <span className="hidden md:inline font-mono">Source Code</span>
          </a>
        </div>
      </div>
    </header>
  );
}
