---
title: Avoid Colorblindness Issues by Using Sufficient Contrast
---
## Avoid Colorblindness Issues by Using Sufficient Contrast

<!-- This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/responsive-web-design/applied-accessibility/improve-readability-with-high-contrast-text/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.-->

<!--<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.-->

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->


Following the instructions:

Increase the background-color lightness value from 35% to 55%, and decrease the color lightness value from 20% to 15%. 

the line 4 and 5 become:

```css
    color: hsl(0, 55%, 15%);
    background-color: hsl(120, 25%, 55%);
```
This improves the contrast to 5.9:1.
