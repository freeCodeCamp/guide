---
title: JSX
---

## JSX

JavaScript XML (JSX) is an XML-like syntax extension to Javascript. It is possible to write React code without JSX, however, the official React documentation 
recommends using JSX with React to describe the appearance of the UI. 

Using JSX allows you to write HTML like elements in your JavaScript files.

The following JSX:

```js
render() {
  return (
    <div>
      <h2>What are all these HTML tags doing in my .js file?</h2>
      <p>Looks a little weird right?</p>
      <span>It is just JSX that Babel will transpile into actual JavaScript!</span>
      <em>You can write JavaScript right in this JSX - just put it in curly braces:</em>
      <pre>{`JSX makes writing React components ${100 * 10} times easier!`}</pre>
    </div>
  )
}
```
is equivalent to: 

```js

React.createElement(
  "div",
  null,
  React.createElement(
    "h2",
    null,
    "What are all these HTML tags doing in my .js file?"
  ),
  React.createElement(
    "p",
    null,
    "Looks a little weird right?"
  ),
  React.createElement(
    "span",
    null,
    "It's just JSX that Babel will transpile into actual JavaScript!"
  ),
  React.createElement(
    "em",
    null,
    "You can write JavaScript right in this JSX - just put it in curly braces:"
  ),
  React.createElement(
    "pre",
    null,
    "JSX makes writing React components " + 100 * 10 + " times easier!"
  )
);
```


For more information head to <a href='https://reactjs.org/docs/introducing-jsx.html' target='_blank' rel='nofollow'>https://reactjs.org/docs/introducing-jsx.html</a>
