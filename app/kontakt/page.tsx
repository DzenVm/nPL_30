import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Adres kontaktowy zespołu, zakres spraw i czas odpowiedzi.",
  alternates: { canonical: "/kontakt" }
};

export default function Kontakt() {
  return (
    <article className="band">
      <div className="shell shell--narrow prose">
        <span className="eyebrow">Kontakt</span>
        <h1>Napisz do nas</h1>
        <p className="lede">
          Nie prowadzimy formularzy ani czatów. Cała korespondencja idzie na jeden adres i trafia do
          osoby, która faktycznie pracuje nad grą.
        </p>

        <h2>Adres</h2>
        <p>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <br />
          Odpowiadamy w dni robocze, zwykle w ciągu dwóch dni.
        </p>

        <h2>Z czym warto pisać</h2>
        <ul>
          <li>zgłoszenia błędów i sytuacji, których gra wyraźnie nie przewidziała,</li>
          <li>chęć udziału w zamkniętych testach — napisz, w ilu osobach i o jakich porach gracie,</li>
          <li>pytania o dostępność interfejsu i o wsparcie dla czytników ekranu,</li>
          <li>sprawy formalne: dane osobowe, prawa autorskie, współpraca.</li>
        </ul>

        <h2>Adres serwisu</h2>
        <p>
          Serwis działa pod adresem <code>{SITE_URL}</code>. Pod tym samym adresem uruchomimy grę,
          więc nie trzeba nigdzie zapisywać drugiego linku.
        </p>

      </div>
    </article>
  );
}
