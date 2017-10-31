---
title: Passing Values Between Components
---
## Passing Values Between Components

In order to share data between React components, you pass them into other components as properties. The receiving components access these values in their local *props* object.

In the following example, the `CountDisplay` component passes the *count* value from its local state into the `CountText` and `CountTextDoubled` components.
```javascript
class CountDisplay extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0
     };
  }
  
  render() {
    return (
      <CountText count={this.state.count} />
      <CountTextDoubled count={this.state.count} />
    );
  }
}

class CountText extends React.Component {
  render() {
    return (
      <div>
        Count = {this.props.count}
      </div>
    );
  }
}

class CountTextDoubled extends React.Component {
  render() {
    return (
      <div>
        Count doubled = {this.props.count * 2}
      </div>
    );
  }
}
```
