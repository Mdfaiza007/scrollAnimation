"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NextSection from "@/components/NextSection";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#08090b] text-white">
        {/* Fixed Navigation Header */}
        <Navbar />

        {/* 100vh Pinned Scroll Hero */}
        <Hero />

        {/* Subsequent Narrative Section */}
        <NextSection />

        {/* Footer */}
        <footer className="w-full py-12 px-4 sm:px-8 bg-[#040507] border-t border-white/[0.06] text-zinc-500 text-xs font-mono text-center">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} ITZ FIZZ Studio. Engineered for Senior Motion & Frontend Evaluation.</p>
            <p className="text-zinc-400">
              Next.js App Router • GSAP + ScrollTrigger • Lenis • Tailwind CSS
            </p>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
