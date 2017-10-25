---
title: Mousedown Method
---

#Mousedown Method
The mousedown event occurs when the left mouse button is pressed. 
To trigger the mousedown event for the selected element, use this syntax:
```$(selector).mousedown();```

Most of the time, however, the mousedown method is used with a function attached to the mousedown event.
Here's the syntax:
```$(selector).mousedown(function);```
For example:
```
$(#example).mousedown(function(){
   alert("Mouse was clicked");
});
```

### More Information
More information can be found [here].

[here]: https://www.w3schools.com/jquery/event_mousedown.asp
