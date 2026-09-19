"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImagePlaceholder } from "./image-placeholder";
import { serviceImages } from "@/data/content";

const slides = [
  { title: "Nail Design", text: "Von clean und elegant bis verspielt und individuell – dein Look wird passend zu dir gestaltet.", image: serviceImages.nailDesign },
  { title: "Maniküre", text: "Gepflegte Hände, schöne Form und ein Finish, das sich im Alltag genauso gut anfühlt wie beim Event.", image: serviceImages.manicure },
  { title: "Beauty", text: "Kleine Beauty-Momente für deinen persönlichen Look – modern, entspannt und mit Liebe zum Detail.", image: serviceImages.beauty },
];

export function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  const next = () => setActive((value) => (value + 1) % slides.length);
  const prev = () => setActive((value) => (value - 1 + slides.length) % slides.length);

  return (
    <div className="grid overflow-hidden border border-zen-line bg-white lg:grid-cols-2">
      <ImagePlaceholder
        src={slide.image}
        alt={`${slide.title} bei Zem Beauty & More`}
        label={`SERVICE IMAGE ${active + 1}`}
        className="min-h-[420px] lg:min-h-[560px]"
      />
      <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zen-accent-dark">
            0{active + 1} / 0{slides.length}
          </p>
          <h3 className="mt-5 font-display text-4xl font-normal leading-[0.95] tracking-[-0.035em] sm:text-5xl">
            {slide.title}
          </h3>
          <p className="mt-5 max-w-md text-sm leading-7 text-zen-muted">{slide.text}</p>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {slides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Service ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-1.5 transition-all ${index === active ? "w-10 bg-zen-accent" : "w-5 bg-zen-line"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" aria-label="Vorheriger Service" onClick={prev} className="flex h-11 w-11 items-center justify-center rounded-full border border-zen-line hover:bg-zen-soft">
              <ChevronLeft size={18} />
            </button>
            <button type="button" aria-label="Nächster Service" onClick={next} className="flex h-11 w-11 items-center justify-center rounded-full border border-zen-line hover:bg-zen-soft">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
