---
title: Click Method
---

## Click Method

You use the click method to bind the click event to an element or triggers the event on an element. Its most used form is:
```javascript
jQueryElement.click(handler)
```
* `handler`: a function that is executed everytime when the event is triggered. This function also receives as param an <a href='http://api.jquery.com/Types/#Event' target='_blank' rel='nofollow'>eventObject</a>

#### Examples
Showing an alert on clicking a button:
```html
<button id="alert">Click Here</button>
```
```javascript
$("#alert").click(function(){
  alert("Hi! I'm an alert");
})
```
<a href='https://jsfiddle.net/pL63cL6m/' target='_blank' rel='nofollow'>jsFiddle</a>

Usage of one of the <a href='http://api.jquery.com/Types/#Event' target='_blank' rel='nofollow'>eventObject</a> method:
```html
<a id="myLink" href="www.google.com">Link to Google</a>
```
```javascript
$("#myLink").click(function(event){
	event.preventDefault();
});
```
_Here, we are using the `preventDefault` method. It does exactly what it says, we stop the default event of an element. In this case, we prevent our anchor tag from making a redirection when clicked._

<a href='https://jsfiddle.net/dy457gbh/' target='_blank' rel='nofollow'>jsFiddle</a>

#### Two more ways to play with the `click` method
You can pass data to the handler:
```javascript
jqueryElement.click( [eventData ], handler )
```
* `eventData`: it can be of **any** type 

```javascript
$("element").click({param1: "Hello", param2: "World"}, function(event){
    alert(event.data.param1);
    alert(event.data.param2);
});
```

And you can also trigger a click event:
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
Now, even without clicking on the button, the click event will always be triggered when we enter or reload the page.

<a href='https://jsfiddle.net/gspk6gxt/' target='_blank' rel='nofollow'>jsFiddle</a>

#### More Information:

For more information, please visit the <a href='https://api.jquery.com/click/#click' target='_blank' rel='nofollow'>official website</a> 

