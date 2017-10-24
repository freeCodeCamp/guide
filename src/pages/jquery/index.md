---
title: jQuery
---
## jQuery

jQuery is the most widely-used JavaScript library, and is used in more than half of all major websites. 

jQuery makes web development easier easier to use by providing a number of helper functions. These help developers quickly write DOM interactions without needing to manually writing as much JavaScript themselves.

## Example

When a user clicks on a button, all <p> elements will be hidden:

Example
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});

