/**
 * Warunki na wybrzeżu liczy serwer przy każdym żądaniu — ten sam model steruje
 * planszą w grze. Bałtyk nie ma pływów oceanicznych, więc poziomem wody rządzi
 * sejsza: powolne kołysanie całego akwenu o okresie bliskim 26,5 godziny,
 * na które nakłada się wiatr i spiętrzenie przy brzegu.
 */

const SEJSZA_MIN = 1590; // okres kołysania akwenu w minutach
const STATIONS = ["Rozewie", "Stilo", "Jastarnia", "Krynica Morska", "Gąski", "Ustka"];

type Warunki = {
  znacznik: string;
  faza: string;
  poziom: number;
  wiatr: number;
  kierunek: string;
  widocznosc: string;
  stacja: string;
  nocnaWachta: boolean;
};

function szum(seed: number): number {
  const x = Math.sin(seed * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

export function warunkiNaTeraz(teraz = new Date()): Warunki {
  const minuty = Math.floor(teraz.getTime() / 60000);
  const faza = ((minuty % SEJSZA_MIN) / SEJSZA_MIN) * Math.PI * 2;
  const poziom = Math.round((Math.sin(faza) * 0.34 + 0.5) * 100) / 100;
  const rosnie = Math.cos(faza) > 0;

  const wiatr = Math.round(3 + szum(Math.floor(minuty / 90)) * 14);
  const kierunki = ["NW", "N", "NE", "W", "SW", "SE"];
  const kierunek = kierunki[Math.floor(szum(Math.floor(minuty / 180) + 11) * kierunki.length)];

  const godzina = teraz.getUTCHours() + 1; // czas środkowoeuropejski
  const nocnaWachta = godzina >= 21 || godzina < 5;

  const mgla = szum(Math.floor(minuty / 120) + 3);
  const widocznosc = mgla > 0.72 ? "mgła, poniżej 400 m" : mgla > 0.45 ? "zamglenie, 1–3 Mm" : "czysto, powyżej 6 Mm";

  return {
    znacznik: teraz.toISOString(),
    faza: rosnie ? "woda przybiera" : "woda opada",
    poziom,
    wiatr,
    kierunek,
    widocznosc,
    stacja: STATIONS[Math.floor(szum(Math.floor(minuty / 240) + 7) * STATIONS.length)],
    nocnaWachta
  };
}

export function formatGodzina(iso: string): string {
  return new Intl.DateTimeFormat("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Warsaw"
  }).format(new Date(iso));
}

export function formatData(iso: string): string {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Warsaw"
  }).format(new Date(iso));
}
