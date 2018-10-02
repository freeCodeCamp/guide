---
title: State
---

# State

State is the place where the data comes from. 

We should always try to make our state as simple as possible and minimize the number of stateful components. If we have, for example, ten components that need data from the state, we should create one container component that will keep the state for all of them.

State is basically like a global object that is available everywhere in a component.

Example of a Stateful Component:-

```javascript

import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      
    // We declare the state as shown below
    
      this.state = {                           
         x: "This is x from state",    
         y: "This is y from state"
      }
   }
   render() {
   return (
      <div>
            <h1>{this.state.x}</h1>  {// here also we can call state of x}
            <h2>{this.state.y}</h2>  {// here also we can call state of y}
      </div>
      );
   }
}
export default App;
```


Another Example:-


```javascript
import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
    // We declare the state as shown below
      this.state = {                           
         x: "This is x from state",    
         y: "This is y from state"
      }
   }

   render() {
   
   // We can call state here too. The brackets '{' and '}' in the jsx are for saying that the content in them are js

   let x1=this.state.x;

   let y1=this.state.y;
   
   return (
      <div>
            <h1>Another way of using state</h1>
      </div>
      );
   }
}
export default App;
```
