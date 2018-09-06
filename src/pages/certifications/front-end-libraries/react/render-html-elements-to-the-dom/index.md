---
title: Render HTML Elements to the DOM
---
## Render HTML Elements to the DOM

Within the ReactDOM, the 'JSX' is the React component that you want to render, and 'div' is the DOM node to render to.
**Solution**

<div>
```jsx

const JSX = (
  <div class='challenge-node'>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'))
</div>
```
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

