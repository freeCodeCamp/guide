---
title: HTML5 Audio
---
## HTML5 Audio

Before HTML5, audio files had to be played in a browser using a plug-in like Adobe Flash. With HTML5, the <audio> element can be used to embed sound content in documents instead. The tag may contain one or more audio sources, each of whic is represented using an `src` attribute or a [source](<source>) element.
  
The following code snippet adds an audio file with the filename `tutorial.ogg` or `tutorial.mp3`. The <source> element indicates alternative audio files which the browser may choose from. The browser will utilize the first recognized format. 

```html
<audio controls>
  <source src="tutorial.ogg" type="audio/ogg">
  <source src="tutorial.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```

The `controls` attribute includes audio controls like play, pause, and volume. 

The text between the `<audio>` and `</audio>` tags may be shown in browser that does not support the HTML5 `<audio>` element. You can check browser compatibility at https://caniuse.com/#search=audio

#### More Information:
https://caniuse.com/#search=audio

https://www.w3schools.com/html/html5_audio.asp

https://msdn.microsoft.com/en-us/library/gg589529(v=vs.85).aspx


