---
title: Navigation Bars
---
## Navigation Bars

Navigation bars are a very important element to any website. They provide the main method of navigation by providing a main list of links to a user. There are many methods to creating a navigation bar. The easiest way to create a navigation bar is to use an unordered list and style it with CSS.

Navigation Bars are mostly made up of `<ul>` lists that are horizontally arranged and styled.

While styling the navigation bars, it's common to remove the extra spacing created by the `<ul>` and `<li>` tags as well as the bulletpoints that are automatically inserted:

```css
   list-style-type: none;
   margin: 0px;
   padding: 0px;
```   

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/navigation-bars/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

**Example:**

There are two parts to any navigation: the HTML and the CSS. This is just a quick example. By changing CSS we can change the type of navigation bar i.e vertical or horizontal.


```html
<nav class="myNav">                                 <!-- Any element can be used here -->
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</n
```
**Vertical Navigation Bar**
```css
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
}

li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}

/* Change the link color on hover */
li a:hover {
    background-color: #555;
    color: white;
}
```

**Active/Link Navigation Bar**
  We can also put active link in navigation bar for distinguising it.For this we have to add another class attribute defining its different color for distiguishing.
  ```css
  .active {
    background-color: #4CAF50;
    color: white;
}
  ```
  
 **Full Length Fixed Navigation Bar**
  We can also fix the navigation bar using position attribute.
  ```css
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 25%;
    background-color: #f1f1f1;
    height: 100%; /* Full height */
    position: fixed; /* Make it stick, even on scroll */
    overflow: auto; /* Enable scrolling if the sidenav has too much content */
}
  ```
  
  **Horizontal Navigation Bar**
  There are two ways to create to do it either by floating or inline listing items.
  ```css
  li {
    display: inline;
}
  ```
  
  **Sticky Navigation Bar**
  ```css
  ul {
    position: sticky;
    top: 0;
} 
  ```
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
More Navigation Examples: [W3Schools](https://www.w3schools.com/css/css_navbar.asp)


