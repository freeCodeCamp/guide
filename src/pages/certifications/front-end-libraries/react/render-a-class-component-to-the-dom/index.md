---
title: Render a Class Component to the DOM
---
## Render a Class Component to the DOM

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/react/render-a-class-component-to-the-dom/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
---
title: Render a Class Component to the DOM
---

Your code should end up looking similar to this:

```javascript
class TypesOfVehicles extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
          <h1>Types of Vehicles:</h1>
          <Car />
          <Motorcycle />
          </div>
        );
    }
}
ReactDOM.render(<TypesOfVehicles />,'node-id')
```
The ReactDOM.render syntax may be a little tricky, you need to use the triangle brackets when passing in a Class Component. Also the two subcomponents are declared behind the scenes, which may be confusing if you are used to all the variables being defined in the code editor in front of you.
