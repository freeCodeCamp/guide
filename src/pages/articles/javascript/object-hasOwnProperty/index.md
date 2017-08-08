---
title: Object.hasOwnProperty()
---
### Syntax


`Object.hasOwnProperty(prop)`


### Description


The **hasOwnProperty()** method returns a [boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) indicating if the object owns the specified property.


This is a convenient method to check if an object has the specified property or not; returning true/false accordingly.


### Parameters

##### prop
A [string](https://developer.mozilla.org/en-US/docs/Glossary/String) or [symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) to test.


### Examples

using **hasOwnProperty()** to test if a property exist or not in a given object:

```js
var course = {
  name: 'freeCodeCamp',
  feature: 'is awesome',
}

var student = {
  name: 'enthusiastic student',
}

course.hasOwnProperty('name');  // returns true
course.hasOwnProperty('feature');   // returns true

student.hasOwnProperty('name');  // returns true
student.hasOwnProperty('feature'); // returns false
```

#### links

[MDN hasOwnProperty](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
