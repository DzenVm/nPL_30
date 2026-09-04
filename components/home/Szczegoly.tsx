import Image from "next/image";
import Link from "next/link";
import s from "./home.module.css";

export function Szczegoly() {
  return (
    <>
      <section className="band">
        <div className="shell">
          <span className="eyebrow">Systemy</span>
          <h2>Cztery rzeczy, które chodzą pod spodem przez całą noc</h2>
          <div className={s.detale}>
            <details>
              <summary>Pogoda liczona z modelu, nie wybierana z listy</summary>
              <div>
                <p>
                  Wiatr, zamglenie i poziom wody zmieniają się płynnie, bo wynikają z jednego
                  przebiegu: powolnego kołysania akwenu i szumu nakładanego na jego wartość. Nie ma
                  „pogody na mapie” ustawionej z góry — są warunki, które narastają i opadają, a wy
                  je odczytujecie. Ten sam model liczy odczyt widoczny na górze strony startowej.
                </p>
                <p>
                  Praktyczna konsekwencja: przy silniejszym wietrze mechanizm obrotu rozstraja się
                  szybciej, a przy mgle sygnał świetlny przestaje wystarczać i trzeba włączyć
                  buczek, który zjada zapas sprężonego powietrza.
                </p>
              </div>
            </details>
            <details>
              <summary>Zużycie, które pamięta poprzednie noce</summary>
              <div>
                <p>
                  Każdy element ma stan liczony osobno: klosz, palnik, przekładnia, przewód,
                  uszczelnienie. Naprawa doraźna przywraca działanie, ale nie stan. Po trzeciej
                  prowizorce część odmawia współpracy przy pierwszym mocniejszym podmuchu. Wymiana
                  na nowe kosztuje czas i zapas, którego zwykle brakuje właśnie tej nocy.
                </p>
              </div>
            </details>
            <details>
              <summary>Poczta z morza</summary>
              <div>
                <p>
                  W trakcie wachty przychodzą krótkie wiadomości: kuter prosi o potwierdzenie
                  charakterystyki, ktoś zgłasza światło widziane tam, gdzie go nie powinno być,
                  z portu pytają o przejezdność toru. Odpowiadanie nie jest obowiązkowe, ale to z
                  tych wiadomości składa się obraz odcinka i to one podpowiadają, gdzie zajrzeć,
                  zanim wskaźnik cokolwiek pokaże.
                </p>
              </div>
            </details>
            <details>
              <summary>Kampania na dwanaście nocy</summary>
              <div>
                <p>
                  Poza pojedynczą wachtą jest tryb ciągły: dwanaście nocy od późnej jesieni do
                  początku zimy, z rosnącym zużyciem i malejącym zapasem. Celem jest doprowadzenie
                  szóstej, wygaszonej stacji z powrotem do sieci. Kampanię prowadzi się z tą samą
                  załogą albo z kimś, kto akurat wszedł na wolne miejsce. Postęp jest przypisany do
                  odcinka, nie do konkretnej osoby.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="band band--tint">
        <div className="shell">
          <span className="eyebrow">Z materiałów</span>
          <h2>Kilka rysunków z teczki projektowej</h2>
          <p className="lede">
            Grafika w grze trzyma się jednego założenia: ma wyglądać jak dokumentacja techniczna
            prowadzona ręcznie, a nie jak ilustracja do plakatu.
          </p>
          <div className={s.galeria}>
            <figure className={s.figure}>
              <Image
                src="/art/maszynownia.svg"
                alt="Przekrój maszynowni z mechanizmem obrotu, zbiornikiem i tablicą rozdzielczą"
                width={1200}
                height={675}
              />
              <figcaption>Przekrój maszynowni — układ, który poznajesz w drugiej nocy.</figcaption>
            </figure>
            <figure className={s.figure}>
              <Image
                src="/art/sztorm.svg"
                alt="Fala uderzająca w cypel podczas sztormu, wieża z zapaloną lampą"
                width={1200}
                height={675}
              />
              <figcaption>Sztorm z zachodu. Wtedy sondujący zostaje na brzegu.</figcaption>
            </figure>
            <figure className={s.figure}>
              <Image
                src="/art/mgla-poranek.svg"
                alt="Poranna mgła nad wodą, drewniany pomost i pława przy brzegu"
                width={1200}
                height={675}
              />
              <figcaption>Świt po udanej wachcie. Buczek milknie dopiero, gdy widać pławę.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="band">
        <div className={`shell ${s.split}`}>
          <div>
            <span className="eyebrow">Przebieg nocy</span>
            <h2>Typowa wachta, godzina po godzinie</h2>
            <p>
              Poniżej skrócony zapis z sesji testowej na czteroosobową załogę. Nie jest to scenariusz
              — kolejność zdarzeń wynika z warunków i z tego, co załoga zrobiła wcześniej.
            </p>
          </div>
          <ol className={s.osi}>
            <li>
              <time>21:40</time>
              <p>
                Zapalenie świateł na pięciu stacjach. Zapas nafty na III wystarcza na siedem godzin,
                czyli teoretycznie do świtu.
              </p>
            </li>
            <li>
              <time>23:05</time>
              <p>
                Wiatr skręca na północny zachód i przyspiesza. Na IV zaczyna zjeżdżać naciąg linki:
                obrót zwalnia o ułamek sekundy na okrążenie, na razie niezauważalnie.
              </p>
            </li>
            <li>
              <time>00:20</time>
              <p>
                Zgłoszenie z kutra: charakterystyka IV nie zgadza się z mapą. Mechanik rusza na cypel,
                zaopatrzeniowiec przekierowuje na to samo miejsce zapasową linkę.
              </p>
            </li>
            <li>
              <time>01:55</time>
              <p>
                Mgła schodzi do trzystu metrów. Buczki na II i V pochłaniają powietrze szybciej niż
                zakładano. Sondujący wraca do portu, bo pławy przestały być widoczne.
              </p>
            </li>
            <li>
              <time>03:14</time>
              <p>
                Palnik na III gaśnie — nie z braku nafty, tylko przez zanieczyszczony dysz. Wymiana
                zajmuje jedenaście minut, w tym czasie odcinek ma dziurę na dwadzieścia mil.
              </p>
            </li>
            <li>
              <time>05:30</time>
              <p>
                Świt. Pięć świateł pali się do końca, sprzęt schodzi z nocy w gorszym stanie, niż
                wszedł. Raport idzie do dziennika i ustawia warunki startowe kolejnej wachty.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="band band--tint">
        <div className="shell">
          <div className={s.split}>
            <div>
              <span className="eyebrow">Wymagania</span>
              <h2>Co jest potrzebne, żeby zagrać</h2>
              <p>
                Gra renderuje się na płótnie 2D i strumieniuje stan z serwera. Nie korzysta z
                dedykowanej grafiki i mieści się w kilku megabajtach transferu na sesję.
              </p>
              <div className={s.tabela}>
                <table>
                  <tbody>
                    <tr>
                      <td>Przeglądarka</td>
                      <td>Dowolna wydana po 2022 r., z włączoną obsługą JavaScriptu</td>
                    </tr>
                    <tr>
                      <td>Łącze</td>
                      <td>Stabilne 2 Mb/s wystarczy; krótkie przerwy gra przeczeka</td>
                    </tr>
                    <tr>
                      <td>Ekran</td>
                      <td>Od 360 px szerokości; poniżej 900 px pulpit przechodzi w dwie kolumny</td>
                    </tr>
                    <tr>
                      <td>Dźwięk</td>
                      <td>Przydatny, ale nieobowiązkowy — każdy sygnał ma odpowiednik na ekranie</td>
                    </tr>
                    <tr>
                      <td>Konto</td>
                      <td>Niepotrzebne do pierwszej wachty; zapis kampanii chodzi na kodzie załogi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <span className="eyebrow">Dostępność</span>
              <h2>Dla kogo to jest</h2>
              <p>
                Materiał jest spokojny: brak nagłych błysków, brak scen przemocy, brak presji
                czasowej krótszej niż kilkadziesiąt sekund. Zalecamy grę od dwunastego roku życia,
                głównie ze względu na ilość czytania i planowania.
              </p>
              <p>
                Wszystkie stany sprzętu opisujemy równolegle kolorem, kształtem i podpisem, więc
                rozróżnienie czerwieni z zielenią nie jest konieczne. Interfejs przechodzi całkowicie
                klawiaturą, a czytniki ekranu dostają czytelne etykiety pól. Ruch tła da się wyłączyć
                jednym przełącznikiem w ustawieniach.
              </p>
              <blockquote className={s.cytat}>
                <p>
                  „Najdłużej zajęło nam pogodzenie się z tym, że gracz ma prawo nie zdążyć. Kiedy
                  wreszcie przestaliśmy ratować go podpowiedziami, wachty zrobiły się o wiele
                  ciekawsze.”
                </p>
                <footer>z notatki po ósmych testach wewnętrznych</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell shell--narrow">
          <span className="eyebrow">Częste pytania</span>
          <h2>To, o co pytacie najczęściej</h2>
          <div className={s.detale}>
            <details>
              <summary>Czy da się grać samemu?</summary>
              <div>
                <p>
                  Tak. W pojedynkę prowadzisz dwie stacje zamiast sześciu, a pozostałe cztery są
                  wygaszone i nie liczą się do wyniku nocy. Reszta zasad zostaje bez zmian.
                </p>
              </div>
            </details>
            <details>
              <summary>Czy trzeba grać o stałej porze?</summary>
              <div>
                <p>
                  Nie. Wachta zaczyna się wtedy, kiedy wejdzie pierwsza osoba z kodem załogi.
                  Kolejni dołączają w trakcie i przejmują wolne stacje bez restartu sesji.
                </p>
              </div>
            </details>
            <details>
              <summary>Co się stanie, gdy stracę połączenie w środku nocy?</summary>
              <div>
                <p>
                  Stan trzyma serwer, więc wracasz tam, gdzie byłeś. Jeśli grasz z załogą, twoje
                  stacje przez chwilę pracują bez opieki, co zwykle widać w dzienniku, ale rzadko
                  kończy się utratą światła.
                </p>
              </div>
            </details>
            <details>
              <summary>Czy są jakieś płatności?</summary>
              <div>
                <p>
                  Nie. Dostęp jest bezpłatny, nie ma sklepu, walut wewnętrznych ani treści
                  odblokowywanych opłatą. Nie zbieramy też danych karty, bo nie mamy do czego.
                </p>
              </div>
            </details>
            <details>
              <summary>Czy będą kolejne odcinki wybrzeża?</summary>
              <div>
                <p>
                  Pracujemy nad drugim, zbudowanym wokół portu i śluzy, z zupełnie inną logistyką.
                  Termin podamy dopiero wtedy, gdy przejdzie własne testy — w dzienniku prac
                  opisujemy na bieżąco, na czym stoimy.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell shell--narrow">
          <div className={s.wezwanie}>
            <h2>Noc zaczyna się o wpół do dziesiątej</h2>
            <p className="lede">
              Pierwsza wachta jest krótsza i prowadzi za rękę tylko przez pierwsze piętnaście minut.
              Potem zostajesz z sześcioma światłami i własnym dziennikiem.
            </p>
            <div className={s.actions}>
              <Link href="/pierwsza-wachta" className={s.primary}>
                Wejdź na wachtę
              </Link>
              <Link href="/pomoc" className={s.ghost}>
                Najpierw przeczytaj instrukcję
              </Link>
            </div>
            <p className={s.uwaga}>
              Adres docelowy uruchomimy razem z otwartą wersją. Do tego czasu strona opisuje projekt
              i zbiera zgłoszenia od osób, które chcą wejść wcześniej.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
