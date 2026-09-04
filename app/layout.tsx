import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gra przeglądarkowa o utrzymaniu świateł na bałtyckim wybrzeżu",
    template: "%s — serwis gry przeglądarkowej"
  },
  description:
    "Kooperacyjna gra w przeglądarce: sześć stacji brzegowych, zmienna pogoda i wachta, którą prowadzi się z innymi graczami. Opis świata, zasad i wymagań technicznych.",
  keywords: [
    "gra przeglądarkowa",
    "gra kooperacyjna",
    "latarnie morskie",
    "gra po polsku",
    "gra bez instalacji"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    title: "Gra przeglądarkowa o utrzymaniu świateł na bałtyckim wybrzeżu",
    description:
      "Sześć stacji brzegowych, jedna nocna wachta i drużyna, która musi utrzymać światła do świtu. Gra działa w przeglądarce, bez instalacji.",
    images: [{ url: "/art/latarnia-noc.svg", width: 1200, height: 675, alt: "Stacja brzegowa nocą" }]
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#0d1418",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <a className="skip" href="#tresc">
          Przejdź do treści
        </a>
        <SiteHeader />
        <main id="tresc">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
