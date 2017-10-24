---
title: ID Selector
---
## ID Selector
The CSS ID selector applies styles to a specific html element. The CSS ID selector must match the ID attribute of an HTML element.

### Syntax
```css
#specified_id { /* styles */ }
```
You can combine the ID selector with other types of selectors to style a very specific element.
```css
section#about:hover { color: blue; }

div.classname#specified_id { color: green; }
```


Remember, the ID selector must match an HTML element's ID attribute.
```html
<div id="specified_id"><!-- content --></div>
```

### Specificity 
ID selectors have a high specificity making them difficult to override. Classes have a much lower specificity and are generally the preferred way to style elements in order to avoid specificity issues. [Specificity on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) 

#### More Information:
<a href="https://www.freecodecamp.org/challenges/set-the-id-of-an-element" target="_blank">freeCodeCamp Challenge - Set the ID of an Element</a>

<a href="https://www.freecodecamp.org/challenges/use-an-id-attribute-to-style-an-element"  target="_blank">freeCodeCamp Challenge - Use an ID Attribute to Style an Element</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors" target="_blank">MDN</a>
