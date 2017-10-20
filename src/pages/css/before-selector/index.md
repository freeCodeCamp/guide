---
title: ::before selector
---
## CSS ::before

The CSS `::before` creates a pseudo-element that allows you to add content before a selected element. 

For example if you wanted to add arrows to a button element you could use the CSS ::before to add it. 

::before pseudo elements are inline by nature. 
 
 Example syntax:
 
```css
.button::before { 
  content: "<<";
  color: #ff47da;
  padding-right:1em;
}
```
Here you add the `::before` to the .button class to add << before the text. Check out the link in more information to see the full working example.
### More Information:

Working example of ::before selector adding content here: <a href='https://codepen.io/cgorton/pen/BwMPOG/' target='_blank' rel='nofollow'>CodePen</a>



