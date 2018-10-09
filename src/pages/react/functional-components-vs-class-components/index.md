---
title: Functional Components vs Class Components
---

## Functional Components vs Class Components

There are mainly two components in React:
* Functional Components 
* Class Components

## Functional Components

* Functional components are basic JavaScript functions.
* These are mainly responsible for rendering UI.
* They don't contain any state of the application on their own.
* Lifecycle methods cannot be used in `functional components`.
* We can use props in the functional components.
* There is no render method used in `functional components`
* If we do not require state inside a component then we should prefer `functional components`.

```js
import React from "react";

const Person = props => {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
    </div>
  );
};

export default Person;
```

## Class Components

* Class components are the JavaScript classes which extends the Component in React.
* Since classes can have their methods, we can use `Lifecycle methods` inside them.
* Class components also contain the state of the application.
* You pass props down to `Class Components` using `this.props`

```js
import React, { Component } from "react";

class Person extends Component {
  constructor(props){
    super(props);
    this.state = {
      myState: true;
    }
  }
  
  render() {
    return (
      <div>
        <h1>Hello Person</h1>
      </div>
    );
  }
}

export default Person;
```
There is a special type of component known as Containers. when we connect a `Class Component` with redux store , it is known as `Container`.

For more info visit [React Components](https://reactjs.org/docs/components-and-props.html)
[React Class Components](https://reactjs.org/docs/state-and-lifecycle.html)
