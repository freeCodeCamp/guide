---
title: Units
---
## Units
Most of the time, programmers will need to set the length of the different elements on their pages to fit with their designs.  The "Length" is defined as a <b>number followed by the unit selected</b>, for example: 100px, 2rem, 50vh etc. In CSS exist to kind of length  units, the <i>relative lenght units</i> and the <i>absolute length units</i>.<br><br>
<h4>Rules for using CSS Length Units</h4>
<ul>
  <li>If the lenght established is zero (0), then there is no need to set the length unit.</li>
  <li>CSS won't recognize the length if there is a whitespace between the number and the unit.</li>
  <li>Negative length are allowed depending of the CSS property been modified. </li>
</ul>
<h3>The relative length units:</h3>
These are units that <i>determine the length an element based on another length value </i> from a differente or the same element. The relative length units scale better between different render mediums and are commonly used in responsive web design. For example, em and rem units are practical in creating perfectly scalable layout, full height landing pages are created using vh unit etc.
<ul>
  <li><b>rem</b>: Relative to font-size of the root element.</li>
  <li><b>em</b>: Relative to the font-size of the element (2em means 2 times the size of the current font).</li>
  <li><b>vw</b>: Relative to 1% of the width of the viewport*.</li>
  <li><b>vh</b>: Relative to 1% of the height of the viewport*.</li>
  <li><b>vmin</b>: Relative to 1% of viewport's* smaller dimension.</li>
  <li><b>vmax</b>: Relative to 1% of viewport's* larger dimension.</li>
  <li><b>ex</b>: Relative to the x-height of the current font (rarely used)</li>
  <li><b>ch</b>: Relative to width of the "0" (zero).</li>
</ul>
<h3>The absolute length units:</h3>
These are units that <i>determine the length an element based on fixed and mesurable distances </i>as pixels or inches. The absolute length units are not recommended for use on screen,because screen sizes vary so much.
<ul>
  <li><b>px</b>: pixels (1px = 1/96th of 1in).</li>
  <li><b>pt</b>: points (1pt = 1/72 of 1in).</li>
  <li><b>cm</b>: centimeters.</li>
  <li><b>mm</b>: millimeters.</li>
  <li><b>in</b>: inches (1in = 96px = 2.54cm).</li>
  <li><b>pc</b>: picas (1pc = 12 pt).</li>
</ul>

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


