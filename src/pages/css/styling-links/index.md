---
title: Styling Links
---
## Styling Links

*Links can be styled with any CSS property (e.g. color, font-family, background, etc.).*
```css
a {
    color: hotpink;
}
```

*In addition, links can be styled differently depending on what stae they are in.*

    a:link - a normal, unvisited link
    a:visited - a link the user has visited
    a:hover - a link when the user mouses over it
    a:active - a link the moment it is clicked

```css
/* unvisited link */
a:link {
    color: red;
}

/* visited link */
a:visited {
    color: green;
}

/* mouse over link */
a:hover {
    color: hotpink;
}

/* selected link */
a:active {
    color: blue;
} 
```
**Note:**

`When setting the style for several link states, there are some order rules:`
      a:hover MUST come after a:link and a:visited
      a:active MUST come after a:hover

#### More Information:
https://www.w3schools.com/css/css_link.asp


