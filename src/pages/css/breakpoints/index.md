---
title: Breakpoints
---
## Breakpoints

A CSS Breakpoint is a specific point in which a website's layout changes, based on a [Media Query](https://guide.freecodecamp.org/css/css3-media-queries) becoming active.

Generally, you specify a breakpoint when you want to re-adapt the website's layout to the browser viewport's size; mostly, to the viewport's width.

For example, if your website content looks great on a narrow viewport (like on a smart-phone browser), but it starts to look bad on bigger screens (e.g. maybe the fonts' size are too small and difficult to read), then you might want to introduce a new breakpoint for bigger screens that makes the fonts bigger:

```css
// Normal, basic styles
// that look great on small screens
// but not on bigger screens
body {
  font-size: 16px;
}

// Define a new breakpoint, with a media query.
// In this case, for when the viewport's width
// is at least 512px wide.
@media (min-width: 512px) {
	body {
		font-size: 20px;
	}
}
```

#### More Information:
- [CSS3 Media Queries](https://guide.freecodecamp.org/css/css3-media-queries)
- [Defining Breakpoints](https://responsivedesign.is/strategy/page-layout/defining-breakpoints/)
