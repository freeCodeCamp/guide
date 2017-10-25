---
title: HTML5 Video
---
## HTML5 Video

The HTML5 `<video>` element specifies a standard way to embed a video in a web page, finally removing the necessity of using a plug-in for play videos in the browser. It is highly supported by the majority of the popular browsers.

The HTML `<video>` element an its structure looks essencially like this
```html
<video width="320" height="240" controls autoplay>
  <source src="myVideo.mp4" type="video/mp4">
  <source src="myVideo.ogg" type="video/ogg">
</video>
```
**The Source Tag**: the `<source>` tag allows you to specify alternative video files which the browser may choose from. The browser will use the *first recognized* format. 

**Most important attributes for** `<video>` **tag**:
- The `controls` attribute adds video controls, like play, pause, and volume.
- The `width` attribute let you vary the total width of the video viewport **(It does't affect the video file or the image)**.
- The `height` attribute let you vary the total height of the video viewport **(It does't affect the video file or the image)**.
- The `autoplay` attribute starts a video automatically after the video is loaded **(It is not supported on mobile devices)**





#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href="https://www.w3schools.com/html/html5_video.asp">HTML5 Video | w3schools</a>

