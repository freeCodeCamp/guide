---
title: Global Variables
---
The scope of JavaScript variables are either global or local.
Global variables are declared OUTSIDE the function and its value is accessible/changeable throughout the program.

You should ALWAYS use **var** to declare your variables (to make locally) else it will install GLOBALLY

example:
var color = "black";

function findColor() {
  document.write(color);  
}

<a href='http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals' target='_blank' rel='nofollow'>JavaScript Best Practices: Avoid Globals</a>

<a href='http://c2.com/cgi/wiki?GlobalVariablesAreBad' target='_blank' rel='nofollow'>Global Variables are bad</a>
<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var'>Global Variables</a>
