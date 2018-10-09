---
title: Pass Props to a Stateless Functional Component
---
## Pass Props to a Stateless Functional Component


In React: props. In React, you can pass props, or properties, to child components. Say you have an App component which renders a child component called Welcome that is a stateless functional component. You can pass Welcome a user property by writing:

```react.js
<App>
  <Welcome user='Mark' />
</App>
```
You use custom HTML attributes that React provides support for to pass the property user to the component Welcome. Since Welcome is a stateless functional component, it has access to this value like so:

```react.js
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
```
It is standard to call this value props and when dealing with stateless functional components, you basically consider it as an argument to a function which returns JSX. You can access the value of the argument in the function body. With class components, you will see this is a little different.

Like you can pass a props like this
```react.js
 <CurrentDate date={Date()} />
 ```
 ## Solution
 Render date in a component like this
 ```react.js
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate date={Date()} />
        { /* change code above this line */ }
      </div>
    );
  }
};
 ```
