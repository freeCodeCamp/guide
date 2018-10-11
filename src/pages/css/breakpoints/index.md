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

- [CSS3 Media Queries](https://guide.freecodecamp.org/css/css3-media-queries)
- [Defining Breakpoints](https://responsivedesign.is/strategy/page-layout/defining-breakpoints/)
- [CSS-Tricks:@media queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
- [w3schools:Typical Device Breakpoints](https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp)

