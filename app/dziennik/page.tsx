import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dziennik prac",
  description:
    "Notatki z prac nad grą: co zmieniliśmy w modelu pogody, jak przebudowaliśmy pulpit wachty i czego nauczyły nas testy z czteroosobową załogą.",
  alternates: { canonical: "/dziennik" }
};

const wpisy = [
  {
    data: "2026-08-19",
    etykieta: "19 sierpnia",
    tytul: "Buczek przestał być darmowy",
    tresc: [
      "Przez pół roku sygnał dźwiękowy nic nie kosztował, więc załogi włączały go na starcie i zapominały o nim do rana. Zmieniliśmy to: buczek ciągnie sprężone powietrze, a sprężarka pracuje tylko przy działającym zasilaniu.",
      "Efekt w testach był natychmiastowy — mgła z problemu tła stała się decyzją. Przy okazji wyszło, że ludzie zaczęli rozmawiać ze sobą o tym, na której stacji buczek jest naprawdę potrzebny."
    ]
  },
  {
    data: "2026-07-02",
    etykieta: "2 lipca",
    tytul: "Pulpit bez zakładek",
    tresc: [
      "Poprzedni układ miał cztery panele przełączane klawiszami. Wyglądał porządnie i był nie do użycia w pośpiechu: przy pierwszej awarii nikt nie pamiętał, gdzie co jest.",
      "Teraz wszystko mieści się na jednym ekranie. Wykres wody, zgłoszenia, pasek stacji. Straciliśmy część szczegółów, ale czas reakcji na zgaszone światło spadł w testach o połowę."
    ]
  },
  {
    data: "2026-05-14",
    etykieta: "14 maja",
    tytul: "Pogoda z jednego przebiegu",
    tresc: [
      "Wcześniej wiatr, mgła i poziom wody były trzema niezależnymi liczbami i czasem wychodziły z tego sytuacje bez sensu — sztorm przy idealnej widoczności i wodzie na zerze.",
      "Teraz wszystko wychodzi z jednego powolnego przebiegu, na który nakładamy szum. Ten sam kod liczy odczyt widoczny na stronie startowej, więc to, co widzicie w przeglądarce, jest tym, co steruje planszą."
    ]
  },
  {
    data: "2026-03-28",
    etykieta: "28 marca",
    tytul: "Szósta stacja została wygaszona",
    tresc: [
      "Pierwotnie kampania zaczynała się z sześcioma działającymi światłami i polegała na utrzymaniu wszystkich. Było poprawnie i zupełnie bez napięcia.",
      "Wygaszenie jednej stacji dało kampanii cel, który widać z daleka i który da się osiągnąć albo nie. Cała robota z odtwarzaniem schematu instalacji wzięła się z tej jednej decyzji."
    ]
  }
];

export default function Dziennik() {
  return (
    <article className="band">
      <div className="shell shell--narrow prose">
        <span className="eyebrow">Dziennik prac</span>
        <h1>Co zmieniliśmy i dlaczego</h1>
        <p className="lede">
          Notujemy tylko te zmiany, które naprawdę przestawiły coś w rozgrywce. Drobne poprawki
          zostają w repozytorium.
        </p>

        {wpisy.map((wpis) => (
          <section key={wpis.data} style={{ marginTop: "2.8rem" }}>
            <time
              dateTime={wpis.data}
              style={{
                display: "block",
                fontFamily: "var(--mono)",
                fontSize: "0.78rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--sea)",
                marginBottom: "0.5rem"
              }}
            >
              {wpis.etykieta}
            </time>
            <h2 style={{ marginTop: 0 }}>{wpis.tytul}</h2>
            {wpis.tresc.map((akapit) => (
              <p key={akapit.slice(0, 24)}>{akapit}</p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
