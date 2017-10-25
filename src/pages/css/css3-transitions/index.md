---
title: CSS3 Transitions
---
## CSS3 Transitions

CSS3 transitions allows you to change property values smoothly (from one value to another), over a given duration.

```
div {
    width: 100px;
    height: 100px;
    background: red;
    -webkit-transition: width 2s; /* Safari */
    transition: width 2s;
}
```

The transition effect will start when the specified CSS property (width) changes value.

Now, let us specify a new value for the width property when a user mouses over the <div> element:

```
div:hover {
    width: 300px;
}
```

Notice that when the cursor mouses out of the element, it will gradually change back to its original style.

#### More Information:
[How to Use CSS3 Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
)


