import { ImagePlaceholder } from "@/components/image-placeholder";
import { ScrollReveal } from "@/components/scroll-reveal";
import { galleryImages } from "@/data/content";

export default function GalleryPage() {
  return <>
    <section className="bg-glory-black pt-32 text-white sm:pt-40"><div className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20 sm:w-[min(1120px,calc(100%-64px))] sm:pb-28"><p className="glory-script text-5xl text-glory-gold">Galerien</p><h1 className="glory-title mt-3 text-6xl sm:text-8xl">Inspiration</h1></div></section>
    <section className="bg-[#f8f5ef] py-16 sm:py-24"><div className="mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-64px))]"><div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">{galleryImages.map((item,i)=><ScrollReveal key={`${item.alt}-${i}`} delay={(i%4)*80}><ImagePlaceholder src={item.src} alt={item.alt} label={`IMAGE ${String(i+1).padStart(2,"0")}`} className={`aspect-square ${i%5===1 ? "lg:translate-y-8" : ""}`} /></ScrollReveal>)}</div></div></section>
  </>;
}
