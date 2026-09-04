export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://domena-docelowa.pl";

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "kontakt@domena-docelowa.pl";

export const nav = [
  { href: "/swiat", label: "Świat" },
  { href: "/rozgrywka", label: "Rozgrywka" },
  { href: "/pierwsza-wachta", label: "Pierwsza wachta" },
  { href: "/dziennik", label: "Dziennik prac" },
  { href: "/pomoc", label: "Pomoc" },
  { href: "/kontakt", label: "Kontakt" }
];

export const legalNav = [
  { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
  { href: "/regulamin", label: "Regulamin" },
  { href: "/pliki-cookies", label: "Pliki cookies" }
];
