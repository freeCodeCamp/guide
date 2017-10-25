---
title: Responsive Web Design
---
## Responsive Web Design

Responsive Web Design is an approach to web design that intentionally accomodates different screen sizes using the same codebase. Designers achieve responsive design using media queries, CSS grids, or other dedicated frameworks.

#### 1. Media queries

Media queries tell the web browser to ignore or replace properties of the webpage based on specific attributes like screen width or whether the user is printing.

```css
@media (query) {
  /* The browser will use the CSS rules within the curly braces when the query is true */
}
```

The following example sets `padding-left` and `padding-right` within the class `more-padding` when the screen width is less than or equal to 768px.

```css
@media screen and (max-width: 768px) {
    .more-padding {
        padding-left: 10px;
        padding-right: 10px; 
    } 
}
```

##### 2. CSS Frameworks

CSS frameworks like [Bootstrap](https://www.getbootstrap.com) and [Foundation](https://foundation.zurb.com/) have pre-built CSS classes that make responsive design coding simpler. These classes operate like standard HTML classes.

In this example, `col-md-9` and `col-sm-6` set the width of the `<div>` tag based on whether the screen is small or medium. 

```html
<div class="col-md-9 col-sm-6"></div>
```

The [Bootstrap](https://www.getbootstrap.com) framework divides a row into twelve columns. In the above example, the `<div>` will spread across either nine or six of them. The grid system, pictured below, is fundamental to how Bootstrap eases responsive design. 

![Grid Example](https://www.javatpoint.com/bootstrappages/images/bootstrapgrid.jpg "Basic Grid Example")

#### More Information:
1. [Bootstrap 4: Everything You Need to Know](https://medium.freecodecamp.org/bootstrap-4-everything-you-need-to-know-c750991f6784)
2. [CSS Flexbox Complete tutorial in 8 minutes](https://medium.freecodecamp.org/css-flexbox-interactive-tutorial-in-8-minutes-including-cheat-sheet-6214e00de3d2)
<!-- Please add any articles you think might be helpful to read before writing the article -->


