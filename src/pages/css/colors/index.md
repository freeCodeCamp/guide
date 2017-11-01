---
title: Colors
---

## Colors

In CSS, you can change the color of almost any element in your HTML page. Properties like `background-color`, `color`, and `border-color` set the color of those elements. CSS Colors is a CSS module that deals with colors, color types, color blending, and opacity. Not all CSS properties that take a <color> as a value are part of this module, but they do depend upon it.

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
In the above example, the `background-color: green` turns the `<body>` element green and so the whole web page background green. `color: white` turns the `<p>` elements into white.

Colors are specified using one of the [140 standard color names](https://www.w3schools.com/colors/colors_names.asp), like `green`, `blue`, `red`, `hotpink`, `royalblue`, `aqua` and many others. For custom colors, you can use hex codes (`#147ACC`), RGB values (`rgb(20, 122, 204)`), and even HSL values (`hsl(145, 59%, 30%)`).

```css
p {
  color: rgb(244, 145, 14); // bright orange
}

body {
  background-color: hsl(184, 87%, 94%); // bright blue
}
```

You can also add an alpha value, or transparency to colors. Use `rgba()` or `hsla()` and fill in your color values. The alpha value goes last and is a percent converted to a decimal. (For example, 20% is 0.2, 75% is 0.75, etc.)

```css
body {
  background-color: hsla(243, 65%, 57%, 0.6); // dark purple with 60% transparency
}
```

To get custom colors to use in CSS, you will need some kind of color picker. Some text editors have built-in color pickers, like Visual Studio Code. There are also many color picker tool that you can easily find on the web or as an extension for your browser. Some tools like Adobe Color CC even help you pick out a color scheme for your web page.

#### More Information:
* [Adobe Color](https://color.adobe.com/)
* [ColorPick Eyedropper on Chrome Web Store](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en)
* [ColorZilla add-on for Firefox](https://addons.mozilla.org/en-US/firefox/addon/colorzilla/)
