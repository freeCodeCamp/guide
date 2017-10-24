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

## Czym są artykuły przewodnika freeCodeCamp?
Artykuły przewodnika mogą dotyczyć składni, wzorców projektowania, tego czym są aria labels, lub informacje na temat znaczenia numerów w prawym górnym rogu ekranu na stronie freecodecamp.org. Tutaj znajdziesz [przykład artykułu o tagach HTML](./src/pages/html/elements/index.md).

## O czym mogę napisać artykuł?
Twoja pomoc w tworzeniu artykułów jest mile widziana. Nie musisz być ekspertem w danej dziedzinie aby o niej napisać - ten przewodnik jest tworzony na zasadach open source, więc nawet jeśli zrobisz błąd, inna osoba prędzej czy później go poprawi.

Aby pomóc, znajdź `stub article` (`trzon artykułu`) na [stronie przewodnika](https://guide.freecodecamp.org/), napisz artykuł, nastpnie stwórz pull request (PR) aby zastąpić trzon twoimi zmianami.

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


2) Jeśli preferujesz tworzyć zmiany lokalnie na swoim komputerze przed wysłaniem PR, postępuj zgodnie z instrukcją:
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

Article titles should be as short, concise, and to-the-point as possible. We want campers to quickly find the information they're looking for, and the title should reflect the main theme of the article.

Here are some title examples:

- "HTML Lists"
- "CSS Borders"
- "JavaScript For Loop"

The folder name is used in the URL, so only use dashes `-`, numbers `0-9`, and lowercase letters `a-z` for it.

Here are some folder name examples:

- html-lists
- css-borders
- javascript-for-loop

However, you can include special characters in the article title.

### Modułowość

Each article should explain exactly one concept, and that concept should be apparent from the article's title.

We can reference other articles by linking to them inline, or in an "Other Resources" section at the end of the article.

Our goal is to have thousands of articles that cover a broad range of technical topics.

### Pisanie artykułów

Before you begin writing, create an outline of the topic and think about any coding examples you'll use (if applicable). This helps to organize your thoughts and make the writing process easier.

Articles should be written with short, clear sentences, and use as little jargon as necessary. All jargon should be defined immediately in plain English.

The introduction paragraph should only be 1-2 sentences long and be a simple explanation of the main topic. It should limit the use of any links to other Guide articles, as they can be distracting.

Keep paragraphs short (around 1-4 sentences). People are more likely to read several short paragraphs over a wall of text.

Use active voice instead of passive voice. Generally, it's a stronger and more straightforward way to communicate a subject. For example:
  - (Passive) The `for` loop in JavaScript is used by programmers to...
  - (Active) Programmers use the `for` loop in JavaScript to...

If you want to abbreviate a term in your article, write it out fully first, then put the abbreviation in parentheses. For example, "In computer science, an abstract syntax tree (AST) is ..."

Text should use the second person ("you") to help to give it a conversational tone. This way, the text and instructions seem to speak directly to the camper reading it. Try to avoid using the first person ("I", "we", "let's", and "us").

If there are other Guide resources you think campers would benefit from, add them at the bottom in an "Other Resources" section.

You can add diagrams, graphics, or visualizations as necessary. You can also embed relevant YouTube videos and interactive [REPL.it](https://repl.it/) code editors.

Don't use emojis or emoticons in the Guide. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

Use double quotes where applicable.

Format language keywords as code - this is done with the backtick key (located to the left of the "1" key on a US keyboard) in GitHub-flavored markdown. For example, put backticks around HTML tag names or CSS property names.

Use the Oxford Comma when possible (it is a comma used after the penultimate item in a list of three or more items, before ‘and’ or ‘or’ e.g. an Italian painter, sculptor, and architect). It makes things easier, clearer, and prettier to read.

### Atrybucja

To minimize the potential for plagiarism and maintain integrity in these guides, it is important to give credit where necessary. Any material quoted, or used directly and unchanged, from source material should be wrapped in quotation marks and be adequately cited. Material that is not a direct quote but is still paraphrased from a different resource should also be cited. You can create superscript numerals to mark content that is cited using `<sup></sup>` tags. Like so: <sup>1</sup>

Then, at the bottom of your article, place a `### Sources` heading and include all of your citations numbered to correspond with your marks above:

<blockquote>
Here is some content that should be cited.<sup>1</sup> And here is even more that should be cited from another source.<sup>2</sup>

### Źródła
1. [Doe, John. "Authoring Words." *WikiCoder*. January 1, 1970. Accessed: October 20, 2017](#)
2. [Purdue OWL Staff. "MLA Works Cited: Electronic Sources." *Purdue Online Writing Lab.* October 12, 2017. Accessed: Ocotber 20, 2017.](https://owl.english.purdue.edu/owl/resource/747/08/)
</blockquote>
You can check out the Purdue link above to see how to properly cite web sources (they even show how to cite tweets!). Typically, an attribution has a structure like the following:

>Author Last Name, Author First Name. "Article Title." *Publication.* Publisher. Date Published. Date Accessed.

If you cannot find an author or published date, which is common, simply omit these.

Use of proper citations will not only keep the guides reputable, but these citations and links will also provide valuable resources should the reader want to learn more about the topic. Also note that instances of blatant plagiarism will be either removed or have their pull requests declined, and the user will receive a warning. Please refer to and review the [Academic Honesty Policy](https://www.freecodecamp.org/academic-honesty) before contributing.

### Formatowanie przykładowego kodu

Campers will likely use Guide articles as a quick reference to look up syntax. Articles should have simple real-world examples that show common-use cases of that syntax.

Here are specific formatting guidelines for any code:

- JavaScript statements end with a semicolon
- Use double quotes where applicable
- Show generally-accepted best practices, particularly for accessibility
- Comments made should have a space between the comment characters and the comment themselves

    `// Fix this line`
- GitHub-flavored markdown supports [syntax highlighting in code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/#syntax-highlighting) for many programming languages. To use it, indicate the language after starting ```
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

For including images, if the images aren't already hosted somewhere else on the web, you'll need to put them online yourself. A good way to do this is to commit them to a GitHub repository of your own, then push them to GitHub. Then you can right-click the image and copy its image source.

Then you'd just need to reference them in your markdown file with this syntax:

`![your alt text](your url)`

Then the images should show up when you click the "preview table" tab.

### Właściwe rzeczowniki

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in Guide articles.

- JavaScript (capital letters in "J" and "S" and no abbreviations)
- Node.js
- jQuery
- SQL

Front-end development (adjective form with a dash) is when you working on the front end (noun form with no dash). The same goes with the back end, full stack, and many other compound terms.

### Gdzie otrzymać pomoc

Technical writing, or the literature of science and technology, is hard. You'll need to take a technical (usually abstract) topic and explain it in a clear, accurate, and objective manner. You'll likely go through several rounds of proofreading and editing before you're happy with the result.

Use the [Hemingway App](http://www.hemingwayapp.com/). There’s nothing magical about this simple tool, but it will automatically detect widely agreed-upon style issues:

- passive voice
- unnecessary adverbs
- words that have more common equivalents

The Hemingway App will assign a “grade level” for your writing. You should aim for a grade level of 6. Another tool available is the [De-Jargonizer](http://scienceandpublic.com/), originally designed for scientific communication but might help avoid overspecialized wording.

Also, there's a community of support from a whole team of contributors, whom you can bounce ideas off of and ask for input on your writing. Stay active in the [contributor's chat room](https://gitter.im/freecodecamp/contributors) and ask lots of questions.

Z twoją pomocą, możemy stworzyć kompleksowe narzędzie referencyjne, które pomoże milionom ludzi uczącym sie programowania. Zarówno tym, którzy uczą sie teraz, jak i tym którzy bedą to robić w kolejnych latach.

## Licencja

Copyright (c) 2017 freeCodeCamp.

Zawartość tego repozytorium podlega pod nastepujące licencje:
- The computer software is licensed under the [BSD-3-Clause](./LICENSE.md).
- The reference content as in ./src/pages and subdirectories is licensed under the [CC-BY-SA-4.0](./LICENSE-freeCodeCamp-Guide-Articles.md).
