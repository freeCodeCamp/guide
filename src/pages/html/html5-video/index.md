---
title: HTML5 Video
---
## HTML5 Video


Before HTML5, video files must be played in a browser with a plug-in (like flash).
The HTML <video> tag is used to embed video in web documents. It may contain one or more video sources, represented using the src attribute or the [source](<source>) element.
  
  
 To embed audio file into web page, just add this code snippet and change the src of audio file.
 
 ```html
 <video controls>
    <source src="tutorial.ogg" type="video /ogg">
    <source src="tutorial.mp4" type="video /mpeg">
  Your browser does not support the video element. Kindly,update it to latest version.
  </video >
```

The controls attribute includes video controls, similar to play, pause, and volume.

The <source> element enables you to indicate alternative video files which the browser may choose from. The browser will utilize the first recognize format.
In HTML5, there are 3 supported video formats: MP4, WebM, and Ogg.
The text between the <video> and </video> tags will only be displayed in browsers that do not support the <video> element.
Since this is html5, some browser do not support it. You can check it at https://caniuse.com/#search=audio.
  
  
  #### More Information:
 https://caniuse.com/#search=audio
 
 https://www.w3schools.com/html/html5_audio.asp
 
 https://msdn.microsoft.com/en-us/library/gg589529(v=vs.85).aspx
