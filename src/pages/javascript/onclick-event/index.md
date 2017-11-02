---
title: Onclick Event
---
## Onclick Event
The `onclick` event in JavaScript lets you as a programmer execute a function when an element is clicked. 

### Example
```javascript
<button onclick="myFunction()">Click me</button>

<script>
  function myFunction() {
    alert('Button was clicked!');
  }
</script>
```

In the simple example above, when a user clicks on the button they will see an alert in their browser showing `Button was clicked!`. 

### Adding `onclick` dynamically
The `onclick` event can also be programmatically added to any element using the following code in the following example:

```javascript
<p id="foo">click on this element.</p>

<script>
  var p = document.getElementById("foo"); // Find the paragraph element in the page
  p.onclick = showAlert; // Add onclick function to element
    
  function showAlert(event) {
    alert("onclick Event triggered!");
  }
</script>
```

In the above example, when a user clicks on the `paragraph` element in the `html`, they will see an alert showing `onclick Event triggered`. 
#### More Information:
[MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)
