---
title: CSS3 Nth Child Selector
---
## CSS3 Nth Child Selector

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The :nth-child selector is a pseudo-selector, that is useful in selecting elements based on their order of occurrence in their parent container. 

## Syntax

```
selector:nth-child(expression) {
    // css declarations
}
```
The expression could be either a number, a keyword such as "odd" or "even" or a notation in the form "an+b". An thing to note here is that the syntax does not specify the parent container. The selector specifies the element type to select and the expression determines the constraint on the order of occurrence of the element.

For example, div:nth-child(3) would select all the third 'div' elements. If no such 'div' element exists that is the third element in its container, nothing gets affected. In the example given below, there is no such div that is the third element in its container.

```
<div class='parent-container'>
  <div id='first-child'></div>
  <div id='second-child'>
    <div id='second-childs-first-child'></div> 
    <div id='second-childs-second-child'></div> 
    <p id='second-childs-third-child'></p> 
  </div>
  <span id='third-child'></span>
  <span id='fourth-child'></span>
  <p id='fifth-child'></p>
</div>
```

### Simple Examples

To assign a gray background to every odd row in a table - 
```
tr:nth-child(odd) {
    background-color: gray
}
```

To assign a red background to every div that is the second child in its own container -
```
div:nth-child(2) {
    background-color: red
}
```

To assign styles to a row after every two rows such as the first row, the fourth row, the seventh row and so on - 
```
tr:nth-child(3n+1) {
    background-color: blue
}
```


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://css-tricks.com/almanac/selectors/n/nth-child/
https://www.w3schools.com/cssref/sel_nth-child.asp
https://css-tricks.com/examples/nth-child-tester/


