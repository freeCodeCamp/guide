---
title: CSS Classes
---
## CSS Classes

Classes are an efficient way of grouping HTML elements so that they can share the same styles.

---

When you're writing HTML you can add a class to an element like so:

```html
<h1 class="super-man">"Here I come to save the day!"</h1>
<p>is a popular catchphrase that <span class="super-man">Super Man</span> often said.</p>
```

Then in our CSS file we should add the special attributes to the class.
```css
.super-man {
  color: red;
  background-color: blue;
}
```

[View the above example on CodePen](https://codepen.io/Tlandis/pen/RLvomV).

Notice that classes have the prefix of a period (.) in CSS.

**Note:** class names are traditionally all lowercase, with each word in a multi-word class name separated by hyphens (e.g. "super-man").

#### More Information:
Refer to the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/class).
