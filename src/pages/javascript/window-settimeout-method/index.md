---
title: Window setTimeout Method
---
## Window setTimeout Method

The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

Tips: 

* 1000 ms = 1 second.
* The function is only executed once. If you need to repeat execution, use the setInterval() method.
* Use the clearTimeout() method to prevent the function from running.

The syntax of the setTimout Method is as follows: 

```js
    setTimeout(function, milliseconds, param1, param2, ...);
```

For example: 
```js
    setTimeout(function(){ alert("Hello"); }, 3000);
```

#### More Information:

Documentation: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

More examples of setTimeout function: [w3schools](https://www.w3schools.com/jsref/met_win_settimeout.asp)
