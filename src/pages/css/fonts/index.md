---
title: Fonts
---

## Font Property

The CSS font properties allows you to set various styles for fonts like: `font-family, font-style, font-variant, font-weight and font-size`

The following section will describe you each one of these properties one by one.

### Font Family

The `font-family` CSS property allows you to set a prioritized list of font family name and/or generic family name for the text content of a selected element.

You should end the list with a generic font family which are five — `serif, sans-serif, monospace, cursive and fantasy`. A font family declaration might look like this:

```css 
  p {
    font-family: "Times New Roman", Times, serif;
  }
```

### Font Style

The `font-style` property sets the font style for the text content of an element.

The possible values for this property are: `normal, italic or oblique`.

```css 
p.one {
    font-style: normal;
}
p.two {
    font-style: italic;
}
p.three {
    font-style: oblique;
}
```

### Font Size

The `font-size` property sets the size of font for the text content of an element.

There are several ways to specify the font size values e.g. with keywords, pixels or ems.

#### Setting Font Size with Keywords

`xx-small, x-small, small, medium, large, x-large, xx-large`

```css 
body {
    font-size: large;
}
h1 {
    font-size: larger;
}
p {
    font-size: smaller;
}
```

#### Setting Font Size with Pixels

```css 
h1 {
    font-size: 24px;
}
p {
    font-size: 14px;
}
```

#### Setting Font Size with Em

The `em` unit refers to the font size of the parent element.
The size of an em value is dynamic. When defining the `font-size` property, an em is equal to the size of the font that applies to the parent of the element.
If you set a `font-size` of `20px` on the body element, then `1em = 20px` and `2em = 40px`.
If you haven't set the font size anywhere on the page, then it is the browser default, which is probably `16px`. So, by default `1em = 16px`, and `2em = 32px`.

```css 
h1 {
    font-size: 2em;    /* 32px/16px=2em */
}
p {
    font-size: 0.875em;    /* 14px/16px=0.875em */
}
```

### Font Weight

The font-weight property specifies the weight or boldness of the font.

The possible values of `font-weight` property are: `normal`, `bold`, `bolder`, `lighter`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900` and inherit.

```css 
p {
    font-weight: bold;
}
```

### Font Variant

The `font-variant` property allows the text to be displayed in a special small-caps variation.

The possible values for the `font-variant` property are `normal`, `small-caps` and `inherit`.

```css 
p {
    font-variant: small-caps;
}
```


### More Information:

MDN Documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/font' target='_blank' rel='nofollow'>MDN</a>

