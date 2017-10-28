---
title: CSS3 at Media Rule
---
## CSS3 at Media Rule

**CSS3 Media Rule** - _Getting your pages responsive_

Media rules are important in organizing your page's content.

Viewing webpages in devices of different dimensions requires Content Priorization.

Look at these three devices, say an iPhone 7, iPad Mini, and iMac. All these have different viewports.




*Steps on varying CSS based on viewport sizes*

The syntax for css is the same as how you would normally code CSS.

`.selector { color: red }`,




Now nest your css inside a css media query.

**`@media screen and (min-width: 480px) {`**

`.selector { color: blue }`

**`}`**



Now if you put both codes into your stylesheet,
you should get a _blue-text_ when your viewport has a **minimum width of 480px** and a _red-text_ if it's **smaller than 480px**.


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Bootstrap Viewport Sizes](https://v4-alpha.getbootstrap.com/layout/grid/)

[w3schools media queries](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)

