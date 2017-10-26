---
title: Text
---
## Text

The CSS text properties define the way that text is layed out, aligned, spaced, indented or looks.

### Text Spacing

#### Letter spacing

The `letter-spacing` attribute defines the distance between characters in text. It can be set to a positive value so the characters are spaced apart or a negative value so the characters overlap.

```css
p.spaced-apart {
  letter-spacing: 5px;
}

p.overlapping {
  letter-spacing: -5px;
}
```

#### Word spacing

The `word-spacing` attribute defines the space between words within text.

```css
p.large-spacing {
  word-spacing: 15px;
}

p.small-spacing {
  word-spacing: -5px;
} 
```

#### Line Height

The `line-height` attribute defines the distance between lines of text. The default for most browsers is between 1.1 and 1.2.
A value of `0` would mean that there is no distance so two lines of text would be directly on top of each other. 

```css
p.large-spacing {
  line-height: 5;
}

p.small-spacing {
  line-height: 0.7;
} 

p.no-spacing {
  line-height: 0;
}
```

### Styling text

#### Text decoration

The `text-decoration` attribute is used to define the decorations on a piece of text.

This property has 4 values:

* underline - Draws a line below the text
* overline - Draws a line above the text
* line-through - Draws a line through the text
* none - Default option: doesn't decorate the text

```css
p.underline {
    text-decoration: underline;
}

p.overline {
    text-decoration: overline;
}

p.line-through {
    text-decoration: line-through;
}

p.none {
    text-decoration: none;
}
```

#### Text shadow

The `text-shadow` attribute adds a shadow to text.

There are three things to set when applying a text shadow:

* horizontal displacement
* vertical displacement
* color

They are applied in this order.

```css
p {
  text-shadow: 5px 1px blue;
}
```
This example sets the horizontal shadow to be 5px, the vertical shadow to be 1px and the color to be blue.

### Miscellaneous attributes

#### Text transformation

By using the `text-transformation` attribute it is possible to specify uppercase and lowercase letters in text.

This property has 3 values:

* uppercase - All letters are uppercase
* lowercase - All letters are lowercase
* capitalize - The first letter of each word is capitalized

```css
p.uppercase {
    text-transform: uppercase;
}

p.lowercase {
    text-transform: lowercase;
}

p.capitalize {
    text-transform: capitalize;
}
```

#### Text indentation

The property of `text-indentation` is used to define the indentation for the first line of text.

```css
p {
  text-indent: 20px;
}
```

#### Text align

The `text-align` attribute sets the horizontal aligment of text.

This property has 4 values:

* left - Text aligned to the left
* right - Text aligned to the right
* center - Text aligned to the center
* justified - Text is justified (spreads evenly to fit the whole page)

```css
p.left {
    text-align: left;
}

p.right {
    text-align: right;
}

p.center {
    text-align: center;
}

p.justified {
    text-align: justified;
}
```
------

#### More Information:

 - https://www.w3schools.com/css/css_text.asp
 - https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals

