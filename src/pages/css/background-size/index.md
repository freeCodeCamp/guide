---
title: Background Size
---
## Background Size

The background-size property specifies the size of the background images. You can set a length or a percentage, with the first value being the width and the second one being the height. You can also use one of the 5 keyword values:

```css
.auto {background-size: auto}
.cover {background-size: cover}
.contain {background-size: contain}
.initial {background-size: initial}
.inherit {background-size: inherit}
```
Those are just some simple examples of the properties that can be used with background size. Two of the probably most used keywords are cover and contain, cover makes sure that the image always covers the targeted container, this does mean that in most cases the image will get stretched or parts of the image may get cut off at the sides or the bottom. Contain is used if you want the background image to be 'contained' within the targeted container, the browser will re-size the image to allow it to fit within the container dimensions, this does not stretch or distort the image, so you may find that the image is not wide enough to fit your container.

The default keyword — auto — tells the browser to automatically calculate the size based on the actual size of the image and the aspect ratio.

#### Values:

You can also apply values to the background size rule, these can be in any CSS unit that you want, px, percetages, ems or even viewport units. You can apply 1 or 2 values, if you apply 1 eg: background-size: 230px; This will set the width of the background image and the height to auto. 

If you set 2 values eg: background-size: 230px 400px; This sets the width and the height of the background image.

#### More Information:

Demo: <a href="https://codepen.io/team/css-tricks/pen/NPMgem" target="_blank" rel="nofollow">Demo, CSS Tricks Codepen</a>

Documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/background-size' target='_blank' rel='nofollow'>MDN</a>

Browser Support: <a href='http://caniuse.com/#search=background-size' target='_blank' rel='nofollow'>caniuse</a>
