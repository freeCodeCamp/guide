---
title: Change Inline CSS Conditionally Based on Component State
---
## Change Inline CSS Conditionally Based on Component State

## Solution 
Write a conditional statement that is evaluated according to your state, as mentioned in the challenge description, checks the length of the input and assigns a new object to the inputStyle variable.

```react.js
if (this.state.input.length > 15) {
  inputStyle = {
    border: '3px solid red'
  }
}
```
