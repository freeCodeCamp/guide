---
title: Redux
---
## Redux

Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
A basic structure of a redux application relying on redux is composed of three sections:
1. Actions
 - The actions are what will be triggered either by a user interaction or a component change and will send out information to the reducer to apply some changes to the application state.
 
2. Reducers
 - A reducer only has one responsibility to be concerned, how the application present state will change in response of a action being triggered.
 - It's composed of nothing more than a function that will check if a certain action has been triggered and act accordingly to that.
 - It's going to compute what the next state will be and return it, always by copying the previous state. And never mutating itself.
3. Store
  - The store is nothing more than an object that will connect both of the items above.
  - The responsibilities of the store are the following:
    - Contain the application state.
    - Allow access to the state of the application via a special function inside the redux package named ```getstate();```
    - Allow the state to be updated via another special function  inside the package redux named ```dispatch(action);```
    - Register the state changing listeners via another special function  inside the redux package named ```subscribe(listener);```
    - Unregistering the state changing listeners via another special function  inside the redux package named ```subscribe(listener);```



For more information head to <a href='http://redux.js.org/' target='_blank' rel='nofollow'>http://redux.js.org/</a>

