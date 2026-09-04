import type { Metadata } from "next";
import Link from "next/link";
import { warunkiNaTeraz, formatGodzina } from "@/lib/wachta";
import { CONTACT_EMAIL } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pierwsza wachta",
  description:
    "Jak wejść na pierwszą wachtę: czego się spodziewać w pierwszych piętnastu minutach, co zrobić przed startem i jak dołączyć do wcześniejszych testów.",
  alternates: { canonical: "/pierwsza-wachta" }
};

export default function PierwszaWachta() {
  const w = warunkiNaTeraz();

  return (
    <article className="band">
      <div className="shell shell--narrow prose">
        <span className="eyebrow">Wejście do gry</span>
        <h1>Pierwsza noc na odcinku</h1>
        <p className="lede">
          Wersja otwarta ruszy pod docelowym adresem, który uruchamiamy razem z premierą. Ta strona
          opisuje, co zastaniesz pierwszego wieczoru i jak przygotować się na kwadrans, w którym
          wszystko wydaje się dziać naraz.
        </p>

        <p>
          Stan odcinka o godzinie {formatGodzina(w.znacznik)}: wiatr {w.wiatr} m/s z {w.kierunek},
          widoczność — {w.widocznosc}, woda na poziomie {w.poziom.toFixed(2)} m i {w.faza}.
          {w.nocnaWachta
            ? " Gdyby wersja otwarta już działała, właśnie teraz trwałaby wachta."
            : " O tej porze na odcinku pracuje tylko dzienna zmiana warsztatowa."}
        </p>

        <h2>Zanim usiądziesz</h2>
        <ul>
          <li>Zarezerwuj sobie równą godzinę — przerwanie w połowie nocy jest możliwe, ale szkoda.</li>
          <li>Weź słuchawki, jeśli masz. Połowa objawów usterek jest słyszalna, zanim się je zobaczy.</li>
          <li>
            Przygotuj kartkę. Brzmi staroświecko, ale odczyty z sześciu stacji szybciej zapisuje się
            ręcznie, niż przewija w interfejsie.
          </li>
          <li>
            Jeśli gracie w kilka osób, ustalcie z góry, kto siedzi przy magazynie. To jedyna rola,
            której nikt nie chce, a bez której noc się rozjeżdża.
          </li>
        </ul>

        <h2>Pierwsze piętnaście minut</h2>
        <p>
          Wprowadzenie prowadzi przez rozruch jednej stacji: zapalenie lampy, ustawienie rytmu
          błysków i pierwszy odczyt. Potem znika i zostajesz z pełnym odcinkiem. Nie pojawia się
          później, nawet jeśli coś pójdzie źle — od tego momentu jedynym źródłem podpowiedzi jest
          dziennik i to, co zapisali poprzednicy.
        </p>
        <p>
          Nie ma sensu ratować wszystkich sześciu świateł naraz. Załogi, które przechodzą pierwszą
          noc bez strat, zwykle świadomie odpuszczają jedną stację i pilnują pozostałych. To nie
          jest błąd — to podstawowa umiejętność w tej grze.
        </p>

        <h2>Wcześniejszy dostęp</h2>
        <p>
          Do zamkniętych testów zapraszamy niewielkie grupy, głównie po to, żeby sprawdzić, jak gra
          znosi cztery osoby o różnych porach. Jeśli chcesz wejść przed premierą, napisz na{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> i podaj, w ilu osobach gracie oraz
          w jakich godzinach. Odpisujemy zwykle w ciągu dwóch dni roboczych.
        </p>
        <p>
          Zanim napiszesz, zerknij na <Link href="/rozgrywka">zasady</Link> i{" "}
          <Link href="/pomoc">stronę pomocy</Link> — połowa pytań, które dostajemy, ma tam odpowiedź.
        </p>
      </div>
    </article>
  );
}
