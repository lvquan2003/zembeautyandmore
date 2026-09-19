import type { ReactNode } from "react"; import { notFound } from "next/navigation"; import { Header } from "@/components/header"; import { Footer } from "@/components/footer"; import { locales, isLocale, type Locale } from "@/i18n/config";
export function generateStaticParams(){return locales.map(locale=>({locale}));}
export default async function LocaleLayout({children,params}:{children:ReactNode;params:Promise<{locale:string}>}){const {locale}=await params; if(!isLocale(locale)) notFound(); return <><Header locale={locale}/><main>{children}</main><Footer locale={locale}/></>;}
