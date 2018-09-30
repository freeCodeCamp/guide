---
title: Create a Component with Composition
---
## Create a Component with Composition

### Hint

To render the child componenet, all that has to be doneis to add it in the render of the prent component

### Solution

Render the ChildComponent as follows:

````javascript
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }

        <ChildComponent />

        { /* change code above this line */ }
      </div>
    );
  }
};
````
