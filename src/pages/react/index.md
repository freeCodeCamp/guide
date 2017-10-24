---
title: React
---
## React
ReactJS website: [https://reactjs.org/](https://reactjs.org/)

React is a JavaScript library for building user interfaces.

It's declarative: React uses a declarative paradigm that makes it easier to reason about your application. It's efficient: React computes the minimal set of changes necessary to keep your DOM up-to-date. And it's flexible: React works with the libraries and frameworks that you already know.

To describe component's DOM representations, React uses an XML-like syntax called JSX. JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML. A simple transform is included with React that allows converting JSX into native JavaScript for browsers to digest.

React does not actually change the DOM while changing the UI of the app. It works on something called the "Virtual DOM" because, changing the Virtual DOM is much faster and less memory consuming than changing the actual DOM. React then, runns a "Diffing Algorithm" to compare the changes between the actual DOM and the Virtual DOM, and then it changes the actual DOM accordingly.
