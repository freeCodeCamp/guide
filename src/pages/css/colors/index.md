---
title: Colors
---

## Colors

In CSS, you can change the color of almost any element in your HTML page. Properties like `background-color`, `color`, and `border-color` set the color of those elements.

```
<html>
  <body>
    <p>Hello Moto</p>
  </body>
</html>
```
```
body {
  background-color: green;
  color: white;
}
```

In the above example, the `background-color: green` turns the `<body>` element green. This turns the whole web page green. The `<p>` elements are all white after `color: white` too.

You can use named colors, like `green`, `blue`, `yellow`, `red`, `purple`, and many others. But for custom colors, you can use hex codes (`#147ACC`), RGB values (`rgb(20, 122, 204)`), and even HSL values (`hsl(145, 59%, 30%)`).

```
p {
  color: rgb(244, 145, 14); // bright orange
}

body {
  background-color: hsl(184, 87%, 94%); // bright blue
}
```

You can also add an alpha value, or transparency to colors. Use `rgba()` or `hsla()` and fill in your color values. The alpha value goes last and is a percent converted to a decimal. (For example, 20% is 0.2, 75% is 0.75, etc.)

```
body {
  background-color: hsla(243, 65%, 57%, 0.6); // dark purple with 60% transparency
}
```

To get custom colors to use in CSS, you will need some kind of color picker. Some text editors have built-in color pickers, like Visual Studio Code. If you search "color picker" on Google or DuckDuckGo, you will get a color picker that you can use. Google Chrome and Firefox also have color picker add-ons that you can install. Adobe Color CC not only helps you pick a color, but will also help you pick out a color scheme for your web page!

#### More Information:
<a href="https://color.adobe.com/" target="_blank">Adobe Color CC</a><br>
<a href="https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en" target="_blank">ColorPick Eyedropper on Chrome Web Store</a><br>
<a href="https://addons.mozilla.org/en-US/firefox/addon/colorzilla/" target="_blank">ColorZilla add-on for Firefox</a>
