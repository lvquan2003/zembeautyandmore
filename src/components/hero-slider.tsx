"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/content";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
export function HeroSlider({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((v) => (v + 1) % heroSlides.length),
      6500,
    );
    return () => clearInterval(id);
  }, [paused]);
  const prev = () =>
    setActive((v) => (v - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setActive((v) => (v + 1) % heroSlides.length);
  return (
    <section
      className="relative h-[100svh] min-h-[650px] overflow-hidden bg-glory-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === active ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={slide.image}
            alt={t.heroSlides[index]?.alt ?? slide.alt}
            fill
            priority={index === 0}
            unoptimized
            className={`object-cover ${index === active ? "glory-hero-image" : ""}`}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/65" />
        </div>
      ))}
      <div className="relative z-10 mx-auto flex h-full w-[min(1120px,calc(100%-32px))] flex-col items-center justify-center text-center text-white sm:w-[min(1120px,calc(100%-64px))]">
        <p className="glory-kicker text-glory-gold">
          {t.heroSlides[active]?.kicker}
        </p>
        <h1 className="glory-script mt-4 text-7xl text-glory-gold sm:text-9xl">
          {t.heroSlides[active]?.title}
        </h1>
        <p className="mt-5 max-w-xl text-xs uppercase tracking-[.22em] text-white/85 sm:text-sm">
          {t.heroSlides[active]?.subtitle}
        </p>
        <div className="mt-8 h-px w-20 bg-glory-gold" />
      </div>
      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:border-glory-gold hover:bg-glory-gold hover:text-glory-black sm:left-8"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:border-glory-gold hover:bg-glory-gold hover:text-glory-black sm:right-8"
      >
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1 transition-all ${i === active ? "w-10 bg-glory-gold" : "w-5 bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
