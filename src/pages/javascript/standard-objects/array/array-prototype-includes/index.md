---
title: Array.prototype.includes
---
## Array.prototype.includes

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Here are some supplementary articles to check out
- <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes' target='_blank' rel='nofollow'>MDN</a>.

### Intro
Array has many super useful built-in methods like ```includes()```. This method checks if an array includes a certain element and returns a boolean (true or false). 

### Syntax
```javascript
myArr.includes(searchElement);
myArr.includes(searchElement, fromIndex);
```

### Parameters

- ```searchElement``` can be a value or a variable.
  - Example: 
  ```javascript
  var myArr = ["Andrew", "Jasid", "Rosy", "Jessica"];
  var myName = "Jessica";
  myArr.includes(myName); // returns true
  myArr.includes("Jessica"); // returns true
  ```
- ```fromIndex``` is optional and defaults to 0. 
  - Example: 
  ```javascript
  var myArr = ["Andrew", "Jasid", "Rosy", "Jessica"];
  myArr.includes("Jasid", 2); // returns false
  myArr.includes("Jasid", 1); // returns true
  myArr.includes("Jasid"); // returns true
  ```
  - If the ```fromIndex``` is greater or equal to the length of the array, the array is not searched and returns ```false```.
    - Example: 
    ```javascript
    var myArr = [1, 2, 3, 4, 5];
    myArr.includes(3, 10); // returns false
    ```
  - If the ```fromIndex``` is less than 0, the entire array is searched
    - Example: 
    ```javascript
    var myArr = [1, 2, 3, 4, 5];
    myArr.includes(3, -50); // returns true
    ```
    
### Usage
This method can be used instead of a standard for loop to see if an array includes a certain value. 
Example: 
```javascript
var myArr = ["a", "b", "c", 1, 2, 3];
var result = false;

for (var i = 0; i < myArr.length; i++) {
  if (myArr[i] === 2) {
    result = true;
  }
}
return result; // returns true
```
VS
```javascript
var myArr = ["a", "b", "c", 1, 2, 3];

return myArr.includes(2); // returns true
```

While the two code blocks give the same result, the built in method is much shorter and easier to debug. 
    
    
    
    
