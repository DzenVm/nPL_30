import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Regulamin",
  description:
    "Zasady korzystania z serwisu i z gry: dostęp, konta i kody załogi, reklamacje, prawa autorskie oraz odpowiedzialność.",
  alternates: { canonical: "/regulamin" }
};

export default function Regulamin() {
  return (
    <article className="band">
      <div className="shell shell--narrow prose">
        <span className="eyebrow">Dokument</span>
        <h1>Regulamin serwisu</h1>

        <h2>1. Zakres</h2>
        <p>
          Regulamin określa zasady korzystania z serwisu opisującego przeglądarkową grę o utrzymaniu
          świateł nawigacyjnych oraz z samej gry, udostępnianej pod tym samym adresem. Korzystanie z
          serwisu oznacza akceptację tych zasad.
        </p>

        <h2>2. Dostęp i opłaty</h2>
        <p>
          Dostęp do serwisu i do gry jest bezpłatny. Nie prowadzimy sprzedaży, nie udostępniamy
          treści za opłatą i nie stosujemy walut wewnętrznych. Nie ma tu żadnych mechanizmów
          finansowych — ani po stronie użytkownika, ani po naszej.
        </p>

        <h2>3. Kody załogi</h2>
        <p>
          Do prowadzenia kampanii służy kod załogi. Nie jest kontem i nie wymaga podania danych
          osobowych. Osoba, która zna kod, ma dostęp do stanu odcinka — dlatego kodu nie należy
          publikować w miejscach dostępnych publicznie. Kody nieużywane przez 14 dni wygasają wraz
          ze stanem rozgrywki.
        </p>

        <h2>4. Zasady zachowania</h2>
        <p>
          W kanale komunikacji w grze obowiązuje jedna reguła: nie utrudniamy gry innym. Dotyczy to
          celowego niszczenia wspólnego sprzętu, blokowania transportu i treści obraźliwych.
          Naruszenia zgłaszaj na <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>; możemy
          unieważnić kod załogi, na którym doszło do naruszenia.
        </p>

        <h2>5. Wymagania techniczne</h2>
        <p>
          Do korzystania z serwisu potrzebne jest urządzenie z dostępem do internetu i przeglądarką
          wydaną po 2022 roku, z włączoną obsługą JavaScriptu. Szczegóły opisaliśmy na stronie
          startowej i w <Link href="/pomoc">pomocy</Link>.
        </p>

        <h2>6. Reklamacje</h2>
        <p>
          Reklamacje przyjmujemy pocztą elektroniczną na adres podany wyżej. Prosimy o opis sprawy i
          datę zdarzenia. Odpowiadamy w terminie 14 dni od otrzymania zgłoszenia, na ten sam adres,
          z którego przyszła wiadomość.
        </p>

        <h2>7. Prawa autorskie</h2>
        <p>
          Teksty, grafika, kod serwisu i zawartość gry są chronione prawem autorskim. Można je
          cytować i opisywać, w tym publikować materiały z rozgrywki, także w kanałach zarobkowych.
          Nie zezwalamy na sprzedaż samych materiałów ani na podawanie ich za własne.
        </p>

        <h2>8. Odpowiedzialność</h2>
        <p>
          Serwis udostępniamy w takiej postaci, w jakiej działa w danym momencie. Nie gwarantujemy
          ciągłości działania — prace serwisowe i awarie zdarzają się, a stan rozgrywki może zostać
          utracony w wyniku poważnej awarii infrastruktury. Nie odpowiadamy za skutki korzystania z
          serwisu wykraczające poza jego przeznaczenie, czyli rozrywkę.
        </p>

        <h2>9. Zmiany regulaminu</h2>
        <p>
          O zmianach informujemy w <Link href="/dziennik">dzienniku prac</Link> z co najmniej
          siedmiodniowym wyprzedzeniem. Dalsze korzystanie z serwisu po wejściu zmian w życie
          oznacza ich akceptację.
        </p>

        <h2>10. Prawo właściwe</h2>
        <p>
          W sprawach nieuregulowanych stosuje się prawo polskie, w tym Kodeks cywilny oraz ustawę o
          świadczeniu usług drogą elektroniczną.
        </p>
      </div>
    </article>
  );
}
