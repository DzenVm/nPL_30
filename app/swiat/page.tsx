import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Świat gry",
  description:
    "Sześć stacji brzegowych, zima na wybrzeżu i odcinek, którym nikt się już nie zajmuje. Opis realiów, w których toczy się rozgrywka.",
  alternates: { canonical: "/swiat" }
};

export default function Swiat() {
  return (
    <article className="band">
      <div className="shell shell--narrow prose">
        <span className="eyebrow">Świat</span>
        <h1>Wybrzeże pod koniec listopada</h1>
        <p className="lede">
          Wszystko, co dzieje się w grze, mieści się na odcinku długim na sto kilkadziesiąt
          kilometrów i w porze roku, w której dzień trwa siedem godzin.
        </p>

        <h2>Skąd wzięła się sytuacja wyjściowa</h2>
        <p>
          Sieć świateł na tym odcinku była utrzymywana przez urząd z siedzibą w mieście portowym.
          Trzy zimy przed początkiem rozgrywki urząd zamknięto — nie z hukiem, tylko przez kolejne
          decyzje, z których każda z osobna wyglądała rozsądnie. Najpierw ograniczono etaty, potem
          scalono odcinki, na końcu przeniesiono dokumentację, która po drodze częściowo zaginęła.
        </p>
        <p>
          Sprzęt został na miejscu. Wieże stoją, instalacje działają, część zapasów leży
          nienaruszona w magazynach. Brakuje tylko ludzi, którzy zapalaliby światła o zmierzchu i
          gasili je o świcie. Tym zajmuje się wasza załoga: nieformalnie, na własnych zasadach,
          z narzędziami, które ktoś zostawił w warsztacie.
        </p>

        <figure style={{ margin: "2.5rem 0" }}>
          <Image
            src="/art/mgla-poranek.svg"
            alt="Mgła nad wodą o świcie, drewniany pomost i pława"
            width={1200}
            height={675}
            style={{ borderRadius: 10, border: "1px solid var(--line)" }}
          />
        </figure>

        <h2>Czym żyje odcinek</h2>
        <p>
          Ruch na wodzie jest niewielki, ale stały: kutry wychodzące przed świtem, jednostka
          hydrograficzna, która przez dwa tygodnie sonduje ławicę, i raz na kilka dni większy statek
          idący tranzytem. To oni są odbiorcami waszej pracy — nie widzicie ich, słyszycie tylko
          krótkie wywołania i pytania o charakterystykę światła.
        </p>
        <p>
          Na lądzie zostały ślady po poprzednikach. W maszynowni na cyplu ktoś wypisał kredą
          kolejność czynności przy rozruchu. W magazynie przy porcie jest zeszyt, w którym przez
          jedenaście lat notowano zużycie nafty — ostatni wpis urywa się w połowie zdania. Te
          drobiazgi są jedynym sposobem, w jaki opowiadamy historię: nikt nie wygłasza monologów.
        </p>

        <h2>Pory roku i rytm</h2>
        <p>
          Kampania obejmuje dwanaście nocy od końca listopada do połowy stycznia. Z każdą kolejną
          nocą jest zimniej, wcześniej zapada zmrok, a instalacje reagują gorzej. To nie jest
          skalowanie trudności liczbami — zmieniają się warunki, a wraz z nimi opłacalność decyzji,
          które wcześniej wydawały się oczywiste.
        </p>
        <p>
          Zima domyka też wątek szóstej stacji. Wygaszona od lat, wraca do sieci tylko wtedy, gdy
          załoga zdąży odtworzyć jej schemat instalacji z tego, co uda się znaleźć w pozostałych
          pięciu. Kto tego nie zrobi, kończy kampanię z pięcioma światłami — i to też jest
          zakończenie, po prostu inne.
        </p>

        <h2>Czego tu nie ma</h2>
        <p>
          Nie ma walki, potworów ani wątków nadprzyrodzonych. Mgła jest mgłą, a stukanie w rurze
          bierze się z powietrza w instalacji. Napięcie budujemy wyłącznie na tym, że nocy jest
          skończona ilość, a rzeczy psują się szybciej, niż zdążycie je naprawić.
        </p>
      </div>
    </article>
  );
}
