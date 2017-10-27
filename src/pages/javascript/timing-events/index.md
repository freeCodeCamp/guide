---
title: Timing Events
---
## Timing Events

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/timing-events/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
### Functions to get the date

We have a global Date object which is used to get the time. Date.now() returns the number of milliseconds calculated since 1 January 1970 00:00:00 UTC.
Date object has a lot of methods which allow us to get various time calculations, like: getMinutes(), getHours(), getDate(), getFullYear() and many more.

### setTimeout() and clearTimeout()

The function setTimeout() becomes very useful when a programer wants to make something happen after some set period of time (which is calculated in miliseconds by UNIX standard). One of the examples would be to make an alert box to pop up after 3s (3000ms).

```javascript
function sayHello() {
  setTimeout(
    function() {
      alert("Hi!");
    }, 3000
  )
}
```

To cancel this function before time you could use clearTimeout() function.

### setInterval() and clearInterval()

Another popular timing function is the one that sets interval. It is useful when you want to have something to happen every specific amount of time (also measured in milliseconds). For example:

```javascript
function repeatThisMessage() {
  setInterval(
    function() {
      alert("I'm going to say hello again and again");
    }, 3000
  ) 
}
```

To remove this function we have clearInterval() function.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://www.w3schools.com/jsref/jsref_obj_date.asp

