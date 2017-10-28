---
title: HTML5 Video
---
## HTML5 Video

HTML `<video>` element embed video content in a document.
  
```html
  <video width="320" height="240" controls>
      <source src="movie.mp4" type="video/mp4">
      <source src="movie.ogg" type="video/ogg">
      Your browser does not support the video tag.
  </video>
```
The controls attribute adds video controls, like play, pause, and volume.
It is recommended to use width and height tag to control the size.
The `<source>` element allows you to specify alternative video files which the browser may choose from. The browser will use the first recognized format.
To start a video automatically use the autoplay attribute:
```html
<video width="320" height="240" autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```
The autoplay attribute does not work in mobile devices like iPad and iPhone.

HTML Video - Browser Support
In HTML5, there are 3 supported video formats: MP4, WebM, and Ogg.

The browser support for the different formats is:

Browser            	MP4	 WebM	  Ogg
Internet Explorer	  YES 	NO	  NO
Chrome            	YES 	YES	  YES
Firefox	            YES	  YES	  YES
Safari	            YES	  NO	  NO
Opera	              YES 	YES	  YES
               
