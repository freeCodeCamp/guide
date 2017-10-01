---
title: Padding
---
# Padding

The `padding` CSS property sets the padding area on all four sides of an element. It is a shorthand to set all individual paddings at once: `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`. Values are defined in clockwise direction.

## Syntax
```
.element {
  padding: <padding-top> || <padding-right> || <padding-bottom> || <padding-left>
}
```

This property may be specified using one, two, three, or four values.
- When one value is specified, it applies the same padding to all four sides.
- When two values are specified, the first padding applies to the top and bottom, the second to the left and right.
- When three values are specified, the first padding applies to the top, the second to the left and right, the third to the bottom.
- When four values are specified, the paddings apply to the top, right, bottom, and left in that order (clockwise).

```
/* Apply to all four sides */
padding: 1em;

/* top and bottom | left and right */
padding: 5% 10%;

/* top | left and right | bottom */
padding: 1em 2em 2em;

/* top | right | bottom | left */
padding: 5px 1em 0 1em;
```

## Where in box model
The padding property in CSS defines the innermost portion of the box model, creating space around an element's content, inside of any defined margins and/or borders.

![The CSS Box Model](https://www.w3.org/TR/css3-box/box.png)

### More Information
- [W3C](https://www.w3.org/TR/css3-box/#the-padding)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
- [CSS Tricks](https://css-tricks.com/almanac/properties/p/padding/)
