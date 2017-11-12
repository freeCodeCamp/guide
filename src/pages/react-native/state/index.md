---
title: React Native - Component State
---
## React Native - Component State

In `Class` components, there is a way to store and manage state built in to React Native.

```js
class App extends Component {
  constructor () {
    super();
    this.state = {
      counter: 0
    };
  }
  incrementCount () {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  decrementCount () {
    this.setState({
      counter: this.state.counter - 1
    });
  }
  render () {
    return (
      <View>
        <Text>Count: {this.state.counter}</Text>
        <Button onPres={this.decrementCount.bind(this)}>-</Button>
        <Button onPres={this.incrementCount.bind(this)}>+</Button>
      </View>
    );
  }
}
```

State is similar to props, but it is private and fully controlled by the component. Here, the `constructor()` method is calling the parent class' constructor with `super();` - **`Component`** is the parent class of `App` because we are using the `extends` keyword. The `constructor()` method also initializes the component's state object:

```js
this.state = {
  counter: 0
};
```

The state can be displayed within the component:

```js
{this.state.counter}
```

Or updated by calling:

```js
this.setState({});
```

The count is incremented and decremented by calling the functions passed to the `onPress` handlers just like they would be if you called a click handler from JavaScript on the web.

*ASIDE: In the first example, `<Button>` is a custom component; it's a combination of `<TouchableOpacity>` and `<Text>` from the React Native API:*

```js
const Button = ({ onPress, children, buttonProps, textProps }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, buttonProps]}>
      <Text style={[textStyle, textProps]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
```
