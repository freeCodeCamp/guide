---
title: Breakpoints
---
## Overview

A CSS Breakpoint is a specific point in which a website's layout changes, based on a [Media Query](https://guide.freecodecamp.org/css/css3-media-queries) becoming active.

Generally, you specify a breakpoint when you want to re-adapt the website's layout to the browser viewport's size; mostly, to the viewport's width.

For example, if your website content looks great on a narrow viewport (like on a smart-phone browser), but it starts to look bad on bigger screens (e.g. maybe the fonts' size are too small and difficult to read), then you might want to introduce a new breakpoint for bigger screens that makes the fonts bigger:

**CSS breakpoints** are useful when you want to update styles based on the screen size. For example, from a device measuring 1200px width and above, use the `font-size: 20px;`, or else use the `font-size: 16px;`.

What we have started with is from the greater than 1200px, a common laptop screen's width. You may also have noticed that we mentioned 'greater than', meaning that we are in a way using something like an '**if-then**' statement.

Let's turn it into CSS code: 

```css
.text1 {
    font-size: 16px;
}
@media (min-width: 1200px) {
    .text1 {
        font-size: 20px;
    }
}
```

**For our convenience**, we write down the `.text1` basic styling first... then afterwards we will specify the `@media` rules.

**Tip**: you may see on a common CSS Framework called 'Bootstrap', that they have adopted **'min-width' and up** in their Bootstrap v4.0, as compared to their old Bootstrap v3.0 using **'max-width' and down**.
This is only a **preference**, and there is nothing wrong with saying '*this* size and less than' versus '*this* size and greater than'.

It is perfectly fine to use `@media (max-width) {}` . Here is an example: 

```css
.text1 {
    font-size: 20px;
}
@media (max-width: 1199px) {
    font-size: 16px;
}
```


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

- [Responsive breakpoints](https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints)
- [freecodecamp.org article on using CSS breakpoints](https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862)
- [CSS3 Media Queries](https://guide.freecodecamp.org/css/css3-media-queries)
- [Defining Breakpoints](https://responsivedesign.is/strategy/page-layout/defining-breakpoints/)
- [CSS-Tricks:@media queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
- [w3schools:Typical Device Breakpoints](https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp)

