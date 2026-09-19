"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { services, serviceNamesEn, site } from "@/data/content";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

const routeMap: Record<string, string> = {
  "ueber-uns": "about",
  about: "ueber-uns",
  preis: "prices",
  prices: "preis",
  galerien: "gallery",
  gallery: "galerien",
  termin: "appointment",
  appointment: "termin",
  kontakt: "contact",
  contact: "kontakt",
  leistungen: "services",
  services: "leistungen",
};

function switchLocalePath(pathname: string, target: Locale) {
  const parts = pathname.split("/").filter(Boolean);
  if (!parts.length) return `/${target}/`;
  const rest = parts.slice(1);
  if (!rest.length) return `/${target}/`;
  if (rest[0] === "leistungen" || rest[0] === "services") {
    const section = target === "de" ? "leistungen" : "services";
    return `/${target}/${section}/${rest[1] ?? ""}`
      .replace(/\/\/+/g, "/")
      .replace(/([^/])$/, "$1/");
  }
  const mapped = routeMap[rest[0]] ?? rest[0];
  return `/${target}/${mapped}/`;
}

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const home = `/${locale}/`;
  const about = `/${locale}/${locale === "de" ? "ueber-uns" : "about"}/`;
  const price = `/${locale}/${locale === "de" ? "preis" : "prices"}/`;
  const gallery = `/${locale}/${locale === "de" ? "galerien" : "gallery"}/`;
  const appointment = `/${locale}/${locale === "de" ? "termin" : "appointment"}/`;
  const contact = `/${locale}/${locale === "de" ? "kontakt" : "contact"}/`;
  const serviceBase = locale === "de" ? "leistungen" : "services";
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${scrolled ? "bg-[#332f2a]/90 shadow-[0_8px_30px_rgba(0,0,0,.12)] backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="mx-auto grid h-[84px] w-[min(1200px,calc(100%-28px))] grid-cols-[1fr_auto_1fr] items-center sm:w-[min(1200px,calc(100%-56px))]">
          <nav className="hidden items-center justify-end gap-7 pr-8 lg:flex">
            <Link href={home} className="glory-nav-link">
              {t.nav.home}
            </Link>
            <Link href={about} className="glory-nav-link">
              {t.nav.about}
            </Link>
            <div
              className="relative py-4"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className="glory-nav-link flex items-center gap-1"
              >
                {t.nav.services}
                <ChevronDown size={12} />
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 top-[calc(100%-1px)] w-72 -translate-x-1/2 border border-white/15 bg-[#3c3832]/95 p-2 shadow-2xl backdrop-blur-xl">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${locale}/${serviceBase}/${s.slug}/`}
                      className="block px-4 py-3 text-[10px] font-semibold tracking-[.1em] text-white/90 transition-colors duration-200 hover:bg-glory-gold hover:text-[#302d29]"
                    >
                      {locale === "de" ? s.title : serviceNamesEn[s.slug]}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
          <Link
            href={home}
            className="group justify-self-center text-center"
            aria-label="Zem Beauty & More"
          >
            <span className="block font-display text-4xl leading-none tracking-[-.05em] text-glory-gold">
              ZEM
            </span>
            <span className="mt-0.5 block text-[6px] font-semibold uppercase tracking-[.28em] text-glory-gold/90">
              Beauty & More
            </span>
          </Link>
          <nav className="hidden items-center gap-7 pl-8 lg:flex">
            <Link href={price} className="glory-nav-link">
              {t.nav.price}
            </Link>
            <Link href={gallery} className="glory-nav-link">
              {t.nav.gallery}
            </Link>
            <Link href={appointment} className="glory-nav-link">
              {t.nav.appointment}
            </Link>
            <Link href={contact} className="glory-nav-link">
              {t.nav.contact}
            </Link>
            <div className="flex items-center gap-2 border-l border-white/20 pl-5 text-[9px] font-bold tracking-[.12em]">
              <Link
                href={switchLocalePath(pathname, "de")}
                className={
                  locale === "de"
                    ? "text-glory-gold"
                    : "text-white/55 hover:text-white"
                }
              >
                DE
              </Link>
              <span className="text-white/25">|</span>
              <Link
                href={switchLocalePath(pathname, "en")}
                className={
                  locale === "en"
                    ? "text-glory-gold"
                    : "text-white/55 hover:text-white"
                }
              >
                EN
              </Link>
            </div>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="absolute right-0 flex h-11 w-11 items-center justify-center border border-white/25 text-white lg:hidden"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-[90] bg-[#3c3832] text-white transition-all duration-500 lg:hidden ${open ? "visible opacity-100" : "pointer-events-none invisible opacity-0"}`}
      >
        <div className="mx-auto flex h-full w-[min(1200px,calc(100%-40px))] flex-col pt-28">
          <div className="overflow-y-auto">
            <div className="mb-7 flex gap-5 border-b border-white/10 pb-5 text-xs font-bold tracking-[.16em]">
              <Link
                href={switchLocalePath(pathname, "de")}
                onClick={() => setOpen(false)}
                className={
                  locale === "de" ? "text-glory-gold" : "text-white/60"
                }
              >
                DE
              </Link>
              <Link
                href={switchLocalePath(pathname, "en")}
                onClick={() => setOpen(false)}
                className={
                  locale === "en" ? "text-glory-gold" : "text-white/60"
                }
              >
                EN
              </Link>
            </div>
            <Link
              href={home}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-4 font-display text-3xl"
            >
              {t.nav.home}
            </Link>
            <Link
              href={about}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-4 font-display text-3xl"
            >
              {t.nav.about}
            </Link>
            <p className="mt-6 border-b border-glory-gold pb-3 text-[10px] font-bold uppercase tracking-[.2em] text-glory-gold">
              {t.nav.services}
            </p>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${locale}/${serviceBase}/${s.slug}/`}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-3 text-sm text-white/75"
              >
                {locale === "de" ? s.title : serviceNamesEn[s.slug]}
              </Link>
            ))}
            {[
              [price, t.nav.price],
              [gallery, t.nav.gallery],
              [appointment, t.nav.appointment],
              [contact, t.nav.contact],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-4 font-display text-3xl"
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            href={site.whatsapp}
            target="_blank"
            onClick={() => setOpen(false)}
            className="glory-cta mb-8 mt-auto flex items-center justify-center bg-glory-gold py-4 text-[10px] font-bold uppercase tracking-[.16em]"
          >
            {t.buttons.book}
          </Link>
        </div>
      </div>
    </>
  );
}
