export const site = {
  name: "Zem Beauty & More", shortName: "ZEM", tagline: "Luxury Nails & Beauty",
  address: "Adresse hier eintragen", city: "Deutschland", phone: "+49 000 000000", email: "hello@zem-beauty.de", instagram: "@zem.beauty", whatsapp: "https://wa.me/490000000000",
};

const glory = "https://goldandglory.berlin/wp-content/uploads";
export const siteImages = {
  hero: "https://gialongadv.com/wp-content/uploads/2024/12/thiet-ke-tiem-nail-9.jpg",
  about: "https://goldandglory.berlin/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-12-05-at-3.13.29-PM-qy1xkc18jhbmupb1a5jvfk7jzrzmwletgjoqy8ou9s.jpeg",
  studio: "https://goldandglory.berlin/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-12-05-at-3.13.29-PM-qy1xkc18jhbmupb1a5jvfk7jzrzmwletgjoqy8ou9s.jpeg",
  booking: "https://goldandglory.berlin/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-12-05-at-3.13.29-PM-qy1xkc18jhbmupb1a5jvfk7jzrzmwletgjoqy8ou9s.jpeg",
  contact: "https://goldandglory.berlin/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-12-05-at-3.13.29-PM-qy1xkc18jhbmupb1a5jvfk7jzrzmwletgjoqy8ou9s.jpeg",
};

export const heroSlides = [
  { image: siteImages.hero, alt: "Beauty studio" },
  { image: `${glory}/2020/01/1-Shellac.jpg`, alt: "Shellac nails" },
  { image: `${glory}/2020/01/GELN%C3%84GEL-1.jpg`, alt: "Gel nail design" },
];

export const galleryImages = [
  { src: `${glory}/2020/01/1-Shellac.jpg`, alt: "Shellac nails" },
  { src: `${glory}/2020/01/shellac2.jpg`, alt: "Shellac color collection" },
  { src: `${glory}/2020/01/shellac.jpg`, alt: "Shellac colors" },
  { src: `${glory}/2020/01/GELN%C3%84GEL-1.jpg`, alt: "Gel nails" },
  { src: `${glory}/2020/01/Microblading-1.jpg`, alt: "Microblading" },
  { src: siteImages.studio, alt: "Beauty studio" },
];

export const services = [
  { slug: "shellac", title: "SHELLAC™ – CND™", short: "Professioneller Glanz für gepflegte Nägel.", description: "Ein elegantes, haltbares Finish mit sauberer Form und einem gepflegten Look.", shortEn: "Professional shine for beautifully cared-for nails.", descriptionEn: "An elegant, long-lasting finish with a clean shape and polished look.", price: "ab 30 €", image: `${glory}/2020/01/1-Shellac.jpg` },
  { slug: "gelnaegel", title: "GELNÄGEL", short: "Form, Länge und Design nach deinem Stil.", description: "Von natürlich bis ausdrucksstark – eine stabile Basis für deinen individuellen Look.", shortEn: "Shape, length and design made for your style.", descriptionEn: "From natural to expressive – a strong base for your individual look.", price: "ab 35 €", image: `${glory}/2020/01/GELN%C3%84GEL-1.jpg` },
  { slug: "lash-lifting", title: "LASH LIFTING", short: "Natürlich geschwungene Wimpern.", description: "Ein offener, frischer Blick ohne klassischen Extension-Look.", shortEn: "Naturally lifted lashes.", descriptionEn: "An open, fresh look without the classic extension effect.", price: "ab 45 €", image: siteImages.studio },
  { slug: "microblading", title: "MICROBLADING – PERMANENT MAKE UP", short: "Feine Härchenoptik für definierte Augenbrauen.", description: "Individuelle Form, Brow Mapping und eine natürliche Optik.", shortEn: "Fine hair strokes for defined brows.", descriptionEn: "Individual shaping, brow mapping and a natural-looking result.", price: "auf Anfrage", image: `${glory}/2020/01/Microblading-1.jpg` },
  { slug: "wimpernverlaengerung", title: "WIMPERNVERLÄNGERUNG", short: "Mehr Ausdruck für deinen Augenaufschlag.", description: "Individuell angepasste Extensions für einen natürlichen oder glamourösen Look.", shortEn: "More expression for your eyes.", descriptionEn: "Individually tailored extensions for a natural or glamorous look.", price: "auf Anfrage", image: siteImages.studio },
];

export const serviceNamesEn: Record<string,string> = { shellac: "SHELLAC™ – CND™", gelnaegel: "GEL NAILS", "lash-lifting": "LASH LIFTING", microblading: "MICROBLADING – PERMANENT MAKE UP", wimpernverlaengerung: "EYELASH EXTENSIONS" };

export const prices = [
  { category: "Nails", items: [["Maniküre", "25 €"], ["Shellac / Gel", "30 €"], ["French / Chrome / Cat Eye", "+5 €"], ["Tips Verlängerung", "+5 €"], ["Gelnägel Modellage", "35 €"], ["Nail Design", "ab 5 €"]] },
  { category: "Pediküre", items: [["Spa Pediküre", "35 €"], ["Pediküre + Lack", "ab 40 €"], ["Shellac / Gel Füße", "ab 45 €"]] },
  { category: "Lashes & Brows", items: [["Lash Lifting ohne Färben", "45 €"], ["Lash Lifting mit Färben", "50 €"], ["Augenbrauen zupfen", "19 €"], ["Augenbrauen zupfen + färben", "25 €"], ["Wimpernverlängerung", "auf Anfrage"]] },
];

export const pricesEn = [
  { category: "Nails", items: [["Manicure", "25 €"], ["Shellac / Gel", "30 €"], ["French / Chrome / Cat Eye", "+5 €"], ["Tip extension", "+5 €"], ["Gel nail extension", "35 €"], ["Nail design", "from 5 €"]] },
  { category: "Pedicure", items: [["Spa pedicure", "35 €"], ["Pedicure + polish", "from 40 €"], ["Shellac / Gel toes", "from 45 €"]] },
  { category: "Lashes & Brows", items: [["Lash lifting without tint", "45 €"], ["Lash lifting with tint", "50 €"], ["Eyebrow shaping", "19 €"], ["Eyebrow shaping + tint", "25 €"], ["Eyelash extensions", "on request"]] },
];

export const openingHours = ["10:00 – 20:00", "10:00 – 20:00", "10:00 – 20:00", "10:00 – 20:00", "10:00 – 20:00", "10:00 – 18:00", "Geschlossen"];
export const openingHoursEn = ["10:00 – 20:00", "10:00 – 20:00", "10:00 – 20:00", "10:00 – 20:00", "10:00 – 20:00", "10:00 – 18:00", "Closed"];
