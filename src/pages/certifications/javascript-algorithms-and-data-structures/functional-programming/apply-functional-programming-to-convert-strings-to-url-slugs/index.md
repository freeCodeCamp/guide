---
title: Apply Functional Programming to Convert Strings to URL Slugs
---
## Apply Functional Programming to Convert Strings to URL Slugs

```javascript
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
return title.split(/\W/).filter((obj)=>{
    return obj !=='';
  }).join('-').toLowerCase();
  
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
```
