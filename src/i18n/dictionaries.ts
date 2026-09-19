import type { Locale } from "./config";

export type Translation = {
  nav: { home: string; about: string; services: string; price: string; gallery: string; appointment: string; contact: string };
  buttons: { book: string; learnMore: string; allImages: string; backToServices: string };
  home: {
    welcomeScript: string; welcomeTitle: string; welcomeText: string;
    servicesTitle: string; aboutScript: string; aboutTitle: string; aboutText: string;
    appointmentScript: string; appointmentTitle: string; galleryTitle: string;
  };
  pages: {
    about: { script: string; title: string; sectionScript: string; heading: string; text: string; personalTitle: string; personalText: string; modernTitle: string; modernText: string };
    price: { script: string; title: string; };
    gallery: { script: string; title: string };
    appointment: { script: string; title: string; intro: string };
    contact: { script: string; title: string; address: string; phone: string; email: string; hours: string };
    services: { script: string };
  };
  footer: { description: string; navigation: string; contact: string; appointment: string; copyright: string };
  days: string[];
  heroSlides: { kicker: string; title: string; subtitle: string; alt: string }[];
};

const commonHero = [
  { kicker: "Zem Beauty & More", title: "Luxury Nails & Beauty", subtitle: "Elegance. Care. Your moment.", alt: "Beauty studio" },
  { kicker: "Nails", title: "Beautifully Polished", subtitle: "Timeless colours and beautifully cared-for nails.", alt: "Shellac nails" },
  { kicker: "Nail Design", title: "Your Signature Look", subtitle: "Natural, elegant or uniquely yours.", alt: "Gel nail design" },
];

export const dictionaries: Record<Locale, Translation> = {
  de: {
    nav: { home: "HOME", about: "ÜBER UNS", services: "LEISTUNGEN", price: "PREIS", gallery: "GALERIEN", appointment: "TERMIN", contact: "KONTAKT" },
    buttons: { book: "Termin vereinbaren", learnMore: "Mehr erfahren", allImages: "Alle Bilder", backToServices: "Alle Leistungen" },
    home: { welcomeScript: "Willkommen bei", welcomeTitle: "Zem Beauty & More", welcomeText: "Ein Ort für gepflegte Nägel, schöne Details und eine entspannte Auszeit. Entdecke unsere Behandlungen und finde deinen persönlichen Beauty-Look.", servicesTitle: "Leistungen", aboutScript: "Über uns", aboutTitle: "Schönheit mit Gefühl.", aboutText: "Zem Beauty & More steht für einen modernen Beauty-Moment in entspannter Atmosphäre. Wir verbinden gepflegte Ergebnisse, persönliche Beratung und zeitlose Ästhetik.", appointmentScript: "Terminvereinbarungen", appointmentTitle: "Zeit für dich.", galleryTitle: "Galerien" },
    pages: {
      about: { script: "Über uns", title: "Zem Beauty", sectionScript: "Unser Studio", heading: "Ein Ort für Qualität, Ruhe und schöne Details.", text: "Bei Zem Beauty & More dreht sich alles um gepflegte Nägel, ausdrucksstarke Beauty-Looks und eine angenehme Zeit für dich. Wir setzen auf klare Formen, moderne Looks und persönliche Beratung.", personalTitle: "Persönlich", personalText: "Dein Look wird passend zu deinem Stil geplant.", modernTitle: "Modern", modernText: "Zeitlose Ästhetik statt kurzlebiger Trends." },
      price: { script: "Preis", title: "Preisliste" },
      gallery: { script: "Galerien", title: "Inspiration" },
      appointment: { script: "Termin", title: "Terminvereinbarungen", intro: "Wir freuen uns auf deine Anfrage und finden gemeinsam den passenden Termin." },
      contact: { script: "Kontakt", title: "Wir freuen uns auf dich.", address: "Adresse", phone: "Telefon", email: "E-Mail", hours: "Öffnungszeiten" },
      services: { script: "Leistungen" },
    },
    footer: { description: "Ein moderner Beauty-Ort mit Liebe zu schönen Details.", navigation: "Navigation", contact: "Kontakt", appointment: "Termin vereinbaren", copyright: "Impressum · Datenschutz" },
    days: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
    heroSlides: commonHero.map((x, i) => i === 0 ? { ...x, subtitle: "Eleganz. Pflege. Dein Moment." } : i === 1 ? { ...x, subtitle: "Zeitlose Farben und gepflegte Nägel." } : { ...x, subtitle: "Natürlich, elegant oder individuell." }),
  },
  en: {
    nav: { home: "HOME", about: "ABOUT US", services: "SERVICES", price: "PRICES", gallery: "GALLERY", appointment: "APPOINTMENT", contact: "CONTACT" },
    buttons: { book: "Book an appointment", learnMore: "Learn more", allImages: "View gallery", backToServices: "All services" },
    home: { welcomeScript: "Welcome to", welcomeTitle: "Zem Beauty & More", welcomeText: "A place for beautifully cared-for nails, refined details and a relaxing beauty moment. Discover our treatments and find your personal look.", servicesTitle: "Services", aboutScript: "About us", aboutTitle: "Beauty with feeling.", aboutText: "Zem Beauty & More is about a modern beauty experience in a relaxed atmosphere. We combine beautiful results, personal advice and timeless aesthetics.", appointmentScript: "Appointments", appointmentTitle: "Time for you.", galleryTitle: "Gallery" },
    pages: {
      about: { script: "About us", title: "Zem Beauty", sectionScript: "Our studio", heading: "A place for quality, calm and beautiful details.", text: "At Zem Beauty & More, everything is about beautifully cared-for nails, expressive beauty looks and an enjoyable moment for you. We focus on clean shapes, modern looks and personal advice.", personalTitle: "Personal", personalText: "Your look is planned around your style.", modernTitle: "Modern", modernText: "Timeless aesthetics instead of short-lived trends." },
      price: { script: "Prices", title: "Price list" },
      gallery: { script: "Gallery", title: "Inspiration" },
      appointment: { script: "Appointment", title: "Book your appointment", intro: "Send us your request and we will find the right appointment together." },
      contact: { script: "Contact", title: "We look forward to seeing you.", address: "Address", phone: "Phone", email: "Email", hours: "Opening hours" },
      services: { script: "Services" },
    },
    footer: { description: "A modern beauty space with a love for beautiful details.", navigation: "Navigation", contact: "Contact", appointment: "Book an appointment", copyright: "Imprint · Privacy" },
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    heroSlides: commonHero.map((x, i) => i === 0 ? { ...x, subtitle: "Elegance. Care. Your moment." } : i === 1 ? { ...x, subtitle: "Timeless colours and beautifully cared-for nails." } : { ...x, subtitle: "Natural, elegant or uniquely yours." }),
  },
};

export function getDictionary(locale: Locale) { return dictionaries[locale]; }
