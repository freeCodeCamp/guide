---
title: Web Safe Fonts
---
## Web Safe Fonts

The font-family property should hold several font names as a "fallback" system, to ensure maximum compatibility between browsers/operating systems. If the browser does not support the first font, it tries the next font.

Start with the font you want, and end with a generic family, to let the browser pick a similar font in the generic family, if no other fonts are available:

```
p {
    font-family: "Times New Roman", Times, serif;
}
```
There are also 846 fonts by Google that can be added to your page. 

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='https://www.cssfontstack.com/' target='_blank' rel='nofollow'>This is a complete list</a> of web safe fonts.
