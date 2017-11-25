---
title:  CSS3 Colors
---

## Colors

CSS Colors is a CSS module that deals with colors, color types, color blending, and opacity. Not all CSS properties that take a <color> as a value are part of this module, but they do depend upon it. In CSS, you can change the color of almost any element in your HTML page. Properties like `background-color`, `color`, and `border-color` set the color of those elements.
  
CSS supports color names, hexadecimal and RGB colors.
As well as introducing the `opacity` declaration, colors in CSS3 can now be specified using color names, or RGB, HEX, HSL, RGBA, HSLA values.

HTML supports 140 standard <a href='https://www.w3schools.com/colors/colors_names.asp' target='_blank' rel='nofollow'>color names</a>.

### RGB(A)

RGB stands for "Red, Green, Blue".
An RGB value is a combination of intensity values for red, green, and blue. Each is between 0 (black) and 255 (full intensity).
RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity for a color. The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

An RGB color value is specified with: rgb(red, green, blue)
An RGBA color value is similar, with the alpha value in last position: rgba(red, green, blue, alpha)

### HSL(A)

HSL stands for "Hue, Saturation and Lightness".
Hue is a degree on the color wheel (from 0 to 360):
        0 (or 360) is red
        120 is green
        240 is blue
    Saturation is a percentage value: 100% is the full color.
    Lightness is also a percentage; 0% is dark (black) and 100% is white.
HSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity for a color.

An HSL color value is specified with: hsl(hue, saturation, lightness).
An HSLA color value is similar, with the alpha value in last position: hsla(hue, saturation, lightness, alpha)
    

### Hex Colors
Hexadecimal colors are a combination of 3 or 6 hexadecimal (base 16) values.

### Opacity

The CSS3 opacity property sets the opacity for the whole element (both background color and text will be opaque/transparent). Unlike alpha values specified with rgba and hsla, opacity is inherited by child elements.

The opacity property value must be a number between 0.0 (fully transparent) and 1.0 (fully opaque).

#### Examples

```html
<html>
  <body>
    <p>Hello Moto</p>
  </body>
</html>
```
```css
body {
  background-color: green;
  color: white;
}
```

In the above example, the `background-color: green` turns the `<body>` element green. This turns the whole web page green. The `<p>` elements are all white after `color: white` too.
You can use named colors, like `green`, `blue`, `yellow`, `red`, `purple`, and many others. But for custom colors, you can use hex codes (`#147ACC`), RGB values (`rgb(20, 122, 204)`), and even HSL values (`hsl(145, 59%, 30%)`).

```css
p {
  color: rgba(244, 145, 14, 0.80); // bright orange
}

h2 {
 color: #FA8072; //salmon 
}

```css
body {
  background-color: hsl(184, 87%, 94%); // bright blue
}

```
Above shows paragraphs styled bright orange and 20% transparent, h2 elements a salmon pink, and the body's background bright blue.

To get custom colors to use in CSS, you might find a color picker helpful. Some text editors have built-in color pickers, like Visual Studio Code. If you search "color picker" on Google or DuckDuckGo, you will get a color picker that you can use. Google Chrome and Firefox also have color picker add-ons that you can install. Adobe Color CC not only helps you pick a color, but will also help you pick out a color scheme for your web page!

#### More Information:
<a href="https://color.adobe.com/" target="_blank">Adobe Color CC</a><br>
<a href="https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en" target="_blank">ColorPick Eyedropper on Chrome Web Store</a><br>
<a href="https://addons.mozilla.org/en-US/firefox/addon/colorzilla/" target="_blank">ColorZilla add-on for Firefox</a>
