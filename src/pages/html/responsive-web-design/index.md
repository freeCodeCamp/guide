---
title: Responsive Web Design
---
## Responsive Web Design

Responsive web design is the concept of designing web pages that adapt to different screen sizes. It commonly involves the use of different layouts, font sizes, and placement of navigation menus.

In order to create a responsive web page, CSS is commonly used to style your HTML elements. Some common methods in CSS used to create responsive web designs are:

1. Writing [media queries](https://guide.freecodecamp.org/css/media-queries)
2. Using pre-existing [CSS frameworks](https://guide.freecodecamp.org/css/css-frameworks)
3. Using the [Flexbox model](https://guide.freecodecamp.org/css/layout/flexbox)
4. Using [CSS Grid](https://guide.freecodecamp.org/css/layout/grid-layout)

#### 1. Media queries

```css
@media (query) {
  /* CSS Rules used when query matches */
}
```

##### 2. CSS Frameworks

by using CSS Frameworks, we can use CSS Classes pre built by the popular frameworks like Bootstrap or Foundation to be used in the class attribute of our element like

```html
<div class="col-md-9 col-sm-6"></div>
```

In the above div on medium screen size devices, this div will be shown 9 out of 12 columns, while in small size devices will show this in 6 out of 12 columns. that's the beuty of reposive designing. What basically CSS Frameworks do is they provide Grid based design as in below image you can see grids of Bootstrap framework.
![Grid Example](https://www.javatpoint.com/bootstrappages/images/bootstrapgrid.jpg "Basic Grid Example")

Below I am giving popular frameworks links:
1. <a href='https://www.getbootstrap.com' target='_blank' rel='nofollow'>Bootstrap</a>
2. <a href='https://foundation.zurb.com/' target='_blank' rel='nofollow'>Foundation</a>
3. <a href='https://getmdl.io/' target='_blank' rel='nofollow'>Material Design Lite</a>

#### More Information:
1. <a href='https://medium.freecodecamp.org/css-flexbox-interactive-tutorial-in-8-minutes-including-cheat-sheet-6214e00de3d2' target='_blank' rel='nofollow'>CSS Flexbox Complete tutorial in 8 minutes</a>
2. [Freecodecamp CSS section](https://guide.freecodecamp.org/css).
<!-- Please add any articles you think might be helpful to read before writing the article -->
