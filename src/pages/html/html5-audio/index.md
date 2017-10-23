---
title: HTML5 Audio
---
## HTML5 Audio

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/html/html5-audio/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the [source](<source>) element
```
<audio controls>
  <source src="tutorial.ogg" type="audio/ogg">
  <source src="tutorial.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```
The controls attribute adds audio controls, like play, pause, and volume.

The [source](<source>) element allows you to specify alternative audio files which the browser may choose from. The browser will use the first recognized format.

The text between the [audio](<audio>) and [audio](</audio>) tags will only be displayed in browsers that do not support the <audio> element.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


