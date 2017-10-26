---
title: Timing Events
---
## Timing Events

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/timing-events/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

## Timing Events in JavaScript

JavaScript timing events allow us to call a function after a certain amount of time has elapsed.

There are 2 primary timing events that we will look at in this article:

1 The setInterval() method
2 The setTimeout() method

## setInterval

This is used to run a function multiple times with a delay between each instance of the function.

For example, this code snippet (borrowed from the article listed below in the "More Information" section):

```JAVASCRIPT
setInterval(function(){alert("Welcome to the page.")},3000);
```
Will pop up an alert button that welcomes a visitor to the page, and repeat that again 3 seconds after the button is pressed.

This, of course, needs to be accompanied by additonal HTML and JS, but this particular lineis shown for the purpose of this example. 

## setTimeout

In setTimeout the called function will not run until the specified amount of time has passed.

```JAVASCRIPT
setTimeout ( "alert( 'Your are getting message after 3 seconds!!!' )" , 3000); }
```
This code will show an alert box after 3 seconds. Note that in both examples, the time is set in milliseconds.

## Conclusion

This has been a very brief introduction to timing events in JavaScript.

I strongly suggest you explore the links below to learn more about these.


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[Introduction To Timing Events In JavaScript](http://mrbool.com/introduction-to-timing-events-in-javascript/25482)

[MDN Web Docs](https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Timers)
