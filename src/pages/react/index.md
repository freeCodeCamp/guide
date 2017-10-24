---
title: React
---
## React

React is a JavaScript library for building user interfaces.

It's declarative: React uses a declarative paradigm that makes it easier to reason about your application. It's efficient: React computes the minimal set of changes necessary to keep your DOM up-to-date. And it's flexible: React works with the libraries and frameworks that you already know.

To describe components' DOM representations, React uses an XML-like syntax called JSX. JSX is not required to use React, but it makes code more readable, and writing it feels like HTML. A simple transform is included with React that allows converting JSX into native JavaScript for browsers to digest. JSX produces React "elements". One difference between JSX in React and HTML is React uses the term 'className' to designate a class.


---
title: Hello World! Intro to Components
---

Creating a React component is as simple as creating a class that extends React.Component.

Here is a HelloWorld Component 

class HelloWorld extends React.Component {
  render() {
    return <h1> Hello World </h1>
  }
}

To render this component to your DOM. First in your HTML file you need a designated element with an ID that you will target when you call ReactDOM.render. (ex. app) For our example ReactDOM.render will take the component as the first argument and the designated target of your HTML as the second.

ReactDOM.render(<HelloWorld/>, document.getElementById('app'));


For more information head to [https://reactjs.org/](https://reactjs.org/)
