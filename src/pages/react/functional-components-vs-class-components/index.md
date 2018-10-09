---
title: Functional Compoents vs Class Components
---

## Functional Compoents vs Class Components

There are mainly two components in React:
* Functional Components 
* Class Components

## Functional Components

* Functional compoents are basic javascript functions. These are typically arrow functions but can also be created with the regular `function` keyword.
* Sometimes referred to as "Dumb" or "Stateless" components as they simply accept data and display it in some form.
* React Lifecycle methods (componentDidMount, etc) cannot be used in `functional components`.
* These are mainly responsible for UI and are typically presentational only (For example, a Button component).
* Functional components can accept and use props.
* Functional components should be favored if you do not need to make use of React state.

```js
import React from "react";

const Person = props => (
  <div>
    <h1>Hello, {props.name}</h1>
  </div>
);

export default Person;
```

## Class Components

* Class components make use of ES6 Class and extend the `Component` in React.
* Sometimes called "Smart" or "Stateful" components as they tend to implement logic and state.
* React Lifecycle methods can be used inside Class Components (For example, `componentDidMount`).

```js
import React, { Component } from "react";

class Person extends Component {
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

## More Information

* [React Components](https://reactjs.org/docs/components-and-props.html)
* [Functional vs class components](https://react.christmas/16)
* [Stateful vs Stateless Functional Components in React](https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541)
