---
title: Breakpoints
---
## Breakpoints

CSS Breakpoints can be considered to be the heart of responsive webdesign because they define how the content behaves or is arranged at
a different device width/scale allowing you to show the best possible layout to the user.

![Example](https://getflywheel.com/wp-content/uploads/2018/02/css-breakpoints-layouts-01.jpg)

## Setting Break Points

Breakpoints are broadly set on basis of either of the following.

- Breakpoints based on device width.
- Breakpoints based on content.

### Breakpoints based on device width

It's quite apparent that all of our devices donot have same screen widths/ sizes. It is now a design decision to include a set of particular devices and code the css rules accordingly. We already have enough devices to worry about, and when a new one comes out with a different width, going back to your CSS and adding a new breakpoint all over again is time-consuming.

Here's an example 

```
/* ----------- iPhone 6, 6S, 7 and 8 ----------- */

/* Portrait */

@media only screen

and (min-device-width: 375px)

and (max-device-width: 667px)

and (-webkit-min-device-pixel-ratio: 2)

and (orientation: portrait) {

}

/* Landscape */

@media only screen

and (min-device-width: 375px)

and (max-device-width: 667px)

and (-webkit-min-device-pixel-ratio: 2)

and (orientation: landscape) {

}

/* ----------- Google Pixel ----------- */

/* Portrait */

@media screen

and (device-width: 360px)

and (device-height: 640px)

and (-webkit-device-pixel-ratio: 3)

and (orientation: portrait) {

}

/* Landscape */

@media screen

and (device-width: 360px)

and (device-height: 640px)

and (-webkit-device-pixel-ratio: 3)

and (orientation: landscape) {

}
```
> With this approach, you will end up having a huge list of media queries.

### Breakpoints based on Content

This is the most preferred choice while making or writing the breakpoint rules. Because it is easire to adjust your content according a particular layout only when it requires a change.
```
@media only screen (min-width: 768px){
...
}
```
> This breakpoint means the CSS will apply when the device width is 768px and above.


#### You can also set a range with breakpoints,  so the CSS will only apply within those limits.
```
@media only screen and (min-width: 768px) and (max-width: 959px){

...

}
```


> **Note** <br>
Always try to create breakpoints based on your own content, not devices. Break them to a logical width rather than a random width and keep them to a manageable number, so modifying remains simple and clear.


#### More Information:
[https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp](https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp)
