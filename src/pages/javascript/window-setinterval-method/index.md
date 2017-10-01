---
title: Window Setinterval Method
---
## Window Setinterval Method

The ```setInterval()``` method calls a function or evaluates an expression at specified intervals (in milliseconds).

```js
    setInterval(function(){ alert("Hello"); }, 3000); 
```

The ```setInterval()``` method will continue calling the function until ```clearInterval()``` is called, or the window is closed.

The ID value returned by ```setInterval()``` is used as the parameter for the ```clearInterval()``` method.

Tips: 
* 1000 ms = 1 second.
* To execute a function only once, after a specified number of milliseconds, use the ```setTimeout()``` method.

#### More Information:

Documentation: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) 

JavaScript setInterval() Function Examples: [Sitepoint](https://www.sitepoint.com/setinterval-example/)

and some more examples: [w3schools](https://www.w3schools.com/jsref/met_win_setinterval.asp)
