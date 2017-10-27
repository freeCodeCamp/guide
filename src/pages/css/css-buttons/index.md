---
title: CSS Buttons
---
## CSS Buttons

<!-- This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/css-buttons/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.-->

<!-- <a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.-->

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Buttons are one of the most important elements on the page. They are used to drive Call to Action (CTA) on most pages, so it’s important to make them stand out and inviting to users.

Cascading Style Sheet (CSS) buttons are created by applying the required styles to make a button appealing and provide a nice user interface. It gives flesh to the Hypertext MarkupLanguage (HTML) stucture.
   
  `<button id="main">CSS Button</button> `
  
  `<a class="button" href="#">A Pure Button</a>`

Either of the codes above can be used to create a button
![flat](https://ds6br8f5qp1u2.cloudfront.net/blog/wp-content/uploads/2016/08/click-me-button-flat.png?x88475)


### A. FLAT STYLE
Example:
```css
button {
    background-color: #006400; 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
}
```
### B. DISABLED BUTTON
The opacity property is used to add transparency to a button thereby creating a "disabled" look. It can be used if you don't want the button to be clickable within a specific time. To mark a button as disabled, add the `"disabled"` attribute to it. 

Example
```css
button {
    opacity: 0.6;
    cursor: not-allowed;
} 
```

### C. ROUNDED BUTTON
This is achieved by adding the border-radius attribute

Example:
```css
button {
  border-radius: 3px;
}
```

### D. BORDER STYLE
Use the border property to add a border to a button

Example
```css
button {
    background-color: white;
    color: black;
    border: 2px solid #006400; 
}
```

### E. HOVER BUTTONS
The :hover selector is used to change the style of a button when you move the mouse over it.

Example
```css
button {
    -webkit-transition-duration: 0.7s; 
    transition-duration: 0.7s;
}


button:hover {
    background-color: #006400; 
    color: white;
}
```

### F. BUTTON WITH SHADOW
Example
```css
button {
    box-shadow: 0 5px 10px 0 #dddddd, 0 10px 20px 0 #dddddd;
}
```

### G. GRADIENT BUTTON
This makes use of gradients and shadows to cast a nice effect on the button

Example
```css
button{
 text-shadow: -2px 2px #346392;
  background-color: #006400;
  background-image: linear-gradient(top, #6496c8, #346392);
  box-shadow: inset 0 0 0 1px #27496d;
 }
```

### H. ANIMATED BUTTON
CSS is used to add animated effects to a button when it is clicked. 

Example
```css
button:active {
  background-color: #006400;
  box-shadow: 0 5px #ddd;
  transform: translateY(6px);
}
```

### I. GROUPED BUTTON
To achieve a horizontal menu-like look using buttons, use float and border attributes and remove margins on each button. Same applies to vertical menu-like look but instead of using the float:left, display:block is used 

Example
```css
button {
    float: left;
    border: 1px solid #006400;
} 
```

#### More Information
- [CSS](#)
- [CSS3 Colors](#)
- [CSS3 Gradients](#)
- [CSS3 Transitions](#)
- [CSS3 Shadows](#)


#### Resources:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://www.w3schools.com. "CSS Buttons." Accessed: October 26, 2017

https://codemyui.com/tag/button. "Button Design Inspiration" Accessed: October 27, 2017

