import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ScrollReveal } from "@/components/scroll-reveal";
import { openingHours, site, siteImages } from "@/data/content";

export default function BookingPage() {
  return <>
    <section className="relative overflow-hidden bg-glory-black pt-32 text-white sm:pt-40">
      <div className="absolute inset-0 opacity-35"><ImagePlaceholder src={siteImages.booking} alt="Beauty studio" className="h-full w-full" /></div><div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto w-[min(1120px,calc(100%-32px))] pb-20 sm:w-[min(1120px,calc(100%-64px))] sm:pb-28"><p className="glory-script text-5xl text-glory-gold">Termin</p><h1 className="glory-title mt-3 text-6xl sm:text-8xl">Vereinbarungen</h1></div>
    </section>
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] gap-12 sm:w-[min(1120px,calc(100%-64px))] lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <ScrollReveal><ImagePlaceholder src={siteImages.booking} alt="Zem Beauty Termin" className="aspect-[4/3]" /></ScrollReveal>
        <ScrollReveal delay={120}>
          <p className="glory-script text-5xl text-glory-gold">Zeit für dich</p><h2 className="glory-title mt-2 text-5xl text-[#4e4a45]">Buche deinen Beauty-Moment.</h2><div className="mt-6 h-px w-28 bg-glory-gold" />
          <p className="mt-6 text-sm leading-8 text-glory-muted">Für einen Termin kannst du uns direkt kontaktieren. Wir finden gemeinsam den passenden Zeitpunkt für deine Behandlung.</p>
          <Link href={site.whatsapp} target="_blank" className="mt-8 inline-flex items-center gap-2 bg-glory-black px-7 py-4 text-[10px] font-bold uppercase tracking-[.16em] text-white">Über WhatsApp buchen <ArrowRight size={14} /></Link>
          <div className="mt-12 border-t border-glory-line pt-5">{openingHours.map(([day,time]) => <div key={day} className="flex justify-between border-b border-glory-line py-3 text-sm"><span>{day}</span><span className="text-glory-muted">{time}</span></div>)}</div>
        </ScrollReveal>
      </div>
    </section>
  </>;
}
