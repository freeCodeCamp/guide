---
title: The React Component Lifecycle
---

## The React Component Lifecycle

React lifecycle methods are sequential beauties.

React focuses on handling DOM updates in association to changes in mutable data (state) and immutable data (props). Built into React are lifecycle methods which allow you to invoke code blocks through the lifecycle of updating data and rendering the DOM.

The three major phases of the React component lifecycle are mounting, updating, and unmounting.

## What is Mounting?

Mounting is the term user in React for when a component is initialized and rendered in the DOM. And likewise, unmounting is when a component is removed from the DOM. In between mounting and unmounting we typically have updates to data and to the DOM. React comes out of the box with methods that are executed at each different stage of the component lifecycle.

Let’s take a look at each phase and its methods.

![React Component Lifecycle](https://cdn-images-1.medium.com/max/1600/1*hweYX28xJaQ6qhYvUNKmPw.png "React Component Lifecycle")

### Mounting

React component being created and rendered in the DOM.
#### ```constructor(props)```

The constructor is part of ES6 object syntax, so this shouldn’t be too unfamiliar. This is the first block of code that is executed when a component class object is being created. You should always pass props to the constructor method and then call ‘super(props)’ in the constructor as well. The ‘super’ keyword calls the constructor method in the parent class. Calling ‘super(props)’ calls the parent constructor with the child component’s props initializing the React.Component object constructor giving us the many React features we know and love.

The constructor method is also where we initiate our state, or our imitable component data. The this.state value is set to a Javascript object.

The constructor is also where you define the class methods and bind them to ‘this’ so that you can access this.state, this.state, this.method and so on within those given methods. When the constructor method is called, no mounting has taken place.

```javascript
constructor(props) {
  super(props);
  
  this.state = {
    myData: data,
    moreData: thisData
  };

  this.componentMethod = this.componentMethod.bind(this);
}
```

#### ```componentWillMount()```

Now that the component has been initialized with the constructor method, it’s time to prep before rendering the component. The componentWillMount method is called after the constructor but before the component is rendered. The componentWillMount method is already baked into React.Component, so no need to define and bind the method (as it is with all of the lifecycle methods).

This is a great time to make requests for data from external APIs. However, one thing to keep in mind is that React handles requests asynchronously. Meaning that your code will be executed, but React will not wait for the response before moving onto the rest of the lifecycle methods.

#### ```render()```

The almighty render- this method returns the React elements that will be rendered in the DOM. JSX allows for writing HTML like code within the render method that is converted to nested createReactElement functions that return the React elements to be rendered. The render function is only called once during the mounting process, and is subsequently called whenever updates are made to the component’s state or props.
componentDidMount

The componentDidMount is the last mounting method and is called after the component has initially been created and rendered to the DOM. This is a perfect time for making any changes or requests that require DOM nodes. For example if you are using D3 for visualizations, you can make the D3 adjustments after the the original container element has been rendered to the DOM.

### Updating

#### ```componentWillReceiveProps(nextProps)```

The componentWillReceiveProps method is called right before props are actually updated. This method has access to what the next props will be via ‘nextProps’. This provides a unique point to compare the current props values to the new props values. If you need to update state to match the new props, this is a great place to do it.

Notice how this method only refers to props, not state. A ‘setState’ call that updates state, and not props, will not invoke this method. This method is typically called when the parent component state is being passed down as props and then the parent state is updated thus updating the component’s props.

#### ```shouldComponentUpdate```

The shouldComponentUpdate method is unique in that it is the only method that determines if other lifecycle methods will be called. This method must return a boolean value (the default is true) which will determine if componentWillUpdate, render, and componentDidUpdate will be invoked. If shouldComponentUpdate returns True then the remaining update methods will be invoked. This is the default behavior. However, if shouldComponentUpdate returns false, then the rest of the update methods will not be called.

The shouldComponentUpdate method has access to the new props and state via the ‘nextProps’ and ‘nextState’ parameters.

#### ```componentWillUpdate(nextProps, nextState)```

The componentWillUpdate method is called right before the re-render after updating props or state. This method has access to the ‘nextProps’ and ‘nextState’ parameters which makes it great for making changes in preparation for a re-render.

React likes to keep you from creating unending chains of ‘setState’ cause by one update, so you can’t call setState in the componentWillUpdate method. If you do need to setState based on a props change, then you will want to make that change in the componentWillRecieveProps method.

#### ```render()```

We only see changes to the DOM when render is called on a component. One of the most common methods for calling render is using this.setState(). The this.setState() method accepts a JSON object that update the mutable state and then calls a re-render.

Render on updates only occurs if shouldComponentUpdate returns true, and if props or state are changed. There is the option to call a force update in React, but try to avoid that at all cost.

### ```componentDidUpdate(prevProps, prevState)```

The componentDidUpdate method is invoked right after the DOM has been updated. This method has access to the previous props and state via ‘prevProps’ and ‘prevState’ and is only called if shouldComponentUpdate returns true.

This is a great time to operate on the DOM if an update is needed via a different library such as D3, or to make network requests to sync back-end databases with state changes.

### Unmounting

Unmounting occurs when a React component is removed from the DOM.

#### ```componentWillUnmount()```

The componentWillUmount method is called every time after a React component is removed from the DOM. This is a great time to do some data clean up and close open socket connections. For example, if you have a real-time messaging component that initiated a real-time database connection in componentWilMount you will want to close that connection in comonentWillUnmount. Otherwise you will stack up several open connections that will slow down your page.
