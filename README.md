# Serwis gry przeglądarkowej — wachta na wybrzeżu

Strona opisowa gry kooperacyjnej o utrzymaniu świateł nawigacyjnych. Cała treść po polsku,
kierowana na rynek polski.

## Stos

- Next.js 16 (App Router, React 19, TypeScript strict)
- Renderowanie po stronie serwera: strona startowa i „pierwsza wachta” są dynamiczne
  (`force-dynamic`), bo przy każdym żądaniu przeliczają warunki na odcinku (`lib/wachta.ts`)
- Warstwa wizualna: własne CSS Modules i zmienne CSS, bez frameworka klas i bez zewnętrznych
  czcionek — nic nie ładuje się spoza domeny
- Grafika: sześć autorskich rysunków wektorowych w `public/art`, ikony w `app/icon.svg`
  i `app/apple-icon.svg`

## Uruchomienie lokalne

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run typecheck
```

## Zmienne środowiskowe

Skopiuj `.env.example` do `.env.local`. `NEXT_PUBLIC_SITE_URL` wskazuje na `https://fyedoni.live`
i wpływa wyłącznie na adresy bezwzględne w `sitemap.xml`, `robots.txt` i znacznikach Open Graph.
Wszystkie odnośniki wewnętrzne są względne, więc ewentualna zmiana domeny sprowadza się do podmiany
tej jednej wartości. Gdy zmienna jest pusta lub niepoprawna, kod wraca do adresu wpisanego
w `lib/site.ts`.

## Wdrożenie na Vercel

1. Podłącz repozytorium w panelu Vercel — framework wykrywa się sam (`vercel.json`, region `fra1`).
2. Ustaw `NEXT_PUBLIC_SITE_URL` i `NEXT_PUBLIC_CONTACT_EMAIL` w zmiennych projektu.
3. Podepnij domenę `fyedoni.live` wraz z wariantem `www` i ustaw przekierowanie na wersję bez
   `www`, żeby mapa strony i adresy kanoniczne wskazywały jeden adres.

## Struktura

```
app/            trasy App Routera, dokumenty formalne, robots i sitemap
components/     nagłówek, stopka oraz sekcje strony startowej
lib/            konfiguracja serwisu i model warunków na odcinku
public/art/     rysunki wektorowe używane w treści
```
