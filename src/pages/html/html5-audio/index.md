---
title: HTML5 Audio
---
## HTML5 Audio

Before HTML5, audio files must be played in a browser with a plug-in (like flash). 
The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the [source](<source>) element
  
To embed audio file into web page, just add this code snippet and change the src of audio file.

```html
<audio controls>
  <source src="tutorial.ogg" type="audio/ogg">
  <source src="tutorial.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```

The controls attribute includes audio controls, similar to play, pause, and volume. 

The <source> element enables you to indicate alternative audio files which the browser may choose from. The browser will utilize the first recognize format. 
The text between the <audio> and </audio> tags might be shown in browser that don't support the <audio> element.

Since this is html5, some browser do not support it. You can check it at https://caniuse.com/#search=audio

#### More Information:
https://caniuse.com/#search=audio

https://www.w3schools.com/html/html5_audio.asp

https://msdn.microsoft.com/en-us/library/gg589529(v=vs.85).aspx


