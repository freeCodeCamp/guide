---
title: React - Components
---
## React - Components

Components are reusable in react.js you can injecting value into props like this example bellow :

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

```name="Faisal Arkan"``` will give value into ```{props.name}``` from ```function Welcome(props)``` and returning component that has given value by ```name="Faisal Arkan"```, After that react will render element into html.
