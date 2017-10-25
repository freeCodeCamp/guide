---
title: HTML5 Video
---
## HTML5 Video

Before HTML5, a video could only be played in a browser with a plugin like Adobe's Flash or Microsoft's Silverlight.

The HTML5 `<video>` element specifies a standard way to embed a video in a web page. It is supported on major browsers like Chrome, Firefox, Safari, Opera and Internet Explorer.

In HTML5, there are 3 supported video formats: MP4, WebM, and Ogg where MP4 is widely supported on majority of the browsers.

## Example

```
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

## Attributes

`controls` - adds video controls, like play, pause, and volume.  
`width` - specifies width of video.  
`height` - specifies height of video.  
`autoplay` - autoplays video (not supported on mobile devices).  

The text between the `<video>` and `</video>` tag will be displayed when the browser doesn't support the `<video>` element.


## Video Tags

`<video>` - Defines a video or movie.  
`<source>` - Defines multiple media resources for media elements, such as `<video>` and `<audio>`.  
`<track>` - Defines text tracks in media players.  


#### More Information:
[W3Schools HTML5 Video](https://www.w3schools.com/html/html5_video.asp) | [Mozilla MDN video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)



