---
title: Testing Objects for Properties
---
## Testing Objects for Properties

My changes:
Spoiler alert ahead
-------------------------------------------------------------------------------------------------------------------------------
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (checkProp in myObj){return myObj[checkProp];} //this will let the program to check if the input is in myObj, if so, the condition will be executed. 
  else {return "Not Found";}
}

// Test your code by modifying these values
checkObj("gift");
