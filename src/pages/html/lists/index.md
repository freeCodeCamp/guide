---
title: Lists
---
## Lists
Lists are used to display items. There are 3 types of lists.

#### Unordered and ordered lists
Ordered lists are another word for numbered lists. You create an ordered list using the `<ol>` tag.
Ordered lists are another word for bulleted lists. You create an unordered list using the `<ul>` tag.

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

#### Description lists
A description list is a list of terms, with a description of each term. A description list is made using the `<dl>` tag.
Each item in the list is made up of two tags: a term (`<dt>`), and a description of that term (`<dd>`).

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
<a href='https://www.w3schools.com/html/html_lists.asp' target='_blank' rel='nofollow'>HTML lists on w3schools</a>
