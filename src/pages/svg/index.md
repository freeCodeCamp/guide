---
title: SVG
---
## SVG

SVG or Scalable Vector Graphics is a web standard for defining vector based graphics in web pages. Based on XML the SVG standard provides markup to describe paths, shapes, and text within a viewport. The markup can be embeded directly into HTML for display or saved to a `.svg` file and inserted like any other image. You can write SVG by hand but more complicated graphics can be designed in vector graphics editors such as Illustrator or InkScape and exported to SVG files or code.

## SVG Basics
Developers start an SVG graphic with the `<svg>` tag and XML namespace like so:
```svg
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">

</svg>
```
The sample also includes a `version` attribute. The `version` attribute is optional but it is recommended for complaince with XML specifications.

This sample won't display anything it merely established a viewport. You can add `height` and `width` attributes to set a display size for the viewport this essentially establishes a canvas for you to work in.

With a viewport in place you can add basic graphics, text, and path elements.

```svg
<svg
     version="1.1"
     width="100%"
     viewbox="0 0 600 300"
     xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="100" height="100" fill="#f7b2c1" />
  <circle cx="240" cy="60" r="50" fill="#c1b2f7" stroke="#b2c1f7" stroke-width="15"/>
  <text x="450" y="70" font-size="20" text-anchor="middle">SVG Text is browser readable!</text>
  <g stroke="#b2c1f7"> <!-- g is for group -->
    <path stroke-width="2" d="M10 170 l590 0" />
    <path stroke-width="4" d="M10 190 l590 0" />
    <path stroke-width="6" d="M10 210 l590 0" />
  </g>  
</svg>  
```

You can see the output and play with the code in <a href='https://codepen.io/SgiobairOg/pen/OxbNpW' target='_blank' rel='nofollow'>this codepen</a>. 

In the opening `svg` tag we add a width attribute to set the width of the viewport to 100% of the container width, you can use percentages or pixel widths. The opening svg tag also has `viewbox` attribute which defines a window through which elements of your svg are visible, in this case, the viewbox spans from (0,0) to (600,300). In SVG space the X-axis starts with zero on the left and increases to the right; the Y-axis starts with zero at the top and increases towards the bottom.

The first new tag is the `<rect />` tag which defines a rectangle in the SVG viewport. In this case we define a square which is 10 units from the top and left and 100 units tall and wide. The `fill` attribute sets the fill color for the shape.

Next we define a circle or oval with the `<circle />` tag. The sample defines a circle centered at (240,60) with a radius of 50 units. The `stroke` and `stroke-width` attributes set a stroke color and a size for the stroke.

You can add text to the graphic with the `text` tag. The sample text is anchored from the middle of the text to a point at (450, 70) and has a font size of 20 units. The nice thing about text in SVG is it will scale with the rest of your graphic but it is still readable by the browser and web bots. 

When you want to apply the same attributes or CSS styles to multiple SVG elements you can group them with the `<g>` tag. Attributes assigned to the `<g>` tag, like the `stroke` attribute in the example, will be applied to all elements within the group. In this case three `<path />` elements.

The `<path />` element defines a vector path in the viewport. The path is defined by the `d` attribute. In the first example the definition reads 'move to the absolute coordinate (10, 170) _and_ draw a line to the relative coodrinates 590 in the X direction and 0 in the Y direction.   

## Browser Support

<a href='https://caniuse.com/#feat=svg' target='_blank' rel='nofollow'>Browser support for SVG</a> is available in all modern browsers. There are some issues with scaling in IE 9 through IE 11 however they can be overcome with the use of the `width`, `height`, `viewbox`, and CSS. 

## Resources

- <a href='https://www.w3.org/TR/SVG/' target='_blank' rel='nofollow'>W3C, Scalable Vector Graphics (SVG) 1.1 (Second Edition)</a>
- <a href='https://developer.mozilla.org/en-US/docs/Web/SVG' target='_blank' rel='nofollow'>Mozilla Developer Network, SVG</a>
