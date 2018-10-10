---
title: Pass Arguments to Avoid External Dependence in a Function
---

## Pass Arguments to Avoid External Dependence in a Function

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Try to pass argument to function and return increased value of this argument. 


**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

```javascript
var fixedValue = 4;
function incrementer (value) {
  return value + 1;
}
var newValue = incrementer(fixedValue); 
console.log(fixedValue);
```
