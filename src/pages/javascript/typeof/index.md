---
title: Typeof
---

This article gives a brief introduction to the concept and usage of the `typeof` operator in the JavaScript programming language.

## Typeof

The `typeof` operator allows you to find the data type of a variable or value. The type is returned as a *string*.

This example shows how it can be used to find the type of various variables:

```javascript
var name = "Carla";

var age = 37;

var dinner = {
  appetizer: "shrimp cocktail",
  entree: "ribeye steak, medium rare",
  dessert: "baked Alaska"
};

var hobbies = ['Sailing', 'Mountain Climbing', 'Coding'];

function firstHobby() {
    return hobbies[0];
}

console.log(typeof name);
// string

console.log(typeof age);
// number

console.log(typeof dinner);
// object

console.log(typeof hobbies);
// object

console.log(typeof firstHobby);
// function
```

Note that the `array` *hobbies* has a type of "object" - remember that arrays are objects in JavaSript. Functions are also objects in JavaScript, but `typeof` makes the distinction.

You can also use `typeof` on explicit values:

```javascript
console.log(typeof 127);
// number

console.log(typeof 'Blotto');
// string
```

The operator `typeof` can be very useful in debugging, to make sure the data being returned is the type that you think it is. It can also be useful (for example) in a function where you are not sure what the data type will be. In the following function (for whatever reason), we don't know if we will receive a string or an array of strings. We will use `typeof` to find out and act accordingly.

```javascript
function showLibrary(inventory) {
  if ((typeof inventory)==='string')
    console.log("There is 1 book in the library: " + book);
  else {
    console.log("There are " + inventory.length + " books in the library:");
    inventory.map(function(book) {
      console.log(book);
    });
  }
}

var book = "The Sun Also Rises";

showLibrary(book);
// There is one book in the library: The Sun Also Rises

var books = [
  "The World According to Garp",
  "Skinny Legs and All",
  "The Razor's Edge"
]

showLibrary(books);
// There are 3 books in the library:
// The World According to Garp
// Skinny Legs and All
// The Razor's Edge
```

#### More Information:

[MDN documentation on typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
