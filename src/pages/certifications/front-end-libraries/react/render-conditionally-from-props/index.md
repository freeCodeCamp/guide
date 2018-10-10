---
title: Render Conditionally from Props
---
## Render Conditionally from Props
This is a bit tricky challenge but easy though.

## Solution
Change `handleClick()` with proper increament statement.

```react.js
handleClick() {
  this.setState({
    counter: this.state.counter + 1
  });
}
```
In `render()` method assign `Math.random()` as metnioned in challenge description and write ternary experssion to pass `props` in **Results** component.
```react.js
 let expression = Math.random() > .5;
    
{(expression == 1)? <Results fiftyFifty="You win!"/> : <Results fiftyFifty="You lose!"/> }

```

Then render the `fiftyFifty` porps in Restults component.
```react.js
  <h1>
  {
    this.props.fiftyFifty
  }
  </h1>
```
