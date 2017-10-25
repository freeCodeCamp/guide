---
title: Array.prototype.includes
---
The `Array.prototype.includes()` method returns `true` if an element is found inside an array, `false` otherwise. 


## Syntax
```javascript
arr.includes(element);
```

## Examples
```javascript
var myArray = [1, 7, 8, 19, 21];

// False
myArray.includes(6); 

// True
myArray.includes(21);

// True
myArray.includes(1);

// False
myArray.includes(11);
```

#### More Information:
<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes' target='_blank' rel='nofollow'>Array.prototype.includes() - MDN</a>