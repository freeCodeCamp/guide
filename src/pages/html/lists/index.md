---
title: Lists
---
## Lists
Lists are used to display multiple items. There are 3 types of lists.

#### Unordered and ordered lists
Ordered lists are numbered lists. You create an ordered list using the `<ol>` tag.
Unordered lists are bulleted lists. You create an unordered list using the `<ul>` tag.

Within the `<ol>` or `<ul>` tags, you need to put the items in the list. You add them using a `<li>` tag. Here is an example of an unordered list with items:
```HTML
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

This would display as:
* Item 1
* Item 2
* Item 3

An ordered list would display as:
1. Item 1
2. Item 2
3. Item 3

Lists can also be easily nested within each other, for example:

<ol>
  <li>Blue</li>
    <ul>
      <li>Indigo</li>
      <li>Aqua</li>
    </ul>
  <li>Red</li>
    <ul>
      <li>Burgundy</li>
      <li>Maroon</li>
    </ul>
  </ol>


### Different markers 
You can use `<ol type="">` or `<li type="">` to specify the kind of marker to use in the list

```HTML
<ol type="a">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

This would display as: 

a. Item 1 

b. Item 2 

c. Item 3



#### Description lists
A description list is a list of terms, with a description of each term. A description list is made using the `<dl>` tag.
Each item in the list is made up of two tags: a term `<dt>`, and a description of that term `<dd>`.

Here is an example of a description list:
```HTML
<dl>
  <dt>Programming</dt>
  <dd>The process of writing computer programs.</dd>
  <dt>freeCodeCamp</dt>
  <dd>An awesome non-profit orgainzation teaching people how to code.</dd>
</dl>
```
Which would end up looking like so:
<dl>
  <dt>Programming</dt>
  <dd>The process of writing computer programs.</dd>
  <dt>freeCodeCamp</dt>
  <dd>An awesome non-profit orgainzation teaching people how to code.</dd>
</dl>

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [HTML lists on w3schools](https://www.w3schools.com/html/html_lists.asp)

