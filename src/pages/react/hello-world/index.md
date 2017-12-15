---
title: React - Hello World
---
## React - Hello World

React is all about components. Let's have a look on how we can create a component which outputs `Hello World!` on screen.

So first we create a file named `index.html` and put the code below in it.
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Test Page</title>
  </head>
  <body>
   <div id="root"></div>
  </body>
</html>
```
Next we need to include React, React DOM and Babel to convert JSX code to normal Javascript in our `index.html` page. Add the following scripts:
```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.24.0/babel.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
```
Now we'll create our React component.
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Test Page</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.24.0/babel.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
  </head>
  <body>
   <div id="root"></div>
   <script type="text/babel">
    class Text extends React.Component {
      render() {
        return(
          <p>Hello World!</p>
        )
      }
    }
  </script>
  </body>
</html>
```
You may see something like HTML + Javascript inside the script tag in the body, that is JSX. JSX is the future of Javascript but it has not been implemented in browsers so we use a Babel to convert it into normal Javascript which browsers can understand.
Next we need to render our React component we do so by adding a simple line of code.
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Test Page</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.24.0/babel.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
  </head>
  <body>
   <div id="root"></div>
   <script type="text/babel">
    class Text extends React.Component {
      render() {
        return(
          <p>Hello World!</p>
        )
      }
    }
    ReactDOM.render(<Text/>,document.getElementById("root"));
  </script>
  </body>
</html>
```
And we're done, we have created a react component which displays `Hello World!`.
