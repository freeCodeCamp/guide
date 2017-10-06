---
title: jQuery Click Method
---
## jQuery Click Method

The jQuery click method allows you to listen to and to clicks on your page. When a user clicks on a button, a div, an element - or anywhere in your page - you can gather data about this click, and respond to it.

## Clicks 101

Here is a simple example - let's create a button that changes the background color on your page. 
1. Create an HTML button: `<button id = "color-changer">Change the background</button>`
2. Next, we'll need to attach a [_click listener_](https://api.jquery.com/click/) to the button. This lets our JS code know to listen to clicks on the element. You can attach a click listener to any element you want to monitor clicks on - a button, text, a div, or even your `<body>` tag. We'll use the button ID to attach the click listener:

```
$("#color-changer").click(function(){

    // do something here to respond to the click

})
```
Let's recap:
  a. `$("#color-changer")` selects the element with id of `color-changer` - the ID we've given our button
  b. .click() attaches a click listener and tells JS to listen for clicks on the element (our button)
  c. we pass our click listener a function() argument. This function is what we want to happen when the click happens.
  
3. Let's wrap up by filling out (c) from above and changing the color of our background:

```
$("#color-changer").click(function chanceBackgroundColor(){
    let colors = ["red", "orange" , "yellow", "green" "blue", "indigo", "violet"]
    let randomColor = colors[Math.floor(Math.random(colors.length - 1))]
    $("body").css("background-color", randomColor)
})
```
Now, when the user clicks our button, the **changeBackgroundColor** function code executes.

## Clicks 201

There are a few tricks that you can use with the `click` listener. 

**First**, you might need to attach a click to elements that aren't visible on the page yet. For example, your element might be hidden and later revealed with a `show()`, or you might create an element and add it to the page with (for example) an `append()`. If you try to attach a click listener using an ID or a class for an element not present on the page, it will not work once the element appears. Fortunately, there's a simple workaround. `.click()` is actually a shorthand for the jQuery [**on("click", element, function)**]
(http://api.jquery.com/on/) function. To get around the situation above, use:

```
 $("body").on("click", "#some-element", function responseToClick(){
    // do something here to respond to the click
})
```

What's great about the format above is that you can substitute other triggers to listen to - for example, `mouseenter` or `hover`.

**Second**, you can always pull your function our of the listener, and simply pass the function call. For example:


```
 $("body").on("click", "#some-element", responseToClick())
 
 
 function responseToClick(){
    // do something here to respond to the click
}
```

And that's all there is to it! You can read more about the **click** listener in the [official jQuery documentation](https://api.jquery.com/click/)




<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->










#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


