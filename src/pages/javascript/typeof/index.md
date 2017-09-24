---
title: Typeof
---
## Typeof

`typeof` is a JavaScript keyword that will reuturn the type of a variable when it is called. This can be used for validation of function parameters, checking if variables are defined or not throghout a JavaScript program, and many other use cases.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
#### More Details
The `typeof` operator is important in JavaScript as it allows programmers to easily check the type of a variable in their code. This is important as JavaScript is a language that does not require variables to have types assigned when they are created (it is a [dynamically typed language](https://stackoverflow.com/questions/2690544/what-is-the-difference-between-a-strongly-typed-language-and-a-statically-typed)). What this means is that any JavaScript variable is not resticted to have a specific type, and the type of a variable can change duting the runtime of a program. 

IE: 
```
var x = 12345;    // number
x = "string"; // string[
x = { key: "value" }; // object
```

As you can see from the above example, a variable in JavaScript can change types throughout the execution ofa program. This can be hard to keep track of as a programmer, and this is where the `typeof` operator is useful.

The `typeof` operator returns a string that represents the currrent type of a variable in a JavaScript program. It is used by typing `typeof(variable) or typeof variable` (Brackets can be left out and the command still works). Going back to the previous example, it can be used to check the type of the variable x at each stage:

```
var x = 12345; 
console.log(typeof x)  -> number
x = "string"; 
console.log(typeof x)  -> string
x = { key: "value" };
console.log(typeof x) -> object
```

This can be useful for checking the type of a variable in a function that can accept multiple types, and continuning accordingly.

IE: A function that can take a variable that is a string or a number:
```
function doSomething(x) {
  if(typeof(x) === 'string) {
    alert('x is a string')
  }
  
  else if(typeof(x) === 'number'){
    alert('x is a number')
  }
}
```

Another way the `typeof` operator can be useful is ensuring that a variable is defined before trying to access it in your code. This can help prevent errors in a program that may occur if you try to access a variable that is not defined.

```
function(x){
  if (typeof(x) === 'undefined') {
    console.log('variable x is not defined);
    return;
  }
  //continue with function here...
}

```


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[MDN Documentation Page for typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)


