---
title: Arrow Functions
---
##  Arrow Functions

There are two benefits to arrow functions.

First, they are less verbose than traditional function expressions:

``` javascript
const arr = [1, 2, 3];
const squares = arr.map(x => x * x);

// Traditional function expression:
const squares = arr.map(function (x) { return x * x });
```
Second, their this is picked up from surroundings (lexical). Therefore, you don’t need bind() or that = this, anymore.

``` javascript
function UiComponent() {
    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        console.log('CLICK');
        this.handleClick(); // lexical `this`
    });
}
```

---

## Basic Syntax

``` javascript
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalent to: (param1, param2, …, paramN) => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }
singleParam => expression


// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => { statements }
```

