---
title: HTML5 Audio
---
## HTML5 Audio

<p>To add Audio to your webpage ,HTML5 has introduced an 

`<audio></audio>` Tag <p>

<h4>Example Code <h4>

```

<!DOCTYPE html>
<html>
<head>
 <title>Adding HTML5 Audio</title>
</head>
<body>

<audio src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" controls loop autoplay> 
</audio>
 
</body>
</html> 

```

<p>

`<audio>
 `element has a number of attributes which allows you to control audio playback<p>

<h5>Src</h5>
<p><b>src</b> is used to specify the path to your audio file </p>
<h5>Control</h5>
<p> <b>Control </b> attribute is used to add controls like pause/play,volume up and down to your audio.If dont use this attribute then no controls will be shown</p>
<h5>Autoplay</h5>
<p><b>Autoplay</b> attribute will automatically play your audio file in the background (It is
considered better practice to let
visitors choose to play audio.) </p>
<h5>Preload</h5>
<p><b>Preload</b>This attribute indicates what the
browser should do if the player is
not set to autoplay. </p>
<h5>Loop</h5>
<p><b>Loop</b> arrtibute will play your audio file in a continous loop if mentioned </p>


 

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->



 </audio>



