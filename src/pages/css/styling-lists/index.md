---
title: Styling Lists
---
## Styling Lists

#### List-style
It is multipurpose property which allows us to specify all the list properties in one declaration. With this property we can set the marker style, its position, and the image that will be used as a marker.

#### Syntax
list-style: list-style-type || list-style-position || list-style-image | inherit

```
ul {
  list-style: square outside url("some-marker-image.gif");
}
```
Combination of the three values should be separated by space. Values come in the strict order: marker type, position and picture. No value is required, so you can skip unused values.

#### List-style-type
Changes the appearance of the marker for each list item. This property is used only if the value of list-style-image is set to none.

#### List-style-position
Specifies how the marker will be placed relative to the text. There are two values: outside and inside the content flow.

#### List-style-image
Sets the address of the image that  that will be used as a marker.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='https://www.w3schools.com/cssref/pr_list-style.asp' target='_blank' rel='nofollow'>List-style on w3schools</a>
<a href='https://www.w3schools.com/cssref/pr_list-style-type.asp' target='_blank' rel='nofollow'>List-style-type on w3schools</a>
<a href='https://www.w3schools.com/cssref/pr_list-style-image.asp' target='_blank' rel='nofollow'>List-style-image on w3schools</a>
<a href='https://www.w3schools.com/cssref/pr_list-style-position.asp' target='_blank' rel='nofollow'>List-style-position on w3schools</a>
