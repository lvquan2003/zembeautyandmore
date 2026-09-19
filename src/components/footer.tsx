import Link from "next/link";
import { Instagram, MapPin, Phone } from "lucide-react";
import { site } from "@/data/content";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const paths = {
    home: `/${locale}/`,
    about: `/${locale}/${locale === "de" ? "ueber-uns" : "about"}/`,
    price: `/${locale}/${locale === "de" ? "preis" : "prices"}/`,
    gallery: `/${locale}/${locale === "de" ? "galerien" : "gallery"}/`,
    appointment: `/${locale}/${locale === "de" ? "termin" : "appointment"}/`,
    contact: `/${locale}/${locale === "de" ? "kontakt" : "contact"}/`,
  };
  return (
    <footer className="border-t border-glory-line bg-glory-black text-white">
      <div className="mx-auto grid w-[min(1180px,calc(100%-28px))] gap-12 py-16 sm:w-[min(1180px,calc(100%-48px))] md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-4xl tracking-[-.04em]">ZEM</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-white/60">
            {t.footer.description}
          </p>
          <Link
            href={site.whatsapp}
            target="_blank"
            className="mt-7 inline-flex border border-white/30 px-5 py-3 text-[9px] font-bold uppercase tracking-[.15em] transition hover:border-glory-gold hover:bg-glory-gold hover:text-glory-black"
          >
            {t.footer.appointment}
          </Link>
        </div>
        <div>
          <p className="glory-kicker text-glory-gold">{t.footer.navigation}</p>
          <div className="mt-5 grid gap-3 text-sm text-white/70">
            <Link href={paths.home} className="text-white hover:text-black">{t.nav.home}</Link>
            <Link href={paths.about}>{t.nav.about}</Link>
            <Link href={paths.price}>{t.nav.price}</Link>
            <Link href={paths.gallery}>{t.nav.gallery}</Link>
            <Link href={paths.appointment}>{t.nav.appointment}</Link>
            <Link href={paths.contact}>{t.nav.contact}</Link>
          </div>
        </div>
        <div>
          <p className="glory-kicker text-glory-gold">{t.footer.contact}</p>
          <div className="mt-5 grid gap-3 text-sm text-white/70">
            <span className="flex gap-2">
              <MapPin size={15} /> {site.address}
            </span>
            <a href={`tel:${site.phone}`} className="flex gap-2">
              <Phone size={15} /> {site.phone}
            </a>
            <a
              href={`https://instagram.com/${site.instagram.replace("@", "")}`}
              target="_blank"
              className="flex gap-2"
            >
              <Instagram size={15} /> {site.instagram}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-[8px] uppercase tracking-[.15em] text-white/40">
        © {new Date().getFullYear()} Zem Beauty & More · {t.footer.copyright}
      </div>
    </footer>
  );
}
