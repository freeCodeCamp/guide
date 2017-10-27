---
title: Transition
---
## Transition

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/transition/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

- The `transition` property let's you delay the change of a CSS value by a certain amount of time. 
- You can set a transition on a particualr CSS property, or on all of them.
- The time delay is specified in seconds
- The `transition` is applied on the base selector and not on any of the pseudo-selectors (like `:hover`, `:active` etc.)
- Transitions can make any change in CSS values look smooth 

```css
transition: all 3s /* make all CSS values changes take 3 seconds to happen */
transition: background-color 3s /* only apply the transition to background-color */
transition: height 3s, width 3s, background 3s /* provide multiple transitions as a comma separated list */
```


### Examples

The following code will space out the change of all properties (in this case `height`, `width`, and `background-color`) over 3 seconds (i.e. it'll take the background-color 3 seconds to change from _aqua_ to _coral_)

```css
.box {
  width: 100px;
  height: 100px;
  background: aqua;
  
  transition: all 3s;
}

.box:hover {
  width: 200px;
  height: 200px;
  background: coral;
}
```

<p data-height="300" data-theme-id="31402" data-slug-hash="POoZEG" data-default-tab="css,result" data-user="aamnah" data-embed-version="2" data-pen-title="POoZEG" class="codepen">See the Pen <a href="https://codepen.io/aamnah/pen/POoZEG/">POoZEG</a> by Aamnah Akram (<a href="https://codepen.io/aamnah">@aamnah</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [MDN Web Docs: CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

#### Other Resources
- [PAID Video Course: Mastering CSS Transitions, Transforms & Animations](https://codyhouse.co/course/mastering-css-transitions-transformations-animations/)

