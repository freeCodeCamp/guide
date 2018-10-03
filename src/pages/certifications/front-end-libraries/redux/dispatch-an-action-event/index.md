---
title: Dispatch an Action Event
---
## Dispatch an Action Event

### Solution

````javascript
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction());
`````
