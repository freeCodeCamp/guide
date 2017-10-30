---
title: Array from
---
### Array from
The `Array.from()` method allows you to create a new `Array` from an array-like or itterable object.

### Syntax
```javascript
Array.from(arrayLike[, mapFn[, thisArg]])
```

### Parameters

* **arrayLike**
  * An array-like or iterable object to convert to an array.
* **mapFn** Optional
  * Map function to call on every element of the array.
* **thisArg** Optional
  * Value to use as this when executing mapFn.

### Return value
A new `Array` instance.

### Example
```javascript
const names = ["Amy", "Anabeth", "April"];
Array.from(names); // ["Amy", "Anabeth", "April"];
```

### Example from arguments
```javascript
myFunction function() {
  return Array.from(arguments);
}

myFunction(1, 2, 3); // [1, 2, 3]

```

### Example form an array-like object
In the below example you retrieve a list of hyperlinks using `querySelectorAll()`. This returns an array-like object called a `NodeList`. As a `NodeList` is not an `Array` it doesn't have access to methods such as: `map`, `pop,` `push`, or `find`. You can easily fix this by using `Array.from` to create an `Array` from your `NodeList`.

```html
<nav>
  <a href="/home">Home</a>
  <a href="/portfolio">Portfolio</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>
```
```javascript
const links = document.querySelectorAll('a');
links.map(link => console.log(link));
// Uncaught TypeError: links.map is not a function

const arrayLinks = Array.from(links);
arrayLinks.map(link => console.log(link.innerText));
// Home
// Portfolio
// About
// Contact

```

#### More Information:
[MDN Array from Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

[Array from Polyfill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#polyfill)

[MDN NodeList Documentation](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
