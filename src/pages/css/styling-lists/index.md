---
title: Styling Lists
---
## Styling Lists

<!--
This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/styling-lists/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.
-->
<!--
<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.
-->

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
### HTML Lists Recap

There are two main types of lists in HTML &mdash; **Ordered** and **Unordered**.

In **Ordered** lists (`<ol></ol>`), the order of the list items is important. The items may appear in order by numbers, roman numerals, alpha numerals, etc. The default markers for ordered lists appear as numbers (or decimals), such as in the example below:

> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/ordered-list.png?raw=true" width="350" title="ordered list">

In **Unordered** lists (`<ul></ul>`), the order of the list items does not matter. The items appear in bullet format. The default marker for unordered lists is a round bullet point or `disc`.

> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/unordered-list.png?raw=true" width="350" title="unordered list">

Each list item within an ordered or unordered list is surrounded by the `<li></li>` tag.

### List-Specific Styles

There are three common properties specific to styling lists: `list-style-type`, `list-style-position`, and `list-style-image`. There is also a shorthand property which includes all three.

#### `list-style-type`

The markers that appear in ordered and unordered lists can be styled in a variety of ways. The CSS property for styling the marker type is `list-style-type`. The default value for ordered lists is `decimal`, whereas the default for unordered lists is `disc`.

Ordered list example:
> ```css
> /* css */
> ol {
>   list-style-type: upper-roman;
> }
> ```
> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-upper-roman.png?raw=true" width="350" title="list-style-type upper-roman">

Unordered list example:
> ```css
> /* css */
> ul {
>   list-style-type: square;
> }
> ```
> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-square.png?raw=true" width="350" title="list-style-type square">

No marker example:
> ```css
> /* css */
> ul {
>   list-style-type: none;
> }
> ```
> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-none.png?raw=true" width="350" title="list-style-type none">

Accepted values for the `list-style-type` property include:

*Unordered:*
* disc (_default_)
* circle
* square

*Ordered:*
* decimal (_default_)
* decimal-leading-zero
* lower-roman
* upper-roman
* lower-greek
* lower-latin
* upper-latin
* armenian
* georgian
* lower-alpha
* upper-alpha

*Other:*
* none

Note: it is possible to use all values above for styling both ordered and unordered lists, whether or not they signify an order.

#### `list-style-position`

`list-style-position` controls whether the list marker appears inside or outside of each individual list item element (`<li></li>`), and accepts two values, `outside` (default) or `inside`.

With the marker positioned outside of the list item element, all text lines and sublines of each list item will align vertically.

> ```css
> /* css */
> ul {
>   list-style-position: outside; /* default */
> }
> ```
> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-position-inside.png?raw=true" width="350" title="list-style-position outside">


If the marker is positioned inside of the list item element, the first line of text of each list item will be indented to make room for the marker, and any sublines of the same list item will align with the marker rather than the first line of text. 

> ```css
> /* css */
> ul {
>   list-style-position: inside;
> }
> ```
> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-position-outside.png?raw=true" width="350" title="list-style-position inside">

#### `list-style-image`

The `list-style-image` property accepts an image url in place of the list marker. The default value for this property is `none`. 
> ```css
> /* css */
> ul {
>   list-style-image: url(https://url-to-image);
> }
> ```

#### `list-style` Shorthand

`list-style` is a shorthand property for the three style properties listed above. The order of values `list-style` accepts is `list-style-type`, `list-style-position`, and `list-style-image`. If any value is omitted, the default value for that property will be used. 

> Example: 
> ```css
> /* css */
> ul {
>   list-style: circle inside none;
> }
> ```
> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-shorthand.png?raw=true" width="350" title="list-style shorthand">

####  Additional List-Specific Styling

Certain attributes can also be added to the list element to control the flow, count, or specific values of ordered list items, such as the `start`, `reversed`, and `value` attributes. See the MDN resources listed below for further details.

### General Styling

There are many more ways to style lists besides the list marker. `color`, `font-family`, `margin`, `padding`, or `border` are just a few examples of properties that can be added to either the `ul`, `ol`, or `li` elements that make up a list.

Note that any styles added to the `ul` or `ol` element will affect the entire list, while any styles added directly to the `li` elements will affect the individual list items. For example, the `border` and `background-color` properties have been styled differently between the list and list item elements below:

> ```css
> /* css */
> ul {
>   list-style-type: circle;
>   border: 2px solid blue;
>   background-color: lightblue;
> }
> li {
>   margin: 5px;
>   background-color: lightyellow;
> }
> ```
> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/border-styles.png?raw=true" width="350" title="list-style general styling">

#### List Spacing

Should you choose not to display any list markers, you may notice there still remains extra spacing in front of the list items. To override the default padding or margin of lists, one solution is to set `margin` and/or `padding` on the `ol` or `ul` element to `0`, or to whatever amount spacing that is preferred. 

> ```css
> /* css */
> ul {
>   list-style: none;
>   padding: 0;
> }
> li {
>   padding: 5px 10px;
>   background-color: #EEEEEE;
>   border: 1px solid #DDDDDD;
> }
> ```
> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-padding.png?raw=true" width="350" title="list-style general styling">

---
#### Sources:

The links listed below were referenced in compiling the information found in this article. Please visit them for further details regarding this topic.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[MDN - Styling Lists](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists)

[W3Schools - CSS Lists](https://www.w3schools.com/css/css_list.asp)

[CSS Tricks - list-style](https://css-tricks.com/almanac/properties/l/list-style/)

