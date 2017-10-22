---
title: React - Hello World
---
## React - Hello World

In react.js you can write the most easy programs with hello world example look like this :

```js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
);
```

`ReactDOM.render()` is the part when react will render the component. in this case is `<h1>Hello, world!</h1>`, and ` document.getElementById('app')` is part react will render your component into html by id. which you can see here :

```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <title>React App</title>
   </head>
   <body>
      <!-- Root Element -->
      <div id="app"></div>
      <script src="index.js"></script>
   </body>
</html>

```

`<div id="app"></div>` app is the target id.`<script src="index.js"></script>` index.js come from webpack output bundled app.