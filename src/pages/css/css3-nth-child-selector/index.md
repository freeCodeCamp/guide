---
title: CSS3 Nth Child Selector
---
## CSS3 Nth Child Selector

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The :nth-child selector is a pseudo-selector, that is useful in selecting elements based their order of occurence in their parent container. 

## Syntax

```
selector:nth-child(expression) {
    // css declarations
}
```
The expression could be either a number, a keyword such as "odd" or "even" or a notation in the form "an+b". An important thing to note here is that the syntax doesn't specify the parent container explicitly. The selector specifies the kind of element you want to select and the expression determines the constraint on order of occurence of the element in its parent container.

For example, div:nth-child(3) would select all the 'div' elements that are the third element in their respective parent containers, among all its siblings. If no such 'div' element is found that is the third element in its container, nothing is affected. In the example given below, nothing is selected, since there is no div that is the third element in its container.

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

To assign the background-color blue any row whose index satisfies the given condition - 3n+1, that is the first row, the fourth row, the seventh row and so on.

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


