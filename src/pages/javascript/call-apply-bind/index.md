---
title: Call Apply Bind
---

This article gives a brief introduction to the concept and usage of call, apply, and bind functions in the JavaScript programming language.

## Function Execution environment

In execution context we have variable environment, outer environment reference and variable `this` and `this` variable can point to global object and in some cases to objects that contains a function
and to take control what `this` variable points to when execution context is created this is when
**call apply bind** comes in picture.

Function is special type of object below image let you know what function actually looks in JavaScript.
![Function image](https://github.com/vishwa9/guides/blob/call-aply-bind/src/pages/javascript/call-apply-bind/functionImage.png)

To illustrate call,apply and bind let's start with a simple example:

```javascript
var person = {
  firstname: 'vishwa',
  lastname: 'chauhan',
  getFullName: function(){
    var fullName = this.firstname +' '+ this.lastname;
    return fullName;
  }
}

var logName = function(item1, item2){
  console.log('Logging: ', this.getFullName());
  console.log('Arguments:'+ item1+ ' '+ item2);
}

var logPersonName = logName.bind(person);
logPersonName('bind');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

```

In the above example person object has properties _firstname_, _lastname_ and _getFullName_.
logName function is invoking getFullName but `this` represent to global variable which doesn't contains getFullName function.
So in order to provide reference of person object logName is bind with person. At line number `32`
logPersonName variable contains copy of logName with `this` variable pointing to person object and this is what **bind** does.

While **call** and **apply** invoke that function with given parameters.
Also appply excepts array for parameters.

## When use call, apply and bind

```javascript

//function borrowing
var person2 = {
  firstname: 'tyler',
  lastname: 'durden'
}
// person is object defined in above code snippet
person.getFullName.apply(person2);

```
In above example person2 borrowed getFullName function of person object using `apply`.
This same thing can be done with `call` function.
