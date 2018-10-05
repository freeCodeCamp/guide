---
title: CSS3 at Media Rule
---
## CSS3 at Media Rule

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

### Definition
The ```@media``` rule is used in media queries to __apply different styles for different devices__ as well as screen sizes.

Media queries can be used to check many things, such as:
  - width and height of the viewport / device
  - orientation of the device (landscape / portrait)
  - screen resolution


Using media queries are a popular technique for delivering a specific style sheet to differnt scren sizes such as desktops / laptops, tablets, and mobile phones.

You can also use media queries to specify that certain styles are only for __printed__ documents or for __screen readers__ (mediatype: print, screen, or speech).

In addition to media types, there are also media features. Media features provide more specific details to media queries, by allowing to test for a specific feature of the user agent or display device. For example, you can apply styles to only those screens that are greater, or smaller, than a certain width.

### CSS Syntax

```
@media not|only mediatype and (media feature and|or|not mediafeature) {
    CSS-Code;
}
```
### Explanation

__not__: looks for an expression that is not true (in many programming languages this is ```!=``` )

__only__: The only keyword prevents older browsers that do not support media queries with media features from applying the specified styles. It has no effect on modern browsers.

__and__: combines media feature and media type or multiple media features 
```css
@media screen and (max-width: 900px) and (min-width: 600px), (min-width: 1100px) {
}
```
*When the width is between 600px and 900px __OR__ above 1100px*

### Media Types

__all__: default value. Includes all devices in media query

__print__: used to define specific styles for printing
```css
@media print {
}
```

__screen__: inclues all devices (phone, tablet, desktop, laptop, etc.)
```css
@media screen {
}
```

__speech__: used for screenreaders that reads the page out loud

### Media Features

__any-hover__: Does any available input mechanism allow the user to hover over elements?

__any-pointer__: Is any available input mechanism a pointing device, and if so, how accurate is it?

__aspect-ratio__: The ratio between the width and the height of the viewport

__color__: The number of bits per color component for the output device

__color-gamut__: The approximate range of colors that are supported by the user agent and output device

__color-index__: The number of colors the device can display

__grid__: Whether the device is a grid or bitmap

__height__: The viewport height (px, em, rem, etc.)

__hover__: Does the primary input mechanism allow the user to hover over elements?

__inverted-colors__: Is the browser or underlying OS inverting colors?

__light-level__: Current ambient light level

__max-aspect-ratio__: The maximum ratio between the width and the height of the display area

__max-color__: The maximum number of bits per color component for the output device

__max-color-index__: The maximum number of colors the device can display

__max-height__: The maximum height of the display area, such as a browser window

__max-monochrome__: The maximum number of bits per "color" on a monochrome (greyscale) device

__max-resolution__: The maximum resolution of the device, using dpi or dpcm

__max-width__: The maximum width of the display area, such as a browser window
```css
@media screen and (max-width: 600px) {
}
```

__min-aspect-ratio__: The minimum ratio between the width and the height of the display area

__min-color__: The minimum number of bits per color component for the output device

__min-color-index__: The minimum number of colors the device can display

__min-height__: The minimum height of the display area, such as a browser window

__min-monochrome__: The minimum number of bits per "color" on a monochrome (greyscale) device

__min-resolution__: The minimum resolution of the device, using dpi or dpcm

__min-width__: The minimum width of the display area, such as a browser window

__monochrome__: The number of bits per "color" on a monochrome (greyscale) device

__orientation__: The orientation of the viewport (landscape or portrait mode)
```css
@media only screen and (orientation: landscape) {
}
```

__overflow-block__: How does the output device handle content that overflows the viewport along the block axis 

__overflow-inline__: Can content that overflows the viewport along the inline axis be scrolled 

__pointer__: Is the primary input mechanism a pointing device, and if so, how accurate is it? 

__resolution__: The resolution of the output device, using dpi or dpcm

__scan__: The scanning process of the output device

__scripting__: Is scripting (e.g. JavaScript) available? 

__update__: How quickly can the output device modify the appearance of the content 

__width__: The viewport width


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[W3Schools](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

[CSS-Tricks](https://css-tricks.com/css-media-queries/)
