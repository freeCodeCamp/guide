---
title: React - Components
---
## React - Components

Components are reusable in react.js. You can inject value into props as given below :

```jsx

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Faisal Arkan" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

```

The value ```"Faisal Arkan"``` will get populated into ```{props.name}``` of ```Welcome``` Component. React renders the component along with given ```{props.name}```
