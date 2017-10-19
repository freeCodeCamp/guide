---
title: HTML Dom
---
## HTML Dom

The "DOM" stands for "Document Object Model", which is created by the browser when the web-page is loaded. It is a W3C standard for getting, changing, adding and deleting HTML elements with JavaScript scripts, so that we can add interactivity to our websites. <br>

It forms hierarchical relationships between the elements of our page, which become nodes, so that we can easily access them in many differect ways.<br>
![the DOM tree](https://www.w3schools.com/js/pic_htmltree.gif)<br>
image taken from: w3schools.com
## An example of DOM manipulation

Say, we want to toggle a new CSS class to a \<button\> element with an id of "button1", so that when we click it, its color changes. More on CSS background properties in the end of the article. 

First, we want to include a new CSS class to our CSS file, such as ".red-background". Then we define a Javascript function that is called when the button element is clicked.

#### HTML:
```html
<button id='button1' onclick="changeColor()">Click Me!</button>
```
#### CSS:
```css
.red-background{
  background-color: red;
  color: white;
}
```
#### JavaScript:
```javascript 
function changeColor(){
  var btn = document.getElementById("button1");
  btn.classList.toggle("red-background");
}
```
CodePen example: https://codepen.io/Dimitriszxz/pen/WZPdOQ#code-area.
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
The DOM: https://www.w3schools.com/js/js_htmldom.asp<br>
The background color property: https://guide.freecodecamp.org/css/properties/background-color-property<br>
The classlist property with its methods: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

