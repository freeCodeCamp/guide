---
title: Center an Image Using Text Align Center
---
## Center an Image Using Text Align Center

```img``` is an inline element. It can be easily centered by adding the ```text-align: center;``` CSS property to the parent element that contains it.

### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Center an Image using text align center</title>
    <style>
      .img-container {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="img-container"> <!-- Block parent element -->
      <img src="user.png" alt="John Doe">
    </div>
  </body>
</html>
```

**Note:** The parent element must be a block element. If it is not a block element, you should add ```display: block;``` CSS property along with the ```text-align``` property.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Center an Image using text align center</title>
    <style>
      .img-container {
        text-align: center;
        display: block;
      }
    </style>
  </head>
  <body>
    <span class="img-container"> <!-- Inline parent element -->
      <img src="user.png" alt="">
    </span>
  </body>
</html>
```

**Demo:** [Codepen](https://codepen.io/aravindio/pen/PJMXbp)
