// components/Hero.tsx
"use client";
import React from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  videoSrc: string;       // e.g. "/video.mp4"
  onButtonClick?: () => void;
}

export default function Hero({
  title = "Förgyll sommaren med exklusiva olivträd",
  subtitle = "Upplev medelhavets charm i din egen trädgård",
  buttonText = "Utforska kollektionen",
  videoSrc,
  onButtonClick,
}: HeroProps) {
  return (
    <section className="relative h-[80vh] md:h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/40 px-4 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
          {title}
        </h1>
        <p className="text-lg sm:text-2xl text-white mb-6 animate-fadeIn delay-200">
          {subtitle}
        </p>
        <button
          onClick={onButtonClick}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-base sm:text-lg animate-fadeIn delay-400 transition"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
