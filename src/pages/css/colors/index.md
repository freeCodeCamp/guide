---
title: Colors
---
## Colors

Color is a CSS data type that represents a color in the sRGB color space. Colors can also have an optional alpha property allowing them to be transparent.

### Value Types

There is support for various methods of entry when adding a color to a CSS file.

#### Named

Colors can be referenced by name (e.g. `blue`) when applying styles to an element. See the Browser Support table below for valid values.

```
color: blue;
```

#### RGB (Red, Green, Blue)

Colors can be referenced by their RGB value through a hex code (e.g. `#0000FF`) or their RGB value (e.g. `rgb(0,0,255)`) with an alpha transparency amount between `0` and `1`. (e.g. `rgba(0,0,255,1)`)

The minimum value for the RGB notation is `0` and the maximum value is `255`.

```
color: #0000FF; // Hexidecimal
color: rgb(0,0,255); // RGB
color: rgb(0,0,255, 1); // RGB with transparency
```

#### HSL (Hue, Saturation, Lightness)

Colors can be referenced by their HSL value (e.g. `hsl(240, 100%, 50%)`).

##### Hue
Hue is set by a number between `0` to `360` and references a degree on the color wheel. `0` is red, `120` is green, `240` is blue.

##### Saturation

Saturation is set by a percentage value. `0%` is a shade of gray and `100%` is the full color.

##### Lightness

Lightness is set by a percentage value. `0%` is black, `100%` is white.

```
color: hsl(240, 100%, 50%);
```

### Browser Support for Color Names

<table>
  <thead>
    <tr>
      <td>Color</td>
      <td>Hex</td>
      <td>RGB</td>
      <td>HSL</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>aliceblue</td>
      <td>#F0F8FF</td>
      <td>rgb(240,248,255)</td>
      <td>hsl(208, 100%, 97%)</td>
    </tr>
    <tr>
      <td>antiquewhite</td>
      <td>#FAEBD7</td>
      <td>rgb(250,235,215)</td>
      <td>hsl(34, 78%, 91%)</td>
    </tr>
    <tr>
      <td>aqua / cyan</td>
      <td>#00FFFF</td>
      <td>rgb(0,255,255)</td>
      <td>hsl(180, 100%, 50%)</td>
    </tr>
    <tr>
      <td>aquamarine</td>
      <td>#7FFFD4</td>
      <td>rgb(127,255,212)</td>
      <td>hsl(160, 100%, 75%)</td>
    </tr>
    <tr>
      <td>azure</td>
      <td>#F0FFFF</td>
      <td>rgb(240,255,255)</td>
      <td>hsl(180, 100%, 97%)</td>
    </tr>
    <tr>
      <td>beige</td>
      <td>#F5F5DC</td>
      <td>rgb(245,245,220)</td>
      <td>hsl(60, 56%, 91%)</td>
    </tr>
    <tr>
      <td>bisque</td>
      <td>#FFE4C4</td>
      <td>rgb(255,228,196)</td>
      <td>hsl(33, 100%, 88%)</td>
    </tr>
    <tr>
      <td>black</td>
      <td>#000000</td>
      <td>rgb(0,0,0)</td>
      <td>hsl(0, 0%, 0%)</td>
    </tr>
    <tr>
      <td>blanchedalmond</td>
      <td>#FFEBCD</td>
      <td>rgb(255,235,205)</td>
      <td>hsl(36, 100%, 90%)</td>
    </tr>
    <tr>
      <td>blue</td>
      <td>#0000FF</td>
      <td>rgb(0,0,255)</td>
      <td>hsl(240, 100%, 50%)</td>
    </tr>
    <tr>
      <td>blueviolet</td>
      <td>#8A2BE2</td>
      <td>rgb(138,43,226)</td>
      <td>hsl(271, 76%, 53%)</td>
    </tr>
    <tr>
      <td>brown</td>
      <td>#A52A2A</td>
      <td>rgb(165,42,42)</td>
      <td>hsl(0, 59%, 41%)</td>
    </tr>
    <tr>
      <td>burlywood</td>
      <td>#DEB887</td>
      <td>rgb(222,184,135)</td>
      <td>hsl(34, 57%, 70%)</td>
    </tr>
    <tr>
      <td>cadetblue</td>
      <td>#5F9EA0</td>
      <td>rgb(95,158,160)</td>
      <td>hsl(182, 25%, 50%)</td>
    </tr>
    <tr>
      <td>chartreuse</td>
      <td>#7FFF00</td>
      <td>rgb(127,255,0)</td>
      <td>hsl(90, 100%, 50%)</td>
    </tr>
    <tr>
      <td>chocolate</td>
      <td>#D2691E</td>
      <td>rgb(210,105,30)</td>
      <td>hsl(25, 75%, 47%)</td>
    </tr>
    <tr>
      <td>coral</td>
      <td>#FF7F50</td>
      <td>rgb(255,127,80)</td>
      <td>hsl(16, 100%, 66%)</td>
    </tr>
    <tr>
      <td>cornflowerblue</td>
      <td>#6495ED</td>
      <td>rgb(100,149,237)</td>
      <td>hsl(219, 79%, 66%)</td>
    </tr>
    <tr>
      <td>cornsilk</td>
      <td>#FFF8DC</td>
      <td>rgb(255,248,220)</td>
      <td>hsl(48, 100%, 93%)</td>
    </tr>
    <tr>
      <td>crimson</td>
      <td>#DC143C</td>
      <td>rgb(220,20,60)</td>
      <td>hsl(348, 83%, 58%)</td>
    </tr>
    <tr>
      <td>cyan / aqua</td>
      <td>#00FFFF</td>
      <td>rgb(0,255,255)</td>
      <td>hsl(180, 100%, 50%)</td>
    </tr>
    <tr>
      <td>darkblue</td>
      <td>#00008B</td>
      <td>rgb(0,0,139)</td>
      <td>hsl(240, 100%, 27%);</td>
    </tr>
    <tr>
      <td>darkcyan</td>
      <td>#008B8B</td>
      <td>rgb(0,139,139)</td>
      <td>hsl(180, 100%, 27%)</td>
    </tr>
    <tr>
      <td>darkgoldenrod</td>
      <td>#B8860B</td>
      <td>rgb(184,134,11)</td>
      <td>hsl(43, 89%, 38%)</td>
    </tr>
    <tr>
      <td>darkgray / darkgrey</td>
      <td>#A9A9A9</td>
      <td>rgb(169,169,169)</td>
      <td>hsl(0, 0%, 66%)</td>
    </tr>
    <tr>
      <td>darkgreen</td>
      <td>#006400</td>
      <td>rgb(0,100,0)</td>
      <td>hsl(120, 100%, 20%)</td>
    </tr>
    <tr>
      <td>darkkhaki</td>
      <td>#BDB76B</td>
      <td>rgb(189,183,107)</td>
      <td>hsl(56, 38%, 58%)</td>
    </tr>
    <tr>
      <td>darkmagenta</td>
      <td>#8B008B</td>
      <td>rgb(139,0,139)</td>
      <td>hsl(300, 100%, 27%)</td>
    </tr>
    <tr>
      <td>darkolivegreen</td>
      <td>#556B2F</td>
      <td>rgb(85,107,47)</td>
      <td>hsl(82, 39%, 30%)</td>
    </tr>
    <tr>
      <td>darkorange</td>
      <td>#FF8C00</td>
      <td>rgb(255,140,0)</td>
      <td>hsl(33, 100%, 50%)</td>
    </tr>
    <tr>
      <td>darkorchid</td>
      <td>#9932CC</td>
      <td>rgb(153,50,204)</td>
      <td>hsl(280, 61%, 50%)</td>
    </tr>
    <tr>
      <td>darkred</td>
      <td>#8B0000</td>
      <td>rgb(139,0,0)</td>
      <td>hsl(0, 100%, 27%)</td>
    </tr>
    <tr>
      <td>darksalmon</td>
      <td>#E9967A</td>
      <td>rgb(233,150,122)</td>
      <td>hsl(15, 72%, 70%)</td>
    </tr>
    <tr>
      <td>darkseagreen</td>
      <td>#8FBC8F</td>
      <td>rgb(143,188,143)</td>
      <td>hsl(120, 25%, 65%)</td>
    </tr>
    <tr>
      <td>darkslateblue</td>
      <td>#483D8B</td>
      <td>rgb(72,61,139)</td>
      <td>hsl(248, 39%, 39%)</td>
    </tr>
    <tr>
      <td>darkslategray / darkslategrey</td>
      <td>#2F4F4F</td>
      <td>rgb(47,79,79)</td>
      <td>hsl(180, 25%, 25%</td>
    </tr>
    <tr>
      <td>darkturquoise</td>
      <td>#00CED1</td>
      <td>rgb(0,206,209)</td>
      <td>hsl(181, 100%, 41%)</td>
    </tr>
    <tr>
      <td>darkviolet</td>
      <td>#9400D3</td>
      <td>rgb(148,0,211)</td>
      <td>hsl(282, 100%, 41%)</td>
    </tr>
    <tr>
      <td>deeppink</td>
      <td>#FF1493</td>
      <td>rgb(255,20,147)</td>
      <td>hsl(328, 100%, 54%)</td>
    </tr>
    <tr>
      <td>deepskyblue</td>
      <td>#00BFFF</td>
      <td>rgb(0,191,255)</td>
      <td>hsl(195, 100%, 50%)</td>
    </tr>
    <tr>
      <td>dimgray / dimgrey</td>
      <td>#696969</td>
      <td>rgb(105,105,105)</td>
      <td>hsl(0, 0%, 41%)</td>
    </tr>
    <tr>
      <td>dodgerblue</td>
      <td>#1E90FF</td>
      <td>rgb(30,144,255)</td>
      <td>hsl(210, 100%, 56%)</td>
    </tr>
    <tr>
      <td>firebrick</td>
      <td>#B22222</td>
      <td>rgb(178,34,34)</td>
      <td>hsl(0, 68%, 42%)</td>
    </tr>
    <tr>
      <td>floralwhite</td>
      <td>#FFFAF0</td>
      <td>rgb(255,250,240)</td>
      <td>hsl(40, 100%, 97%)</td>
    </tr>
    <tr>
      <td>forestgreen</td>
      <td>#228B22</td>
      <td>rgb(34,139,34)</td>
      <td>hsl(120, 61%, 34%)</td>
    </tr>
    <tr>
      <td>fuchsia / magenta</td>
      <td>#FF00FF</td>
      <td>rgb(255,0,255)</td>
      <td>hsl(300, 100%, 50%)</td>
    </tr>
    <tr>
      <td>gainsboro</td>
      <td>#DCDCDC</td>
      <td>rgb(220,220,220)</td>
      <td>hsl(0, 0%, 86%)</td>
    </tr>
    <tr>
      <td>ghostwhite</td>
      <td>#F8F8FF</td>
      <td>rgb(248,248,255)</td>
      <td>hsl(240, 100%, 99%)</td>
    </tr>
    <tr>
      <td>gold</td>
      <td>#FFD700</td>
      <td>rgb(255,215,0)</td>
      <td>hsl(51, 100%, 50%)</td>
    </tr>
    <tr>
      <td>goldenrod</td>
      <td>#DAA520</td>
      <td>rgb(218,165,32)</td>
      <td>hsl(43, 74%, 49%)</td>
    </tr>
    <tr>
      <td>gray / grey</td>
      <td>#808080</td>
      <td>rgb(128,128,128)</td>
      <td>hsl(0, 0%, 50%)</td>
    </tr>
    <tr>
      <td>green</td>
      <td>#008000</td>
      <td>rgb(0,128,0)</td>
      <td>hsl(120, 100%, 25%)</td>
    </tr>
    <tr>
      <td>greenyellow</td>
      <td>#ADFF2F</td>
      <td>rgb(173,255,47)</td>
      <td>hsl(84, 100%, 59%)</td>
    </tr>
    <tr>
      <td>honeydew</td>
      <td>#F0FFF0</td>
      <td>rgb(240,255,240)</td>
      <td>hsl(120, 100%, 97%)</td>
    </tr>
    <tr>
      <td>hotpink</td>
      <td>#FF69B4</td>
      <td>rgb(255,105,180)</td>
      <td>hsl(330, 100%, 71%)</td>
    </tr>
    <tr>
      <td>indianred</td>
      <td>#CD5C5C</td>
      <td>rgb(205,92,92)</td>
      <td>hsl(0, 53%, 58%)</td>
    </tr>
    <tr>
      <td>indigo</td>
      <td>#4B0082</td>
      <td>rgb(75,0,130)</td>
      <td>hsl(275, 100%, 25%)</td>
    </tr>
    <tr>
      <td>ivory</td>
      <td>#FFFFF0</td>
      <td>rgb(255,255,240)</td>
      <td>hsl(60, 100%, 97%)</td>
    </tr>
    <tr>
      <td>khaki</td>
      <td>#F0E68C</td>
      <td>rgb(240,230,140)</td>
      <td>hsl(54, 77%, 75%)</td>
    </tr>
    <tr>
      <td>lavender</td>
      <td>#E6E6FA</td>
      <td>rgb(230,230,250)</td>
      <td>hsl(240, 67%, 94%)</td>
    </tr>
    <tr>
      <td>lavenderblush</td>
      <td>#FFF0F5</td>
      <td>rgb(255,240,245)</td>
      <td>hsl(340, 100%, 97%)</td>
    </tr>
    <tr>
      <td>lawngreen</td>
      <td>#7CFC00</td>
      <td>rgb(124,252,0)</td>
      <td>hsl(90, 100%, 49%)</td>
    </tr>
    <tr>
      <td>lemonchiffon</td>
      <td>#FFFACD</td>
      <td>rgb(255,250,205)</td>
      <td>hsl(54, 100%, 90%)</td>
    </tr>
    <tr>
      <td>lightblue</td>
      <td>#ADD8E6</td>
      <td>rgb(173,216,230)</td>
      <td>hsl(195, 53%, 79%)</td>
    </tr>
    <tr>
      <td>lightcoral</td>
      <td>#F08080</td>
      <td>rgb(240,128,128)</td>
      <td>hsl(0, 79%, 72%)</td>
    </tr>
    <tr>
      <td>lightcyan</td>
      <td>#E0FFFF</td>
      <td>rgb(224,255,255)</td>
      <td>hsl(180, 100%, 94%)</td>
    </tr>
    <tr>
      <td>lightgoldenrodyellow</td>
      <td>#FAFAD2</td>
      <td>rgb(250,250,210)</td>
      <td>hsl(60, 80%, 90%)</td>
    </tr>
    <tr>
      <td>lightgray / lightgrey</td>
      <td>#D3D3D3</td>
      <td>rgb(211,211,211)</td>
      <td>hsl(0, 0%, 83%)</td>
    </tr>
    <tr>
      <td>lightgreen</td>
      <td>#90EE90</td>
      <td>rgb(144,238,144)</td>
      <td>hsl(120, 73%, 75%)</td>
    </tr>
    <tr>
      <td>lightpink</td>
      <td>#FFB6C1</td>
      <td>rgb(255,182,193)</td>
      <td>hsl(351, 100%, 86%)</td>
    </tr>
    <tr>
      <td>lightsalmon</td>
      <td>#FFA07A</td>
      <td>rgb(255,160,122)</td>
      <td>hsl(17, 100%, 74%)</td>
    </tr>
    <tr>
      <td>lightseagreen</td>
      <td>#20B2AA</td>
      <td>rgb(32,178,170)</td>
      <td>hsl(177, 70%, 41%)</td>
    </tr>
    <tr>
      <td>lightskyblue</td>
      <td>#87CEFA</td>
      <td>rgb(135,206,250)</td>
      <td>hsl(203, 92%, 75%)</td>
    </tr>
    <tr>
      <td>lightslategray / lightslategrey</td>
      <td>#778899</td>
      <td>rgb(119,136,153)</td>
      <td>hsl(210, 14%, 53%)</td>
    </tr>
    <tr>
      <td>lightsteelblue</td>
      <td>#B0C4DE</td>
      <td>rgb(176,196,222)</td>
      <td>hsl(214, 41%, 78%)</td>
    </tr>
    <tr>
      <td>lightyellow</td>
      <td>#FFFFE0</td>
      <td>rgb(255,255,224)</td>
      <td>hsl(60, 100%, 94%)</td>
    </tr>
    <tr>
      <td>lime</td>
      <td>#00FF00</td>
      <td>rgb(0,255,0)</td>
      <td>hsl(120, 100%, 50%)</td>
    </tr>
    <tr>
      <td>limegreen</td>
      <td>#32CD32</td>
      <td>rgb(50,205,50)</td>
      <td>hsl(120, 61%, 50%)</td>
    </tr>
    <tr>
      <td>linen</td>
      <td>#FAF0E6</td>
      <td>rgb(250,240,230)</td>
      <td>hsl(30, 67%, 94%)</td>
    </tr>
    <tr>
      <td>maroon</td>
      <td>#800000</td>
      <td>rgb(128,0,0)</td>
      <td>hsl(0, 100%, 25%)</td>
    </tr>
    <tr>
      <td>mediumaquamarine</td>
      <td>#66CDAA</td>
      <td>rgb(102,205,170)</td>
      <td>hsl(160, 51%, 60%)</td>
    </tr>
    <tr>
      <td>mediumblue</td>
      <td>#0000CD</td>
      <td>rgb(0,0,205)</td>
      <td>hsl(240, 100%, 40%)</td>
    </tr>
    <tr>
      <td>mediumorchid</td>
      <td>#BA55D3</td>
      <td>rgb(186,85,211)</td>
      <td>hsl(288, 59%, 58%)</td>
    </tr>
    <tr>
      <td>mediumpurple</td>
      <td>#9370DB</td>
      <td>rgb(147,112,219)</td>
      <td>hsl(260, 60%, 65%)</td>
    </tr>
    <tr>
      <td>mediumseagreen</td>
      <td>#3CB371</td>
      <td>rgb(60,179,113)</td>
      <td>hsl(147, 50%, 47%)</td>
    </tr>
    <tr>
      <td>mediumslateblue</td>
      <td>#7B68EE</td>
      <td>rgb(123,104,238)</td>
      <td>hsl(249, 80%, 67%)</td>
    </tr>
    <tr>
      <td>mediumspringgreen</td>
      <td>#00FA9A</td>
      <td>rgb(0,250,154)</td>
      <td>hsl(157, 100%, 49%)</td>
    </tr>
    <tr>
      <td>mediumturquoise</td>
      <td>#48D1CC</td>
      <td>rgb(72,209,204)</td>
      <td>hsl(178, 60%, 55%)</td>
    </tr>
    <tr>
      <td>mediumvioletred</td>
      <td>#C71585</td>
      <td>rgb(199,21,133)</td>
      <td>hsl(322, 81%, 43%)</td>
    </tr>
    <tr>
      <td>midnightblue</td>
      <td>#191970</td>
      <td>rgb(25,25,112)</td>
      <td>hsl(240, 64%, 27%)</td>
    </tr>
    <tr>
      <td>mintcream</td>
      <td>#F5FFFA</td>
      <td>rgb(245,255,250)</td>
      <td>hsl(150, 100%, 98%)</td>
    </tr>
    <tr>
      <td>mistyrose</td>
      <td>#FFE4E1</td>
      <td>rgb(255,228,225)</td>
      <td>hsl(6, 100%, 94%)</td>
    </tr>
    <tr>
      <td>moccasin</td>
      <td>#FFE4B5</td>
      <td>rgb(255,228,181)</td>
      <td>hsl(38, 100%, 85%)</td>
    </tr>
    <tr>
      <td>navajowhite</td>
      <td>#FFDEAD</td>
      <td>rgb(255,222,173)</td>
      <td>hsl(36, 100%, 84%)</td>
    </tr>
    <tr>
      <td>navy</td>
      <td>#000080</td>
      <td>rgb(0,0,128)</td>
      <td>hsl(240, 100%, 25%)</td>
    </tr>
    <tr>
      <td>oldlace</td>
      <td>#FDF5E6</td>
      <td>rgb(253,245,230)</td>
      <td>hsl(39, 85%, 95%)</td>
    </tr>
    <tr>
      <td>olive</td>
      <td>#808000</td>
      <td>rgb(128,128,0)</td>
      <td>hsl(60, 100%, 25%)</td>
    </tr>
    <tr>
      <td>olivedrab</td>
      <td>#6B8E23</td>
      <td>rgb(107,142,35)</td>
      <td>hsl(80, 60%, 35%)</td>
    </tr>
    <tr>
      <td>orange</td>
      <td>#FFA500</td>
      <td>rgb(255,165,0)</td>
      <td>hsl(39, 100%, 50%</td>
    </tr>
    <tr>
      <td>orangered</td>
      <td>#FF4500</td>
      <td>rgb(255,69,0)</td>
      <td>hsl(16, 100%, 50%)</td>
    </tr>
    <tr>
      <td>orchid</td>
      <td>#DA70D6</td>
      <td>rgb(218,112,214)</td>
      <td>hsl(302, 59%, 65%)</td>
    </tr>
    <tr>
      <td>palegoldenrod</td>
      <td>#EEE8AA</td>
      <td>rgb(238,232,170)</td>
      <td>hsl(55, 67%, 80%)</td>
    </tr>
    <tr>
      <td>palegreen</td>
      <td>#98FB98</td>
      <td>rgb(152,251,152)</td>
      <td>hsl(120, 93%, 79%)</td>
    </tr>
    <tr>
      <td>paleturquoise</td>
      <td>#AFEEEE</td>
      <td>rgb(175,238,238)</td>
      <td>hsl(180, 65%, 81%)</td>
    </tr>
    <tr>
      <td>palevioletred</td>
      <td>#DB7093</td>
      <td>rgb(219,112,147)</td>
      <td>hsl(340, 60%, 65%)</td>
    </tr>
    <tr>
      <td>papayawhip</td>
      <td>#FFEFD5</td>
      <td>rgb(255,239,213)</td>
      <td>hsl(37, 100%, 92%)</td>
    </tr>
    <tr>
      <td>peachpuff</td>
      <td>#FFDAB9</td>
      <td>rgb(255,218,185)</td>
      <td>hsl(28, 100%, 86%)</td>
    </tr>
    <tr>
      <td>peru</td>
      <td>#CD853F</td>
      <td>rgb(205,133,63)</td>
      <td>hsl(30, 59%, 53%)</td>
    </tr>
    <tr>
      <td>pink</td>
      <td>#FFC0CB</td>
      <td>rgb(255,192,203)</td>
      <td>hsl(350, 100%, 88%)</td>
    </tr>
    <tr>
      <td>plum</td>
      <td>#DDA0DD</td>
      <td>rgb(221,160,221)</td>
      <td>hsl(300, 47%, 75%)</td>
    </tr>
    <tr>
      <td>powderblue</td>
      <td>#B0E0E6</td>
      <td>rgb(176,224,230)</td>
      <td>hsl(187, 52%, 80%)</td>
    </tr>
    <tr>
      <td>purple</td>
      <td>#800080</td>
      <td>rgb(128,0,128)</td>
      <td>hsl(300, 100%, 25%)</td>
    </tr>
    <tr>
      <td>red</td>
      <td>#FF0000</td>
      <td>rgb(255,0,0)</td>
      <td>hsl(0, 100%, 50%)</td>
    </tr>
    <tr>
      <td>rosybrown</td>
      <td>#BC8F8F</td>
      <td>rgb(188,143,143)</td>
      <td>hsl(0, 25%, 65%)</td>
    </tr>
    <tr>
      <td>royalblue</td>
      <td>#4169E1</td>
      <td>rgb(65,105,225)</td>
      <td>hsl(225, 73%, 57%)</td>
    </tr>
    <tr>
      <td>saddlebrown</td>
      <td>#8B4513</td>
      <td>rgb(139,69,19)</td>
      <td>hsl(25, 76%, 31%)</td>
    </tr>
    <tr>
      <td>salmon</td>
      <td>#FA8072</td>
      <td>rgb(250,128,114)</td>
      <td>hsl(6, 93%, 71%)</td>
    </tr>
    <tr>
      <td>sandybrown</td>
      <td>#F4A460</td>
      <td>rgb(244,164,96)</td>
      <td>hsl(28, 87%, 67%)</td>
    </tr>
    <tr>
      <td>seagreen</td>
      <td>#2E8B57</td>
      <td>rgb(46,139,87)</td>
      <td>hsl(146, 50%, 36%)</td>
    </tr>
    <tr>
      <td>seashell</td>
      <td>#FFF5EE</td>
      <td>rgb(255,245,238)</td>
      <td>hsl(25, 100%, 97%)</td>
    </tr>
    <tr>
      <td>sienna</td>
      <td>#A0522D</td>
      <td>rgb(160,82,45)</td>
      <td>hsl(19, 56%, 40%)</td>
    </tr>
    <tr>
      <td>silver</td>
      <td>#C0C0C0</td>
      <td>rgb(192,192,192)</td>
      <td>hsl(0, 0%, 75%)</td>
    </tr>
    <tr>
      <td>skyblue</td>
      <td>#87CEEB</td>
      <td>rgb(135,206,235)</td>
      <td>hsl(197, 71%, 73%)</td>
    </tr>
    <tr>
      <td>slateblue</td>
      <td>#6A5ACD</td>
      <td>rgb(106,90,205)</td>
      <td>hsl(248, 53%, 58%)</td>
    </tr>
    <tr>
      <td>slategray / slategrey</td>
      <td>#708090</td>
      <td>rgb(112,128,144)</td>
      <td>hsl(210, 13%, 50%)</td>
    </tr>
    <tr>
      <td>snow</td>
      <td>#FFFAFA</td>
      <td>rgb(255,250,250)</td>
      <td>hsl(0, 100%, 99%)</td>
    </tr>
    <tr>
      <td>springgreen</td>
      <td>#00FF7F</td>
      <td>rgb(0,255,127)</td>
      <td>hsl(150, 100%, 50%)</td>
    </tr>
    <tr>
      <td>steelblue</td>
      <td>#4682B4</td>
      <td>rgb(70,130,180)</td>
      <td>hsl(207, 44%, 49%)</td>
    </tr>
    <tr>
      <td>tan</td>
      <td>#D2B48C</td>
      <td>rgb(210,180,140)</td>
      <td>hsl(34, 44%, 69%)</td>
    </tr>
    <tr>
      <td>teal</td>
      <td>#008080</td>
      <td>rgb(0,128,128)</td>
      <td>hsl(180, 100%, 25%)</td>
    </tr>
    <tr>
      <td>thistle</td>
      <td>#D8BFD8</td>
      <td>rgb(216,191,216)</td>
      <td>hsl(300, 24%, 80%)</td>
    </tr>
    <tr>
      <td>tomato</td>
      <td>#FF6347</td>
      <td>rgb(255,99,71)</td>
      <td>hsl(9, 100%, 64%)</td>
    </tr>
    <tr>
      <td>turquoise</td>
      <td>#40E0D0</td>
      <td>rgb(64,224,208)</td>
      <td>hsl(174, 72%, 56%)</td>
    </tr>
    <tr>
      <td>violet</td>
      <td>#EE82EE</td>
      <td>rgb(238,130,238)</td>
      <td>hsl(300, 76%, 72%)</td>
    </tr>
    <tr>
      <td>wheat</td>
      <td>#F5DEB3</td>
      <td>rgb(245,222,179)</td>
      <td>hsl(39, 77%, 83%)</td>
    </tr>
    <tr>
      <td>white</td>
      <td>#FFFFFF</td>
      <td>rgb(255,255,255)</td>
      <td>hsl(0, 100%, 100%)</td>
    </tr>
    <tr>
      <td>whitesmoke</td>
      <td>#F5F5F5</td>
      <td>rgb(245,245,245)</td>
      <td>hsl(0, 0%, 96%)</td>
    </tr>
    <tr>
      <td>yellow</td>
      <td>#FFFF00</td>
      <td>rgb(255,255,0)</td>
      <td>hsl(60, 100%, 50%)</td>
    </tr>
    <tr>
      <td>yellowgreen</td>
      <td>#9ACD32</td>
      <td>rgb(154,205,50</td>
      <td>hsl(80, 61%, 50%);</td>
    </tr>
  </tbody>
</table>

#### More Information:
1. https://www.w3schools.com/cssref/css_colors.asp
2. https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
