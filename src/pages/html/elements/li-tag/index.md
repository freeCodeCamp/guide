---
title: Li Tag
---
## Li Tag 

The li tag (`<li>`) produces a list item in an unordered list (`<ul>`), ordered list (`<ol>`), or menu list (`<menu>`). Each list item must be placed in between an opening tag (`<li>`) and closing tag (`</li>`). Each list item will be indented by default.


### List Item Symbol
The symbol to the left of each list item will depend on the type of list it is in. A list item in an ordered list (`<ol>`) will display the item's numbered position in the list. A list item in an unordered list (`<ul>`) is displayed with a bullet point for all list items. The symbol can be changed via the "type" attribute, but as this is not supported in HTML5, it is better to change the symbol via the CSS "list-style-type" property.

### Example HTML Code
```html
<ol>
  <li>First Item</li>
  <li>Second Item</li>
</ol>
```

### Example Output
```
<ol>
  <li>First Item</li>
  <li>Second Item</li>
</ol>
```


#### More Information:
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)

