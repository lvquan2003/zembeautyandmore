import { ImagePlaceholder } from "./image-placeholder";

type Props = {
  src?: string;
  alt: string;
  title: string;
  category: string;
  className?: string;
};

export function GalleryCard({ src, alt, title, category, className = "" }: Props) {
  return (
    <figure className={`group relative m-0 overflow-hidden ${className}`}>
      <ImagePlaceholder src={src} alt={alt} label="NAIL IMAGE" className="aspect-square w-full" />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent px-4 pb-4 pt-16 text-white sm:px-5 sm:pb-5">
        <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/75">{category}</p>
        <p className="mt-1 font-display text-lg sm:text-xl">{title}</p>
      </figcaption>
    </figure>
  );
}
