---
title: React Native - Scroll View
---
## React Native - Scroll View

The ScrollView is a generic scrolling container that can host multiple components and views.
The scrollable items need not be homogenous, and you can scroll both vertically and horizontally
(by setting the horizontal property).

```js
import React, { Component } from ‘react’;
import { AppRegistry, View, Text } from ‘react-native’;

class App extends Component {
  render() {
        return (
          <ScrollView>
            <Text style={{fontSize:96}}>Scroll me plz</Text>
            <Text>First Value</Text>
            <Text>Second Value</Text>
            <Text>Third Value</Text>
            <Text>Fourth Value</Text>
            <Text>Fifth Value</Text>
            <Text style={{fontSize:96}}>If you like</Text>
            <Text>Sixth Value</Text>
            <Text>Seventh Value</Text>
            <Text>Eighth Value</Text>
            <Text>Ninth Value</Text>
            <Text>Tenth Value</Text>
            <Text style={{fontSize:96}}>Scrolling down</Text>
            <Text>First Scroll Value</Text>
            <Text>Second Scroll Value</Text>
            <Text>Third Scroll Value</Text>
            <Text>Fourth Scroll Value</Text>
            <Text>Fifth Scroll Value</Text>
            <Text style={{fontSize:96}}>Whats the best</Text>
            <Text>Sixth Scroll Value</Text>
            <Text>Seventh Scroll Value</Text>
            <Text>Eighth Scroll Value</Text>
            <Text>Ninth Scroll Value</Text>
            <Text>Tenth Scroll Value</Text>
            <Text style={{fontSize:80}}>React Native</Text>
          </ScrollView>
      );
    }
  }

```
Usage of scroll view
