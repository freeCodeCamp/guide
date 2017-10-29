---
title: CSS3 Transitions
---
## CSS3 Transitions

When a CSS property is changed during runtime, that is after the page is loaded, you can use a transition to make a smoother change rather than an abrupt one. Transitions are very similar to animations and use some of the same techniques. The other big difference is that a transition, unlike an animation, does not define the beginning and ending states; these are defined outside of the transition.

**CSS transitions** provide a way to control animation speed when changing CSS properties. 
The `transition `property is a shorthand property used to represent up to four transition-related longhand properties:
```
.example {
    transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];
}
```
In your work you can use it in this way:
```
.example {
  opacity: 1; // you should init  basic value
  transition: opacity 1s; // you should init it here, not on hover
}
.example:hover {
  opacity: 0.7;
}
```
_For compatibility in all [supporting browsers](http://caniuse.com/#feat=css-transitions), vendor prefixes are required_

More information on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions) and [W3C](https://www.w3.org/TR/css3-transitions/)
