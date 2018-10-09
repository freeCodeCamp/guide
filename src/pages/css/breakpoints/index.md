---
title: Breakpoints
---
## Breakpoints
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
In order to support users accessing websites on different devices, CSS breakpoints are a useful way of ensuring a responsive layout for your website regardless of screen size. Breakpoints establish a screen-width at which a specified property will change. Breakpoints are roughly based on the width of the device accessing the webpage, and are often deployed using <a href="https://guide.freecodecamp.org/css/css3-media-queries" target="_blank">CSS Media Queries</a>.

Breakpoints that are based on content as opposed to device are less complicated to execute.

Here's a simple snippet that triggers when the device's width is upward of `700px`, roughly tablet screen sized.

```css
@media only screen and (min-width: 700px) {
  selector {
    property: value;
  }
}
```

You can also set a minimum and maximum width, which let's you experiment with the layout at differnt ranges. This example roughly triggers between tablet and larger desktop screen-width sizes.

```css
@media only screen and (min-width: 700px) and (max-width: 1500px) {
  selector {
    property: value;
  }
}
```
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[CSS-Tricks:@media queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
[w3schools:Typical Device Breakpoints](https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp)
[freeCodeCamp:Media Queries](https://guide.freecodecamp.org/css/css3-media-queries)
