---
title: A Complete Guide to Flexbox
---
## A Complete Guide to Flexbox

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/tutorials/a-complete-guide-to-flexbox/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

CSS Flexible Box Module is a great technique to learn in order to ensure responsive overall design, with the intention of helping you manage space between elements. Flexbox is often reffered to as being one dimensional, meaning it works with your layout one iteration at a time, as either a row or a column.

This differs to <a href='https://guide.freecodecamp.org/css/css3-grid-layout' target='_blank'>CSS Grid</a> items which influences both columns and rows together, and respectfully is described as 2-dimensional. Although CSS Grid is considerably more powerful, it isn't supported by all browsers, a similarity that's shared with Flexbox. They are also similar in the fact that they are efficient - alignment is dynamic, even when an items size is unknown, which is great at accomodating different displays and screen sizes.

Flexbox is as complex as you want it to be, so feel free to read up more on the theory and practical uses of it - it's quite deep. For the purposes of this introduction, you won't need to look into the theory just yet - but it's recommended.

Take the following, simple code snippet. Note that all we've done is added ```code display: flex;``` to the ```code .container``` element of our CSS, causing our content to shift from a column to a row-shape with spaces in between the items.  

```css
<style>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
<nav class="container">
  <div>Menu</div>
  <div>Search</div>
  <div>Feeling-lucky</div>
</nav>
```

By adding ````code justify-content:``` property and the ```code space-between;```, you add evenly distributed space between the ```code Menu```, ```code Search```` and ```code Feeling-lucky``` along the 'main-axis' - more on this in a bit. Flexbox makes the entire layout process simplified as you don't need any ```code float```s or ```code @media``` breakpoints to support responsiveness. 

When it starts to get more complex, you can further modify and customize the ```code .container``` with different parent and child properties, such as ```code flex-wrap:``` to change items wanting to all fit on one line, or ```code align-items:```, which defines items along the 'cross-axis' (again, more on that later). We'll look at more flex containers and flex item in a bit. 

Here's a look at some standalone CSS code which reiterates how making centering can be really quick and simple:

```css 
.container {
display: flex;
height: 100px;
}

.item {
height: 50px;
width: 50px;
margin: auto;
```

Having the ```code margin``` property set to ```code auto;``` centers the item against both axis. 

<!-- could now touch on some back-ground about the main and cross axis, and parent and child flex properties -->


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
MDN as usual, give a thorough <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox' target='_blank'> break-down</a> of the subject matter and heavily influenced the content in this tutorial. 
<a href="https://css-tricks.com" target="_blank">CSS tricks</a> is also a huge infuencer on this article.
