---
title: Testing Objects for Properties
---
## Testing Objects for Properties
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if(checkProp=='gift'){
    return "pony";
  }
  else if(checkProp=='pet'){
    return "kitten";
  }
  else{
    return "Not Found";
  }
  
}

// Test your code by modifying these values
checkObj("gift");
