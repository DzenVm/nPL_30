import Image from "next/image";
import Link from "next/link";
import { warunkiNaTeraz, formatGodzina, formatData } from "@/lib/wachta";
import { Fundamenty } from "@/components/home/Fundamenty";
import { Mechanika } from "@/components/home/Mechanika";
import { Szczegoly } from "@/components/home/Szczegoly";
import s from "@/components/home/home.module.css";

export const dynamic = "force-dynamic";

export default function Start() {
  const w = warunkiNaTeraz();

  return (
    <>
      <section className={s.hero}>
        <div className={`shell ${s.heroGrid}`}>
          <div>
            <span className="eyebrow">Gra przeglądarkowa · wersja otwarta</span>
            <h1>Sześć świateł, jedna noc i załoga, która nie może pozwolić im zgasnąć</h1>
            <p className="lede">
              Prowadzisz odcinek wybrzeża od zmierzchu do świtu. Nafta się kończy, wiatr zmienia
              kierunek, a mechanizm obrotu w jednej z wież właśnie zaczął chodzić nierówno.
              Wszystko dzieje się w oknie przeglądarki — nie trzeba niczego pobierać ani zakładać
              konta, żeby zobaczyć pierwszą wachtę.
            </p>

            <div className={s.actions}>
              <Link href="/pierwsza-wachta" className={s.primary}>
                Zacznij od pierwszej wachty
              </Link>
              <Link href="/rozgrywka" className={s.ghost}>
                Zobacz, jak wygląda tura
              </Link>
            </div>

            <div className={s.status}>
              <p className={s.statusHead}>
                <span>Warunki na odcinku</span>
                <span>
                  {formatData(w.znacznik)}, godz. {formatGodzina(w.znacznik)}
                </span>
              </p>
              <dl className={s.statusRow}>
                <div>
                  <dt>Stan wody</dt>
                  <dd>
                    {w.poziom.toFixed(2)} m, {w.faza}
                  </dd>
                </div>
                <div>
                  <dt>Wiatr</dt>
                  <dd>
                    {w.wiatr} m/s z {w.kierunek}
                  </dd>
                </div>
                <div>
                  <dt>Widoczność</dt>
                  <dd>{w.widocznosc}</dd>
                </div>
                <div>
                  <dt>Stacja pod obserwacją</dt>
                  <dd>{w.stacja}</dd>
                </div>
              </dl>
              <p className={s.uwaga}>
                Odczyt pochodzi z tego samego modelu, który steruje planszą. Serwer przelicza go
                przy każdym wejściu na stronę, więc przy kolejnym odświeżeniu zobaczysz inne liczby.
                {w.nocnaWachta
                  ? " O tej porze na odcinku trwa wachta nocna — wtedy zgłoszeń jest najwięcej."
                  : " Teraz jest dzień, więc na odcinku trwają prace warsztatowe."}
              </p>
            </div>
          </div>

          <figure className={`${s.figure} ${s.heroArt}`}>
            <Image
              src="/art/latarnia-noc.svg"
              alt="Wieża z zapaloną lampą, snop światła rozchodzący się nad wodą"
              width={1200}
              height={675}
              priority
            />
          </figure>
        </div>
      </section>

      <Fundamenty />
      <Mechanika />
      <Szczegoly />
    </>
  );
}
