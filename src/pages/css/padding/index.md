---
title: Padding
---
## Padding

The CSS padding properties are used to generate space around content. The padding clears an area around the content (inside the border) of an element.

With CSS, you have full control over the padding. There are CSS properties for setting the padding for each side of an element (top, right, bottom, and left).

**Note:** Padding is the shorthand property for `padding-top`, `padding-right`, `padding-bottom`, `padding-left`.

You can use percentage, length value or use the `inherit` keyword. 

```css
    .element {
        padding: 20px 30% 20em 20%;
        /* top, right, bottom, left */
    }
```

**Note:** You cannot use `inherit` with a length value with the `padding` property. 

#### More Information:

Docs: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)

Browser Support: It's effectively supported in all browsers (since IE6+, Firefox 2+, Chrome 1+ etc)
