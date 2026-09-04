import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pomoc",
  description:
    "Instrukcja obsługi wachty, skróty klawiszowe, najczęstsze kłopoty techniczne i sposób zgłaszania błędów.",
  alternates: { canonical: "/pomoc" }
};

export default function Pomoc() {
  return (
    <article className="band">
      <div className="shell shell--narrow prose">
        <span className="eyebrow">Pomoc</span>
        <h1>Obsługa, skróty i kłopoty techniczne</h1>

        <h2>Skróty klawiszowe</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Klawisz</th>
              <th scope="col">Działanie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1–6</td>
              <td>Przejście do wybranej stacji</td>
            </tr>
            <tr>
              <td>O</td>
              <td>Obchód: pełny odczyt czterech wskaźników</td>
            </tr>
            <tr>
              <td>N</td>
              <td>Rozpoczęcie naprawy wskazanego elementu</td>
            </tr>
            <tr>
              <td>T</td>
              <td>Zlecenie transportu z magazynu</td>
            </tr>
            <tr>
              <td>D</td>
              <td>Otwarcie dziennika stacji</td>
            </tr>
            <tr>
              <td>Spacja</td>
              <td>Potwierdzenie wywołania z morza</td>
            </tr>
          </tbody>
        </table>

        <h2>Gdy coś nie działa</h2>
        <p>
          <strong>Ekran zostaje czarny po wejściu.</strong> Najczęściej blokuje go rozszerzenie
          ograniczające skrypty. Gra nie korzysta z zewnętrznych bibliotek, więc wystarczy wpuścić
          samą domenę serwisu.
        </p>
        <p>
          <strong>Plansza zamarza na kilka sekund.</strong> To zerwane połączenie z serwerem stanu.
          Gra wznawia się sama, gdy łącze wróci — stan jest po stronie serwera, więc nic nie ginie.
        </p>
        <p>
          <strong>Nie słychać sygnałów.</strong> Przeglądarki blokują dźwięk do pierwszego
          kliknięcia w oknie. Wystarczy kliknąć gdziekolwiek na planszy.
        </p>
        <p>
          <strong>Kod załogi nie działa.</strong> Kody wygasają po czternastu dniach bez wachty.
          Nowy generuje dowolna osoba z odcinka w widoku dziennika.
        </p>

        <h2>Zgłaszanie błędów</h2>
        <p>
          Napisz na <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> i podaj: co robiłeś,
          co się stało, nazwę przeglądarki oraz godzinę zdarzenia. Godzina jest najważniejsza —
          po niej odnajdujemy zapis sesji na serwerze.
        </p>
        <p>
          Sprawy dotyczące danych osobowych opisaliśmy w{" "}
          <Link href="/polityka-prywatnosci">polityce prywatności</Link>, a zasady korzystania z
          serwisu w <Link href="/regulamin">regulaminie</Link>.
        </p>
      </div>
    </article>
  );
}
