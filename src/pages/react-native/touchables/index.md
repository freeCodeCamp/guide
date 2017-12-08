---
title: React Native - Touchable Components
---
## React Native - Touchables

### Users interact with mobile apps mainly through touch. 
They can use a combination of gestures, such as tapping on a button, scrolling a list, or zooming on a map. 

### React Native provides components to handle all sorts of common gestures, as well as a comprehensive gesture responder system to allow for more advanced gesture recognition, 
but the one component you will most likely be interested in is the basic Button.

### Displaying a basic button

Button provides a basic button component that is rendered nicely on all platforms. 
The minimal example to display a button looks like this:

```js
<Button
  onPress={() => { Alert.alert('You tapped the button!')}}
  title="Press Me"
/>
```

### Touchables
If the basic button doesn't look right for your app, you can build your own button using any of the "Touchable" components provided by React Native. The "Touchable" 
components provide the capability to capture tapping gestures, and can display feedback when a gesture is recognized.

Which "Touchable" component you use will depend on what kind of feedback you want to provide:

Generally, you can use `TouchableHighlight` anywhere you would use a button or link on web. The view's background will be darkened when the user presses down on the button.

You may consider using `TouchableNativeFeedback` on Android to display ink surface reaction ripples that respond to the user's touch.

`TouchableOpacity` can be used to provide feedback by reducing the opacity of the button, allowing the background to be seen through while the user is pressing down.

If you need to handle a tap gesture but you don't want any feedback to be displayed, use ` TouchableWithoutFeedback`.

### Demo

import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})

AppRegistry.registerComponent('AwesomeProject', () => Touchables);
