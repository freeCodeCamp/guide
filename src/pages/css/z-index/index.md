---
title: Z-Index
---
## Z Index

The z-index property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.

You can specify any integer as a value or use a keyword such as ```auto```, ```initial``` or ```inherit```.

```css
    .parent {
        z-index: 2;
    }

    .children {
        z-index: inherit;
    }
```

**Note**: z-index only works on positioned elements (position:absolute, position:relative, or position:fixed).

#### More Information:

Docs: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)

Browser Support: It's effectively supported in all browsers (since IE6+, Firefox 2+, Chrome 1+ etc)

What No One Told You About Z-Index: [Philip Walton](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)
