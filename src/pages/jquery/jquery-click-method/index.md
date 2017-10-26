---
title: Click Method
---

# Click Method

Binds the click event to an element or triggers the event on an element. Its most used form is:

```javascript
jQueryElement.click(handler)
```

**handler:** A function which is executed everytime the event is triggered. The [eventObject](http://api.jquery.com/Types/#Event) is passed in as an argument to the ```handler``` function.

## Examples

Showing an alert on the click of a button:

```html
<button id="alert">Click Here</button>
```

```javascript
$("#alert").click(function () {
  alert("Hi! I'm an alert");
})
```

[jsFiddle](https://jsfiddle.net/pL63cL6m/)

Usage of one of the [eventObject](http://api.jquery.com/Types/#Event) methods:

```html
<a id="myLink" href="www.google.com">Link to Google</a>
```

```javascript
$("#myLink").click(function (event) {
  event.preventDefault();
});
```

Here we are using the ```preventDefault``` method to do exactly what it says: Stop the default event of an element. In this case, we prevent our anchor tag from redirecting us to the link when clicked.

[jsFiddle](https://jsfiddle.net/dy457gbh/)

## More ways to play with click method

You can pass data to the handler:

```javascript
jqueryElement.click( [eventData ], handler )
```

**eventData:** It can be of **any** type.

```javascript
$("element").click({ param1: "Hello", param2: "World" }, function (event) {
  alert(event.data.param1);
  alert(event.data.param2);
});
```

You can also trigger a click event:
```javascript
$( "element" ).click();
```

Using the above example and adding `.click()`

```javascript
$("#alert").click(function () {
  alert("Hi! I'm an alert");
});

$("#alert").click();
```

Now without having to click the button, the click event will be triggered when we enter or reload the page.

[jsFiddle](https://jsfiddle.net/gspk6gxt/)

#### More Information:

For more information, please visit the [official website](https://api.jquery.com/click/#click)
