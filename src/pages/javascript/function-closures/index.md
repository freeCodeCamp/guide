---
title: Function Closures
---
## Function Closures

A <b>function closure</b> is a combination of a function and a [lexical enviornment](https://en.wikipedia.org/wiki/Closure_(computer_programming)#Lexical_environment) within which that function was declared. A <b>lexcial enviornment</b> in JavaScript, is defined as a set of all bindings of variables in the scope. 

### Lexical Scoping
```javascript
function func() {

  var name = 'Bender';      // Here we declare a local variable for func().
 
  function displayName() {  // displayName() is our inner function, a closure. 
     alert(name);           // displayName() has access to the var declared in it's parent function.
  };
  
  displayName();
};

func();
```

In JavaScript, functions always have access to variables declared in the scope above their's. Let's look at a <b>global variable</b>.

```javascript
var spaceship = 'Nimbus 1729' // A global variable

function travelToMars() {
  alert(spaceship + ' has arrived at Mars!');
  
  function travelHome() {
    alert(spaceship + ' has returned to earth');
  };
  
  travelHome();
};

travelToMars();
```
>[live example](https://codepen.io/rdev-rocks/pen/VMbaNO?editors=0010)

Both functions, `travelToMars()` and `travelToEarth()` have access to `spaceship` which is a variable declared in the <b>global scope</b>. The global scope is "above" each function and therefor accessable to each function. Now let's consider the `travelHome()` function. It was declared inside of the function `travelToMars()` and connot be accessed outside of `travelToMars()` becasue the function has closed. If we were to call `travelHome()` after `travelToMars()`, it would not work. It is "out of scope". Sometimes we want to access data that is out of scope, and this bring's us to <b> closures </b>.

### Closure

Let's adjust our code from the first example...

```javascript
function func() {

  var name = 'Bender';      
  
  function displayName() {  
     alert(name);
  };
  
  return displayName;
};

var myFunc = func();
myFunc();
```
This code produces the same result as the first example. It might seem like `name` should not be available to `myFunc()` but the reason it is available is because JavaScript forms a <b>closures</b>.

>"A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created." ([1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Closure))

Let's look at another example, a counter. We want to build a <b>closure</b> that accesses a protected or "out of scope" variable.  We will name this variable `count`.

```javascript
function counter(){
  
  var count = 0;

  return {
    increase: function() { 
      count = count + 1;
    },
    decrease: function() {
      count = count - 1;
    },
    displayCount: function() {
      alert(count);
    }
  }
}

var countFunc = counter();
countFunc.increase();
countFunc.increase();
countFunc.increase();
countFunc.decrease();
countFunc.displayCount();  // will display 2
```
>[live example](https://codepen.io/rdev-rocks/pen/xXdOBb?editors=0011)

Here we have provided three functions `increase()`, `decrease()` and `displayCount()` inside of the function `counter()`. Each one of the nested functions has access to it's parents variable `count`. Each one of the three functions is a <b>closure</b>. Once we instantiate the function and assign it to our variable `countFunc` we can access it's child functions and the children functions can access their parents data. If we were to instantiate `counter()` again to another variable, e.g. `var anotherCountFunc = counter();` we would then have another counter that would keep track of it's `count` variable apart from `countFunc`'s `count` variable.

example:
```javascript
var countFunc = counter();
var anotherCountFunc = counter();

countFunc.increase();
countFunc.increase();
countFunc.increase();
anotherCountFunc.increase();

countFunc.displayCount();  // will display 3
anotherCountFunc.displayCount(); // will display 1

```

Simply said, a <b>closure</b> is a function with access to it's parent's data. 

### More Information
1. [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
2. [W3Schools - Closures](https://www.w3schools.com/js/js_function_closures.asp)
3. [Wikipedia - Closures](https://en.wikipedia.org/wiki/Closure_(computer_programming))
