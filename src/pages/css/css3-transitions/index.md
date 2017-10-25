---
title: CSS3 Transitions
---
## CSS3 Transitions

### The Transition Property
There are four different properties which describe the Transition, these are:
```css
.btn {
  transition-property: opacity;
  transition-duration: .5s;
  transition-timing-function: ease-in-out;
  transition-delay: 100ms;
}
```
So what does each of these properties do?
With `transition-property` you should specify which properties should be animated, for example:
```css
.btn {
  transition-property: opacity;
}
```
If you are lazy, you can use a special keyword "all" to animate all properties:
```css
.btn {
  transition-property: all;
}
```

The `transition-duration` sets the duration of the animation. You can use seconds or milliseconds like this:
```css
.btn {
  transition-duration: .5s;
  transition-duration: 500ms;
}
```

`transition-timing-function` specifies the speed curve of the animation and can take the following options and play around with them:
```css
.btn {
  transition-timing-function: linear;
  transition-timing-function: ease;
  transition-timing-function: ease-in;
  transition-timing-function: ease-out;
  transition-timing-function: ease-in-out;
  transition-timing-function: cubic-bezier(n, n, n, n);
}
```

`transition-delay` is just the delay before the element is animated between a change of state and works similar to the duration:
```css
.btn {
  transition-delay: .5s;
  transition-delay: 500ms;
}
```
## Shorthand
There also is a shorthand property which is simply named `transition`:
```css
.btn {
  transition: all .5s ease-out 100ms;
}
```

## Example
As an example you can style a simple button, which is animated on hover. First create the basic button:
```css
.btn {
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 2px;
  color: #000;
  cursor: pointer;
  display: inline-block;
  padding: 10px 50px;
}
```

Then you add the `:hover` state:
```css
.btn:hover {
  background-color: #000;
  color: #fff;
}
```

Now you should already see a button which inverts its color when you hover your mouse over it.

Then you add the transition to the base `.btn` class:
```css
.btn {
  transition: all .3s ease;
}
```

And there you go, your button is now really fancy!

For the finished result visit this [Codepen](https://codepen.io/mrcrmn/pen/jGjmRM).

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


