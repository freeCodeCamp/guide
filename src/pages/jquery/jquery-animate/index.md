---
title: jQuery animate
---
## jQuery .animate() 
Perform a custom animation of a set of CSS properties. There are two general forms: 

A) 
 ```javascript
.animate( properties [, duration ] [, easing ] [, complete ] ) 
``` 
  
B) 
```javascript
.animate( properties, options ) 
``` 
 
 
The .animate() method allows you to create animation effects on any numeric __CSS property__. 
The only required parameter is a plain object of CSS properties.  
(similar to .css() method, except that the range of properties is more restrictive.)   
 
A) 
* properties: An object of CSS properties and values that the animation will move toward. 
* duration (default: 400): A string or number determining how long the animation will run. 
* easing (default: swing): A string indicating which easing function to use for the transition.
* complete: A function to call once the animation is complete, called once per matched element. 
 
B) 
* properties: An object of CSS properties and values that the animation will move toward.
* options: A map of additional options to pass to the method. 
 
 
#### Example 
To animate any element, such as a simple image: 
 ```html
<div id="clickme">Click here</div> 
<img id="book" src="book.png" alt="" width="100" height="123" style="position: relative; left: 10px;"> 
``` 
 
To animate the opacity, left offset, and height of the image simultaneously:  
```javascript
$( "#clickme" ).click(function() {
  $( "#book" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });
});
```  


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
For more information, please visit the <a href='http://api.jquery.com/animate/' target='_blank' rel='nofollow'>official website</a>  


