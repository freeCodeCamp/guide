---
title: Colors
---

## Colors

In css, there are some ways to specify a color:

* Using a keyword. For example:
  * `red`
  * `blue`
  * `green`
  * `mistyrose`
  * `black`
  * `white`
  * And more!
* Hex numbers. Using this way, we can represent 16777216 different colors! The syntax is as follows:
  `#RRGGBB` where RR, GG and BB are hex numbers between `00` and `ff` that represents the amount of red, blue
  and green respectively. Other way of doing the same is `#RGB`. That is equivalent to `#RRGGBB`.
* `rgb()`. It's almost the same as using hex numbers. `rgb(r, g, b)` where `0 <= r,g,b <= 255`.
* `rgba()`. It's the same as `rgb()` but with a fourth parameter, `alpha`. `alpha` represents the transparency
  of that color. It's value is `0 <= alpha <= 1`.
* `hsl()`. It's definition is `hsl(hue, sat, light)` where `0 <= hue <= 360` represents the hue of the color,
  `sat` and `light` represents the saturation and lighteness of the color (both are percentages).
* `hsla()`. It's the same of `rgba()` but with `hsl()`.
  
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
The [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

