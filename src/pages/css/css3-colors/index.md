---
title: CSS3 Colors
---
## CSS3 Colors

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

CSS3 introduced RGBA colors, HSL colors, HSLA colors and opacity.

### RGBA Colors

An RGBA color value is specified with: rgba(red, green, blue, alpha). The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

Example: 
```css
    #p1 {background-color: rgba(255, 0, 0, 0.3);}
```

### HSL Colors

An HSL color value is specified with: hsl(hue, saturation, lightness).

Example: 
```css
    #p2 {background-color: hsl(120, 100%, 75%);}
```

### HSLA Colors

An HSLA color value is specified with: hsla(hue, saturation, lightness, alpha), where the alpha parameter defines the opacity. The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

Example: 
```css
    #p2 {background-color: hsla(120, 100%, 75%, 0.3);}
```

### Opacity

The CSS3 opacity property sets the opacity for the whole element (both background color and text will be opaque/transparent).

The opacity property value must be a number between 0.0 (fully transparent) and 1.0 (fully opaque).

Example: 
```css
    #p1 {background-color:rgb(255,0,0);opacity:0.6;}
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color)


