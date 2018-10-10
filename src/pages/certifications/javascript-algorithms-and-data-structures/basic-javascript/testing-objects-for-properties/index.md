---
title: Testing Objects for Properties
---
## Testing Objects for Properties
The question is to Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found"
The solution
```JavaScript
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"

};

function checkObj(checkProp) {
  // Your Code Here
  // if...else if statements to check if the variable name checkProp matches myObj properties
  
 if (checkProp == "gift"){
 // checkObj returns the property value if property is found.
   return myObj["gift"];
 }
 else if (checkProp == "pet")
 {
   return myObj["pet"];
 } 
 else if(checkProp == "bed"){
   return myObj["bed"]
 }
 // this block returns not found if the property is not found.
  else{
  return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("bed");
