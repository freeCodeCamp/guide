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
.class-name {
  opacity:1;
}

OR

.class-name {
  opacity:1.0;
}
```
**Translucent**
```css
.class-name {
  opacity:0.5;
}
Opacity value can be anything between 0 and 1;
```
**Transparent**
```css
.class-name {
  opacity:0;
}

OR

.class-name {
  opacity:0.0;
}
```
Alternatively you can use a transparent rgba value like this:
```css

.class-name{
  background-color: rgba(0,0,0,.5);
  }
 ```
The example above sets the background to be black with 50% opacity. The last value of an rgba value is the alpha value. An alpha value of 1 equals 100%, and 0.5 (.5 for short) quals 50%. We use this method to add transparency to an element without affecting the content inside.

[A codepen example to show background opacity ranges](https://codepen.io/lvcoulter/full/dVrwmK/)


#### More Information:
For more information visit [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
Browser support: <a href= 'https://caniuse.com/#search=opacity' target= '_blank' rel= 'nofollow'>caniuse</a>
