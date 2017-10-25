---
title: HTML5 Video
---
## HTML5 Video
The HTML5 <video> element specifies a standard way to embed a video in a web page.
#### Simple example
```html
<video src="videoFile.webm" controls>
  Your browser doesn't support HTML5 video tag.
</video>
```
#### Video with subtitles
```html
<video src="videoFile.webm">
  <track kind="subtitles" src="videoFile.en.vtt" srclang="en" label="English">
  <track kind="subtitles" src="videoFile.sv.vtt" srclang="sv" label="Svenska">
  Your browser doesn't support HTML5 video tag.
</video>
```
#### Example with multiple sources
```html
<video width="480" controls poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif" >
  <source src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm" type="video/webm">
  <source src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4" type="video/mp4">
  <source src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv" type="video/ogg">
  Your browser doesn't support HTML5 video tag.
</video>
```  
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [w3schools.com: HTML5 Video](https://www.w3schools.com/html/html5_video.asp)
- [MDN webdocs: \<video\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [Wikipedia: HTML5 video](https://en.wikipedia.org/wiki/HTML5_video)
