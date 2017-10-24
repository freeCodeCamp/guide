# Your First React Component
A basic react component just needs a render function, which returns an HTML-Element (or other React Components).
The most important thing you need to know is that a component can just return 1 HTML-Element (and it's children), so it needs an enclosing element.

```javascript
import React from 'react';     

class FirstComponent extends React.Component {
  render() {
    return <h1>Hello, this is my first Component</h1>;
  }
}
```

# Attention: This guide is using ES6 Syntax
