---
title: Functional Compoents vs Class Components
---

## Functional Compoents vs Class Components

There are mainly two components in React:
* Functional Components 
* Class Components

## Functional Components

* Functional compoents are basic javascript functions.
* Lifecycle methods cannot be used in `functional components`.
* These are mainly responsible for UI and state of the application can't be used inside them.
* We can use props in the functional components.
* If we do not require state inside a component then we should prefer `functional components`.

```
import React from 'react';

const Person = (props) => {
  return (
  <div>
  <h1>Hello, {props.name}</h1>
  </div>
  );
}

export default Person;
```

## Class Components

* Class components are the javascript classes which extends the Component in React.
* Since classes can have their methods so we can use `Lifecycle methods` inside them.
* Class components also contain the state of the application.

```
import React,{ Component } from 'react';

class Person extends Component {
  render(){
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
