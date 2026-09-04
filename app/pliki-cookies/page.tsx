import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pliki cookies",
  description:
    "Które pliki zapisujemy w przeglądarce, do czego służą i jak je usunąć. Bez skryptów śledzących i bez profilowania.",
  alternates: { canonical: "/pliki-cookies" }
};

export default function Cookies() {
  return (
    <article className="band">
      <div className="shell shell--narrow prose">
        <span className="eyebrow">Dokument</span>
        <h1>Pliki cookies i pamięć przeglądarki</h1>
        <p className="lede">
          Serwis nie ma banera zgody, bo nie ma czego zgłaszać: nie zapisujemy niczego, co
          wymagałoby twojej zgody.
        </p>

        <h2>Co zapisujemy</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Nazwa</th>
              <th scope="col">Rodzaj</th>
              <th scope="col">Do czego służy</th>
              <th scope="col">Czas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>kod-zalogi</td>
              <td>pamięć lokalna</td>
              <td>Pamięta ostatni kod załogi, żeby nie przepisywać go przy każdym wejściu</td>
              <td>do wyczyszczenia danych przeglądarki</td>
            </tr>
            <tr>
              <td>ustawienia-widoku</td>
              <td>pamięć lokalna</td>
              <td>Zapamiętuje wyłączony ruch tła i poziom głośności sygnałów</td>
              <td>do wyczyszczenia danych przeglądarki</td>
            </tr>
            <tr>
              <td>sesja-wachty</td>
              <td>cookie techniczne</td>
              <td>Wiąże okno przeglądarki z trwającą sesją na serwerze</td>
              <td>do zamknięcia przeglądarki</td>
            </tr>
          </tbody>
        </table>
        <p>
          Wszystkie trzy są niezbędne do działania usługi, o którą prosisz, więc zgodnie z prawem
          telekomunikacyjnym nie wymagają zgody. Żaden z nich nie służy do reklamy ani do śledzenia
          między stronami.
        </p>

        <h2>Czego nie ma</h2>
        <p>
          Nie osadzamy zewnętrznych czcionek, map, odtwarzaczy ani przycisków serwisów
          społecznościowych. Nie korzystamy z narzędzi analitycznych zbierających identyfikatory
          użytkowników. Cała grafika i cały kod ładują się z tej samej domeny.
        </p>

        <h2>Jak to usunąć</h2>
        <p>
          Każda przeglądarka pozwala wyczyścić dane witryny w ustawieniach prywatności. Po
          wyczyszczeniu stracisz zapamiętany kod załogi i ustawienia widoku — reszta serwisu działa
          bez zmian. Podstrony opisowe czytają się w całości również przy zablokowanym zapisie
          danych.
        </p>

        <h2>Jeśli to się zmieni</h2>
        <p>
          Gdybyśmy kiedyś uruchomili pomiar skuteczności kampanii reklamowych, pojawi się pytanie o
          zgodę przed zapisaniem czegokolwiek, a ta strona i{" "}
          <Link href="/polityka-prywatnosci">polityka prywatności</Link> zostaną zaktualizowane tego
          samego dnia.
        </p>
      </div>
    </article>
  );
}
