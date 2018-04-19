---
title: Legal Color Values
---
## Legal Color Values

Colors in CSS can be represented in the following ways:
* Hexadecimal colors
* RGB colors
* RGBA colors
* Predefined/Cross-browser names

### Hexadecimal Colors
A hexadecimal color, or hex color, is represented in this format: #RRGGBB, where RR is red, GG is green, and BB is blue. The two digit integers are represented in hexadecimal, and their values are between 00 and FF. You can use either lowercase or uppercase letters.

Some common hexadecimal colors are:
* #FF0000 or red
* #00FF00 or green
* #0000FF or blue

Here is an example of a hexadecimal color being used:
```body {background-color: #FF0000; }```

### RGB Colors
A RGB color is represented in this format: rgb(red, green, blue). Each parameter is represented as an integer between 0 and 255 or as a percentage from 0% to 100%. This value represented the 'intensity' of the color, where 0 or 0% is the absence of the color and 255 or 100% is the highest amount of that color. 

Some common RGB colors are:
* rgb(255, 0, 0) or red
* rgb(0, 255, 0) or green
* rgb(0, 0, 255) or blue

Here is an example of a RGB color being used: 
```body {background-color: rgb(255, 0, 0;}```

### RGBA Colors
RGBA colors are very similar to RGB colors! They are RGB colors with an extra parameter, alpha, which specifies how transpareent or opaque the color is. Alpha is between 0.0 and 1.0, where 0.0 is completely transparent and 1.0 is completely opaque. RGBA colors are represented in the format rgba(red, green, blue, alpha).

Some common RGB colors are:
* rgba(255, 0, 0, 0.0) or a fully transparent red
* rgba(0, 255, 0, 1.0) or a fully opaque green
* rgba(0, 0, 255, 0.5) or a partially transparent blue

Here is an example of a RGBA color being used: 
```body {background-color: rgba(255, 0, 0, 0.5;}```

### Predefined/Cross-browser names
There are 140 color names predefined in HTML and CSS. Many programmers use these color names in order to increase readability of their program instead of using a hexadecimal or RGB value. These 140 predefined color names are some of the most commonl used colors. 

Here are some predefined colors and their hex equivalent:
* ```BlueViolet``` or #8A2BE2
* ```Cyan``` or #00FFFF
* ```Purple``` or #8000080

Here is an example of a predefined color name being used: 
```body {background-color: Navy;```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
