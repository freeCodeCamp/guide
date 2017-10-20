---
title: CSS Classes
---
## CSS Classes

Adding CSS classes to HTML is a way to make your HTML code clean, and avoid having inline-CSS. Having a CSS class allows you to select an element (or elements) and target them in your CSS via a selector, and is mainly used when you have many elements with similar properties. For example, in an FAQ page you may have many elements on the page for questions and answers, and you may want them all to have the same CSS properties applied to them so they look the same. Multiple IDs for each question makes your CSS code messy, and is unnecessary. This is where CSS classes come in!

Pretend you have some container ```div```:
```html
<div><a href="https://www.freecodecamp.org/">freeCodeCamp</a></div>
```

Classes are a great way to select multiple elements at once. If you have multiple containers in your HTML code that you want to select, all you need to do is to assign each container a class using the keyword ```class```.

## Example
```html
<div class="random-link"><a href="https://www.freecodecamp.org/">freeCodeCamp</a></div>
```

Then, in your CSS, you can select it using the full stop ```.``` selector, like so.

```css
.random-link{
  //some css here
}
```

This CSS will be applied to all elements with the class ```random-link``` assigned to it.
