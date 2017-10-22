---
title: Add New Properties to a JavaScript Object
---
You can add new properties to existing JavaScript objects the same way you would modify them.

Here is how using dot notation:

    myDog.bark = "woof-woof";

Here is how using bracket notation:
```javascript
myObject['myProperty'] = "myValue";
```

Using bracket notation, we can utilize variables as property names:

```javascript
var dynamicProperty = "myProperty";
myObject[dynamicProperty] = "myValue";
```
