---
title: Hover Selector
---
## Hover Selector
The hover selector is used to apply a style to an element that will trigger once the user is interacting with it using a pointing device, usually the mouse pointer. Take, for instance, moving the mouse pointer over a button, but not clicking it.
The pseudo-class `:hover` is used to add the styles to the element.

Examples:
```html
<h1 class="title">This is the title</h1>
<p class="paragraph">This is the paragraph of our article.</p>
```

```css
.title {
  color: black;
  font-size: 30px;
}

.title:hover {
  color: blue;
}

.paragraph {
  color: black;
  font-size: 12px;
}

.paragraph:hover {
  color: red;
}
```

Once you move the cursor pointer over the `<h1>` or the `<p>` element, their color will change.

**Tips: The hover on touch devices will be rendered on the element once you tap it**
