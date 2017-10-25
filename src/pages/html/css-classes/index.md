---
title: CSS Classes
---
## CSS Classes

Classes are an efficient way of grouping HTML elements so that they can share the same styles.

---

When you're writing HTML you can add a class to an element, just adding the attribute `class="myclass"` to the element.

#### Example

```html

<h1 class="superMan">"Here I come to save the day!"</h1>

<p> is a popular catchphrase that <span class="superMan">Super Man </span>often said.</p>

```

Then  in our CSS file we should add the special attributes to the class.

```css
.superMan {
color: red;
background-color: blue;
}

```

Notice that classes have the prefix of a period (.) in CSS, but in your HTML the period is not necessary.

You can see the result of the above code [here](https://codepen.io/Tlandis/pen/RLvomV).
#### More Information:

- [Class - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)
- [HTML Classes](https://www.w3schools.com/html/html_classes.asp)



