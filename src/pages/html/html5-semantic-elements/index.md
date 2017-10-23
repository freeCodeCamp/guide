---
title: HTML5 Semantic Elements
---
## HTML5 Semantic Elements

Semantic elements were introduced to enable developers write more readable markups for editors and publishers. These elements also help assistive technologies and different crawling bots for better interpreting markup. Using semantic tags can help in SEO as well. Here is a list of HTML5 semantic elements which are supported across all recent versions of major browsers.

#### `<header>`:
This element contains all content in header of a website. This generally has logo, `<nav>`, social share icons etc. This tag cannot be used as child element of `<footer>`, `<address>` or another `<header>`.

#### `<nav>`:
This element represents a set of navigational links of a website.

#### `<section>`:
This element represents a section in the document. This element is used for thematic/logical grouping of contents.

#### `<article>`:
Self contained element used generally for blog/forum posts or on news/magazine websites.

#### `<aside>`: 
This element represents less important content which are in context with the surrounding content.

#### `<details>`:
This element is for showing additional details of some thing mentioned in surrounding elements. Content of this element are supposed to be hidden unless user interacts (click/mouse hover/tap/swipe) to show the content.

#### `<summary>`:
This element can be used along with `<details>` element. This element can be shown by default where as user interaction is required for showing details.

#### `<figure>`:
Self contained tag with contents like images, illustrations etc. along with related captions or titles, if present.

##### `<figcaption>:`
Used to add caption to an image or illustration. This can be a child element of `<figure>` element.

#### `<main>`:
This represents the main content inside the `<body>`.

#### `<mark>`:
This tag is used to highlight or "mark" any important content.

#### `<footer>`:
This represents the footer section of document.

#### `<time>`:
Content of this element represents time in readable format either for human or search engines.

#### `<pre>`:
This is used for pre-formatted text. Major browsers generally render `<pre>` text with monospace font, whitespace intact, and with no word wrap.

#### `<bdi>`:
Defines text that is bi-directional. For example to show a quote in Arabic or Hebrew language on a website using English as primary language.

#### `<datalist>`:
This tag is used for an `<input>` to add predefined values. This tag is the native "auto complete" feature introduced in HTML5.

#### `<progress>`:
Used to show progress bar or percentage of progress or both.

#### `<dialog>`:
Represents a dialog box or window. This element is generally used for popups or modal windows on document.

#### More Information:
[Wiki](https://en.wikipedia.org/wiki/Semantic_HTML) can be a good start to learn more about semantic HTML.
[@vincent-bidaux's](https://github.com/vincent-bidaux) [article](https://webflow.com/blog/html5-semantic-elements-and-webflow-the-essential-guide) has some good visual representations of the semantic tags on real websites.
