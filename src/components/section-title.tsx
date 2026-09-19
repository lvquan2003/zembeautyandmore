type Props = { eyebrow?: string; title: string; description?: string; center?: boolean };
export function SectionTitle({ eyebrow, title, description, center = false }: Props) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="glory-kicker text-glory-gold">{eyebrow}</p>}
      <h2 className="glory-title mt-3 text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      {description && <p className="mt-5 text-sm leading-7 text-glory-muted sm:text-base">{description}</p>}
    </div>
  );
}
