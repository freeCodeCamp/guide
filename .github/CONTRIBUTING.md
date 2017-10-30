# Contributing

With your help, we can create a comprehensive reference tool that will help millions of people who are learning to code for years to come. 💛

> The following Table of Contents was generated automatically using the [Markdown TOC](https://marketplace.visualstudio.com/items?itemName=AlanWalk.markdown-toc) extension in [VS Code](https://code.visualstudio.com/).

<!-- TOC -->

- [Steps](#steps)
- [Creating a PR](#creating-a-pr)
  - [Using GitHub.com](#using-githubcom)
  - [By cloning locally](#by-cloning-locally)
- [Article Style Guide](#article-style-guide)
  - [Title](#title)
  - [Modularity](#modularity)
  - [Code Blocks](#code-blocks)
  - [Images](#images)
  - [Resources](#resources)
  - [Formatting](#formatting)
- [Technical Writing](#technical-writing)
  - [Outline](#outline)
  - [Intro](#intro)
  - [Content](#content)
  - [Clarity](#clarity)
  - [Voice](#voice)
    - [Passive](#passive)
    - [Active](#active)
  - [Point of View](#point-of-view)
  - [Abbreviations](#abbreviations)
  - [Proper nouns](#proper-nouns)
  - [Third-Party Tools](#third-party-tools)
- [Getting Help](#getting-help)

<!-- /TOC -->

## Steps

1. 🍴 [Fork this repo](https://github.com/freeCodeCamp/guides#fork-destination-box)
2. 👀️ Follow the contributing guidelines outlined below.
3. 🔧 Make some awesome changes!
4. 👉 [Make a pull request](https://github.com/freeCodeCamp/guides/compare)
5. 🎉 Get your pull request approved - success!

Or just [create an issue](https://github.com/freeCodeCamp/guides/issues) - any little bit of help counts! 😊

## Creating a PR

### Using GitHub.com

Watch the video demonstration or follow the steps below it:

![GIF showing the GitHub interface steps](https://i.imgur.com/0cmxJwN.gif)

1. Go into the **"pages"** folder (located in `guides/src`) and find the article stub you'd like to write or edit.

    > All stubs will be in an index.md file

2. Click the <kbd>Edit this file</kbd> pencil icon and make your changes to the file in GitHub-flavored Markdown.

3. Scroll to the bottom of the screen and add a commit message explaining your changes.

4. Then select the radio button option for **"Create a new branch for this commit and start a pull request"** and click <kbd>Propose file changes</kbd>.

5. On the next screen, you can add any other details about your PR, then click <kbd>Create pull request</kbd>.

### By cloning locally

1. Fork this repository

2. Copy it to your local machine by running the following command:

    ```bash
    git clone https://github.com/YOUR-GITHUB-USERNAME/guides.git
    ```

3. Add a remote upstream so git knows where the official freeCodeCamp guides repository is located by running the following command:

    ```bash
    git remote add upstream https://github.com/freeCodeCamp/guides.git
    ```

4. Create a new branch for your work with the command `git checkout -b NEW-BRANCH-NAME`.

    > Try to name your branch in a way that describes your article topic, like `fix/article-html`

5. Write your article, commit your changes locally, and push your new branch to GitHub with the command `git push origin NEW-BRANCH-NAME`

6. Go to your repository on GitHub and open a PR

Make sure to maintain your local fork going forward so it stays up-to-date with the freeCodeCamp guides repository.

The next time you want to contribute, checkout your local `master` branch and run the command `git pull --rebase upstream master` before creating a new branch.

This will grab all the changes on the official `master` branch without making an additional commit in your local repository.

## Article Style Guide

We've written the following guide to writing Guide articles to help you get started contributing.

### Title

Article titles should be as short, concise, and to-the-point as possible.

We want campers to quickly find the information they're looking for, and the title should reflect the main theme of the article.

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

### Modularity

Each article should explain exactly one concept, and that concept should be apparent from the article's title.

We can reference other articles by linking to them inline, or in an "Other Resources" section at the end of the article.

Our goal is to have thousands of articles that cover a broad range of technical topics.

### Code Blocks

Campers will likely use Guide articles as a quick reference to look up syntax. Articles should have simple real-world examples that show common-use cases of that syntax.

GitHub-flavored markdown supports [syntax highlighting in code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/#syntax-highlighting) for many programming languages.

To use it, indicate the language after ```.

For example, the following Markdown

```markdown
    ```html
    <div class='awesome' id='more-awesome'>
      <p>This is text in html</p>
    </div>
    ```
```

will output the following code block with `HTML` syntax highlighting since we indicated the language `html` after the ```.

```html
<div class='awesome' id='more-awesome'>
  <p>This is text in html</p>
</div>
```

The following represents two other examples using JavaScript and CSS syntax highlighting.

```markdown
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

Here are some suggested formatting guidelines when writing code blocks:

- JavaScript statements should end with a `;` semicolon
- Comments made should have a space between the comment characters and the comment themselves
    ```javascript
    // Like this
    ```

### Images

For including images, if the images aren't already hosted somewhere else on the web, you'll need to put them online yourself using a platform like [Imgur](https://imgur.com/) or [Flickr](https://www.flickr.com).

A good way to do this is to commit them to a GitHub repository of your own, then push them to GitHub. Then you can right-click the image and copy its image source.

Then you'd just need to reference them in your markdown file with this syntax:

```markdown
![Image Title](https://url-to-image)
```

Then the images should show up when you click the <kcd>Preview</kcd> tab.

You can also add diagrams, graphics, or visualizations as necessary.

You can even embed relevant YouTube videos and interactive [REPL.it](https://repl.it/) code editors.

Don't use emojis or emoticons in the Guide. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

### Resources

If there are other Guide resources you think campers would benefit from, add them at the bottom in a "More Resources" section with a bulleted list.

```markdown
### More Resources

- [A New Resource](#link)
```

### Formatting

Use double quotes where applicable.

Format language keywords as code - this is done with the backtick key (located to the left of the "1" key on a US keyboard) in GitHub-flavored markdown. For example, put back ticks around HTML tag names or CSS property names.

Use the Oxford Comma when possible (it is a comma used after the penultimate item in a list of three or more items, before ‘and’ or ‘or’ e.g. an Italian painter, sculptor, and architect). It makes things easier, clearer, and prettier to read.

## Technical Writing

Technical writing, or the literature of science and technology, is hard.

You'll need to take a technical (usually abstract) topic and explain it in a clear, accurate, and objective manner.

You'll likely go through several rounds of proofreading and editing before you're happy with the result.

### Outline

Before you begin writing, create an outline of the topic and think about any coding examples you'll use (if applicable).

This helps to organize your thoughts and make the writing process easier.

### Intro

The introduction paragraph should only be 1-2 sentences long and be a simple explanation of the main topic. It should limit the use of any links to other Guide articles, as they can be distracting.

### Content

Keep paragraphs short (around 1-4 sentences). People are more likely to read several short paragraphs over a wall of text.

### Clarity

Articles should be written with short, clear sentences, and use as little jargon as necessary.

All jargon should be defined immediately in plain English.

### Voice

Use active voice instead of passive voice. Generally, it's a stronger and more straightforward way to communicate a subject. For example:

#### Passive

The `for` loop in JavaScript is used by programmers to...

#### Active

Programmers use the `for` loop in JavaScript to...

### Point of View

Text should use the second person ("you") to help to give it a conversational tone.

This way, the text and instructions seem to speak directly to the camper reading it.

Try to avoid using the first person ("I", "we", "let's", and "us").

### Abbreviations

If you want to abbreviate a term in your article, write it out fully first, then put the abbreviation in parentheses.

For example, `"In computer science, an abstract syntax tree (AST) is ..."`

### Proper nouns

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in Guide articles.

- JavaScript (capital letters in "J" and "S" and no abbreviations)
- Node.js

Front-end development (adjective form with a dash) is when you working on the front end (noun form with no dash). The same goes with the back end, full stack, and many other compound terms.

### Third-Party Tools

To check for grammar and spelling, we recommend using an app like [Grammarly](https://grammarly.com) or a built in extension/plugin that checks for this within your text editor.

- [VS Code](https://code.visualstudio.com/) - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Sublime Text 3](https://www.sublimetext.com/docs/3/spell_checking.html)

To check your writing style, we recommend the  [Hemingway App](http://www.hemingwayapp.com/).

There’s nothing magical about this simple tool, but it will automatically detect widely agreed-upon style issues:

- passive voice
- unnecessary adverbs
- words that have more common equivalents

The Hemingway App will assign a "grade level" for your writing.

You should aim for a grade level of 6.

Another tool available is the [De-Jargonizer](http://scienceandpublic.com/), originally designed for scientific communication but might help avoid overspecialized wording.

## Getting Help

There's a community of support from a whole team of contributors, whom you can bounce ideas off of and ask for input on your writing.

Stay active in the [contributors chat room](https://gitter.im/freecodecamp/contributors) and ask lots of questions.