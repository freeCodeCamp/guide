---
title: A React Environment Using a Remote Code Repository
---

This is how to create a non production React environment utilizing a remote code repository.
We will use the cdnjs.cloudflare.com 15.4.1 react.min.js, react-dom.min.js, and babel-core 5.8.34 browser.min.js
to accomplish this.

 ```html
 <!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello React</title>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.1/react.min.js">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.1/react-dom.min.js">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js">
  </script>
</head>

<body>
  <div id="helloreact"></div>
  <script type="text/babel">
    ReactDOM.render(
    <h1>Hello React</h1>, document.getElementById('helloreact'));
  </script>
</body>

</html>
 ```
 If this code is saved with the html file extension (helloReact.html)it can be opened in a web browser
 it will run React and Babel.
