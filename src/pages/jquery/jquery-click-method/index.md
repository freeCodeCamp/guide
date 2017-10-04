---
title: jQuery Click Method
---
## jQuery Click Method

The Click method in jQuery is used by programmers to attatch a function to on object that runs when the object is clicked.

Here is the syntax:
```
$(selector).click(function) 
```


See a very basic example below, using the Click  method on `#box1`, to run a function that changes the colour of `#box1` to blue when `#box1` is clicked.

```
$("#box1").click(function(){              //If box1 is clicked
  $(this).css("background-color","blue"); //Change this(binded to #box1) CSS property "background-color", to "blue".
});
```

You can also use the click method to call a click event on an object. A example of this is if someone hits enter whilst typing in a form input (ie Enter your email address...), run a click event on the 'Submit' button.
```
$("#id_of_textbox").keyup(function(event){  //If any key is pressed while the #id_of_textbox is focussed (you are typing in it)
    if(event.keyCode == 13){                //Check if the key has a keyCode of 13, this is the keycode for the ENTER key
        $("#button1").click();              //If ENTER is hit, run the click event on #button1 (see next function)
    }
});

$("#button1).click(function(){              //If #button1 is clicked
  console.log("You Clicked Me!");           //Console log this messsage...
});
```


#### More Information:
https://api.jquery.com/click/
https://www.w3schools.com/jquery/event_click.asp

