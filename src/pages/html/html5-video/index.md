---
title: HTML5 Video
---
## HTML5 Video

HTML5 Video allows you to play videos on webpages without the use of a plugin. Previously, browsers required plugins like Adobe Flash to play videos. Currently, HTML5 Video is supported on all major browsers. You can reference browser support on the [HTML5 Video Elements](http://caniuse.com/#feat=video) CanIUse page.

#### The Element

The HTML5 Video element has opening and closing `<video></video>` tags. Between the tags, you add in `<source>` tags for different video formats you want to display, using the `src` attribute in the same way you would in an `<img>` element. You can also add any text you want displayed if the HTML5 Video element is not supported. 

Example: 
```
<video>
  <source src="my-movie.mp4" type="video/mp4">
  <source src="my-movie.ogg" type="video/ogg">
  Sorry! It looks like your browser does not support the video element.
</video>
```

#### Attributes for the Element

There are many different attributes that can be added to the HTML5 Video element that add to its functionality. These attributes include:

- `autoplay`: starts the video playing when the webpage loads
- `loop`: restarts the video after it has ended
- `controls`: shows the controls for the video (play/pause, time track, and time slider)
- `volume`: shows the volume controls for the video (raise/lower/mute the volume)

Like other HTML elements, you can also include `width` and `height` attributes to set the width and height of the video frame. Dimensions and attributes can be set as in the below example.

Example:
```
<video width="640" height="480" autoplay loop controls volume>
  <source src="another-movie.mp4" type="video/mp4">
  <source src="another-movie.ogg" type="video/ogg">
  Sorry! It looks like your browser does not support the video element.
</video>
```

#### HTML5 Video and JavaScript 

There are several properties, methods, and events that the `<video>` element has that go beyond simple video playback. These include:

- `volume`: a property that can get or set the volume of the video
- `playbackRate`: a property that gets the playback rate of the video (`1` is regular speed)
- `play()`: a method that plays the video
- `pause()`: a method that pauses the video
- `ended`: an event that fires when the video playback ends

Any of the above properties, methods, or events can be used with JavaScript to interact with your video element. 


#### More Information:

- [W3Schools HTML5 Video](https://www.w3schools.com/html/html5_video.asp)
- [HTML5 Video](https://www.html5rocks.com/en/tutorials/video/basics/)
- [MDN - Media Events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events)


