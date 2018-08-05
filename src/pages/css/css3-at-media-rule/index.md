---
title: CSS3 @media Rule
---
## CSS3 @media Rule
The @media rule defines different style rules for different media devices and sizes.

It was introduced in CSS2 as media types, allowing users to specify css rules for screens, printers, handhelds, televisions, etc, however, it wasn't used much except for screens printer.
With CSS3 it is now called media queries and rather than aiming to specify rules for devices, it now allows for evaluating expressions about screen sizes, and is compatible with all modern browsers.

Media Queries follow the pattern:
```css
@media not|only mediatype and (expressions) {
    New CSS Goes Here;
}
```

Available mediatypes:
* `all`
* `print`
* `screen`
* `speech`

Available media features usable in expressions:
<br>**Commonly Used**
* `min-width`
* `max-width`
* `min-height`
* `max-height`
* `orientation`

**Others**
* `any-hover`
* `any-pointer`
* `aspect-ratio`
* `color`
* `color-index`
* `grid`
* `height`
* `hover`
* `inverted-colors`
* `light-level`
* `max-aspect-ratio`
* `max-color`
* `max-color-index`
* `max-device-aspect-ratio`
* `max-device-height`
* `max-device-width`
* `max-monochrome`
* `max-resolution`
* `min-aspect-ratio`
* `min-color`
* `min-color-index`
* `min-device-aspect-ratio`
* `min-device-width`
* `min-device-height`
* `min-monochrome`
* `min-resolution`
* `monochrome`
* `overflow-block`
* `overflow-inline`
* `pointer`
* `resolution`
* `scan`
* `scripting`
* `update-frequency`
* `width`

The ability to combine multiple media features, or apply styling rules excluding specific media features gives developers more freedom to adjust websites to fit any need, improve on accessibility, and user experiences.

#### More Information:
<a href='https://guide.freecodecamp.org/css/css3-media-queries' target='_blank' rel='nofollow'>See freeCodeCamp CSS3 Media Queries</a><br>
<a href='https://www.w3schools.com/cssref/css3_pr_mediaquery.asp' target='_blank' rel='nofollow'>w3schools : CSS3 @media Rules</a><br>
