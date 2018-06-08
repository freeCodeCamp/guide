---
title: jQuery
---
## jQuery

jQuery is the most widely-used JavaScript library, and is used in more than half of all major websites. 

jQuery makes web development easier to use by providing a number of 'helper' functions. These help developers to quickly write DOM (Document Object Model) interactions without needing to manually write as much JavaScript themselves.

## Example

When a user clicks on a button, all <p> elements will be hidden:

```javascript
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});
```

#### More Information
* [jQuery Home Page](https://jquery.com/)
