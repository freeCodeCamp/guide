---
title: JSX
---

# JSX

> JSX is short for JavaScript XML.

JSX is an expression which uses valid HTML statements within JavaScript. You can assign this expression to a variable and use it elsewhere. You can combine other valid JavaScript expressions and JSX within these HTML statements by placing them within braces (`{}`). Babel further compiles JSX into an object of type `React.createElement()`.

### Single-line & Multi-line expressions
Single-line expression are simple to use.

```javascript
const one = <h1>Hello World!</h1>;
```

When you need to use multiple lines in a single JSX expression, write the code within a single parenthesis.

```javascript
const two = (
  <ul>
    <li>Once</li>
    <li>Twice</li>
  </ul>
);
```

### Using only HTML tags

```javascript
const greet = <h1>Hello World!</h1>;
```

### Combining JavaScript expression with HTML tags
We can use JavaScript variables within braces.

```javascript
const who = "Quincy Larson"
const greet = <h1>Hello {who}!</h1>;
```

We can also call other JavaScript functions within braces.

```javascript
function who() {
  return "World"
}
const greet = <h1>Hello {who()}!</h1>;
```
## Only a single parent tag is allowed
A JSX expression must have only one parent tag. We can add multiple tags nested within the parent element only.

```javascript
// This is valid.
const tags = (
  <ul>
    <li>Once</li>
    <li>Twice</li>
  </ul>
);

// This is not valid.
const tags = (
  <h1>Hello World!</h1>
  <h3>This is my special list:</h3>
  <ul>
    <li>Once</li>
    <li>Twice</li>
  </ul>
);
```

### More Information

<a href='https://reactjs.org/docs/introducing-jsx.html' target='_blank' rel='nofollow'>Introducing JSX</a>
