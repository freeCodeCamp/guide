---
title: Click Method
---

## Click Method

Binds the click event to an element or triggers the event on an element. It's most used form is:
```javascript
jQueryElement.click(handler)
```
* handler: it's a function who is executed everytime when the event is triggered, this function also receive a param a [eventObject](http://api.jquery.com/Types/#Event)

#### Examples
Showing a alert on click of a button:
```html
<button id="alert">Click Here</button>
```
```javascript
$("#alert").click(function(){
  alert("Hi! I'm an alert");
})
```
[jsFiddle](https://jsfiddle.net/pL63cL6m/)

Usage of ones of the [eventObject](http://api.jquery.com/Types/#Event) method:
```html
<a id="myLink" href="www.google.com">Link to Google</a>
```
```javascript
$("#myLink").click(function(event){
	event.preventDefault();
});
```
_here we are using the preventDefault method, it do exactly what it says, we stop the default event of an element, in this case we prevent our anchor tag to make a redirection when clicked_

[jsFiddle](https://jsfiddle.net/dy457gbh/)

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
})

$("#alert").click();
```
Whenever the page loads, the click event will trigger the assigned alert.

[jsFiddle](https://jsfiddle.net/gspk6gxt/)

#### More Information:

For more information, please visit the [official website](https://api.jquery.com/click/#click) 

