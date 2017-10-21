---
title: React
---
## React

React is a JavaScript library for building user interfaces.

It's declarative: React uses a declarative paradigm that makes it easier to reason about your application. It's efficient: React computes the minimal set of changes necessary to keep your DOM up-to-date. And it's flexible: React works with the libraries and frameworks that you already know.

To describe component's DOM representations, React uses an XML-like syntax called JSX. JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML. A simple transform is included with React that allows converting JSX into native JavaScript for browsers to digest.

### Virtual DOM
React's magic comes from it's interpretation of the DOM and it's strategy for creating UIs.

React uses the Virtual DOM to render an HTML tree virtually first, and then, every time a state changes and we get a new HTML tree that needs to be taken to the browser’s DOM, instead of writing the whole new tree React will only write the difference between the new tree and the previous tree (since React has both trees in memory). This process is known as Tree Reconciliation.

### Reconciliation

React has a smart diffing algorithm that it uses to only regenerate in its DOM node what actually needs to be regenerated while it keeps everything else as is. This diffing process is possible because of React’s virtual DOM.

Using the virtual DOM, React keeps the last DOM version in memory and when it has a new DOM version to take to the browser, that new DOM version will also be in memory, so React can compute the difference between the new and the old versions.

React will then instruct the browser to update only the computed diff and not the whole DOM node. No matter how many times we regenerate our interface, React will take to the browser only the new “partial” updates.



For more information head to [https://reactjs.org/](https://reactjs.org/)
