---
title: CSS Classes
---
## CSS Classes

In html, there are several ways to stylize an element. The most popular is using css classes.

In **any** html element, you can add an attribute `class` with the value of the class you want
to apply.

For example:
```css
/* styles.css */
.my-class {
  color: red;
}
```
```html
<!-- head, meta and link to *style.css* -->
<!-- ... -->
<body>
  <h1 class="my-class" >Hello World!</h1>
</body>
```
will render an `h1` with red text.

You can specify more classes to the same element separating them with a space. For example:

```html
<h1 class="main error">...</h1>
```
`h1` has both `main` and `error` classes.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[CSS class Selectors](https://guide.freecodecamp.org/css/class-selector)  
[HTML class attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)

