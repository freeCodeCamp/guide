---
title: Components
---

# Components

Components are self-sustaining, independent micro-entities that describe a part of your UI. An application's UI can be split up into smaller components where each component has its own code, structure, and API.   

The reason why react is famous can be partly attributed to the components architecture. Basically components are divided parts of a big application. 

Assume we have different pages like about us, home, customer service and reviews. We can divide all of these into multiple components and then finally merge them into one in another bigger component.

Also Facebook, for instance, has thousands of pieces of functionality interfaced together when you view their web application. Here is an interesting fact: Facebook comprises 30,000 components, and the number is growing. The component architecture allows you to think of each piece in isolation. Each component can update everything in its scope without being concerned about how it affects other components. 

If we take Facebook's UI as an example, the search bar would be a good candidate for a component. Facebook's Newsfeed would make another component (or a component that hosts many sub-components). All the methods and AJAX calls concerned with the search bar would be within that component.

Components are also reusable. If you need the same component in multiple places, that's easy. With the help of JSX syntax, you can declare your components wherever you want them to appear, and that's it. 

Example for a component:-

```javascript

import React from "react";


class Hello extends React.Component {
    constructor(props) {
        super(props);
    }
     
    render() {
        return(
            <div>
                Hello World
            </div>
        )
    }
}


export default Hello;
```

There are two types of components in react.

Stateful and Stateless components

Example for Stateful Component:-

```javascript

class Example1 extends React.Component{
  constructor(){
    super();
    this.state = {
      example: "This is a component with a state"
    }
  }
  
render(){
      return (
      {this.state.example}
      );
  }

}
```

Example for a Stateless Component:-

```javascript


const Example2 = (props) =>{
  <p>This is an example of stateless component</p>;
  }


```

### More Information:

<a href='https://reactjs.org/docs/components-and-props.html' target='_blank' rel='nofollow'>Components and Props</a>
<br />
