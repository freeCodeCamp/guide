---
title: Semantic HTML Elements
---

## Semantic HTML Elements
The `<em>` element marks text as being emphasized above the text around it. Typically, the browser renders this in *italics*, but you can add other styles using CSS.

HTML5 introduced new semantic elements such as `<header>` and `<footer>`. These elements function similarly to `<div>`, but give additional context to people and computers reading or parsing the code.

#### `<em>` vs `<i>` vs `<cite>`
Since webpages so often display `<em>` in *italics*, beginning developers may think `<em>` and `<i>` (which also renders text in *italics*) are interchangeable.

While the visual result may be the same, the semantic meaning of the two tags is different. The `<em>` tag indicates that its content is emphasized, while the `<i>` tag represents text that is set apart from the surrounding text, such as with a foreign language, a fictional character's thoughts, or the definition of a word. On the other hand, the title of a book, movie, musical composition, or another work should use the `<cite>` tag.

```html
<p>I just <em>can't</em> handle this right now!</p>
```

In this example, the word "can't" is emphasized: I just <em>can't</em> handle this right now!

```html
<p>His art had a certain <i>je ne sais quoi</i>.</p>
```

In this example, the French text is set off from the rest of the sentence: His art had a certain <i>je ne sais quoi</i>.

#### More Information

Refer to the [MDN Web Docs article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em).
