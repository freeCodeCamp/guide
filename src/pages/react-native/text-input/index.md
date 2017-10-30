---
title: React Native - TextInput Component
---
## React Native - TextInput

### A component for inputting text into the application via a keyboard. 
Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.

### A minimal example:

```js
export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
```

### Note: some props are only available with multiline={true/false}. 
Additionally, border styles that apply to only one side of the element 
(e.g., borderBottomColor, borderLeftWidth, etc.) will not be applied if multiline=false.
