---
title: Testing Objects for Properties
---
## Testing Objects for Properties

Sample answer:

```javascript
function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}
```
