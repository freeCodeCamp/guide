---
title: Li Tag
---
## Li Tag

The `<li>` tag defines a list item in a list. The `<li>` tag can be used with unordered lists (`<ul>`), ordered lists (`<ol>`), and menus (`<menu>`). To define a list item, wrap the desired elements in an `<li>` tag. `<li>` elements must be contained inside a parent element that is a list.

### Example

```
<body>
  <ul>
    <li>
      <p>I'm a list item</p>
    </li>
    <li>
      <p>I'm a list item too</p>
    </li>
    <li>
      <p>Me three/p>
    </li>
  </ul>
</body>

```

### Attributes

The `<li>` element has the following elements:

#### Type

The `type` attribute defines the numbering type that will be used in the list. The following values are used to determine which numbering style will be used:

* `1`: numbers
* `a`: lowercase letters
* `A`: uppercase letters
* `i`: lowercase numerals
* `I`: uppercase numerals

#### Example

The following HTML

```
<body>
  <ol type="I">
    <li>list item</li>
    <li>list item</li>
    <li>list item</li>
  </ol>
</body>

```
Will output

<ol type="I">
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
</ol>

#### Value

The `value` attribute specifies the numeric order of the current `<li>`. This attribute only accepts a numeric value and can only be used with an ordered list. Any list items that follow will be ordered numerically based on the numeric input of the `value` attribute.

#### Example

The following HTML

```
<body>
  <ol>
    <li value="4">list item</li>
    <li>list item</li>
    <li>list item</li>
  </ol>
</body>

```
Will output

4. list item
5. list item
6. list item

