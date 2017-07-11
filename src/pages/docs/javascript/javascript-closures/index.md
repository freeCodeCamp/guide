---
title: "JavaScript Closures"
parent: "javascript"
---

Closures are functions that refer to independent (free) variables (`name`), that have been returned by an enclosing function (`makeFunc`), and can still refer to those variables when they are called (`myFunc()`). As such, the closure (`makeFunc()`) 'remembers' the environment in which it was created.

    function makeFunc() {
      var name = "Mozilla";
      function displayName() {
        alert(name);
      }
      return displayName;
    }

    var myFunc = makeFunc();
    myFunc();

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
