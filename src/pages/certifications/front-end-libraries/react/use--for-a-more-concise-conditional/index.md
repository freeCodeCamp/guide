---
title: Use && for a More Concise Conditional
---
## Use && for a More Concise Conditional

## Hint:

You don't have to do a full ```if/then``` statement. Just write the condition you are checking.

## Solution:

As you can see, you don't have to write the full ```if/then``` statement. We only need to check the condition and see if it returns ```true``` or ```false```. In this case, we are checking the value of ```display```. If the value is ```true```, then you return the value to the right of ```&&```, which is ```<h1>Displayed!</h1>```. If the condition is ```false```, it returns nothing.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
