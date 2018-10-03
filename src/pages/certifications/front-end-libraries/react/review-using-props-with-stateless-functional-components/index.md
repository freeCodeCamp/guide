---
title: Review Using Props with Stateless Functional Components
---
## Review Using Props with Stateless Functional Components
<a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/react/review-using-props-with-stateless-functional-components/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

### Hints
  - A functional(a.k.a. stateless) component is just a plain javascript function which takes props as an argument and returns a react element
  - Use `Component.defaultProps` to set default props
  - Use `Component.propTypes` to set props types

### Solution
```
const Camper = props => (<p>{props.name}</p>);

Camper.defaultProps = {
  name: 'CamperBot'
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};
```

### Relevant link
  - [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
