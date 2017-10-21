---
title: Functions
---
# Functions
The real power of PHP comes from its functions; it has more than 1000 built-in functions.

# PHP User Defined Functions

Besides the built-in PHP functions, we can create our own functions.
A function is a block of statements that can be used repeatedly in a program.
A function will not execute immediately when a page loads.
A function will be executed by a call to the function.

# Create a User Defined Function in PHP

**Syntax:**
```php
function functionName() {
    code to be executed;
}
```
#### Note: A function name can start with a letter or underscore (not a number).

# PHP Function Arguments

Information can be passed to functions through *arguments*. An argument is just like a variable.

Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.

The following example has a function with one argument ($fname). When the familyName() function is called, 
we also pass along a name (e.g. Jake), and the name is used inside the function, which outputs several different first names, 
but an equal last name:

**Syntax:**
```php
function familyName($fname) {
    echo "$fname Refsnes.<br>";
}

familyName("Jani");
familyName("Hege");
familyName("Stale");
familyName("Kai Jim");
familyName("Borge");
```
##### Output
Jani Refsnes.</br>
Hege Refsnes.</br>
Stale Refsnes.</br>
Kai Jim Refsnes.</br>
Borge Refsnes.</br>
