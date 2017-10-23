---
title: CSS3 Nth Child Selector
---
## CSS3 Nth Child Selector

The `:nth-child()` is a pseudo-class selector matches one or more elements based on their position among a group of siblings. It is specified with a single argument, which represents the pattern for matching elements.

#### List of Patterns for matching elements
`odd` - Represents elements whose numeric position in a series of siblings is odd.

`even` - Represents elements whose numeric position in a series of siblings is even.

`<An+B>` - Represents elements whose numeric position in a series of siblings matches the pattern An+B, for every positive integer or zero value of n. The index of the first element is 1. The values A and B must both be <integer>s

**Code Example**

```css
  :nth-child(2n) {
    /* Selects every second element among any group of siblings */
  }
  
  tr:nth-child(odd) {
    /* Represents the odd rows of an HTML table */
  }
  
  tr:nth-child(even) {
    /* Represents the even rows of an HTML table */
  }
  
  :nth-child(5n) {
    /* Represents elements 5, 10, 15, etc */
  }
  
  :nth-child(3n+4) {
    /* Represents elements 4, 7, 10, 13, etc */
  }
  
  p:nth-child(n) {
    /* Represents every <p> element among a group of siblings (this is same as simple p selector) */
  }
  
  p:nth-child(1) {
    /* Represents every <p> that is the first element among a group of siblings (this is same as :first-child selector) */
  }
```

#### More Information:
[MDN Doc on `:nth-child()`](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Anth-child)

[CSS Tricks - How nth-child Works](https://css-tricks.com/how-nth-child-works/)
