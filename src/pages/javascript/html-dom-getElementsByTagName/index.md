---
Title: Element getElementsByTagName
---

When working with the HMTL DOM (Document Object Model), it is sometimes nessecary to transverse all the decendant elements of a specified element. Element.getElementsByTagName is a method which will return a collection of all elements beneath a specified element, **excluding the parent element** that you specify.

Example syntax:

```javascript
let elements = element.getElementsByTagName(tagName);
```

Example usage:

```javascript
let articleParagraphs = article.getElementsByTagName("p");
```

You can also use "*" to get all elements below the specified one, regardless of the tag name.

```javascript
let allDescendants = main.getElementsByTagName("*");
```

More information:

[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)
