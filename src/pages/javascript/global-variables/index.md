---
title: Global Variables
---
## Global Variables

A variable is considered global if it exists in the outermost scope of an application. In the case of a web browser, the global scope is generally considered to be the window object.

You should ALWAYS use **var** to declare your variables (in order to make them local to the current scope). If a variable is declared without the **var** keyword it will install GLOBALLY regardless of its location in your application.

### Example:

```javascript
var aGlobalVariable = "I am a global variable";
anotherGlobalVariable = "I am also a global variable";

function someRandomFunction() {
  var aLocalVariable = "I only exist inside the scope of this function";
  oopsIWasAMistake = "I am a global variable even though I'm inside a function";
}
```

<a href='http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals' target='_blank' rel='nofollow'>JavaScript Best Practices: Avoid Globals</a>

<a href='http://c2.com/cgi/wiki?GlobalVariablesAreBad' target='_blank' rel='nofollow'>Global Variables are bad</a>
