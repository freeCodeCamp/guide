---
title: Semantic HTML Elements
---

## Semantic HTML Elements
The `<em>` element marks text as being emphasized above the text around it. Typically, the browser renders this in *italics*, but you can add other styles using CSS.

HTML5 introduced new semantic elements such as `<header>` and `<footer>`. These elements function similarly to `<div>`, but give additional context to people and computers reading or parsing the code.

#### `<em>` vs `<i>` vs `<cite>`
Since webpages so often display `<em>` in *italics*, beginning developers may think `<em>` and `<i>` (which also renders text in *italics*) are interchangeable.

While the visual result may be the same, the semantic meaning of the two tags is different. The `<em>` tag indicates that its content is emphasized, while the `<i>` tag represents text that is set apart from the surrounding text, such as with a foreign language, a fictional character's thoughts, or the definition of a word. On the other hand, the title of a book, movie, musical composition, or another work should use the `<cite>` tag.

A semantic element clearly describes its meaning to both the browser and the developer.

Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.

Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

#### More Information:
For more information: https://codepen.io/mi-lee/post/an-overview-of-html5-semantics

Refer to the [MDN Web Docs article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em).
