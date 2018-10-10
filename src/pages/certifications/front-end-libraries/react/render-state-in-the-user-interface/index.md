---
title: Render State in the User Interface
---
## Render State in the User Interface

#### Hint 1 :
```JSX
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
          // Remember to previous challenge and define an h1 tag.
          // Inside the tag, access to the "name" property of the constructor`s state.
          // Dont forget to use "{ }" .
        { /* change code above this line */ }
      </div>
    );
  }
};
```

## Solution 
```JSX
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
          <h1>{this.state.name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};
```
