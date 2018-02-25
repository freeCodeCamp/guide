---
title: HTML5 Video
---
## HTML5 Video

Before HTML5, in order to have a video play in a webpage you would need to use a plugin, like Adobe Flash Player. With the introduction of HTML5, you can now place it directly into the page itself.

Example:

```html
    <video>
      <source src="video.mp4" type="video/mp4">
    </video>
```

This feature is supported by all modern/updated browsers. However, not all support the same video file format. My recommendation for a wide range of compatibilty is MP4, as it is the most widely accepted format. There are also two other formats (WebM and Ogg) that are supported in Chrome, Firefox, and Opera.

There are several different elements of the video tag, many of these explanations are based on Mozilla's web docs (linked below). There are even more if you click the link at the bottom. 

#### autoplay

"autoplay" can be set to either true or false. You set it to true by adding it into the tag, if it is not present in the tag it is set to false. If set to true, the video will begin playing as soon as enough of the video has buffered for it to be able to play. Many people find autoplaying videos as disruptive or annoying so use this feature sparingly. Also note, that some mobile browsers, such as Safari for iOS, ignore this attribute.

```html
    <video autoplay>
      <source src="video.mp4" type="video/mp4">
    </video>
```

#### poster

The "poster" attribute is the image that shows on the video until the user clicks to play it.

```html
    <video poster="poster.png">
      <source src="video.mp4" type="video/mp4">
    </video>
```

#### controls

The "controls" attribute can be set to true or false and will handle whether controls such as the play/pause button or volume slider appear. You set it to true by adding it into the tag, if it is not present in the tag it is set to false. 

```html
    <video controls>
      <source src="video.mp4" type="video/mp4">
    </video>
```

There are many more attributes that can be added that are optional to customize the videoplayer in the page. To learn more, click on the links below.

## More Information:

- <a href="https://www.w3schools.com/html/html5_video.asp">W3Schools - HTML5 Video</a> 
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video">Mozilla web docs - Video</a>
- <a href="https://en.wikipedia.org/wiki/HTML5_video">Wikipedia - HTML5 Video</a> 
- <a href="https://www.html5rocks.com/en/tutorials/video/basics/">HTML5 Rocks - HTML5 Video</a>
- [Can I use video?](https://caniuse.com/#search=video)
- [How to use HTML5 to play video files on your webpage](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/hh924821(v=vs.85))