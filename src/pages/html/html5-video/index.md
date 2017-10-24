---
title: HTML5 Video
---
## HTML5 Video
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Before HTML5, a video could only be played in a browser with a plug-in (like flash).
The HTML5 <video> element specifies a standard way to embed a video in a web page.
```
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```
The controls attribute adds video controls, like play, pause, and volume.

It is a good idea to always include width and height attributes. If height and width are not set, the page might flicker while the video loads.

The <source> element allows you to specify alternative video files which the browser may choose from. The browser will use the first recognized format.

The text between the <video> and </video> tags will only be displayed in browsers that do not support the <video> element.
  
To start a video automatically use the autoplay attribute:
```
<video width="320" height="240" controls autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```
The autoplay attribute does not work in mobile devices like iPad and iPhone.

The <video> element contains one or more video sources. To specify a video source, use either the src attribute or the <source> element; the browser will choose the most suitable one. For a list of supported formats, see [Media formats supported by the audio and video elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats)
  
This example offers three different sources for the media; this allows the video to be watched regardless of which video codecs are supported by the browser; first WebM is tried. If that can't be played, then MP4 is tried. Finally, OGG is tried.

```
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
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://www.w3schools.com/html/html5_video.asp
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
https://html.spec.whatwg.org/multipage/media.html#the-video-element
