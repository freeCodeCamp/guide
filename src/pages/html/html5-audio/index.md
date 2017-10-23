---
title: HTML5 Audio
---
## HTML5 Audio

The HTML ```<audio>``` element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the ```<source>``` element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.

```HTML
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```

### Attributes

* ```autoplay``` - specifies that the audio will start playing as soon as it is ready, even if it's false.
* ```controls``` - specifies that audio controls should be displayed.
* ```loop``` - specifies that the audio will start over again, every time it is finished.
* ```muted``` - specifies that the audio output should be muted.
* ```preload``` - specifies if and how the author thinks the audio should be loaded when the page loads.
* ```src``` - specifies the URL of the audio file.

#### More Information:

* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
* [w3schools](https://www.w3schools.com/TAGs/tag_audio.asp)
