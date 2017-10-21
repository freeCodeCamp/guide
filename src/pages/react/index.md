---
title: React
---
## React

React is a JavaScript library for building user interfaces.

It's declarative: React uses a declarative paradigm that makes it easier to reason about your application. It's efficient: React computes the minimal set of changes necessary to keep your DOM up-to-date. And it's flexible: React works with the libraries and frameworks that you already know.

To describe component's DOM representations, React uses an XML-like syntax called JSX. JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML. A simple transform is included with React that allows converting JSX into native JavaScript for browsers to digest.

## Components in React

One of the fundamentals of React is the concept of components. Components are used to construct UI from smaller pieces.
There are two types of components. **Functional** and **Class** components.

### Functional Components
Functional components are basically 'dumb' components. They are not aware of their surroundings, state, and can not communicate with other components.

It is best practice to start your components off as functional and refactor when you need a class.

```jsx
import React from 'react';

const Search = () => {
  return <input />;
};

export default Search;
```

### Class Components
Class components must have a render function that returns JSX. When an instance of a class component is called, its render method is called.

```jsx
import React, { Component } from 'react';

class Search extends Component {
  render() {
    return <input />;
  }
}

export default Search;
```

For more information head to [https://reactjs.org/](https://reactjs.org/)
