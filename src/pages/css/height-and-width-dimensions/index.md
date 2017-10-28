---
title: Height and Width Dimensions
---
## Height and Width Dimensions

**Height**

Sets the height of block or replaced elements (for example, the `<img>` tag applies to them). Height does not include the thickness of the borders around the element, the value of indents and margins

If the contents of the block exceed the specified height, then the height of the element will remain unchanged, and the content will be displayed on top of it. Because of this feature, you can get a superimposition of the contents of the elements on each other when the elements in the HTML code are sequential. To prevent this from happening, add overflow: auto to the element style.

SYNTAX:
```css
height: /* value | procents | auto | inherit */;
```

As values, any units of length accepted in CSS are accepted - for example, pixels (px), inches (in), points (pt), etc. When using an interest record, the element's height is calculated depending on the height of the parent element. If the parent is not explicitly specified, then the browser window appears in its quality. auto sets the height based on the content of the element.

EXAMPLE:

```css
.layer {
    height: 50px; /* block height */
}
```

**Width**

Sets the width of block or replaced elements (for example, the `<img>` tag applies to them). The width does not include the thickness of the borders around the element, the value of indents and margins.

As values, any units of length accepted in CSS are accepted - for example, pixels (px), inches (in), points (pt), etc. When using the percentage record, the element width is calculated depending on the width of the parent element. If the parent is not explicitly specified, then the browser window appears in its quality.


EXAMPLE:

```css
.layer {
    width: 50px; /* block width */
}
```
