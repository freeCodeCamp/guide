---
Title: Element getElementsByTagName
---

## Element.getElementsByTagName
The getElementsByTagName method returns all elements below a specified element, excluding the element that is specified. This HTML collection that is returned is live, meaning that it is updated in real time as the DOM changes.

Example syntax:

```javascript
let elements = element.getElementsByTagName(tagName);
```

Example usage:

```javascript
let articleParagraphs = article.getElementsByTagName("p");
```

A star can also be used in order to select all descendants of the specified element, regardless of the tag name:

```javascript
let allDescendants = main.getElementsByTagName("*");
```

More information:

[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)
