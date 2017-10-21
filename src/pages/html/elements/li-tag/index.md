---
title: Li Tag
---
## Li Tag

The `<li>` tag is used to create a list item element, and is therefore always used nested within either a `<ol>` or `<ul>` tag. You can also use it inside a `<menu>` tag to create a menu, but this is a somewhat less frequent use case.

In an ordered list, `<li>` appears as an item with a bullet point.

* First item
* Second item
* Third item

In an unordered list, `<li>` appears as a numbered item.

1. First item
2. Second item
3. Third item

```html
<!-- In a simple unordered list -->
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

<!-- In a simple ordered list -->
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### Nesting another list as an item

Besides creating individual items, you can also use `<li>` tags to create a nested list, ordered or unordered. To do this, you nest a `<ol>` or `<ul>` _within_ a `<li>` tag.

Here is an unordered list with a nested, ordered list.

* First item
* Second item
  1. First sub-item
  2. Second sub-item
* Third item

And here is an ordered list with a nested, unordered list.

1. First item
2. Second item
   * First sub-item
   * Second sub-item
3. Third item

```html
<!-- An unordered list with a nested, ordered list. -->
<ul>
  <li>First item</li>
  <li>Second item  <!-- No closing </li> tag before the nested list -->
    <ol>
      <li>First sub-item</li>
      <li>Second sub-item</li>
    </ol>
  </li>            <!-- The closing </li> tag comes after the nested list -->
  <li>Third item</li>
</ul>

<!-- An ordered list with a nested, unordered list. -->
<ol>
  <li>First item</li>
  <li>Second item  <!-- No closing </li> tag before the nested list -->
    <ul>
      <li>First sub-item</li>
      <li>Second sub-item</li>
    </ul>
  </li>            <!-- The closing </li> tag comes after the nested list -->
  <li>Third item</li>
</ol>
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)

