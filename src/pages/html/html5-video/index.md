---
title: HTML5 Video
---
## HTML5 Video

The HTML ```<video>``` element is used to embed video content in documents. It may contain one or more video sources, represented using the src attribute or the ```<source>``` element: the browser will choose the most suitable one.

```HTML
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

### Attributes

* ```autoplay``` - specifies that the audio will start playing as soon as it is ready, even if it's false.
* ```controls``` - specifies that audio controls should be displayed.
* ```loop``` - specifies that the audio will start over again, every time it is finished.
* ```muted``` - specifies that the audio output should be muted.
* ```preload``` - specifies if and how the author thinks the audio should be loaded when the page loads.
* ```src``` - specifies the URL of the audio file.
* ```poster``` - specifies an image URL to be shown while the video is downloading, or until the user hits the play button.
* ```height``` - sets the height of the video player.
* ```width``` - sets the width of the video player.

#### More Information:

* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
* [w3schools](https://www.w3schools.com/TAGs/tag_video.asp)
