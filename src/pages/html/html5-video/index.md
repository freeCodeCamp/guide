---
title: HTML5 Video
---
## HTML5 Video
The `<video>` tag is used to embed videos in HTML and is a new feature of HTML 5.

#### How it works
```html
<video width="320" height="240" controls autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```
The video element accepts `width` and `height` attributes as well as optional attributes to display video `controls` and to `autoplay` on load. (Gotcha: The autoplay attribute does not work on mobile devices)

On load, the browser will look for the first compatible source file and load it. If no formats are compatible, then it will display any text located between the opening and closing `<video>` tags.


#### More Information:
- [w3schools article](https://www.w3schools.com/html/html5_video.asp)
