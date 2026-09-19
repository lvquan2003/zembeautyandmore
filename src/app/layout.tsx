import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Zem Beauty & More | Luxury Nails & Beauty", template: "%s | Zem Beauty & More" },
  description: "Zem Beauty & More – Luxury Nails, Beauty, Lashes & Brows.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html><body>{children}</body></html>;
}
