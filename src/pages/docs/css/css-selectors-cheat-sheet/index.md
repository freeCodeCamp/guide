---
title: "CSS Selectors Cheat Sheet"
parent: "css"
---

# CSS Selectors

In CSS, selectors are patterns used to select DOM elements.

Here is an example of using selectors. In the following code, `a` and `h1` are selectors:

    a {
      color: black;
    }
    h1 {
      font-size 24px;
    }

## Cheat list of selectors

| Selector | Selects |  
| `head` | selects the element with the 'head' tag |  
| `.red` | selects all elements with the 'red' class |  
| `#nav` | selects the elements with the 'nav' Id |  
| `div.row` | selects all elements with the div tag and the 'row' class |  
| `*` | Wildcard selector. Selects all DOM elements. See bellow for using it with other selectors |

We can combine selectors in interesting ways. Some examples:

| Selectors | Select |  
| `li a` | DOM descendant combinator. All aa's tags that are child of li tags |  
| `div.row *` | selects all elements that are descendant (or child) of the elements with div tag and 'row' class |  
| `li > a` | Difference combinator. Select direct descendants, instead of all descendants like the descendant selectors |  
| `li + a` | The adjacent combinator. It selects the element that is immediately preceded by the former element. In this case, only the first `a` after each `li`. |  
| `li, a` | Selects all `a` elements and all `li` elements. |  
| `li ~ a` | The sibling combinator. Selects `a` element following a `li` element. |

Pseudo-selectors or pseudo structural classes are also useful for selecting structural elements from the DOM. Here are some of them:

| Selectors | Select |  
| `:first-child` | Target the first element immediately inside (or child of) another element |  
| `:last-child` | Target the last element immediately inside (or child of) another element |  
| `:nth-child()` | Target the nth element immediately inside (or child of) another element. Admits integers, `even`, odd`or formulas |  
|`a:not(.name)`| Selects all`a`elements that are not of the`.name`class |  
|`::after`| Allows inserting content onto a page from CSS, instead of HTML. While the end result is not actually in the DOM, it appears on the page as if it is. This content loads after HTML elements. |  
|`::before` | Allows inserting content onto a page from CSS, instead of HTML. While the end result is not actually in the DOM, it appears on the page as if it is. This content loads before HTML elements. |

We can use pseudo-elements to define a special state of an element of the DOM but don't point to an element by themselves . Some examples:

| Pseudo-elements | Selects |  
| `:link` | `link` pseudo-class selects all links that have not been clicked yet |  
| `:hover` | `hover` pseudo-class selects a link that is being hovered by a mouse pointer |  
| `:active` | `active` pseudo-class selects a link that is being clicked by a mouse pointer |  
| `:visited` | `visited` pseudo-class selects a link that has already been clicked |

## Games

[CSS Diner](http://flukeout.github.io) is a web game that teaches almost everything there is to know about combining selectors.

## Additional reference

There are many more CSS selectors! Learn about them at [CodeTuts](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048), [CSS-tricks.com](https://css-tricks.com/almanac/selectors/), [w3schools.com](http://www.w3schools.com/cssref/css_selectors.asp) or at [Mozilla Developer Network](https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors).

Feel free to add to this document! Just look cheat sheets up and edit/complete this document!
