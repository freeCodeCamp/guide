---
title: Styling Links
---

## Styling Links
Use the property `color` to specify the color of a link. The value can be one of the 140 color names, hexadecimal code or RGBA value.
```
a { 
  color: RoyalBlue ;
}
```

You can also set a background color with `background-color` and choose the underscore style with `text-decoration`.
```
a {
  background-color: #191970;
  text-decoration: none;
 }
 ```

## Styling States
There are more ways to stylize link using the following pseudo-classes according to the link's state :

- `:link` for an unvisited link ;
- `:visited` for a visited link ;
- `:hover` for the style of a link when the mouse is over it ;
- `:active` for the style on the moment the link is clicked.

```
a:link {
  color: royalblue;
}

a:visited {
  color: green;
}

a:hover {
  color: royalblue;
  background-color:#E6E6FA;
}

a:active {
  color: royalblue;
  background-color:beige;
}
```

![test of various styles](https://media.giphy.com/media/l4EoMGejlNnl5ddy8/giphy.gif)

Note that if you want to use `a:hover` and `a:visited` you have to respect the order below (`a:active` is last and `a:hover` always come after `a:link` and `a:visited`). 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

* [Stylizing Links (MDN)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links)

