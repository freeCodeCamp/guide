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
#### More Information:
For more information visit <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/opacity' target='_blank' rel='nofollow'>MDN</a>

My changes: I have been working on a personal project where I had to manipulate the opacity of headers from the main html file. The main html referenced a separate .css file I made where I added rgba colors. 

RGB is the standard Red, Green, Blue color model while RGBA has the "A" which stands for alpha and is responsible for the opacity which ranges between 0.0 and 1.0. There are different ways in which you can incorporate the opacity element in your code. I simply implemented it all in one line. For instance: color: rgba(230, 98, 231, 0.8). A great resource to reference the properties of background opacity is: https://developer.mozilla.org/en-US/docs/Web/CSS/opacity. 


