---
title: Onload Event
---
## Onload Event
The `onload` event is used to execute a JavaScript function immediately after a page has been loaded.

### Example:
```javascript
<body onload="myFunction()">

<script>
  function myFunction() {
    alert('Page finished loading');
  }
</script>
```

In the above example, as soon as the web page has loaded, the `myFunction` function will be called, showing the `Page finished loading` alert to the user.

the `onload` event is most often used within the `<body>` element to execute the script. If it is attached to the `<body>`, the script will run once the web page has completely loaded all content (images, script files, CSS files, etc.).

#### More Information:

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload)
