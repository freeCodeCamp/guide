---
title: Pass a Callback as Props
---
## Pass a Callback as Props

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

### Solution
```javascript
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* change code below this line */ 
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        }
        { /* change code above this line */ 
        <RenderInput input={this.state.inputValue}/>
        }
       </div>
    );
  }
};
```
