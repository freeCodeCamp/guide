---
title: Background
---
## Background
The background property lets you use images and colors to create backgrounds for your web pages.

### Background Color
The background color property lets you choose the color of your element. This can be the background for the entire page or the background of one section of your page.
* An element is a piece of HTML such as a header or paragraph on a web page.

Here is an example of setting the background color for a web page to green.
```css
  body {
    background-color: green;
  }
```
![fullbackground](https://user-images.githubusercontent.com/26467304/31036038-845567f2-a538-11e7-8e6c-8a52bb0d44b8.png)

Here is an example of setting the colors for two elements. This will set the background of the header 
to purple and the rest of the page to blue.

```css
  body {
    background-color: blue;
  }
  h1 {
    background–color: purple;
  }
```
![twobackground](https://user-images.githubusercontent.com/26467304/31036152-0607936a-a539-11e7-9e9f-a5e60ade042d.png)

In CSS color can be defined in three ways:
* A valid color name such as `blue`
* A HEX value such as `#FFFFF` (This is the hex value for white.)
* An RGB value such as `rgb(76,175,80)` (This is the RGB value for light green.)

### Background Images
You can use the background image property to set an image as a background for an element. 
The image is repeated by default so that it covers the entire element.
```css
body {
  background-image: url("barn.jpg");
}
```
![image](https://user-images.githubusercontent.com/26467304/31036366-eb1fc260-a539-11e7-835d-e3f935a22c86.png)


You can also link pictures or gifs that you find online by using their link (ie. from Google Images a search).
```css
body {
  background-image: url("https://mdn.mozillademos.org/files/11983/starsolid.gif");
}
```

### Background Image - The Repeat Property
The background image is repeated both vertically (up and down) and horizontally (across the web page) by default.
You can use the background-repeat property to repeat the image vertically or horizontally.

Here is an example that repeats the image vertically.
```css
body {
  background-image: url("barn.jpg");
  background-repeat: repeat-y;
}
```
![vertical](https://user-images.githubusercontent.com/26467304/31039770-8962c7a6-a54e-11e7-9d25-4fb09760d219.PNG)

You can repeat the image horizontally by setting the background-repeat property to “repeat-x”.
```css
body {
  background-image: url("barn.jpg");
  background-repeat: repeat-x;
}
```

You can also use the background-repeat property to set an image to not repeat.
```css
body {
  background-image: url("barn.jpg");
  background-repeat: no-repeat;
}
```
![norepeat](https://user-images.githubusercontent.com/26467304/31039801-c8761efc-a54e-11e7-8bb9-ec5b88885a50.PNG)

### Background Image – The Position Property
You can use the position property to specify where your image will be located on a web page.
```css
body {
  background-image: url("barn.jpg");
  background-repeat: no-repeat;
  background-position: right top;
}
```
![position](https://user-images.githubusercontent.com/26467304/31039828-077d1038-a54f-11e7-8aa6-092253ca92b8.PNG)

### Background Image – The Fixed Position
You can use the background-attachment property to set an image to a fixed position.
A fixed position makes it so an image does not scroll with the rest of the page.
```css
body {
  background-image: url("barn.jpg");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed;
}
```

![fixed](https://user-images.githubusercontent.com/26467304/31039859-39612c92-a54f-11e7-93ca-9d7bcb938225.PNG)

### Background – The Shorthand Property
You can write the background properties on a single line. This is called the shorthand property.
```css
body {
  background: url("barn.jpg") no-repeat right top;
}
```
You can leave out properties you don’t need when using the shorthand property, but the properties 
must be used in a certain order. The order is:
* color
* image
* repeat
* attachment
* position

### Other Resources
* <a href='http://cloford.com/resources/colours/500col.htm' target='_blank' rel='nofollow'>List of color values</a>
* <a href='http://colrd.com/create/palette/' target='_blank' rel='nofollow'>Color Picker Tool</a>

