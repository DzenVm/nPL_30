import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rozgrywka i zasady",
  description:
    "Zasady wachty: odczyty, rozpoznawanie usterek, transport części, naprawy i raport o świcie. Opis systemów zużycia, pogody i kampanii.",
  alternates: { canonical: "/rozgrywka" }
};

export default function Rozgrywka() {
  return (
    <article className="band">
      <div className="shell shell--narrow prose">
        <span className="eyebrow">Rozgrywka</span>
        <h1>Zasady, które trzymają całą noc w ryzach</h1>
        <p className="lede">
          Reguł jest niewiele i wszystkie mieszczą się na jednej stronie. Trudność bierze się z ich
          zderzenia, nie z ich liczby.
        </p>

        <h2>Czas</h2>
        <p>
          Noc trwa od 21:30 do 5:30 czasu w grze, co przekłada się na 35–50 minut przy stole. Czas
          płynie ciągle i nie zatrzymuje się na czas naprawy. Można go spowolnić raz na sesję o
          trzy minuty — to jedyny bufor, jaki daje gra, i zwykle zużywa się go za wcześnie.
        </p>

        <h2>Odczyty i objawy</h2>
        <p>
          Każda stacja ma cztery wskaźniki: ciśnienie, zapas paliwa, temperaturę klosza i naciąg
          mechanizmu. Same liczby nic nie znaczą — liczy się kierunek zmiany między obchodami.
          Spadek ciśnienia o dwie dziesiąte w kwadrans to przeciek. Ten sam spadek rozłożony na dwie
          godziny to normalne wychłodzenie instalacji.
        </p>
        <p>
          Usterki mają objawy, nie nazwy. Migotanie może wynikać z zabrudzonego dysza, z powietrza w
          przewodzie albo z drgania całej wieży przy silnym wietrze. Każda z tych przyczyn wymaga
          czego innego, a próba na chybił trafił kosztuje minuty i zapas.
        </p>

        <h2>Transport</h2>
        <p>
          Odległości są realne: przejazd z portu na cypel zajmuje dziewięć minut, przeprawa na
          stację w lesie — czternaście, a przy wysokiej wodzie droga wzdłuż plaży znika i trzeba
          nadłożyć drogi. Ciężkie rzeczy — beczka, zapasowy silnik, komplet szkła — wymagają dwóch
          osób. To najczęstszy powód, dla którego załoga musi się dogadać.
        </p>

        <figure style={{ margin: "2.5rem 0" }}>
          <Image
            src="/art/plansza-wachty.svg"
            alt="Pulpit wachty: wykres poziomu wody, lista zgłoszeń i pasek stanu stacji"
            width={1200}
            height={675}
            style={{ borderRadius: 10, border: "1px solid var(--line)" }}
          />
          <figcaption style={{ marginTop: "0.7rem", fontSize: "0.85rem", color: "var(--sand-dim)" }}>
            Pulpit w połowie nocy. Obwódka stacji zmienia kolor razem ze stanem światła.
          </figcaption>
        </figure>

        <h2>Naprawa doraźna kontra wymiana</h2>
        <p>
          Prawie każdą usterkę da się załatać w kilka minut. Łata przywraca działanie, ale zostawia
          w dzienniku ślad, a element traci część wytrzymałości. Wymiana zajmuje trzy razy dłużej i
          zużywa zapas, za to zeruje historię. Wybór między jednym a drugim jest sednem gry i nie ma
          tu odpowiedzi uniwersalnej — zależy od tego, ile nocy zostało do końca kampanii.
        </p>

        <h2>Ocena nocy</h2>
        <p>
          Po świcie liczą się trzy rzeczy: łączny czas, przez jaki odcinek miał komplet świateł,
          stan sprzętu na rano i zapas, który został w magazynach. Nie ma punktów ani rankingu.
          Jest podsumowanie w dzienniku i konsekwencje, które przenoszą się na kolejną wachtę.
        </p>

        <h2>Tryby</h2>
        <ul>
          <li>
            <strong>Pojedyncza wachta</strong> — jedna noc, warunki startowe ustawione neutralnie.
            Dobra na wejście i na pokazanie gry komuś z boku.
          </li>
          <li>
            <strong>Kampania</strong> — dwanaście nocy z ciągłością zapasów i zużycia, z wątkiem
            szóstej stacji.
          </li>
          <li>
            <strong>Wachta otwarta</strong> — odcinek stoi cały czas, a gracze wchodzą i schodzą
            wtedy, kiedy mogą. Stan sprzętu jest wspólny dla wszystkich, którzy znają kod załogi.
          </li>
        </ul>
      </div>
    </article>
  );
}
