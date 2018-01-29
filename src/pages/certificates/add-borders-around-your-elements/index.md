---
title: Add Borders Around Your Elements
---
CSS borders have attributes like `style`, `color` and `width`.

For example, if we wanted to create a red, 5 pixel border around an HTML element, we could use this class:

```css
.thin-red-border { 
    border-color: red;
    border-width: 5px;
    border-style: solid;
}
```

To apply the class simply include it as an attribute in your html code, for example:
```html
<div class="thin-red-border">
	Cool text does here.
</div>
```

You could simplify the above border class into one line as:
```css
.thin-red-border { 
	border: 5px solid #ff0000;
}
```
With the above example `#ff0000` is the hexadecimal representation for the color red.