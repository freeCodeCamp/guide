---
title: Styling Links
---
## Styling Links

In CSS, you can change any link property (for example, color, font, background color).

In addition, for links you can customize the styles, depending on their status.

**Four link states:**

```css
a:link {color:#FF0000;} /* unvisited link */
a:visited {color:#00FF00;} /* visited link */
a:hover {color:#FF00FF;} /* link above which the mouse cursor is located */
a:active {color:#0000FF;} /* link at the moment the mouse is clicked */
```
When configuring styles for links, the following rules must be observed:

`a:hover` ДОЛЖЕН определяться только после `a:link` и `a:visited`
`a:active` ДОЛЖЕН определяться после `a:hover`


**Styling the link text**

The `text-decoration` property is usually used to remove underscores of links:

```css
a:link {text-decoration:none;} /* unvisited link */
a:visited {text-decoration:none;} /* visited link */
a:hover {text-decoration:underline;} //* link above which the mouse cursor is located */
a:active {text-decoration:underline;} /* link at the moment the mouse is clicked */
```
