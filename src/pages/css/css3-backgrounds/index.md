---
title: CSS3 Backgrounds
---
## CSS3 Backgrounds

# Background Shorthand
It’s a fairly common practice to specify several of the background attributes in a single declaration using the background shorthand notation. The following attributes can be set in the background shorthand:

- background-color
- background-image
- background-position
- background-size
- background-repeat
- background-origin
- background-clip
- background-attachment

All of these are optional. Generally, the order doesn’t matter except background-size must come directly after background-position, if both are used, and they should be separated with a slash (/). The other attributes are separated by a space.

You can write it in one line
`background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;`

### But many developers do not write it in one line, because:
- Some developers do not understand what it means
- This pattern can modify in the feature
- You can make a mistake in your code if you change this value, for example:
You have` background: bg-color bg-image;` and you want to change `bg-color ` into `red `on `hover`  but 
you can change all the property.

```
.class {
  background: #fff url(example.png);
}

.class:hover {
  background: red; // it is not a mistake but  you will change all property
  background-color: red; //correct because you change only color
}
```

More details on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background)  and [W3C](https://www.w3.org/TR/css-backgrounds-3/#backgrounds)
