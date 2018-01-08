---
Title: Actions
---
# Actions in Redux

Actions in Redux are plain JavaScript objects that represent payloads of information that send data from your application to your store. Actions are the only source of information for the store, and are sent with `store.dispatch()`.

## What are Actions

```
const ADD_TOTO = 'ADD_TODO' // Define ADD_TODO action type
```

```
// Action
{
  type: ADD_TODO, // Action type
  text: 'Todo Text' // Action payload 
}
```

Actions must have a `type` property that indicates the type of the action. These types should typically be defined as string constants as demonstrated above. Other than type, the structure of the action can be defined by you. Refer to the [Flux Standard Action](https://github.com/acdlite/flux-standard-action) for recommendations on how actions could be structured.

## Action Creators

Action creators are functions that create actions. In Redux, action creators simply return an action:

```
function addTodo(text) {
  return 	{
    type: ADD_TODO,
    text
  }
}
```

To initiate a dispatch, pass the result to the dispatch() function:

```
dispatch(addTodo(text))
```

Alternatively, create a **bound action creator** that automatically dispatches:

```
const boundAddTodo = text => dispatch(addTodo(text))
```

Now you can call them directly

```
boundAddTodo(text)
```

The `dispatch()` function can be accessed directly from the store as `store.dispatch()`, but you can also access it using [react-redux](https://github.com/reactjs/react-redux)'s `connect()`.
