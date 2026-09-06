const ADRES_SERWISU = "https://fyedoni.live";

/**
 * Adres bazowy bierzemy ze zmiennej projektu, ale nie ufamy jej w ciemno:
 * na hostingu bywa ustawiona i pusta, a wtedy `new URL("")` wywraca budowanie.
 * Vercel podstawia też VERCEL_PROJECT_PRODUCTION_URL bez schematu.
 */
function adresBazowy(): string {
  const jawny = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const zVercela = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const kandydat = jawny || (zVercela ? `https://${zVercela}` : "");

  if (!kandydat) return ADRES_SERWISU;

  const zeSchematem = /^https?:\/\//i.test(kandydat) ? kandydat : `https://${kandydat}`;

  try {
    return new URL(zeSchematem).origin;
  } catch {
    return ADRES_SERWISU;
  }
}

export const SITE_URL = adresBazowy();

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "kontakt@fyedoni.live";

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
