---
title: Ajacent Sibling
---
## Ajacent Sibling
Using the adjacent sibling selector (`+`) allows you to select an element only if it comes directly after the other (no other elements in between).

For example, if you wanted to select a paragraph that comes directly after an `<h1>` and change it's font color to red:

```css
h1 + p {
      color: red;
}
```

#### More Information:
[Adjacent sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_selectors) on MDN


