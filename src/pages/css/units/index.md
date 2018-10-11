---
title: Units
---
## Units
Many CSS properties like `width`, `margin`, `padding`, `font-size` etc. take length. CSS has a way to express length in multiple units. Length is a combination of a number and unit with no whitespace. E.g. `5px`, `0.9em` etc.

| Unit          | Description             |
|---------------|-----------------------|
|em             |1 em is the computed value of the font-size on the element on which it is used.	|
|ex             |1 ex is the current font’s x-height. The x-height is usually (but not always, e.g., if there is no ‘x’ in the font) equal to the height of a lowercase ‘x’	|
|ch             |1 ch is the advance of the ‘0’ (zero) glyph in the current font. ‘ch’ stands for character.	|
|rem            |1 rem is the computed value of the font-size property for the document’s root element.|
|vw             |1vw is 1% of the width of the viewport. ‘vw’ stands for ‘viewport width’.	|
|vh             |1vh is 1% of the height of the viewport. ‘vh’ stands for ‘viewport height’.	|
|vmin           |Equal to the smaller of ‘vw’ or ‘vh’	|
|vmax           |Equal to the larger of ‘vw’ or ‘vh’	|

There are two general kinds of units used for length and size in CSS: relative and absolute. 

### Relative Units
Relative units change relative to the element's current font-size or other settings. Some relative units are 
- ```em```
  - the width of a capital letter M of the ```font-size``` of the current element. 
  - Font sizes are inherited from parent elements. 
  - Example: 
  ```html
  div {
    font-size: 16px;
  }
  div h3 {
    font-size: 2rem;
  }
  ``` 
  Here the ```<h3>``` will equal ```32px``` since the ```font-size``` of the current or parent element is ```16px```. 
- ```rem```
  - root ```em```, or the width of a capital letter M of the default base ```font-size```. 
  - Parent font sizes will have no effect. 
  - Example: 
  ```html
  body {
    font-size: 16px;
  }
  p {
    font-size: 1.5rem;
  }
  ``` 
  Here the ```<p>``` will equal ```24px``` since the default base ```font-size``` is ```16px```. 
- ```%``` 
  - the percent size relative to a parent's size.
  - Example: 
  ```html
  div {
    width: 400px;
  }
  div p {
    width: 75%;
  }
  ``` 
   Since the parent's width is ```400px```, the width of the inner pargraph would be ```300px```, or 75% of ```400px```. 
- ```vw```
  - view width, or 1/100th of the width of the viewport
  - Example: 
  ```html
  body {
    width: 100vw;
  }
  ``` 
  The ```body``` fill the width of the viewport, whether that is 417px, 690px, or any width. 
- ```vh```
  - view height, or 1/100th of the height of the viewport
  - Example: 
  ```html
  div {
    height: 50vh;
  }
  ``` 
  This ```div``` will fill half the height of the viewport, whether that is 1080px, 1300px, or any height. 

### Absolute Units
Absolute units  will be the same regardless of screen size or other settings. Some absolute units are 
- ```px```
  - pixel
  - pixel counts are relative to the quality of the viewing device's screen
- ```in```, ```cm```, ```mm```
  - inch, centimeter, millimeter
  - An inch is an inch on a small screen or a big screen
- ```pt```, ```pc```
  - points (1/72 of an inch) and picas (12 points)
  
Example 
```html
p {
  font-size: 24px;
}
div {
  width: 3in;
  border-width: 3pt;
}
```

A paragraph with ```font-size: 24px``` will show up as 24px on a phone, tablet, or desktop screen.

The ```div``` will show up as 3 inches wide, and the ```border``` on the ```div``` will be 3/72 of an inch thick, regardless of the screen size. 

### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [WebPlatforms Understanding pixels and other CSS Units](https://webplatform.github.io/docs/tutorials/understanding-css-units/)
* [MDN Web Docs - CSS Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)
* [Web Design Tutorials]('https://webdesign.tutsplus.com/articles/7-css-units-you-might-not-know-about--cms-22573)
* [HTML Help on CSS Units](http://www.htmlhelp.com/reference/css/units.html)

