---
title: Body Bgcolor Attribute
---
## Body Bgcolor Attribute
The `<body bgcolor>` attribute assigns a background color for an HTML document. 

The Body Bgcolor attribute is not supported in HTML5. Use CSS instead.
For older versions of HTML, you can add a background color in using the bgcolor attribute, selecting a color name, RGB value, or HEX value.

**Syntax:** 

`<body bgcolor="#FF0066">`

**Example:**
```html
<html>
  <body bgcolor="red">
  </body>
</html>
```

The correct way to do this in HTML5, using CSS, looks like this:

**Syntax:**

`<body style="background-color:red;">`

**Example:**
```html
<html>
  <body style="background-color:rgb(255,99,21);">
  </body>
</html>
```

**For example:**

```html
<html>
  <head>
    <title>Body bgcolor Attribute example</title>
  </head>
  <body bgcolor="#afafaf">
    <h1>This webpage has colored background.</h1>
  </body>
</html>
```
You can change the color by replacing ###### with a hexadecimal value. For simple colors you can also use the word, such as "red" or "black".

All major browsers support the `<body bgcolor>` attribute.

*Note:*
* HTML 5 does not support the `<body bgcolor>` attribute. Use CSS for this purpose. How? By using the following code:
`<body style="background-color: color">`
Of course, you can also do it in a separate document instead of an inline method.

* Do not use RGB value in `<body bgcolor>` attribute because `rgb()` is for CSS only, that is, it will not work in HTML.

**See it in action:**
https://repl.it/Mwht/2

**Other resources:**
* HTML color names: https://www.w3schools.com/colors/colors_names.asp
* CSS background-color property: https://www.w3schools.com/cssref/pr_background-color.asp
