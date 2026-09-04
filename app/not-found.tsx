import Link from "next/link";

export default function NieZnaleziono() {
  return (
    <article className="band">
      <div className="shell shell--narrow prose">
        <span className="eyebrow">404</span>
        <h1>Tej strony nie ma na mapie</h1>
        <p className="lede">
          Adres nie prowadzi do żadnej z podstron serwisu. Być może zmieniliśmy nazwę albo w
          odnośniku wypadł znak.
        </p>
        <p>
          Wróć na <Link href="/">stronę startową</Link>, zajrzyj do{" "}
          <Link href="/rozgrywka">opisu zasad</Link> albo do{" "}
          <Link href="/pomoc">pomocy</Link>.
        </p>
      </div>
    </article>
  );
}
