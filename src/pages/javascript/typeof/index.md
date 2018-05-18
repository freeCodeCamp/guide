---
title: Typeof
---
## Typeof

`typeof` is a JavaScript keyword that will return the type of a variable when it is called. This can be used for validation of function parameters, checking if variables are defined or not throughout a JavaScript program, and many other use cases.

The `typeof` operator is useful in JavaScript as it allows programmers to easily check the type of a variable in their code. This is important as JavaScript is a language that does not require variables to have types assigned when they are created (it is a <a href='https://stackoverflow.com/questions/2690544/what-is-the-difference-between-a-strongly-typed-language-and-a-statically-typed' target='_blank' rel='nofollow'>dynamically typed language</a>). What this means is that any JavaScript variable is not restricted to have a specific type, and the type of a variable can change during the runtime of a program.

For example:
```javascript
var x = 12345; // number
x = "string"; // string
x = { key: "value" }; // object
```

As you can see from the above example, a variable in JavaScript can change types throughout the execution of a program. This can be hard to keep track of as a programmer, and this is where the `typeof` operator is useful.

The `typeof` operator returns a string that represents the current type of a variable in a JavaScript program. It is used by typing `typeof(variable)` or `typeof variable` (you can leave the brackets out and the command still works). Going back to the previous example, it can be used to check the type of the variable `x` at each stage:

```javascript
var x = 12345; 
console.log(typeof x) // number
x = "string"; 
console.log(typeof x) // string
x = { key: "value" };
console.log(typeof x) // "object"
```

This can be useful for checking the type of a variable in a function that can accept multiple types, and continuing accordingly.

Here's an example of a function that can take a variable that is a string or a number:
```javascript
function doSomething(x) {
  if(typeof(x) === 'string') {
    alert('x is a string')
  } else if(typeof(x) === 'number') {
    alert('x is a number')
  }
}
```

Another way the `typeof` operator can be useful is ensuring that a variable is defined before you try to access it in your code. This can help prevent errors in a program that may occur if you try to access a variable that is not defined.

```javascript
function(x){
  if (typeof(x) === 'undefined') {
    console.log('variable x is not defined');
    return;
  }
  //continue with function here...
}
```   

The output of the `typeof` operator might not always be what you expect when you check for a number.  
Numbers can turn in to the value [NaN (Not A Number)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) for multiple reasons.  
```javascript
console.log(typeof NaN); //"number"
```
  
Maybe you tried to multiply a number with an object because you forgot to access the number inside the object.
```javascript
var x = 1;
var y = { number: 2 };
console.log(x * y); //NaN
console.log(typeof (x * y)); // "number"
```  

When checking for a number, it is not sufficient to check the output of `typeof` for a number, since `NaN` also  
passes this test.  
This function check for numbers, and also doesn't allow the `NaN` value to pass.
```javascript
function isNumber(data) {
  return (typeof data === "number" && !isNan(data));
}
```


Even thought this is a useful validation method, we have to be careful because javascript has some weird parts and one of them is the result of `typeof` over particular instructions. For example, in javascript many things are just `objects` so you'll find.

```javascript
var x = [1,2,3,4]; 
console.log(typeof x)  // object

console.log(typeof null)  // object

```


### More Information:
<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof' target='_blank' rel='nofollow'>MDN Documentation for typeof</a>
