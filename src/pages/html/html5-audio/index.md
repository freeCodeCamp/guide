---
title: HTML5 Audio
---
## HTML5 Audio 

Before HTML5, audio files had to be played in a browser with a plug-in (like flash). 
The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the [source](<source>) element

To embed audio file into web page, just add this code snippet and change the src of audio file.

#### Example 1
```html
<audio controls>
  <source src="tutorial.ogg" type="audio/ogg">
  <source src="tutorial.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```

#### Example 2
```html
<audio src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" controls loop autoplay> 
</audio>
```

The controls attribute includes audio controls, similar to play, pause, and volume. If you don't use this attribute, then no controls will be shown.

The `<source>` element enables you to indicate alternative audio files which the browser may choose from. The browser will utilize the first recognize format. 
The text between the `<audio>` and `</audio>` tags might be shown in browser that don't support the `<audio>` element.

The autoplay attribute will automatically play your audio file in the background. It is considered better practice to let visitors choose to play audio.

The preload attribute indicates what the browser should do if the player is not set to autoplay.

The loop attribute will play your audio file in a continous loop if mentioned

Since this is html5, some browser do not support it. You can check it at https://caniuse.com/#search=audio

#### More Information:
https://caniuse.com/#search=audio

https://www.w3schools.com/html/html5_audio.asp

https://msdn.microsoft.com/en-us/library/gg589529(v=vs.85).aspx


