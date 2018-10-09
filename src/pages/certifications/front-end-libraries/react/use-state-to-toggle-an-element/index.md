---
title: Use State to Toggle an Element
---
## Use State to Toggle an Element

## Hint
```react.js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
  
  // bind toggleVisibility as learned in previous challenge
  
    // change code above this line
  }
  // change code below this line
 
 // declare toggleVisibility()
 // check current visibility status by `if` with `this.state.visibility`
 // and use setState to change status as current sitution
   
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
```react.js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
  this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
  }
  // change code below this line
  toggleVisibility(){
    if(this.state.visibility){
      this.setState({
        visibility: false
      })
      }else{
        this.setState({
        visibility: true
      })
    }
  }
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
