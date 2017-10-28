---
title: Window setTimeout Method
---
## Window setTimeout Method

The `setTimeout()` method calls a function or evaluates an expression after a specified number of milliseconds.

Tips: 

* 1000 ms = 1 second.
* The function is only executed once. If you need to repeat execution, use the `setInterval()` method.
* Use the `clearTimeout()` method to prevent the function from running.

The syntax of the `setTimout()` method is as follows: 

```js
    var timerId = setTimeout(function, delay, param1, param2, ...);
    var timerId = setTimeout(code, delay);
```

Parameters:

`function` - Function definition to be executed after the delay

`delay` - Time specified in milliSeconds for which the timer should wait before the function/code is executed

`params` - Parameters to be passed to the function

`code` - Any expression/code to be executed after the delay

Output:

`timerId` - A positive integer is created that identifies a particular call to setTimeout method. Using this value, we can clear the timeout by passing it to the clearTimeout function as

`clearTimeout(timerId);`

If clearTimeout function is called before the delay, it clears the timer and the function/code specified in argument 1 will no longer be executed.

For example:

```js
    var timer1 = setTimeout(function(){ alert("Hello"); }, 3000);
```
An alert with Hello in the body will be displayed after 3000ms.

A very important thing about `setTimeout()` is that it will be executed asynchronously. Let's take an example:

```js
    console.log("A");
    setTimeout(function(){ console.log("B"); }, 0);
    console.log("C");
    // The order in the console will be 
    // A
    // C
    // B
```

**Not as exepected! But we specify only 0 seconds!!!**
To solve this problem and make sure that our code will execute synchronously we have just to nest the last console in the function

```js
    console.log("A");
    setTimeout(function() { 
      console.log("B"); 
      console.log("C");
    }, 0); 
    // The order in the console will be 
    // A
    // B
    // C
```

#### More Information:

Documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout' target='_blank' rel='nofollow'>MDN</a>

More examples of setTimeout function: <a href='https://www.w3schools.com/jsref/met_win_settimeout.asp' target='_blank' rel='nofollow'>w3schools</a>

To understand what really happen under the hood just watch this awesome video
[Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
