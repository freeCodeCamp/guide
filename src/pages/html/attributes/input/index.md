---
title: Input
---
## Input

The HTML Input tag allows webdevelopers to require user input, that is then processed by the Webserver.  
The structure of such a input tag is simple:   
* type - defines the input type (mandatory)
* name - name of the input field (mandatory)
* id - the unique id of this specific tag
* value - a pre-defined value
  
Requiring text input from the user via html is a simple matter.  
Simply start off with a ```form``` tag and then proceed with an ```input``` tag.  
Add the desired type, id and name.  
Finally close the ```form``` tag.  

### Text Input
  
```html
<form>
  <input type="text" id="name" name="name">
</form>
```
  
### Password Input
  
```html
<form>
  <input type="passwd" id="password" name="password">
</form>
```
  
### Mail Input
  
```html
<form>
  <input type="email" id="email" name="email">
</form>
```
  
#### More Information:
  
[Mozilla's Official Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)  
