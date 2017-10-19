---
title: Background Opacity
---
## Background Opacity

Background opacity is a setting in CSS that can make an element opaque or have varying degrees of transparency. This can be accomplished in two different way.

### Backgound Color

The `background` or `background-color` properties of an element can make use of the RGBA notation (Red, Green, Blue, Alpha) `rgba()` to set the transparency level of the color. This has the benefit of _only_ making the background transparent and allowing the content to stay fully opaque. 

```
background: rgba(0,0,255,0.5); // 50% transparency
```

### Element Opacity

The `opacity` property of an element will make the entire element either opaque or transparent by setting a decimal value between `1` and `0`. This includes the background of the element as well as all of the content.

#### More Information:
1. https://css-tricks.com/the-power-of-rgba/
