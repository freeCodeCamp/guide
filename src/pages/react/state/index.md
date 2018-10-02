---
title: State
---

# State

State is stored data that will change.

## Updating State
You can change the data stored in the state of your application using the `setState` method on your component.

```js
this.setState({value: 1});
```

Keep in mind that `setState` may be asynchronous so you should be careful when using the current state to set a new state. A good example of this would be if you want to increment a value in your state. 

##### The Wrong Way
```js
this.setState({value: this.state.value + 1});
```

This can lead to unexpected behavior in your app if the code above is called multiple times in the same update cycle. To avoid this you can pass an updater callback function to `setState` instead of an object. 

##### The Right Way
```js
this.setState((state) => {return {value: state.value + 1}});
```

### More Information

- <a href='https://reactjs.org/docs/state-and-lifecycle.html' target='_blank' rel='nofollow'>React - State and Lifecycle</a>
- <a href='https://reactjs.org/docs/lifting-state-up.html' target='_blank' rel='nofollow'>React - Lifting State Up</a>
- <a href='https://facebook.github.io/react-native/docs/state.html' target='_blank' rel='nofollow'>React Native - State Up</a>
