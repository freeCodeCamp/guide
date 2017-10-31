---
title: Fonts
---
## Fonts

The CSS font properties define the font family, boldness, size, and the style of a text.

### Font family

The font family of a text is simply set by using the `font-family` property.

It works with a *fallback* system, if your browser does not support the first font, it tries with the next one and so on.

```css
p {
    font-family: "Times New Roman", Times, serif;   
}
```

### Font style

The `font-style` property can be used to specify italic text.

This property has 3 values:

* normal - Text shown normally
* italic - Text shown in *italic*
* oblique - Text shown leaning

```css
p.normal {
    font-style: normal;
}

p.italic {
    font-style: italic;
}

p.oblique {
    font-style: oblique;
}
```

### Font size

The `font-size` property sets the size of the text.

There are different types of font size values:

* `px` (pixels) - The default size of text being `16px`
* `em` - `1em` = the current font size, so `1em` = `16px` (recommended by the W3C)
* `small`, `medium`, `large` - known as absolute size values
* `%` - percentages

```css
with-pixels {
    font-size: 14px;
}

with-ems {
    font-size: 0.875em;
}

with-absolute {
    font-size: large;
}

with-percentage {
    font-size: 80%;
}
```

### Font weight

The `font-weight` property specified if said font is `bold` or `normal`.

```css
p {
   font-weight: bold
}
```

### Font variant

The `font-variant` property specifies if a text should be displayed in a small-caps font (where all lowercase letters are converted to uppercase letters while appearing in a smaller font-size than the original uppercase letters in the text).

```css
p.small {
  font-variant: small-caps;
}
```

### Import font

External fonts can be loaded either using the `@font-face` property or using Google Fonts' API.

#### Font-face
`@font-face` is used to specify the name and location of a font.

```
@font-face {
  font-family: nameOfTheFont;
  src: url(fonts/myFont.woff);
  }
```

You can also specify the `font-weight` and `font-style` if you have a particular font file for bold and italic.

```
@font-face {
  font-family: nameOfTheFont;
  src: url(fonts/myFontExtraBold.woff);
  font-weight: bold;
  font-style: normal;
}
```

#### Google Font
Google Font API can be used to load fonts via an external link. These links have to be in the `head` section to use them in your CSS stylesheet. 
```<head>
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
</head>
```
```
.selector {
  font-family: 'Open Sans', sans-serif;
}
```
#### More Information:

- https://www.w3schools.com/css/css_font.asp
- https://developer.mozilla.org/en-US/docs/Web/CSS/font
