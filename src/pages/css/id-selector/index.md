---
title: Id Selector
---
## Id Selector

Id Selector is used in a CSS file to apply style to the HTML element with the corresponding id (identifier) name. In HTML, we can set an id for any element by adding an "id" attribute.

Examples:
```html
<p id="idtest" class="test">This is a div 1</p>
<p class="test">This is a div 1</p>
<p class="test1 test2">This is a div 1</p>
<p class="test1 test2">This is a div 1</p>
```
Since id name is unique, the HTML id attribute makes it unpossible to define equal styles for other elements. **Here is how you can select id in a CSS file to style elements (notice the . notation):** 

**All elements of class `test` will be applied with this style:**    
```css
.test {
  color: green;
}
```
**All elements which have both class `test1` and `test2` will be applied with this style:**
```css
.test1.test2 {
  color: blue;
}
```
**Just the element with the id 'idtest' will be applied with this style:**
```css
#idtest {
  color: red;
}
```
#### More Information:
ID Selector: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors' target='_blank' rel='nofollow'>MDN</a>
