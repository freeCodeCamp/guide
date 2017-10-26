---
title: Button Tag
---
## Button Tag

Button `<button>` tag defines a clickable button. Inside the button tag we can put content, like text or images. This is the difference between this element and buttons created with the `<input>` element.  
  
```
<button type="button">Click Here!</button>
```

### Button is a form element

`<button>` element in a `<form>`, by default, behaves identically to that submit input.
  
```
<form action="/" method="post">
  <button>Submit</button>
</form>
```

However Forms can have reset buttons as well. You can duplicate that behavior by changing the default submit type to reset.

```
<form action="/" method="post">
  <button type="reset">Reset</button>
</form>
``` 
  
For [more info](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement)  


