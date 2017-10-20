---
title: Active
---
## Active

You use the `selector:active` property to change the style for the particular selector for the time period it is selected. A selector is active for the time period it is clicked using primary mouse button.

**Syntax :**
```
  selector:active{ 
    property : value;
  }
```
A selector can be a tag, class or Id.

**Example :**
```
html
<a href="https://www.freecodecamp.org">Free Code Camp</a>
```
```
css
a:active{
    color : green;
    font-size : 32px;
    text-decoration : none;
}
```
The moment when the <a href="https://www.freecodecamp.org">Free Code Camp</a> is clicked it's color turns green, font-size changes to 32px
and the decoration of the link is removed.
#### More Information:
<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/%3Aactive' target='_blank'>MDN Web Docs</a><br>
<a href='https://www.w3schools.com/cssref/sel_active.asp' target='_blank'>W3schools</a>


