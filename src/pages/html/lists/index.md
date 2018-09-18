---
title: Lists
---

# Lists
Lists are used to display items. There are 3 types of lists.

## Ordered lists
An _ordered list_ is used to describe an ordered collection of data. Browsers usually display an ordered list as a numbered list. Create an ordered list using the `<ol>` tag.

## Unordered lists
An _unordered list_ is used to describe an unordered collection of data. Browsers usually display an unordered list as a bulleted list. Create an unordered list using the `<ul>` tag.

## List items
The direct children of ordered and unordered lists must be list items. Each list item is wrapped in an `<li>` tag. A list item tag can contain [flow content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content).

## Examples

An ordered list is written as
```HTML
<ol>
  <li>January</li>
  <li>February</li>
  <li>March</li>
</ol>
```
and is displayed as:
1. January
1. February
1. March

An unordered list is written as

```HTML
<ul>
  <li>Macintosh</li>
  <li>Fuji</li>
  <li>Gala</li>
</ul>
```
and is displayed as:
- Macintosh
- Fuji
- Gala


## Description lists

A description list is a list of terms, with a description of each term. A description list is made using the `<dl>` tag.
Each item in the list is made up of two tags: a term `<dt>`, and a description of that term `<dd>`.

Here is an example of a description list:
```HTML
<dl>
  <dt>Programming</dt>
  <dd>The process of writing computer programs.</dd>
  <dt>freeCodeCamp</dt>
  <dd>An awesome non-profit organization teaching people how to code.</dd>
</dl>
```

which would end up looking like:

<dl>
  <dt>Programming</dt>
  <dd>The process of writing computer programs.</dd>
  <dt>freeCodeCamp</dt>
  <dd>An awesome non-profit organization teaching people how to code.</dd>
</dl>


## More Information:

<!-- Please add any articles you think might be helpful to read before writing the article -->
* [HTML lists on w3schools](https://www.w3schools.com/html/html_lists.asp)

