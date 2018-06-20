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
});
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

<a href='https://jsfiddle.net/dy457gbh/' target='_blank' rel='nofollow'>jsFiddle</a>

#### More ways to play with the click method

The handler function can also accept additional data in the form of an object:

```javascript
jqueryElement.click(usefulInfo, handler)
```

The data can be of any type.

```javascript
$("element").click({firstWord: "Hello", secondWord: "World"}, function(event){
    alert(event.data.firstWord);
    alert(event.data.secondWord);
});
```

The click method with no handler function triggers a click event:

```javascript
$("#alert").click(function(){
  alert("Hi! I'm an alert");
});

$("#alert").click();
```

Whenever the page loads, the click event will trigger the assigned alert.

Also you should prefer to use .on('click',...) over .click(...) because the former can use less memory and work for dynamically added elements.

<a href='https://jsfiddle.net/gspk6gxt/' target='_blank' rel='nofollow'>jsFiddle</a>

#### Common Mistakes

The click event is only bound to elements currently on the DOM at the time of binding, so any elements added afterwards will not be bound. To bind all elements on the DOM, even if they will be created at a later time, use the `.on()` method.

For example, this click method example:

```javascript
$( "element" ).click(function() {
  alert("I've been clicked!");
});
```

Can be changed to this on method example:

```javascript
$( document ).on("click", "element", function() {
  alert("I've been clicked!");
});
```

#### More Information:

For more information, please visit the <a href='https://api.jquery.com/click/#click' target='_blank' rel='nofollow'>official website</a> 

