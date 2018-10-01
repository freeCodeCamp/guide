---
title: Onclick Event Attribute
---

## Onclick Event Attribute

The onclick element is an event handler that is used to fire an event as soon as it is initiated.
eg.-
<div class="button" onClick="function()"></div>
here on clicking the button the JS function() function is called

When the element is clicked fires a event. 

It works just like the *onclick method* or `addEventListener('click')` to the element.

```html
<element onclick="event"></element>
```
> `event` can be a JavaScript function or you can write raw JavaScript

### Examples

Changing the color of a ```<p>``` element when clicked

```html
<p id="text" onclick="redify()">Change my color</p>

<script>
function redify(){
  let text = document.querySelector('#text');
  text.style.color = "red";
}
</script>
```

Using raw JavaScript onclick attribute:

```html
<button onclick="alert('Hello')">Hello World</button>
```

#### More Information:

- [MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onclick)
