---
title: Create a Redux Store
---
## Create a Redux Store

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/redux/create-a-redux-store/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

### Example from document  

#### [reduc doc](http://cn.redux.js.org/docs/api/createStore.html)  

here we get an easy example  

*function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}*
*let store = createStore(todos, ['Use Redux'])*

####
take this into consideration
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
#####
here reducer is like the todo , and what we can do is create a store veriable and pass a state
to satisfy the createStore(reducer,...)

