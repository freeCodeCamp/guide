---
title: Global Variables
---
You should ALWAYS use **var** to declare your variables (to make locally) else it will install GLOBALLY

<a href='http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals' target='_blank' rel='nofollow'>JavaScript Best Practices: Avoid Globals</a>

<a href='http://c2.com/cgi/wiki?GlobalVariablesAreBad' target='_blank' rel='nofollow'>Global Variables are bad</a>

**JavaScript ES6** has a variety of functions to help the programmer code faster as well as in an efficient manner. Today let’s look at two particular functions, `let` and `const`.

### let
`let` allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the `var` keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

#### Scoping rules
Variables declared by **`let`** have as their scope the block in which they are defined, as well as in any contained sub-blocks. In this way, **`let`** works very much like **`var`**. The main difference is that the scope of a **`var`** variable is the entire enclosing function:

```
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

### Cleaner code in inner functions
`let` sometimes makes the code cleaner when inner functions are used.
```
var list = document.getElementById('list');

for (let i = 1; i <= 5; i++) {
  let item = document.createElement('li');
  item.appendChild(document.createTextNode('Item ' + i));

  item.onclick = function(ev) {
    console.log('Item ' + i + ' is clicked.');
  };
  list.appendChild(item);
}

// to achieve the same effect with 'var'
// you have to create a different context
// using a closure to preserve the value
for (var i = 1; i <= 5; i++) {
  var item = document.createElement('li');
  item.appendChild(document.createTextNode('Item ' + i));

  (function(i){
    item.onclick = function(ev) {
      console.log('Item ' + i + ' is clicked.');
    };
  })(i);
  list.appendChild(item);
}
```

At the top level of programs and functions, `let`, unlike `var`, does not create a property on the global object. For example:
```
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### const

This declaration creates a constant whose scope can be either global or local to the block in which it is declared. Global constants do not become properties of the window object, unlike `var` variables. An initializer for a constant is required; that is, you must specify its value in the same statement in which it's declared (which makes sense, given that it can't be changed later).

The **`const` declaration** creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned. For instance, in the case where the content is an object, this means the object's contents (e.g., its parameters) can be altered.

> A constant cannot share its name with a function or a variable in the same scope.

The following example demonstrates how constants behave. Try this in your browser console.

```
// NOTE: Constants can be declared with uppercase or lowercase, but a common
// convention is to use all-uppercase letters.

// define MY_FAV as a constant and give it the value 7
const MY_FAV = 7;

// this will throw an error - Uncaught TypeError: Assignment to constant variable.
MY_FAV = 20;

// MY_FAV is 7
console.log('my favorite number is: ' + MY_FAV);

// trying to redeclare a constant throws an error -  Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
const MY_FAV = 20;

// the name MY_FAV is reserved for constant above, so this will fail too
var MY_FAV = 20;

// this throws an error too
let MY_FAV = 20;

// it's important to note the nature of block scoping
if (MY_FAV === 7) { 
    // this is fine and creates a block scoped MY_FAV variable 
    // (works equally well with let to declare a block scoped non const variable)
    let MY_FAV = 20;

    // MY_FAV is now 20
    console.log('my favorite number is ' + MY_FAV);

    // this gets hoisted into the global context and throws an error
    var MY_FAV = 20;
}

// MY_FAV is still 7
console.log('my favorite number is ' + MY_FAV);

// throws an error - Uncaught SyntaxError: Missing initializer in const declaration
const FOO; 

// const also works on objects
const MY_OBJECT = {'key': 'value'};

// Attempting to overwrite the object throws an error - Uncaught TypeError: Assignment to constant variable.
MY_OBJECT = {'OTHER_KEY': 'value'};

// However, object keys are not protected,
// so the following statement is executed without problem
MY_OBJECT.key = 'otherValue'; // Use Object.freeze() to make object immutable

// The same applies to arrays
const MY_ARRAY = [];
// It's possible to push items into the array
MY_ARRAY.push('A'); // ["A"]
// However, assigning a new array to the variable throws an error - Uncaught TypeError: Assignment to constant variable.
MY_ARRAY = ['B'];
```

