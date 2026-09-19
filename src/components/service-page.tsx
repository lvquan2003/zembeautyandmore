import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PageHero } from "@/components/page-hero";
import { services, serviceNamesEn, site } from "@/data/content";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
export default function ServicePage({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const service = services.find((s) => s.slug === slug) || services[0];
  const t = getDictionary(locale);
  const title = locale === "de" ? service.title : serviceNamesEn[service.slug];
  const short = locale === "de" ? service.short : service.shortEn;
  const description =
    locale === "de" ? service.description : service.descriptionEn;
  const base = locale === "de" ? "leistungen" : "services";
  return (
    <>
      <PageHero
        script={t.pages.services.script}
        title={title}
        image={service.image}
        alt={title}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] gap-12 sm:w-[min(1120px,calc(100%-64px))] lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <ScrollReveal>
            <ImagePlaceholder
              src={service.image}
              alt={title}
              className="aspect-[4/3]"
            />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="glory-kicker text-glory-gold">
              {locale === "de"
                ? service.price
                : service.price
                    .replace("ab ", "from ")
                    .replace("auf Anfrage", "on request")}
            </p>
            <h2 className="glory-title mt-4 text-5xl text-[#4e4a45]">
              {short}
            </h2>
            <div className="mt-6 h-px w-28 bg-glory-gold" />
            <p className="mt-6 text-sm leading-8 text-glory-muted">
              {description}
            </p>
            <Link
              href={site.whatsapp}
              target="_blank"
              className="glory-dark-cta mt-8 inline-flex items-center gap-2 px-7 py-4 text-[10px] font-bold uppercase tracking-[.16em]"
            >
              {t.buttons.book}
              <ArrowRight size={14} />
            </Link>
            <Link
              href={`/${locale}/${base}/`}
              className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.14em] text-[#4e4a45] transition hover:text-glory-gold"
            >
              ← {t.buttons.backToServices}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}