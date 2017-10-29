---
title: React
---
## React

React is a JavaScript library for building user interfaces.

It behaves off of the principle of controlling the states of individual React components, and computing the minimal changes needed to update the DOM, and do so as soon as the state changes.

It's **declarative**: React uses a declarative paradigm that makes it easier to reason about your application. 

It's **efficient**: React computes the minimal set of changes necessary to keep your DOM up-to-date. 

And it's **flexible**: React works with the libraries and frameworks that you already know.

To describe components' DOM representations, React uses an XML-like syntax called JSX. JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML. A simple transform is included with React that allows converting JSX into native JavaScript for browsers to digest. Writing React using this JSX format helps to make it feel more natural to compartmentalize a user interface into individual components. For example: thinking in a similar style to HTMl5 semantic tags for describing sections within a layout, one might create React components such as `<Header>` or `<NavigationBar>` which could also be part of a larger React component.

Often, data is passed between these React components through a component's `props` JSX attribute, which is referred to when defining how an element should dynamically be displayed.

React components define a `render` method in which a developer returns a single JSX element that describes what should be rendered. React then takes that description and renders on-screen the result of those instructions.

For more information head to <a href='https://reactjs.org/' target='_blank' rel='nofollow'>https://reactjs.org/</a>
