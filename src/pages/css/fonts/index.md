---
title: Fonts
---
## Fonts

The CSS font properties define the font family, weight, size, variant, line height and style of a text.

### Font family

The font family of a text is simply set by using the `font-family` property.

It works with a *fallback* system, if your browser does not support the first font, it tries with the next one and so on. If the name of the font is more than one word it must be surrounded by quotes. 

```css
p {
    font-family: "Times New Roman", Times, serif;   
}
```

Generic family names are serif, sans-serif, monospace, cursive, fantasy, system-ui. It is common to specify one at the end. In the case above the user's serif system font would be used. 


### Font style

The `font-style` property can be used to specify italic text.

This property has 3 values:

* normal - Text shown normally
* italic - Text shown in *italic*
* oblique - Text shown leaning

```css
.normal {
    font-style: normal;
}

.italic {
    font-style: italic;
}

.oblique {
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
.with-pixels {
    font-size: 14px;
}

.with-ems {
    font-size: 0.875em;
}

.with-absolute {
    font-size: large;
}

.with-percentage {
    font-size: 80%;
}
```

### Font weight

The `font-weight`property specifies the weight (or boldness) of the font. Accepts keywords (`bold`, `normal`, `bolder`, `lighter`) or numeric keywords (`100`, `200`, `300`, `400` etc.) `400` is the same as `normal`.

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

#### More Information:

- https://www.w3schools.com/css/css_font.asp
- https://developer.mozilla.org/en-US/docs/Web/CSS/font
