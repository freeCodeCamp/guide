---
title: CSS Buttons
---
## CSS Buttons

## Basic button styling

### Button Size
Use the ` font-size ` property to change the font size of a button:
```css
font-size:24px;
```

Use the ` padding ` property to change the padding of a button:
```css
padding:10px;
```

### Button Colors
Use the ` background-color ` property to change the background color of a button:

```css
background-color:green;
```

### Rounded Buttons
Use the ` border-radius ` property to add rounded corners to a button:
```css
border-radius:5px;
```

### Colored Button Borders
Use the ` border ` property to add a colored border to a button:
```css
border: 2px solid #4CAF50;
```

```css
.button {
      
      background-color: red; /* use color name, hex value, or rgb */
      border: 2px solid white; /*use px(pixel size) style(solid, dotted, dashed) and color */
      color: white; /* colors the words on the button. */
      padding: 15px; /* how much room between other elements */
      text-aling: right; /* alings text (left, center, right) */
      font-size: 16px; /* how large the writing is */
      
     }

### Hoverable Button
Use the ` :hover ` selector to change the style of a button when you move the mouse over it.

For a button with class ` button `
```css
.button:hover
{
    background-color: #4CAF50; /* Green */
    color: white;
}
```

### Shadow Button
Use the ` box-shadow ` property to add shadows to a button:
```css
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->