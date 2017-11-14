---
title: Input Checked Attribute
---
## Input Checked Attribute

This attribute, used as part of the ```<input>``` element of an HTML ```<form>```, is used to specify whether or not the ```<input>``` element should be checked when the page is loaded.

#### Syntax
```<input checked>```

This attribute is used along with inputs of type ```checkbox``` and ```radio```.

#### Example

1.Checkbox
```html
<form action="index.php">
  <input type="checkbox" name="quantity" value="10" checked> 10 <br>
  <input type="checkbox" name="quantity" value="20"> 20 <br>
</form>  
```

2.Radio button
```html
<form action="index.php">
  <input type="radio" name="quantity" value="10" checked> 10 <br> 
  <input type="radio" name="quantity" value="20"> 20 <br>
</form>  
```
Here, the value '10' is checked by default when the page is loaded.
