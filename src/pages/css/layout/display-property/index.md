---
title: Display Property
---
## Display Property

The `display` property specifies the type of box used for an HTML element. There are 20 total keyword values, although only 10 are used commonly. The commonly used ones are:

```css
.none           {display: none}
.block          {display: block}
.inline-block   {display: inline-block}
.inline         {display: inline}
.flex           {display: flex}
.inline-flex    {display: inline-flex}
.inline-table   {display: inline-table}
.table          {display: table}
.inherit        {display: inherit}
.initial        {display: initial}
```

**Common Examples:**

```css
.myBox {
    display: block;
}

.myContainer {
    display: flex;
}

.inlineList ul > li {
    display: inline;
}
```


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Documentation and full list of keyword values: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

Browser Support: [caniuse](http://caniuse.com/#search=display)

A Complete Guide to Flexbox: [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
