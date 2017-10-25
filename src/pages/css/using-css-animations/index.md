---
title: Using CSS Animations
---
## Using CSS Animations
With the CSS animation property you can change the styling of an HTML element when the element is clicked, hovered, following a preset delay or if the element is "triggered" in some way. The sub-properties (and their default values) are:

+ animation-name: none
+ animation-duration: 0s
+ animation-timing-function: ease
+ animation-delay: 0s
+ animation-iteration-count: 1
+ animation-direction: normal
+ animation-fill-mode: none
+ animation-play-state: running

The sub-properties defined the sequence of the CSS animation and the @keyframes define the appearance.

### Standard CSS Animation Syntax

``` css
/* @keyframes duration | timing-function | delay | 
iteration-count | direction | fill-mode | play-state | name */
animation: 5s ease-in 1s infinite reverse both running growbig

@keyframes growbig {
  from {
    width: 100%;
  }

  to {
    width: 300%;
  }
}
```

### Let's explore each sub-property
#### [animation-name](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name)
This is how you define which @keyframes to use, you can specify one or more
``` css
animation-name: just-one;
animation-name: keyframes1, slides, loop;
```
#### [animation-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration)
How long it takes for the animation to complete a cycle
``` css
animation-duration: 2s;
animation-duration: 2000ms;
```
#### [animation-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)
This property decides how the animation should flow during the cycle
``` css
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end; 
```
#### [animation-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay)
Tells the animation when to start
``` css
animation-delay: 5s;
/* A delay of 0s will begin the animation immediately */ 
animation-delay: 0s;
/* A negative value will start the animation immediately but that much further into the sequence */
animation-delay: -1500ms; 
```
#### [animation-iteration-count](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count)
How many times to run the animation sequence
``` css
animation-iteration-count: infinite;
animation-iteration-count: 3.1;
animation-iteration-count: 6, 0, infinite;
```
#### [animation-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)
This dictates if the animation will play forwards, backwards, or alternating in some way
``` css
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;
```
#### [animation-fill-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)
The fill-mode tells the animated element which styling to retain when the sequence is over
``` css
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;
```
#### [animation-play-state](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state)
Whether the animation is currently active or paused
``` css
animation-play-state: running;
animation-play-state: paused;
```

### @keyframes
Keyframes create starting and ending points for your animation, as well as guide the sequence to make a smoother transition. The keyframes you define can go **from** -> **to** or from **0%** to **100%**. Using percentages gives you a greater range of points to alter the appearance of your animated element.  
``` css
@keyframes myfirstkeyframe {
  from { background-color: black;}
  to   { background-color: blue;}
}

@keyframes percentageKeyframes {
  0% { background-color: black;}
  50% { background-color: white;}
  75% { width: 50%;
        background-color: red; }
  100%   { background-color: blue;}
}
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [MDN CSS Animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
* [MDN CSS @Keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
* [Background Color Changer - CodePen by Steve Calamia](https://codepen.io/metagrapher/pen/tgcLl)


