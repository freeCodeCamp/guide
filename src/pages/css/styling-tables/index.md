---
title: Styling Tables
---
## Styling Tables
There are many ways to add styling in our table by using borders or background colors.We just have to put CSS accourdingn to it.
## Example

**Simple table with borders**
In this we can change the width, height of table by addding height and width attributes.For collapsing border we can use border-collapse tag and for text-align for aligning the text.
```css
  table, th, td {
   border: 1px solid black;
   text-align: left;
   height: 50%;
   width: 100%;
} 
```

For using hoverable table rows we can use: 
```css
tr:hover {background-color: #f5f5f5;} 
```

**Table Color**
We can give different background-color to elements of table like to tr, th.
```css
th {
    background-color: #4CAF50;
    color: white;
}
```

**Responsive table**
A responsive table will display a horizontal scroll bar if the screen is too small to display the full content.Add a container element (like <div>) with overflow-x:auto around the <table> element to make it responsive.
  
```css
<div style="overflow-x:auto;">
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
[More on W3Schools](https://www.w3schools.com/css/css_table.asp)


