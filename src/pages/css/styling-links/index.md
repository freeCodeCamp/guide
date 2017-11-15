---
title: Styling Links
---
## Styling Links
Links can be styles with any CSS property, such as ```color```, ```font-family```, ```font-size```, and ```padding```.


*Links can be styled with any CSS property (e.g. color, font-family, background, etc.).*
```css
a {
    color: hotpink;
}
```

*In addition, links can be styled differently depending on what stae they are in.*
=======
Links also have 4 states, and many programmers style each state differently.
The four states are:
* ```a:link```: an unvisited, unclicked link
* ```a:visited```: a visited, clicked link
* ```a:hover```: a link when the user's mouse is over it
* ```a:active```: a link when it is clicked

Here is some sample CSS using the 4 states:
```css
a:link { color: red; }
a:visited { color: blue; }
a:hover { color: green; }
a:active { color: blue; }
```

Note that there are some ordering rules for when you are setting the style for link states.
* ```a:hover``` must come after ```a:link``` and ```a:visited```
* ```a:active``` must come after ```a:hover```

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


