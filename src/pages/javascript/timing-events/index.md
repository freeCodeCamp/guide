---
title: Timing Events
---
## Timing Events

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/timing-events/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

There are two methods that are mostly used to hundle timing events : **setInterval()** and **setTimeout()** .

##setTimeout()

The setTimeout() function is commonly used if you wish to have your function called once after the specified delay.
```javascript
var timeoutID = scope.setTimeout(function[, delay, param1, param2, ...]);
```
the function will be executed after the delay ,which is in **milliseconds** ,expires.
param1, ..., paramN are optional.
```javascript
//Example
window.setTimeout (myFunction,3000);
function myFunction() {
alert('this will be shown after 3 seconds');
}
```
But let's keep in mind that setTimeout will be executed **synchronously** :the code will nor execute in the order it's written with.
let's take an example 

```javascript
alert('this is executed the first');

window.setTimeout (myFunction,0);

function myFunction() {
alert('this is executed the last one');
}
alert('this is executed the second one');
```
to solve this problem we just have to nest the code that have to be run synchronously in  myFunction

```javascript
alert('this is executed the first');

window.setTimeout (myFunction,0);

function myFunction() {
alert('this is executed the second one');
alert('this is executed the last one');
}
```
So here myFunction will be executed the last one , and that's what's javascript asynchronous feature about .To get more information watch this awesome video.
<a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>





