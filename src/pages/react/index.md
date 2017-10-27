---
title: React Cheatsheet/intro
---
## React

React is a JavaScript library for building user interfaces.

>It's declarative: React uses a declarative paradigm that makes it easier to reason about your application. It's efficient: React computes the minimal set of changes necessary to keep your DOM up-to-date. And it's flexible: React works with the libraries and frameworks that you already know.

>To describe component's DOM representations, React uses an XML-like syntax called JSX. JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML. A simple transform is included with React that allows converting JSX into native JavaScript for browsers to digest.

* Rendering in React

```javascript
render() { 
  return <div />; 
}
```
* Constructor

```javascript
constructor(props) {
  super(props);
  this.state = {
    list: props.initialList
  };
}
// where props aren't used in constructor
constructor() {
  super();
  this.state = {
    list: []
  };
}
```

* Component Will Mount
```javascript
componentWillMount() {
  // invoked once.
  // fires before initial 'render'
}
```

* Component Did Mount
```javascript
componentDidMount() {
  // invoked once (client-side only).
  // fires before initial 'render'
}
```

* setState as a function
```javascript
// good for state transitions

this.setState((prevState, props) => {
  return {count: prevState.count + props.step};
});
```

* setState as a object
```javascript
// good for static values

this.setState({mykey: 'my new value'});
```
* setState as a optional callback
```javascript
// fires after setState
// prefer componentDidUpdate

this.setState(
  (prevState, props) => ({ count: prevState.count + props.step }),
  () => console.log(this.state.count)
);
```

please check the sources which I've used
https://reactjs.org/docs/hello-world.html
https://reactcheatsheet.com/


