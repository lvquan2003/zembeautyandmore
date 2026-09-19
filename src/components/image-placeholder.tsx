type Props = {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
};

export function ImagePlaceholder({ src, alt, label = "YOUR IMAGE", className = "", priority = false }: Props) {
  return (
    <div className={`relative overflow-hidden bg-glory-cream ${className}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-[1.02]" loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,#f4f0e8,#e7e0d3)]">
          <div className="text-center">
            <div className="mx-auto mb-3 h-px w-10 bg-glory-gold" />
            <span className="text-[8px] font-bold uppercase tracking-[.22em] text-glory-muted">{label}</span>
            <div className="mx-auto mt-3 h-px w-10 bg-glory-gold" />
          </div>
        </div>
      )}
    </div>
  );
}
