---
title: Units
---
## Units

### Length

#### Common Length units

There are several units used by CSS to express length. The older ones, supported by all browsers, are: 

* **em** - Relative to the font-size of the element
* **ex** - Relative to the x-height of the current font
* **px** - Relative to the pixels of the viewing device (depends upon resolution)
* **cm** - Centimeters
* **mm** - Millimiters
* **in** - Inches
* **pt** - Points (1pt = 1/72in)
* **pc** - Picas (p1c = 12pt)
* **%** - Percentage of current font

#### Modern Length units

* **rem** - "r" stands for "root": "root em" -, which is equal to the font size fixed to the root element (almost always `<html>`).
* **vh** and **vw** - Many responsive web design techniques rely heavily on percentage rules. However, CSS percentage measures are not always the best solution for all problems. The measure **vh** is equal to 1/100 of the height of the viewport. So, for example, if the height of the browser is 800px, 1vh equals 8px and, similarly, if the width of the viewport is 650px, 1vw is equivalent to 6.5px.
* **vmin** and **vmax** - These units are related to the maximum or minimum value of **vh** and **vw**. For example, if the browser was set to 1200px wide and the height 600px, 1vmin would be 6px and 1vmax would be 12px. However, if the width was set to 700px and the height set to 1080px, vmin would equal 7px and vmax 10.8px.
* **ex** and **ch** - These units, similar to **em** and **rem**, rely on the current font and font size. However, unlike **em** and **rem**, these units also rely on `font-family` as they are determined based on measures specific to each font. The **ch** unit ("character unit") is defined as the width of the character zero ("0"). The **ex** unit is defined as "the current x-height of the current font or the half of 1em". The height-x of a given font is the height of the lowercase "x" of that font. It is often the middle mark of the font.
