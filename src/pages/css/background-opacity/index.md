---
title: Background Opacity
---
## Background Opacity

The opacity property specifies the opacity/transparency of an element, that is, the degree to which the content behind the element is visible.

The opacity property can take a value from 0.0 - 1.0. The lower value, the more transparent:

Find more details <a href='https://www.w3schools.com/css/css_image_transparency.asp' target='_blank' rel='nofollow'>here</a>

You can choose upto what extent you want to make the element transparent.
You have to add the following CSS property to achieve the transparency levels.

**Fully Opaque**
```css
.class-name{
  opacity:1;
  }

OR

.class-name{
  opacity:1.0;
  }
```
**Translucent**
```css
.class-name{
  opacity:0.5;
  }
Opacity value can be anything between 0 and 1;
```
**Transparent**
```css
.class-name{
  opacity:0;
  }
  
OR

.class-name{
  opacity:0.0;
  }
```

**IE Compatibility**

If you want your opacity/transparency to be fully compatible with older IE browsers, the opacity declarations must be in the following order.<sup>1</sup>

```css
.class-name {
  /* Theoretically for IE 8 & 9 (more valid) */
  /* ...but not required as filter works too */
  /* should come BEFORE filter */
  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)"; // IE8

  /* This works in IE 8 & 9 too */
  /* ... but also 5, 6, 7 */
  filter: alpha(opacity=50); // IE 5-7
  
  /* Modern Browsers */
  opacity: 0.5;
}
```


#### More Information:
For more information visit <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/opacity' target='_blank' rel='nofollow'>MDN</a>

<a href='https://codepen.io/grayghostvisuals/pen/lykCe' target='_blank' rel='nofollow'>Try it out on Codepen</a>

### Sources:
1. <a href="https://css-tricks.com/almanac/properties/o/opacity/" target="_blank" rel="nofollow">Cope, Sara. "Opacity" CSS-Tricks, Last updated February 23, 2016</a>
