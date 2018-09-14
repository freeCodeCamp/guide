---
title: Window clearTimeout Method
---
## Window clearTimeout Method

The `clearTimeout()` method is used stop a timer set with the `setTimeout()` method.

```javascript
clearTimeout(setTimeout_ID); 
```

If the `clearTimeout()` method is called before the timer has finished counting, the `clearTimeout()` method will stop the `setTimeout()` method from executing.

To be able to use the `clearTimeout()` method, you must assign the `setTimeout()` to a variable. See the example below
```javascript
myID = setTimeout(function, milliseconds); 
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[Documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout)

Some more examples on [w3schools](https://www.w3schools.com/jsref/met_win_cleartimeout.asp)
