![](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)

# Przewodnik freeCodeCamp (freeCodeCamp Guide)
Społeczność freeCodeCamp tworzy złożony przewodnik z możliwością przeszukiwania zasobów, o nazwie "freeCodeCamp Guide". To narzędzie referencyjne będzie zawierało tysiące artykułów które obejmą wszystkie dziedziny developementu, projektowania i data science. Całość napisana w formie łatwej do zrozumienia dla osób, które dopiero zaczynają swoją przygodę z programowaniem.

To repozytorium jest miejscem, gdzie planujemy i rozwijamy artykuły z freeCodeCamp Guide, które następnie hostujemy na naszej własnej stronie w stylu wiki [freeCodeCamp Guide](https://guide.freecodecamp.org).

**Spis treści**

- [Czym są artykuły przewodnika freeCodeCamp?](#czym-są-artykuły-przewodnika-freecodecamp)
- [O czym mogę napisać artykuł?](#o-czym-mogę-napisać-artykuł)
- [Jak wnieść wkład?](#jak-wnieść-wkład)
- [Uruchomienie przewodnika lokalnie na swoim komputerze](#uruchomienie-przewodnika-lokalnie-na-swoim-komputerze)
- [Przewodnik stylowania artykułów](#przewodnik-stylowania-artykułów)
- [Licencja](#licencja)
- [Informacje od tłumacza](#informacje-od-tłumacza)

## Czym są artykuły przewodnika freeCodeCamp?
Artykuły przewodnika mogą dotyczyć składni, wzorców projektowania, tego czym są aria labels, lub informacje na temat znaczenia numerów w prawym górnym rogu ekranu na stronie freecodecamp.org. Tutaj znajdziesz [przykład artykułu o tagach HTML](./src/pages/html/elements/index.md).

## O czym mogę napisać artykuł?
Twoja pomoc w tworzeniu artykułów jest mile widziana. Nie musisz być ekspertem w danej dziedzinie aby o niej napisać - ten przewodnik jest tworzony na zasadach open source, więc nawet jeśli zrobisz błąd, inna osoba prędzej czy później go poprawi.

Aby pomóc, znajdź `trzon artykułu` (`stub article`) na [stronie przewodnika](https://guide.freecodecamp.org/), napisz artykuł, nastpnie stwórz pull request (PR) aby zastąpić trzon twoimi zmianami.

Jeśli nie możesz znaleźć trzonu na temat który cię interesuje, możesz wykonać PR który go stworzy (wraz ze szkicem artykułu). Zapraszamy do zadawania pytań jeśli nie jesteś pewien/a, gdzie w strukturze katalogów należy umieścić nowy wpis.

Zanim zaczniesz pisać, upewnij się, że przeczytałeś/aś [Przewodnik stylowania artykułów](#przewodnik-stylowania-artykułów) poniżej.

## Jak wnieść wkład?
Możesz stworzyć PR (Pull Request) ze szkicem artykułu, lub edytować istniejący artykuł na dwa sposoby:

1) Najłatwiejsza metoda to użycie interfejsu GitHuba. Obejrzyj wideo demonstracyjne lub postępuj według instrukcji poniżej:

![Gif pokazujący kolejne kroki interfejsu GitHuba](https://i.imgur.com/0cmxJwN.gif)

- Otwórz folder "pages" (zlokalizowany w `guides/src`)  i znajdź trzon artykułu który chciałbyś napisać lub edytować. Wszystkie trzony znajdują się w pliku index.md.
- Kliknij w ikonę ołówka "Edit this file" i dokonaj zmian z uwzględnieniem składni GitHuba
- Przewiń na dół ekranu i dodaj commit objaśniający wprowadzone zmiany. Następnie zaznacz przycisk radio "Create a new branch for this commit and start a pull request" i kliknij "Propose file changes"
- Na następnym ekranie, dodaj dodatkowe szczegóły na temat swojego PR i kliknij przycisk "Create pull request"


2) Jeśli preferujesz tworzyć zmiany lokalnie na swoim komputerze, postępuj zgodnie z instrukcją:
- Wykonaj Fork tego repozytorium
- Skopiuj repozytorium na dysk lokalny uruchamiając komendę `git clone https://github.com/TWOJA-NAZWA-UZYTKOWNIKA-GITHUB/guides.git`
- Dodaj remote upstream uruchamiając komendę `git remote add upstream https://github.com/freeCodeCamp/guides.git`, aby git wiedział gdzie znajduje się oficjalne repozytorium freeCodeCamp guides.
- Stwórz nową gałąź dla swoich zmian za pomocą komendy `git checkout -b NAZWA-NOWEJ-GALEZI`. Spróbuj nazwać swoją gałąź w taki sposób, aby opisywała temat artykułu np. `fix/ArticleHTMLElements`
- Stwórz artykuł, dodaj commit ze zmianami komendą `git commit -m "TRESC WIADOMOSCI"`, i wyślij (push) swoją gałąź na GitHub za pomocą komendy `git push origin NAZWA-NOWEJ-GALEZI`
- Udaj się na stronę swojego forka repozytorium na GitHub i stwórz PR (Pull Request).

Upewnij się, że lokalny fork pozostaje aktualny w stosunku do oficjalnego repozytorium freeCodeCamp guides. Następnym razem kiedy zechcesz wprowadzić zmiany, nim zaczniesz tworzyć nowe rozgałęzienia, sprawdź czy lokalna gałąź `master` jest aktualna za pomocą komendy `git pull --rebase upstream master`. Powyższa komenda spowoduje pobranie wszystkich zmian wprowadzonych w oficjalnym repozytorium gałęzi `master` bez tworzenia dodatkowego commita w twoim lokalnym repozytorium.

## Uruchomienie przewodnika lokalnie na swoim komputerze

Na koniec, jeśli chcesz uruchomić lokalną wersję repozytorium przewodnika, postępuj zgodnie z instrukcją:

1. Upewnij się, że masz zainstalowany menadżer pakietów `yarn` za pomocą komendy `npm install -g yarn`
2. Wykonaj Fork tego repozytorium
3. :point_down:
```sh
git clone https://github.com/TWOJA-NAZWA-UZYTKOWNIKA-GITHUB/guides.git
cd guides
yarn install
yarn run dev
```

W tym projekcie używamy `yarn` ponieważ `netlify` buduje naszą stronę przy pomocy `yarn`.

## Przewodnik stylowania artykułów

Napisaliśmy poniższy poradnik pisania artykułów, aby pomóc ci rozpocząć tworzenie treści.

**Spis treści**

- [Tytuł artykułu](#tytuł-artykułu)
- [Modułowość](#modułowość)
- [Pisanie artykułów](#pisanie-artykułów)
- [Formatowanie przykładowego kodu](#formatowanie-przykładowego-kodu)
- [Dodawanie obrazów do artykułów](#dodawanie-obrazów-do-artykułów)
- [Właściwe rzeczowniki](#właściwe-rzeczowniki)
- [Gdzie otrzymać pomoc](#gdzie-otrzymać-pomoc)


### Tytuł artykułu

Tytuły artykułów powinny być tak krótkie, zwięzłe i dokładne jak to tylko możliwe. Chcemy, aby użytkownicy szybko znaleźli informacje, których szukają. Tytuł powinien odzwierciedlać główny temat artykułu.

Kilka przykładowych tytułów artykułów:

- "HTML Lists"
- "CSS Borders"
- "JavaScript For Loop"

Nazwa folderu jest wykorzystywana w URL, więc do jej tworzenia używaj tylko dashy (dashes) `-`, numerów `0-9`, oraz małych liter `a-z`.

Kilka przykładowych nazw folderów:

- html-lists
- css-borders
- javascript-for-loop

Możesz jednak wykorzystywać znaki specjalne w tytułach artykułów.

### Modułowość

Każdy artykuł powinien wyjaśniać dokładnie jeden koncept i powinien on jasno wynikać z tytuły artykułu.

Można odnosić się do innych artykułów poprzez linkowanie do nich w treści, lub w sekcji "Other Resources" na końcu artykułu.

Naszym celem jest stworzenie tysięcy artykułów, obejmujących szeroki zakres tematów technicznych.

### Pisanie artykułów

Przed rozpoczęciem pisania, stwórz zarys tematu i zastanów się nad fragmentami kodu, które wykorzystasz jako przykłady (jeśli dotyczy). Ten proces pomaga uporządkować myśli i ułatwia pisanie.

Artykuły powinny być napisane krótkimi, jasnymi zdaniami i używać jak najmniej żargonu jak to możliwe. Wszystkie pojęcia będące żargonem powinny zostać wyjaśnione jak najszybciej prostym językiem.

Pierwszy akapit powinien mieć długość 1-2 zdań i być prostym wyjaśnieniem głównego tematu z pominięciem linków do innych artykułów, ponieważ mogą one rozpraszać.

Staraj się tworzyć krótkie akapity (około 1-4 zdań). Istnieje większe prawdopodobieństwo, że użytkownicy przeczytają kilka krótkich akapitów niż ścianę tekstu.

Stosuj tryb aktywny zamiast pasywnego. Ogólnie rzecz biorąc jest jest to silniejszy i bardziej bezpośredni sposób komunikowania się. Na przykład: 
  - (Pasywny) Pętla `for` w JavaScript jest używana przez programistów do...
  - (Aktywny) Programiści używają pętli `for` w JavaScript do...

Jeśli chcesz zastosować skrót terminu w swoim artykule, najpierw napisz go w całości, a następnie skrót umieść w nawiasie. Na przykład: "In computer science, an abstract syntax tree (AST) is ..."

Tekst powinien używać drugiej osoby liczby pojedynczej ("you"), aby nadać mu styl konwersacji. Dzięki temu tekst i instrukcje w nim zawarte wydają się mówić bezpośrednio do czytelnika. Staraj się unikać używania pierwszej osoby ("I", "we", "let's", and "us").

Jeśli uważasz, że są inne zasoby przewodnika, z których użytkownicy powinni skorzystać, dodaje je na dole w sekcji "Other Resources".

W razie potrzeby możesz dodać diagramy, grafiki lub wizualizacje., a także umieścić adekwatne filmy YouTube i interaktywne edytory kodu [REPL.it](https://repl.it/).

Nie używaj emoji ani emotikon w przewodniku. freeCodeCamp to globalna społeczność i kulturowe znaczenie emoji lub emotikony może się różnić na całym świecie. Ponadto, emoji mogą wyświetlać się inaczej na różnych systemach.

W stosownych przypadkach użyj cudzysłowów (double quotes).

Formatuj słowa kluczowe za pomocą języka markdown GitHub jako kod - odbywa się to za pomocą odwróconych apostrofów (klawisz backtick umieszczony po lewej stronie klawisza "1" na klawiaturze). Na przykład, umieść odwrócone apostrofy (backticki) wokół nazwy tagu HTML lub nazwy właściwości CSS.

W miarę możliwości stosuj przecinek oxfordzki (Oxford Comma). Jest to przecinek stosowany po przedostatnim elemencie podczas listowania trzech lub więcej elementów, przed słowami ‘and’ lub ‘or’, na przykład: an Italian painter, sculptor, and architect. Powoduje to, że tekst jest łatwiejszy od czytania, bardziej czytelny i ładniejszy dla oka.

### Atrybucja

Aby zminimalizować ryzyko plagiatu i zachować integralność w artykułach przewodnika ważne jest, aby w razie potrzeby podać autora lub źródło cytowanego materiału. Jeśli materiał cytowany jest w postaci niezmienionej w stosunku do materiału źródłowego, powinien być umieszczony w cudzysłowie i zawierać odpowiedni przypis. Materiał który nie jest bezpośrednim cytatem, ale wciąż parafrazuje inne zasoby, należy również oznaczyć. W tym celu można użyć cyfr górnego indeksu (superscript) przy użyciu tagów `<sup></sup>` w następujący sposób <sup>1</sup>

Następnie na dole artykułu należy umieścić nagłówek `### Sources` i dołączyć listę wszystkich cytatów, które powinny odpowiadać oznaczeniom powyżej:

<blockquote>
Tu jest treść, która powinna zostać oznaczona jako cytat.<sup>1</sup> A tu jest jeszcze więcej treści która powinna być oznaczona jako cytat z innego źródła.<sup>2</sup>

### Źródła
1. [Doe, John. "Authoring Words." *WikiCoder*. January 1, 1970. Accessed: October 20, 2017](#)
2. [Purdue OWL Staff. "MLA Works Cited: Electronic Sources." *Purdue Online Writing Lab.* October 12, 2017. Accessed: Ocotber 20, 2017.](https://owl.english.purdue.edu/owl/resource/747/08/)
</blockquote>
Możesz sprawdzić link "Purdue" powyżej, aby zobaczyć, jak prawidłowo cytować źródła internetowe (wyjaśniają nawet, jak cytować tweety!). Zazwyczaj przypis ma strukturę podobną do następującej:

>Nazwisko autora, Imię autora. "Tytuł artykułu." *Publikacja.* Wydawca. Data wydania. Date dostępu.

Jeśli nie możesz znaleźć autora lub daty wydania, co jest dość powszechne, po prostu pomiń je.

Korzystanie z odpowiednio sformatowanych cytatów nie tylko utrzymuje dobrą reputację przewodnika, ale także poprzez linki pozwala dostarczyć wartościowych zasobów, które pozwolą czytelnikowi dowiedzieć się więcej na temat danego zagadnienia. Należy również zauważyć, że w przypadku plagiatu treści zostaną usunięte lub pull requesty zostaną odrzucone, a użytkownik otrzyma ostrzeżenie. Przed wniesieniem wkładu w treść przewodnika zapoznaj się z [Academic Honesty Policy](https://www.freecodecamp.org/academic-honesty).

### Formatowanie przykładowego kodu

Użytkownicy będą prawdopodobnie używać artykułów przewodnika jako łatwo dostępnego źródła poprawnej składni. Artykuły powinny zawierać proste przykłady z rzeczywistej praktyki programistycznej, które pokażą popularne sposoby stosowania składki w praktyce.

Poniżej przedstawiono wskazówki dotyczące formatowania dla dowolnego kodu:

- Deklaracje w JavaScript kończą się średnikiem
- W stosownych przypadkach należy używać cudzysłowów
- Pokaż ogólnie przyjęte sprawdzone metody, szczególnie w związku z dostępnością
- Komentarze powinny zawierać spację między znakami komentarza a samym komentarzem

    `// Fix this line`
- GitHub markdown wspiera [kolorowanie składni w blokach kodu](https://help.github.com/articles/creating-and-highlighting-code-blocks/#syntax-highlighting) dla wielu języków programowania. Aby go użyć, wskaż odpowiedni język po rozpoczęciu ```
```
    ```html
        <div class='awesome' id='more-awesome'>
          <p>This is text in html</p>
        </div>
    ```

    ```javascript
        function logTheThings(stuff) {
         console.log(stuff);
        }
    ```

    ```css
       .awesome {
          background-color: #FCCFCC;
        }
    ```
```

### Dodawanie obrazów do artykułów

Aby dodać obrazy, jeśli nie są one przechowywane gdzieś indziej w sieci, musisz je samodzielnie umieścić online. Dobrym sposobem aby to zrobić, jest wgranie ich do własnego repozytorium GitHub (commit i push). Następnie można wskazać obraz za pomocą prawego przycisku myszy i skopiować skopiować jego źródło.

Następnie należy jedynie odwoływać się do nich w pliku markdown za pomocą składni:

`![twój alt tekst](twój url)`

Następnie obrazy powinny pojawić się po kliknięciu zakładki "preview table".

### Właściwe rzeczowniki

Właściwe rzeczowniki powinny w miarę możliwości używać poprawnej kapitalizacji. Poniżej znajduje się lista poprawnie sformatowanych słów, które powinny pojawić się w artykułach przewodnika.

- JavaScript (wielka litera "J" i "S" obraz brak skrótów)
- Node.js
- jQuery
- SQL

Front-end development (przymiotnik z myślnikiem) jest wtedy gdy pracujesz nad front end (rzeczownik bez myślnika). Takie same zasady dotyczą sformułowań: back end, full stack, i wielu innych zwrotów złożonych.

### Gdzie otrzymać pomoc

Pisanie techniczne lub literatura dotycząca nauki i technologii jest trudna. Musisz podjąć techniczny (zazwyczaj abstrakcyjny) temat i wyjaśnić go w jasny, dokładny i obiektywny sposób. Prawdopodobnie przejdziesz kilka rund sprawdzania i edytowania, zanim będziesz zadowolony z rezultatu.

Użyj [Hemingway App](http://www.hemingwayapp.com/). Nie ma nic magicznego w tym prostym narzędziu, ale automatycznie wykryje ono powszechne problemy związane ze stylem pisania:

- tryb pasywny
- niepotrzebne przysłówki
- słowa, które mają więcej synonimów

Aplikacja Hemingway przyzna ocenę twojemu tekstowi. Powinieneś dążyć do oceny "6". Innym dostępnym narzędziem jest [De-Jargonizer](http://scienceandpublic.com/), pierwotnie zaprojektowane do komunikacji naukowej. Może ono pomóc uniknąć stosowania nadmiernie specjalistycznej terminologii.

Ponadto istnieje społeczność wsparcia ze strony całego zespołu współpracowników, którym można podrzucić pomysły i poprosić o informacje zwrotne na temat twoich tekstów. Bądź aktywnym w [contributor's chat room](https://gitter.im/freecodecamp/contributors) i zadawaj wiele pytań.

Z twoją pomocą, możemy stworzyć kompleksowe narzędzie referencyjne, które pomoże milionom ludzi uczącym się programowania. Zarówno tym, którzy uczą się teraz, jak i tym którzy będą to robić w kolejnych latach.

## Licencja

Copyright (c) 2017 freeCodeCamp.

Zawartość tego repozytorium podlega pod następujące licencje:
- Licencja oprogramowania komputerowego (software) to [BSD-3-Clause](./LICENSE.md).
- Licencja zawartości przewodnika w ./src/pages i w podfolderach to [CC-BY-SA-4.0](./LICENSE-freeCodeCamp-Guide-Articles.md).

## Informacje od tłumacza

Powyższe tłumaczenie ma za zadanie ułatwić pierwszy kontakt z przewodnikiem freeCodeCamp osobom, które na co dzień komunikują się w języku polskim. **Aktualnie artykuły przewodnika freeCodeCamp (freeCodeCamp Guide) tworzone są tylko i wyłącznie w języku angielskim i w tym języku należy dokonywać ewentualnych kontrybucji**.

W powyższym pliku README:
- Pojawiły się terminy związane z obszarem computer science. Zostały one przetłumaczone tylko w tym miejscu gdzie nie budziły wątpliwości
- Pojawiły się terminy związane z interfejsem i terminologią GitHub. W większości przypadków nie zostały one przetłumaczone, z wyjątkiem terminu "branch", który w języku polskim powszechnie występuje jako "gałąź"
- Pojawił się termin "stub article", który tłumaczony dosłownie oznacza "kikut artykułu" co w języku polskim nie oddaje prawidłowo znaczenia sensu tej struktury. Z tego powodu zamiast wymienionego wyżej zwrotu zastosowany został termin "trzon"
- W sekcji "General writing tips" zachowana została oryginalna forma pisowni osób i zwrotów w języku angielskim tam, gdzie zwroty te wyjaśniały w jaki sposób należy pisać artykuły
