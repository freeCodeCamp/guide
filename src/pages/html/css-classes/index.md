---
title: CSS Classes
---
## CSS Classes

Classes are an efficient way of grouping HTML elements so that they can share the same styles.

---

When you're writing HTML you can add a class to an element like so: 

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
 

Notice that classes have the prefix of a period (.) in CSS.

You can see the result of the above code [here](https://codepen.io/Tlandis/pen/RLvomV).
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

Classes are used in CSS to add styling to HTML tags that use the specified CSS Class. CSS classes start with a period symbol `.example` and CSS attributes can be set within it.

```html
<div class="header1">
  Some Random Text.
</div>
```

```css
.header1{
  color:ff0000;
  font-size:30px;
 }
 ```
 
 In this example, the above div will have red text with a font size of 30 pixels. This is because it uses the `.header1` CSS class and the text size and color is set for that class within the CSS styles. CSS classes can be used for multiple HTML elements simultaneously.
