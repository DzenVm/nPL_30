import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Jakie dane zbieramy w serwisie i w grze, po co je przetwarzamy, jak długo je trzymamy i z jakich praw możesz skorzystać.",
  alternates: { canonical: "/polityka-prywatnosci" },
  robots: { index: true, follow: true }
};

export default function Prywatnosc() {
  return (
    <article className="band">
      <div className="shell shell--narrow prose">
        <span className="eyebrow">Dokument</span>
        <h1>Polityka prywatności</h1>
        <p className="lede">
          Zbieramy tak mało danych, jak się da. Poniżej opisujemy dokładnie, co i po co, bez
          odsyłania do trzech innych dokumentów.
        </p>

        <h2>Kto odpowiada za dane</h2>
        <p>
          Administratorem danych jest zespół prowadzący ten serwis. Kontakt we wszystkich sprawach
          dotyczących danych: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Na wiadomości
          odpowiadamy w ciągu miesiąca, zwykle znacznie szybciej.
        </p>

        <h2>Jakie dane zbieramy</h2>
        <ul>
          <li>
            <strong>Adres e-mail</strong> — tylko wtedy, gdy sam do nas napiszesz. Trzymamy go w
            skrzynce razem z treścią korespondencji.
          </li>
          <li>
            <strong>Dane techniczne żądania</strong> — adres IP, typ przeglądarki, adres podstrony i
            czas wejścia. Zapisuje je serwer w logach, tak jak każdy serwer WWW.
          </li>
          <li>
            <strong>Stan rozgrywki</strong> — kod załogi, stan sprzętu i zapasów na odcinku. Kod
            załogi nie jest powiązany z żadną osobą; nie prosimy o imię, nazwisko ani wiek.
          </li>
        </ul>
        <p>
          Nie prowadzimy profilowania, nie kupujemy danych od nikogo i nie budujemy profili
          reklamowych na podstawie zachowania w grze.
        </p>

        <h2>Po co je przetwarzamy</h2>
        <p>
          Korespondencję — żeby odpowiedzieć na twoją wiadomość (art. 6 ust. 1 lit. b i f RODO).
          Logi serwera — dla bezpieczeństwa i diagnostyki, na podstawie prawnie uzasadnionego
          interesu (art. 6 ust. 1 lit. f RODO). Stan rozgrywki — żeby gra działała, czyli w celu
          wykonania usługi, o którą prosisz (art. 6 ust. 1 lit. b RODO).
        </p>

        <h2>Jak długo je trzymamy</h2>
        <ul>
          <li>logi serwera — 30 dni, potem są usuwane automatycznie,</li>
          <li>korespondencja — do 24 miesięcy od ostatniej wiadomości w wątku,</li>
          <li>stan rozgrywki — 14 dni od ostatniej wachty na danym kodzie załogi.</li>
        </ul>

        <h2>Komu je powierzamy</h2>
        <p>
          Serwis stoi na infrastrukturze dostawcy hostingu, który przetwarza dane wyłącznie na nasze
          polecenie i na podstawie umowy powierzenia. Poza tym nie przekazujemy danych nikomu — w
          szczególności nie sprzedajemy ich ani nie udostępniamy sieciom reklamowym. Dane mogą być
          przetwarzane poza Europejskim Obszarem Gospodarczym wyłącznie w zakresie, w jakim robi to
          dostawca hostingu, w oparciu o standardowe klauzule umowne.
        </p>

        <h2>Reklama i pomiary</h2>
        <p>
          Jeżeli trafiłeś tu z reklamy, sieć reklamowa zna sam fakt kliknięcia — my nie
          otrzymujemy przy tym twoich danych osobowych. Jeśli w przyszłości uruchomimy pomiar
          skuteczności reklam z użyciem plików cookies, poprosimy o zgodę przed ich zapisaniem i
          opiszemy to na stronie <Link href="/pliki-cookies">o plikach cookies</Link>.
        </p>

        <h2>Twoje prawa</h2>
        <p>
          Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia
          przetwarzania, przenoszenia oraz sprzeciwu wobec przetwarzania opartego na naszym
          uzasadnionym interesie. Wystarczy jedna wiadomość na adres podany wyżej. Możesz też złożyć
          skargę do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
        </p>

        <h2>Dzieci</h2>
        <p>
          Serwis kierujemy do osób od 12. roku życia. Nie zbieramy świadomie danych od młodszych
          użytkowników; jeśli okaże się, że takie dane do nas trafiły, usuniemy je niezwłocznie po
          otrzymaniu zgłoszenia.
        </p>

        <h2>Zmiany</h2>
        <p>
          Gdy zmienimy sposób przetwarzania danych, zaktualizujemy ten dokument i opiszemy zmianę w{" "}
          <Link href="/dziennik">dzienniku prac</Link>, żeby dało się ją zauważyć bez porównywania
          wersji.
        </p>
      </div>
    </article>
  );
}
