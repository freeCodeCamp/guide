---
title: OnClick Event
---

The click event is fired when the user clicks on an element. The click event will occur after the `mousedown` and `mouseup` events. Here is a simple example:

```html
<button id="demo" onclick="doSomething()">Click</button>
```

```javascript
  function doSomething(){
    alert("Something");
  }
```
When click at the button it will appear a dialog window with "Something" message. You can see below another way to do the same:


```html
<button id="demo">Click</button>
```

```javascript
  var ele = document.getElementById('demo');
  ele.addEventListener('click', function(){
    alert("Something");
  })
```
