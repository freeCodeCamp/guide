---
title: Confirm the Ending
---
## Confirm the Ending

With substring() method you can extract a portion of a string and compare it to your target. Substring(start,end) takes two numbers, where "start" is an index at which substring should start and the "end" is a number where it ends. In our case is going to be the last index of str that we can easily find with .length. To find the beginning of substring to be compared we can substract the length of target from the length of str. We do not need to and if statement to return true or false. Program will know that if the returned statement is true it supposed to return that value. 

```javascript
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return (str.substring(str.length-target.length,str.length) == target);
}

confirmEnding("Bastian", "n");
```

in other words

```javascript
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let start = str.length-target.length;
  let end = str.length;
  
  return (str.substring(start,end) == target);
}

confirmEnding("Bastian", "n");
```

usefull links:<br/>
[substring() MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)<br/>
[substring() W3Schools](https://www.w3schools.com/jsref/jsref_substring.asp);


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
