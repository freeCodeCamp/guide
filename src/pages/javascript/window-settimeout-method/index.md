---
title: Window Settimeout Method
---
## Window Settimeout Method

You can use the `setTimeout` method to set a timer in milliseconds on a function. When the timer expires, your function will be executed once.

`setTimeout` requires two arguments: the function you want to execute, and the number of milliseconds by which you want to delay.

```javascript
// First, define a function.
function twoSeconds() {
 alert("Two seconds have passed.");
}

// Then, pass the function reference into window.setTimeout. twoSeconds will be executed after 2000 milliseconds.
window.setTimeout(twoSeconds, 2000)
```

You can also pass the function straight into `setTimeout`. The below statement will work in exactly the same way as the last line of the above block.

```javascript
window.setTimeout(function() {
 alert("Two seconds have passed.");
}, 2000)
```

It's important to note that `setTimeout` expects a *reference* to a function, rather a function invocation. The below statement will not work.

```javascript
window.setTimeout(twoSeconds(), 2000)
```

In addition to a function and a number of milliseconds, you may pass extra arguments into your function.

```javascript
function anotherTwoSeconds(phrase, who) {
 alert(phrase + ', ' + who);
}

window.setTimeout(anotherTwoSeconds, 2000, "Two seconds have passed", "John"); // Two seconds have passed, John
```

### Canceling setTimeout

Let's say you only want the function in your `setTimeout` to not run under a certain condition. `setTimeout` returns a unique timer identifier that you can use to "cancel" your timeout.

```javascript
const timerId = setTimeout(...);
if (userDidSomething) {
 window.clearTimeout(timerId);
}
```

If `userDidSomething` is true, your function will not run if `clearTimeout` is executed before the end of your delay.

### Versus setInterval

If you want to execute your function repeatedly after a given interval of time (as opposed to just once), use the [`setInterval` method](https://guide.freecodecamp.org/javascript/window-setinterval-method) instead.

### More Information:

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
