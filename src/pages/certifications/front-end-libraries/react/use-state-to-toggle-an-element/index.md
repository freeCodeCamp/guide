---
title: Use State to Toggle an Element
---
## Use State to Toggle an Element


#### Hint 1:
```JSX
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
         // You can bind the "this" keyword to the "toggleVisibility()" method here.
    // change code above this line
  }
  // change code below this line
        // Define toggleVisibility() method here.
        // Inside this method call the setState() method to update data of constructor`s state.
        // The new value of the property must be the opposite value of the first one.
  // change code above this line 
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};
```
## Solution
```JSX
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind (this);
    // change code above this line
  }
  // change code below this line
  toggleVisibility() {
   this.setState({ visibility:!(this.state.visibility) })
  };   
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};
```
