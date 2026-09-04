import Link from "next/link";
import { legalNav, nav, CONTACT_EMAIL } from "@/lib/site";
import s from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={s.foot}>
      <div className={`shell ${s.grid}`}>
        <div className={s.col}>
          <h2 className={s.head}>O czym jest ten serwis</h2>
          <p className={s.small}>
            Strona opisuje przeglądarkową grę o utrzymaniu świateł nawigacyjnych na bałtyckim
            wybrzeżu. Rozgrywka jest bezpłatna, działa w oknie przeglądarki i nie wymaga
            instalowania niczego na dysku.
          </p>
          <p className={s.small}>
            Zalecany wiek uczestników: od 12 lat. Dostęp jest bezpłatny, a w rozgrywce nie ma
            żadnych płatności ani walut wewnętrznych.
          </p>
        </div>

        <div className={s.col}>
          <h2 className={s.head}>Nawigacja</h2>
          <ul className={s.links}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.col}>
          <h2 className={s.head}>Formalności</h2>
          <ul className={s.links}>
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <p className={s.small}>
            Pisma i zgłoszenia: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>
      </div>

      <div className={`shell ${s.rule}`}>
        <p className={s.small}>
          Materiały graficzne i teksty na tej stronie przygotowaliśmy na potrzeby projektu.
          Nazwy stacji brzegowych użyte w opisie świata odnoszą się do miejsc rzeczywistych,
          ale sama fabuła jest wymyślona.
        </p>
      </div>
    </footer>
  );
}
