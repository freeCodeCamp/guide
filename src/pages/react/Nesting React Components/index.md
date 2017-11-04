---
title: Nesting React Components
---

## Nesting React Components

In this tutorial we'll discuss nesting React components and walk through an example in CodePen.

The power of React comes in it’s component-based nature. We can create and reuse components to build complex web interfaces. It’s kind of like building with Legos, but you get to create the blocks. Let’s build a few components that we will use to compose a blogging web page.

### Getting Started

If you haven't already, go ahead and sign up for a [free CodePen account](https://codepen.io/accounts/signup/user/free).

Create a new pen by selecting 'Create' > 'New Pen' next to your CodePen profile picture.

Next we'll add the appropriate libraries to render our React component.

Open your JavaScript settings pane by selecting 'Settings' > 'JavaScript'. Select 'Babel' under 'JavaScript Preprocessor'. Babel will compile our JSX and ES6+ syntax into plain JavaScript.

Next let's add our React libraries. Under 'External JavaScript' select the 'Quick-add' drop-down and add both the 'React' and 'React DOM' libraries.

The React library will create our React component and ReactDOM library will render the component to the DOM.

### Nesting Components

First let’s start with a title component for our blog site.

```javascript
const Heading = () => {
  return (
    <h1>My Blog</h1>
  );
};
```

Then let’s put together the the blog section component.

```javascript
const Blog = () => {
  return (
    <div>
     <h2>Blog Title</h2>
     <p>Blog Body</p>
    </div>
  );
};
```

Notice that we wrapped the ```<h2>``` and ```<p>``` tags with a div tag. Remember that JSX compiles into a React.createElement function, and ```ReactDOM.render``` only accepts one ```React.createElement``` function. Wrapping the ```<h2>``` and ```<p>``` tags ensures that we return one function when JSX is converted to JavaScript.

Now let’s nest those components to build our blogging web app.

```javascript
const App = () => {
  return(
    <div>
      <Heading />
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
};
```

Once again, notice how we wrapped our components in a div tag to ensure that JSX returns one ```React.createElement``` function.

Now let’s render our app to the DOM- add your root div to your HTML file.

```html
<div id="root"></div>
```

And then call ```ReactDOM``` in your JS file to render your app.

```javascript
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Now you should be seeing you blog rendering in your CodePen.

You can see an example [here](https://codepen.io/trey-davis/pen/ayrqeJ).
