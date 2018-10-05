---
title: Using CSS Transitions
---
## Using CSS Transitions
CSS transitions allows you to change property values smoothly (from one value to another), over a given duration.To create transition effect you must ensure about two things:
1. the CSS property that you have to apply
2. the transition duration of it
The transition effect will start when you hover the element on which CSS property is applied.
**Example**
```html
div {
    width: 100px;
    height: 100px;
    background: red;
    -webkit-transition: width 2s; /* Safari */
    transition: width 2s;
}
```
```html
    div:hover {
    width: 300px;
} 
```
## Speed Curve
We can specify the time speed curve for the transition.The various transition-timing-functions are:
1. ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
2. linear - specifies a transition effect with the same speed from start to end
3. ease-in - specifies a transition effect with a slow start
4. ease-out - specifies a transition effect with a slow end
5. ease-in-out - specifies a transition effect with a slow start and end
6. cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function

**Example**
**Delay Transition**
```css
div {
    -webkit-transition-delay: 1s; /* Safari */
    transition-delay: 1s;
}
```

**Transition + Transformation**
```css
div {
    -div {
    transition-property: width;
    transition-duration: 2s;
    transition-timing-function: linear;
    transition-delay: 1s;
}
}
```


<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
[For more about transitions refer W3school](https://www.w3schools.com/Css/css3_transitions.asp)


