---
title: Responsive Web Design
---
## Responsive Web Design

Responsive Web Design is a design approach for the web for different screen sizes, the same codebase by using CSS Grid, frameworks or more basically media queries.

There are 2 ways to make webpages responsive.

#### 1. Media Queries
```css
@media (query) {
  /* CSS Rules used when query matches */
}
```

##### 2. CSS Frameworks

By using CSS Frameworks, we can use CSS classes pre-built by the popular frameworks like Bootstrap or Foundation to be used in the class attribute of our element like
```html
<div class="col-md-9 col-sm-6"></div>
```
In the above `div` on medium screen size devices, this `div` will be shown 9 out of 12 columns, while in small size devices will show this in 6 out of 12 columns. That's the beauty of reponsive design. What basically CSS frameworks do is they provide grid based design as in the below image you can see grids of Bootstrap framework.
![Grid Example](https://www.javatpoint.com/bootstrappages/images/bootstrapgrid.jpg "Basic Grid Example")

Below are links to popular frameworks:
1. [Bootstrap](https://www.getbootstrap.com)
2. [Foundation](https://foundation.zurb.com/)
3. [Material Design Lite](https://getmdl.io/)

#### More Information:
1. [CSS Flexbox Complete tutorial in 8 minutes](https://medium.freecodecamp.org/css-flexbox-interactive-tutorial-in-8-minutes-including-cheat-sheet-6214e00de3d2)
<!-- Please add any articles you think might be helpful to read before writing the article -->


