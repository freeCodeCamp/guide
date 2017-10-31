---
title: Creating a Simple React Component
---

## Creating a Simple React Component

In this tutorial we'll walk through how to create a simple React component in CodePen.

### Getting Started

If you haven't already, go ahead and sign up for a [free CodePen account](https://codepen.io/accounts/signup/user/free).

Create a new pen by selecting 'Create' > 'New Pen' next to your CodePen profile picture.

Next we'll add the appropriate libraries to render our React component.

Open your JavaScript settings pane by selecting 'Settings' > 'JavaScript'. Select 'Babel' under 'JavaScript Preprocessor'. Babel will compile our JSX and ES6+ syntax into plain JavaScript.

Next let's add our React libraries. Under 'External JavaScript' select the 'Quick-add' drop-down and add both the 'React' and 'React DOM' libraries.

The React library will create our React component and ReactDOM library will render the component to the DOM.

### Prepping for Mounting

Let’s set up the ```index.html``` file. React does most of the HTML rendering, so all we need to do is insert a simple ```<div>``` element for React to append to (think of the HTML section in CodePen as being the ```<body>``` of the document, so no need to include a ```<head>``` element).

Add the following to your HTML pane in CodePen.

```html
<div id="root">
</div>
```

### Creating the React Component

We will be writing a functional React component, which is the most simple component in React. Let’s make a simple ```<h1>``` header, by adding the following code snippet to the ‘JavaScript’ pane in CodePen:

```javascript
const Hello = () => {
  return <h1>Hello world!</h1>;
};
```

We declared a function that returns JSX. Babel converts JSX to plain JavaScript, so the function actually looks like this.

```javascript
function Hello() {
  return React.createElement(
    'h1',
    null,
    'Hello world!'
  );
}
```

The ```React.createElement``` function returns a virtual React component. Now that we’ve written our component, we need to tell React to render it to the DOM using the ```ReactDOM.render``` function. Add this code snippet to the ‘JavaScript’ pane in CodePen:

```javascript
ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
```


Babel converts the ```<Hello />``` JSX into the previously declared Hello function that returns our virtual React component. The ```ReactDOM.render``` function appends the Hello component to the root ```<div>``` we declared in the HTML file.

Now you should be seeing a 'Hello world' header in your CodePen.

You can take a look at an example [here](https://codepen.io/trey-davis/pen/VzNyra).


