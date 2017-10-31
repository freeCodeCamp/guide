---
title: How to Use Links
---
# How to use links

Links can be added to an html element using [anchor tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) (`<a>`).
Each anchor tag has an `href` attribute that defines the action of the link.

## Types of references

The `href` attribute can contain a reference to:

- an external page

  ```html
  <a href="https://www.example.com/jenny">An external link</a>
  ```
  
  [An external link](https://www.example.com/jenny)

- an element in the same page

  ```html
  <a href="#how-to-use-links">An internal link</a>
  ```
  
  [An internal link](#how-to-use-links)
  
- an email address

  ```html
  <a href="mailto:jenny@example.com">Jenny's email</a>
  ```
  
  [Jenny's email](mailto:jenny@example.com)
  
- a phone number

  ```html
  <a href="tel:+15558675309">Jenny's number</a>
  ```
  
  [Jenny's number](tel:+15558675309)

## Tag content

The body of an anchor tag can contain text, or can contain other elements such as images.

```html
<a href="http://www.fillmurray.com/">
  <img src="http://www.fillmurray.com/51/51" alt="Bill Murray">
</a>
```

<a href="http://www.fillmurray.com/">
  <img src="http://www.fillmurray.com/51/51" alt="Bill Murray">
</a>

## Other attributes

To ask browsers to open a link in a new tab, add a `target=_blank` attribute to the anchor tag.

```html
<a href="https://www.example.com/new-tab" target="_blank">This link will open in a new tab</a>
```

<a href="https://www.example.com/new-tab" target="_blank">This link will open in a new tab</a>

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


