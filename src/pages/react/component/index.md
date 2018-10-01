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

```name="Faisal Arkan"``` will give value into ```{props.name}``` from ```function Welcome(props)``` and returning component that has given value by ```name="Faisal Arkan"```, After that react will render element into html.

### Other ways to declare components

There are many ways to declare components when using React.js, but there are two kinds of components, ***stateless*** components and ***stateful*** components.

### Stateful

#### Class Type Components

```jsx

class Cat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      humor: 'happy'
    }
  }
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <p>
          {this.props.color}
        </p>
      </div>
    );
  }
}

```
Classful components are stateful components because they have a state associated with them, so they should be used wisely , 
because with great power comes great responsiblity.If the access to the state is given to every other component it will
result in a poorly designed slow loading react app.

### Stateless Components

#### Functional Components (Arrow Function from ES6)

```jsx

const Cat = props => {
  return (  
    <div>
      <h1>{props.name}</h1>
      <p>{props.color}</p>
    </div>;
  );
};

```

#### Implicit Return Components

```jsx

const Cat = props => 
  <div>
    <h1>{props.name}</h1>
    <p>{props.color}</p>
  </div>;

```
