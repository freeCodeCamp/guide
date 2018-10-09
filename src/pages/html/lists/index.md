---
title: Lists
---
## Lists
Lists are used to display items. There are 3 types of lists.

#### Ordered and Unordered lists
Ordered lists are another word for numbered lists. You create an ordered list using the `<ol>` tag.
Unordered lists are another word for bulleted lists. You create an unordered list using the `<ul>` tag.

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

Ordered lists can be displayed with several sequencing options. The default in most browsers is decimal numbers, but there are others available.

#### Ordered HTML List - The Type Attribute

The type attribute of the <ol> tag, defines the type of the list item marker:

type="1"; The list items will be listed with numbers

type="A"; The list items will be numbered with uppercase letters

type="a"; The list items will be numbered with lowercase letters

type="I"; The list items will be numbered with uppercase roman numberals

type="i"; The list items will be numbered with lowercase roman numberals

i.e. To create an ordered list using lower case laters we would use the syntax:

<ol type="a">
  <li>Water</li>
  <li>Fire</li>
  <li>Air</li>
</ol>  

and would the result would display:

a. Water
b. Fire
c. Air

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
