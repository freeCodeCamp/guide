---
title: Global Variables
---
You should ALWAYS use **var** to declare your variables (to make locally) else it will install GLOBALLY

Take care with the global variables because they are risky. Most of the time you should use closures to declare your variables.
Example:
    ```javascript
        (function(){
          var myVar = true;
        })();
    ```

<a href='http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals' target='_blank' rel='nofollow'>JavaScript Best Practices: Avoid Globals</a>

<a href='http://c2.com/cgi/wiki?GlobalVariablesAreBad' target='_blank' rel='nofollow'>Global Variables are bad</a>
