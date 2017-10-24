---
title: Click Method
---

## Click Method

The jQuery Click method triggers an function when an element is clicked. The function is known as a "handler" becuase it handles the click event. Functions can impact the HTML element that is bound to the click using the jQuery Click method, or they can change something else entirely.

```javascript
$("#clickMe").click(handler)
```

The click method takes the handler function and executes it every time the element `#clickMe` is clicked. The handler function receives a parameter known as an [eventObject](http://api.jquery.com/Types/#Event) that can be useful for controlling the action. 

#### Examples
This code shows an alert when a user clicks a button:

```html
<button id="alert">Click Here</button>
```

```javascript
$("#alert").click(function(){
  alert("Hi! I'm an alert");
})
```

[jsFiddle](https://jsfiddle.net/pL63cL6m/)

The [eventObject](http://api.jquery.com/Types/#Event) has some built in methods, including `preventDefault()`, which does exactly what it says. Here we stop the default event of an element, preventing the anchor tag from acting as a link:

```html
<a id="myLink" href="www.google.com">Link to Google</a>
```

```javascript
$("#myLink").click(function(event){
	event.preventDefault();
});
```

[jsFiddle](https://jsfiddle.net/dy457gbh/)

#### More two way to play with click method
Here you can pass data to the handler:
```javascript
jqueryElement.click( [eventData ], handler )
```
* eventData: it can be **any** type 

```javascript
$("element").click({param1: "Hello", param2: "World"}, function(event){
    alert(event.data.param1);
    alert(event.data.param2);
});
```

And you can also trigger click event:
```javascript
$( "element" ).click();
```
Using the above example and adding `.click()`
```javascript
$("#alert").click(function(){
  alert("Hi! I'm an alert");
})

$("#alert").click();
```
Now even without click the button the click event will be triggered always when we enter or reload the page

[jsFiddle](https://jsfiddle.net/gspk6gxt/)

#### More Information:

For more information, please visit the [official website](https://api.jquery.com/click/#click) 

