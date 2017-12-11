---
title: Media Queries
---
Media Queries help make a web page responsive. Through a media query block, one can specify CSS rules that get applied only if certain conditions (specified in the media query code-block) are met.
For example,
```css
@media only screen and (max-width: 500px) {
    body {
        background-color: lightblue;
  }
}
```
The CSS style for `body` only gets applied for devices with a screen (`only screen`) whose max-width is 500 pixels ( `max-width: 500px`)
#### Suggested Reading:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
https://www.w3schools.com/css/css_rwd_mediaqueries.asp

Also see the <a href='https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/01-responsive-web-design/responsive-web-design.json' target='_blank' rel='nofollow'>Responsive Web Design Principles</a> section on Beta
#### Draft of Article:
<!-- Please add your working draft below in GitHub-flavored Markdown -->
Walk through of what Media Queries are and how to use them
