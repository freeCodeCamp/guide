---
title: Breakpoints
---
## Breakpoints

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/breakpoints/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
In order to support users accessing websites with different divices, CSS breakpoints are a useful way of ensuring a responsive feel to the design of your website despite it being accessed by different devices and screen-sizes. Breakpoints are mostly based on the width of the device accessing the webpage, and are often used with <a href="https://guide.freecodecamp.org/css/css3-media-queries" target="_blank">CSS Media Queries</a> and can be used interchangeably.

Breakpoints that are based on content as opposed to device are less complicated. Here's a simple snippet that triggers when the device's width is upward of ```code 700px``` roughly smart-phone screen sized

```css
@media only screen and (min-width: 700px) {
  something {
    something: something;
  }
}
```

You can also set a minimum and maximum width, which let's you experiments with differnt ranges. This one roughly triggers between smar-phone and larger desktop and monitor sizes

```code
@media only screen and (min-width: 700px) and (max-width: 1500px) {
  something {
    something: something;
  }
}
```
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[CSS-Tricks:@media queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
[w3schools:Typical Device Breakpoints](https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp)
[freeCodeCamp:Media Queries](https://guide.freecodecamp.org/css/css3-media-queries)
