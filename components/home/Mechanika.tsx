import Image from "next/image";
import s from "./home.module.css";

export function Mechanika() {
  return (
    <>
      <section className="band band--tint">
        <div className="shell">
          <span className="eyebrow">Pętla rozgrywki</span>
          <h2>Jak przebiega jedna wachta</h2>
          <p className="lede">
            Noc dzieli się na pięć powtarzalnych kroków. Nie ma tu tur ani czekania na ruch drugiej
            osoby — czas płynie dla wszystkich naraz, a wy dzielicie się tym, kto akurat gdzie jest.
          </p>

          <ol className={s.steps}>
            <li className={s.step}>
              <h3>Obchód i odczyt</h3>
              <p>
                Zaczynasz od wskaźników: ciśnienie w instalacji, poziom nafty, temperatura klosza,
                naciąg linki mechanizmu. Cztery liczby na stację, sześć stacji. Zapisujesz je w
                dzienniku, bo różnica między odczytami mówi więcej niż sam odczyt.
              </p>
            </li>
            <li className={s.step}>
              <h3>Rozpoznanie usterki</h3>
              <p>
                Awaria nie pokazuje się jako komunikat. Widać objaw — światło migocze, obrót zwalnia,
                w rurze słychać stukanie. Do przyczyny dochodzisz przez eliminację, a każda próba
                kosztuje minuty, których do świtu nie przybywa.
              </p>
            </li>
            <li className={s.step}>
              <h3>Transport i zaopatrzenie</h3>
              <p>
                Części leżą tam, gdzie je zostawiono: uszczelki w warsztacie przy porcie, zapasowe
                palniki na cyplu, nafta w beczkach, których nie da się przewieźć w pojedynkę.
                Trasa między stacjami zajmuje realny czas i zmienia się przy wysokiej wodzie.
              </p>
            </li>
            <li className={s.step}>
              <h3>Naprawa pod presją</h3>
              <p>
                Sama robota to krótkie, konkretne czynności: dokręcić, wymienić, przedmuchać,
                wyregulować przesłonę. Trudność bierze się z kolejności i z tego, że w tym czasie
                gdzieś indziej narasta druga usterka.
              </p>
            </li>
            <li className={s.step}>
              <h3>Raport o świcie</h3>
              <p>
                Nad ranem spisujecie, co się wydarzyło. Raport przekłada się na zapasy i stan sprzętu
                w kolejnej nocy. Jeśli coś zbyliście prowizorką, wróci to do was za dwie, trzy
                wachty — zwykle w gorszym momencie.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="band">
        <div className={`shell ${s.splitWide}`}>
          <figure className={s.figure}>
            <Image
              src="/art/plansza-wachty.svg"
              alt="Układ planszy: wykres poziomu wody, lista zgłoszeń i pasek stanu sześciu stacji"
              width={1200}
              height={675}
            />
            <figcaption>Widok pulpitu wachty w połowie nocy. Stacja III właśnie zgasła.</figcaption>
          </figure>
          <div>
            <span className="eyebrow">Interfejs</span>
            <h2>Wszystko na jednym ekranie, bez zakładek i menu</h2>
            <p>
              Pulpit to trzy pola: przebieg poziomu wody z ostatnich sześciu godzin, lista zgłoszeń
              z odcinka i pasek sześciu stacji na dole. Nie ma minimapy, licznika punktów ani
              podpowiedzi wyskakujących w rogu. Kolor obwódki mówi, czy stacja świeci, migocze czy
              zgasła — i to wystarcza, żeby ogarnąć sytuację jednym spojrzeniem.
            </p>
            <p>
              Interfejs działa myszą i klawiaturą, a wszystkie akcje mają skróty. Kto woli grać
              samym klawiszem, przejdzie całą noc bez sięgania po mysz. Na tabletach układ zwija się
              do dwóch kolumn i zostawia listę zgłoszeń pod ręką.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--tint">
        <div className="shell">
          <span className="eyebrow">Podział pracy</span>
          <h2>Cztery specjalizacje, które trzeba mieszać</h2>
          <p className="lede">
            Specjalizacja nie blokuje żadnej czynności — daje szybszy czas wykonania i dostęp do
            drobiazgów, których inni nie zauważą. Załoga sześciu osób zwykle bierze dwie mechaniczki
            i po jednej z pozostałych ról.
          </p>

          <div className={s.cards}>
            <article className={s.card}>
              <span className={s.rola}>przy maszynie</span>
              <h3>Mechanik</h3>
              <p>
                Rozbiera mechanizm obrotu, wymienia panewki, słyszy różnicę między luzem a pęknięciem.
                Jako jedyny może otworzyć przekładnię bez wygaszania lampy.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.rola}>przy stole</span>
              <h3>Sygnalista</h3>
              <p>
                Pilnuje rytmu błysków i odpowiada na wywołania z morza. Jeśli charakterystyka światła
                się rozjedzie, statek odczyta odcinek jako inny — i skręci nie tam, gdzie trzeba.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.rola}>na wodzie</span>
              <h3>Sondujący</h3>
              <p>
                Wychodzi łodzią, mierzy głębokość, przestawia pławy po sztormie. Wraca z informacją,
                bez której reszta pracuje po omacku.
              </p>
            </article>
            <article className={s.card}>
              <span className={s.rola}>w magazynie</span>
              <h3>Zaopatrzeniowiec</h3>
              <p>
                Liczy, planuje przewozy i decyduje, której stacji odmówić. Najbardziej niewdzięczna
                rola i zwykle ta, która decyduje o tym, czy noc się uda.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
