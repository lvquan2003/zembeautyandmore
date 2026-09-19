import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImagePlaceholder } from "./image-placeholder";

type Props = {
  number: string;
  title: string;
  text: string;
  price?: string;
  image?: string;
};

export function ServiceCard({ number, title, text, price, image }: Props) {
  return (
    <article className="group overflow-hidden border border-zen-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(80,45,60,0.08)]">
      <ImagePlaceholder src={image} alt={`${title} – Zem Beauty & More`} label="SERVICE IMAGE" className="aspect-[4/3]" />
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="text-[9px] font-bold tracking-[0.15em] text-zen-accent">{number}</span>
          {price ? <span className="text-xs font-bold text-zen-accent-dark">{price}</span> : null}
        </div>
        <h3 className="mt-4 font-display text-2xl font-normal">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-zen-muted">{text}</p>
        <Link href="/booking/" className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em]">
          Termin buchen
          <ArrowUpRight size={14} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
