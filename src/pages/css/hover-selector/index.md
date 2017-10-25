---
title: Hover Selector
---
## Hover Selector

The CSS `:hover` selector is one of many pseudo-classes that are used to style elements. 

The hover selector only applies the styles provided in the rule when the element enters the hover state.
That is when the user hovers over the element with their mouse.

```css
button {
  color: white;
  background-color: green;
}

button:hover {
  background-color: white;
  border: 2px solid green;
  color: green;
}
```

In the example above, the button's normal styling is white text on a green button. 
When a user hovers over the button with their mouse the rule with the `:hover` selector will become active and the button's style will change.

You can find many more pseudo-classes in this article on Mozillia's [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).
