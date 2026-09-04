import Image from "next/image";
import s from "./home.module.css";

const stacje = [
  {
    numer: "I",
    nazwa: "Gąski",
    charakter: "Najdalej na zachód, najstarsza wieża na odcinku.",
    klopot: "Winda towarowa zacina się przy wilgotności powyżej 80%."
  },
  {
    numer: "II",
    nazwa: "Ustka",
    charakter: "Stacja przy porcie, jedyna z własnym warsztatem.",
    klopot: "Ruch kutrów wymusza sondowanie toru dwa razy na dobę."
  },
  {
    numer: "III",
    nazwa: "Stilo",
    charakter: "Wieża w lesie, kilometr od plaży, dojazd tylko wąskotorówką.",
    klopot: "Przewód zasilania biegnie przez teren zalewowy."
  },
  {
    numer: "IV",
    nazwa: "Rozewie",
    charakter: "Punkt zwrotny odcinka, widoczny z obu stron cypla.",
    klopot: "Mechanizm obrotu wymaga dokręcania po każdym silniejszym wietrze."
  },
  {
    numer: "V",
    nazwa: "Jastarnia",
    charakter: "Niska stacja sektorowa, prowadzi statki między mieliznami.",
    klopot: "Czerwony sektor gaśnie pierwszy przy spadku ciśnienia w instalacji."
  },
  {
    numer: "VI",
    nazwa: "Krynica Morska",
    charakter: "Zamknięta przed laty, w kampanii wraca do sieci jako ostatnia.",
    klopot: "Nie ma dokumentacji — schemat trzeba odtworzyć samodzielnie."
  }
];

export function Fundamenty() {
  return (
    <>
      <section className="band">
        <div className="shell">
          <dl className={s.facts}>
            <div className={s.fact}>
              <dt>Gatunek</dt>
              <dd>Kooperacyjna symulacja</dd>
              <p>Bez rywalizacji między graczami. Przeciwnikiem jest pogoda i zużycie sprzętu.</p>
            </div>
            <div className={s.fact}>
              <dt>Jedna sesja</dt>
              <dd>35–50 minut</dd>
              <p>Tyle trwa noc na odcinku. Da się przerwać i wrócić do zapisu.</p>
            </div>
            <div className={s.fact}>
              <dt>Załoga</dt>
              <dd>od 1 do 6 osób</dd>
              <p>Samotna wachta jest wolniejsza, ale możliwa — sterujesz wtedy dwoma stacjami.</p>
            </div>
            <div className={s.fact}>
              <dt>Dostęp</dt>
              <dd>przeglądarka, bez opłat</dd>
              <p>Nic nie instalujesz. Zapis stanu trzymamy pod kodem załogi.</p>
            </div>
          </dl>
        </div>
      </section>

      <section className="band band--tint">
        <div className={`shell ${s.splitWide}`}>
          <div>
            <span className="eyebrow">Świat</span>
            <h2>Odcinek, o który nikt już nie dba</h2>
            <p>
              Akcja dzieje się na wymyślonym fragmencie polskiego wybrzeża, złożonym z sześciu
              stacji brzegowych. Urząd, który je utrzymywał, przestał istnieć trzy zimy wcześniej.
              Sprzęt został, ludzie odeszli, a statki nadal płyną tym samym torem. Wasza załoga
              zgłasza się do pracy nie dlatego, że ktoś ją przysłał, tylko dlatego, że w listopadzie
              na tej wodzie ciemność zaczyna się o wpół do czwartej po południu.
            </p>
            <p>
              Świat jest opisany od strony rzemiosła. Zamiast poziomów i pasków doświadczenia
              dostajesz dziennik stacji, zeszyt zużycia i listę usterek, które ktoś zapisał ołówkiem
              przed tobą. Historia nie wyskakuje w przerywnikach — składasz ją z notatek na
              marginesach, ze śladów na ścianach maszynowni i z tego, czego brakuje w magazynie.
            </p>
            <p>
              Nazwy stacji pochodzą z prawdziwej mapy, ale wszystko poza nimi jest zmyślone: układ
              budynków, instalacje, awarie i ludzie. Traktujemy je jak punkt zaczepienia dla
              wyobraźni, nie jak rekonstrukcję historyczną.
            </p>
          </div>
          <figure className={s.figure}>
            <Image
              src="/art/mapa-wybrzeza.svg"
              alt="Szkic mapy odcinka wybrzeża z zaznaczonymi sześcioma stacjami i torem wodnym"
              width={1200}
              height={675}
            />
            <figcaption>Szkic odcinka. Stacja VI startuje wygaszona — to cel kampanii.</figcaption>
          </figure>
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <span className="eyebrow">Sześć stacji</span>
          <h2>Każda wieża psuje się na swój sposób</h2>
          <p className="lede">
            Stacje różnią się nie wyglądem, tylko charakterem usterek. Po kilku nocach rozpoznajesz
            je po dźwięku, jaki wydaje mechanizm, zanim jeszcze spojrzysz na wskaźnik.
          </p>
          <div className={s.tabela}>
            <table>
              <caption className="visually-hidden" />
              <thead>
                <tr>
                  <th scope="col">Stacja</th>
                  <th scope="col">Charakter</th>
                  <th scope="col">Stała bolączka</th>
                </tr>
              </thead>
              <tbody>
                {stacje.map((st) => (
                  <tr key={st.numer}>
                    <td>
                      {st.numer} · {st.nazwa}
                    </td>
                    <td>{st.charakter}</td>
                    <td>{st.klopot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
