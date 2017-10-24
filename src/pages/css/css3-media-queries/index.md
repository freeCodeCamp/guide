---
title: CSS3 Media Queries
---
## CSS3 Media Queries

CSS3 Media queries are a relatively new feature, added as a recommended standard by the <a href='https://en.wikipedia.org/wiki/World_Wide_Web_Consortium#Specification_maturation' target='_blank' rel='nofollow'>World Wide Web Consortium (W3C)</a> in June 2012. It is core to the very possibility of responsive web design, because it is media queries that allow a site's CSS styling to respond and adapt based on the device viewing it.

### Why Media Queries?

Media queries allow a specific style or set of styles to be applied only when a specific attribute is true of the device accessing the website. They can be used to make sites look and respond much better on both mobile and desktop devices, for example, but they can also change certain attributes for things as diverse as:

1. Adjusting for screen readers that convert website text to speech for the visually impaired
2. Restyling a page for when it's printed as opposed to read on a screen
3. Resizing for different aspect ratios
4. Letting content determine break points
5. Allowing for more graceful zooming in for the minorly visually impaired
6. And of course, accomodating various screen heights and widths

### How to use them

Using media queries you target a specific type or feature of the medium (i.e. the device or means by which they are seeing the site). 

Type includes options like projection, TV, and speech (for text-to-speech devices). The most common types are `screen`, which targets any device with a screen, and `print`, for when a website is printed out. A type is targeted thus:

```CSS
@media print { ... }
```

Media queries can also indicate specific features of devices, using common CSS selectors. For example, the following code block would only apply to devices that have a screen width of no more than 1400px:

```CSS
@media (max-width: 1400px) { ... }
```

Media queries can also target specific states, such as hover or focus, using the same syntax. Additionally, media queries can be more specifically targeted using the logical operators `and` and `not`:

```CSS
@media (min-width: 30em) and (hover: hover)
```

Using these logical operators chain using mathematical kinds of order of operations, so if using multiple operators double check to make sure that the style is being applied in the expected and intended way. For example: 

```CSS
@media not all and (max-width: 600px)
```

This would be evaluated as `not (all and (max-width: 600px))`, not as `(not all) and (max-width: 600px)`. Some users have reported that it can be difficult to get `not` to work by itself without using an accompanying `all and`, basically following the above pattern: `all and (your-selector: value)`.

You can also create styles that will be applied similar to a classic `or` operator using comma separated lists. The style will applied if any of the listed criteria are met:

```CSS
@media (min-height: 680px), (orientation: portrait) { ... }
```

This style would be applied if either the screen had a minimum height of 680px or it was in portrait orientation. When comma chaining with `not`, note that the `not` operator will only negate items in it's own element of the list, not the list as a whole.

Finally, the `only` operator is purely used for protection against older browsers that have not implemented media queries. It will prevent these browsers from applying media-query specific styles. It has no effect on any modern browser. Media queries are supported in Internet Explorer (IE) 9+, Firefox 3.5+, Safari 3+, Opera 7+, and also in smartphones and screen devices.

#### More Information:
<a href='https://en.wikipedia.org/wiki/Media_queries' target='_blank' rel='nofollow'>Wikipedia Entry on Media Queries</a>
<a href='https://en.wikipedia.org/wiki/Media_queries' target='_blank' rel='nofollow'>MDN Docs on Media Queries</a>
<a href='https://www.w3schools.com/cssref/css3_pr_mediaquery.asp' target='_blank' rel='nofollow'>W3 Schools Docs on Media Queries</a>
<a href='http://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/' target='_blank' rel='nofollow'>A good blog post by Brad Frost about best practices</a>
<a href='https://css-tricks.com/logic-in-media-queries/' target='_blank' rel='nofollow'>A blog post from CSS tricks about media query logic</a>
<a href='https://www.templatemonster.com/blog/css-media-queries-for-all-devices-and-browsers-including-ie7-and-ie8/' target='_blank' rel='nofollow'>A blog post about media query browser support</a>
