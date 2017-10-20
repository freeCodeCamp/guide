---
title: Fonts
---
# Fonts

The CSS `font` properties define the font family, boldness, size, and the style of a text.

## Font Family

The `font-family` property is used for setting the font of a text. It can receive more than one font. If more than one is passed, the other fonts will be used as a fallback, in case the previous font doesn't exist. Please note that if a font name consists of more than 1 word, it should be wraped with quotation marks. 

### Example:
```css
p {
 font-family: "Segoe UI", Arial, serif;
}
```

## Font Style
The `font-style` property specifies whether a font should be styled with a normal, italic, or oblique face from its font-family.

### Values

* `normal`: The text is shown normally
* `italic`: The text is shown in italics 
* `oblique`: Looks very similar to italics, but mostly in supported for most fonts.

### Example:
```css
p {
  font-style: italic;
}
```

## Font Weight
The `font-weight` property is used for setting the boldntess of the text.

### Values
* `normal`: The text is shown normally
* `bold`: The text is shown in bold 
* `lighter`: The text is thinner (depends on the font)
* You can also specify a number between 100 and 900, thought support for this is varied

### Example:
```css
p.normal {
  font-weight: normal;
}

p.bold {
  font-weight: bold;
}

p.light {
  font-weight: lighter;
}

p.ultra-light {
  font-weight: 100;
}

p.ultra-bold {
  font-weight: 900;
}
```
## Font Size
The `font-size` property is used for setting the size of the text.
The size can be specified in `px`,`em`,`cm`,`%` or you can use one of the following parameters:
`xx-small|x-small|small|large|x-large|xx-large|smaller|larger|medium|initial|inherit`

### Example:
```css
div.parent {
  font-size: 40px;
}

div.child {
  font-size: x-small;
}
```
