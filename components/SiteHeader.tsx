import Link from "next/link";
import { nav } from "@/lib/site";
import s from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={s.bar}>
      <div className={`shell ${s.inner}`}>
        <nav className={s.nav} aria-label="Nawigacja główna">
          <ul className={s.list}>
            <li>
              <Link href="/" className={s.link}>
                Start
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={s.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/pierwsza-wachta" className={s.cta}>
          Wejdź na wachtę
        </Link>
      </div>
    </header>
  );
}
