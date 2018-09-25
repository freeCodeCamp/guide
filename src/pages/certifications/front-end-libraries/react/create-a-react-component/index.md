---
title: Create a React Component
---
## Create a React Component

## Hint 1:
- Remember the previous section and return a "div" element which contains an "h1" with the text Hello React!.
- "div" element has a child so remember to close all tags.

## Solution 
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return (
      <div>
       <h1>Hello React!</h1>
      </div>
    );
    // change code above this line
  }
};
```
