---
title: HTML5 Video
---
## HTML5 Video

`<video>` element is used to embed videos using HTML5. Following code from MDN explains the use of HTML5 video-

### Simple video:

```html
<video src="videofile.webm" autoplay poster="posterimage.jpg">
Sorry, your browser doesn't support embedded videos, 
but don't worry, you can <a href="videofile.webm">download it</a>
and watch it with your favorite video player!
</video>
```

### Video with subtitles:

```html
<video src="foo.webm">
  <track kind="subtitles" src="foo.en.vtt" srclang="en"
    label="English">
  <track kind="subtitles" src="foo.sv.vtt" srclang="sv"
    label="Svenska">
</video>
```

### Multiple sources:

This code explains how different video formats are checked one by one. If any of the video format matches the codec present in browser, video starts playing.

```html
<video width="480" controls
  poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif" >
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm"
    type="video/webm">
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4"
    type="video/mp4">
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv"
    type="video/ogg">
  Your browser doesn't support HTML5 video tag.
</video>
```

#### More Information:

[HTML5 Video Introduction by By Pete LePage](https://www.html5rocks.com/en/tutorials/video/basics/)

[HTML5 video element MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)


