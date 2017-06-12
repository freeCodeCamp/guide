---
title: "JavaScript Strict Mode"
parent: "javascript"
---

Strict Mode was introduced in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.

Strict mode makes several changes to normal JavaScript semantics.

*   First, strict mode eliminates some JavaScript silent errors by changing them to throw errors.
*   Second, strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
*   Third, strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.

Strict mode code and non-strict mode code can coexist in a same script.

    // Non-strict code...

    (function(){
      "use strict";

      // Define your library strictly...
    })();

    // Non-strict code...

## Invoking strict mode

Strict mode applies to _entire scripts_ or to _individual functions_.

**Strict mode for scripts**

    // Whole-script strict mode syntax

    "use strict";
    var v = "Hi!  I'm a strict mode script!";

**Strict mode for functions**

    function strict(){
      // Function-level strict mode syntax

      'use strict';
      function nested() { return "And so am I!"; }
      return "Hi!  I'm a strict mode function!  " + nested();
    }

    function notStrict() { return "I'm not strict."; }

**Basically it helps you make fewer errors, by detecting things that could lead to breakage which are not detected normally (non-strict mode).**

_For more information check out this [MDN page](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Strict_mode)._
