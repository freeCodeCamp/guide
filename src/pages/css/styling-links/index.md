---
title: Styling Links
---
## Styling Links

Links can be styled with any CSS property (e.g. color, font-family, font-size, background, etc.).

### Example:
```css
a {
  text-decoration: none;
  color: black;
  font-size: 18px;
}
```
In addition, links can be styled differently depending on what state they are in.

The **four** links **states** are:
1. a:link - a normal, unvisited link;
2. a:visited - a link the user has visited;
3. a:hover - a link when the user mouses over it;
4. a:active - a link the moment it is clicked.

### Example:
```css
/* unvisited link */
a:link {
  color: orange;
}

/* visited link */
a:visited {
  color: green;
}

/* mouse over link */
a:hover {
  color: red;
}

/* selected link */
a:active {
  color: black;
}
```

#### More Information:
- <a href='https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links' target='_blank' rel='nofollow'>MDN</a>




