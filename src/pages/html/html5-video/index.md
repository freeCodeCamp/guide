---
title: HTML5 Video
---
## HTML5 Video

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/html/html5-video/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

Playing Videos in HTML
Before HTML5, a video could only be played in a browser with a plug-in (like flash).

The HTML5 <video> element specifies a standard way to embed a video in a web page.

Browser Support
The numbers in the table specify the first browser version that fully supports the <video> element.

Element					
<video>	4.0	9.0	3.5	4.0	10.5
The HTML <video> Element
To show a video in HTML, use the <video> element:

Example

<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>

How it Works
The controls attribute adds video controls, like play, pause, and volume.

It is a good idea to always include width and height attributes. If height and width are not set, the page might flicker while the video loads.

The <source> element allows you to specify alternative video files which the browser may choose from. The browser will use the first recognized format.

The text between the <video> and </video> tags will only be displayed in browsers that do not support the <video> element.

HTML <video> Autoplay
To start a video automatically use the autoplay attribute:

Example
<video width="320" height="240" autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>

The autoplay attribute does not work in mobile devices like iPad and iPhone.

HTML Video - Browser Support
In HTML5, there are 3 supported video formats: MP4, WebM, and Ogg.

The browser support for the different formats is:

Browser	                 MP4	        WebM	      Ogg
Internet Explorer	       YES	        NO	        NO
Chrome	                 YES	        YES	        YES
Firefox	                 YES	        YES	        YES
Safari	                 YES	        NO	        NO
Opera	            YES (from Opera 25)	YES	        YES


HTML Video - Media Types
File Format	Media Type
MP4	video/mp4
WebM	video/webm
Ogg	video/ogg
HTML Video - Methods, Properties, and Events
HTML5 defines DOM methods, properties, and events for the <video> element.

This allows you to load, play, and pause videos, as well as setting duration and volume.

There are also DOM events that can notify you when a video begins to play, is paused, etc.

Example: Using JavaScript

Play/Pause  Big  Small  Normal 

Video courtesy of Big Buck Bunny.


For a full DOM reference, go to our HTML5 Audio/Video DOM Reference.

HTML5 Video Tags
Tag	Description
<video>	Defines a video or movie
<source>	Defines multiple media resources for media elements, such as <video> and <audio>
<track>	Defines text tracks in media players


