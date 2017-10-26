---
title: React
---
## React

React is a JavaScript library for building user interfaces.

It's declarative: React uses a declarative paradigm that makes it easier to reason about your application. It's efficient: React computes the minimal set of changes necessary to keep your DOM up-to-date. And it's flexible: React works with the libraries and frameworks that you already know.

To describe component's DOM representations, React uses an XML-like syntax called JSX. JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML. A simple transform is included with React that allows converting JSX into native JavaScript for browsers to digest.

One of it's unique selling points is that not only does it perform on the client side, but it can also be rendered server side, and they can work together inter-operably.

It also uses a concept called the Virtual DOM that selectively renders subtrees of nodes based upon state changes. It does the least amount of DOM manipulation possible in order to keep your components up to date.

## How does the Virtual DOM work?

Imagine you had an object that you modeled around a person. It had every relevant property a person could possibly have, and mirrored the persons current state. This is basically what React does with the DOM.

Now think about if you took that object and made some changes. Added a mustache, some sweet biceps and Steve Buscemi eyes. In React-land, when we apply these changes, two things take place. First, React runs a "diffing" algorithm, which identifies what has changed. The second step is reconciliation, where it updates the DOM with the results of diff.

The way React works, rather than taking the real person and rebuilding them from the ground up, it would only change the face and the arms. This means that if you had text in an input and a render took place, as long as the input's parent node wasn't scheduled for reconciliation, the text would stay undisturbed.

Because React is using a fake DOM and not a real one, it also opens up a fun new possibility. We can render that fake DOM on the server, and boom, server side React views.

For more information head to [https://reactjs.org/](https://reactjs.org/)
