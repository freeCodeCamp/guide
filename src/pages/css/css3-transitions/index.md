## CSS3 Transitions

CSS transitions allow you to animate a change in a property from A to B.

Property | Description
--- | ---
`transition` | Shorthand property for all `transition-property`, `transition-duration`, `transition-delay`, `transition-timing-function`. The first timing value provided is the `transition-duration`.
`transition-delay` | An initial delay for beginning the transition. Defaults to `0s`.
`transition-duration` | The length of time the transition takes. Defaults to `0s`.
`transition-property` | The properties to a a transition to. Defaults to `all`.
`transition-timing-function` | A keyword or function that controls the intermediate values of the transition. Defaults to `ease`.

#### Eamples:

```CSS
// Default
transition: all 0s 0s ease;

// Only background-color
transition: background-color 3s;

// Custom timing function
transition-timing-function: cubic-bezier(0.1, 0.3, 0.6, 0.1);
```

#### CSS Animations

Transitions are good for A to B changes in properties. Complex animations need [CSS Animations](https://guide.freecodecamp.org/css/using-css-animations).

#### More Information:
* [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
* [W3 Schools](https://www.w3schools.com/css/css3_transitions.asp)
* [CSS-Tricks Almanac](https://css-tricks.com/almanac/properties/t/transition/)
