---
title: How to Create an HTML Button That Acts Like a Link
---
## How to Create an HTML Button That Acts Like a Link
### HTML:
Wrap an HTML button inside a `form` element with the `action`attribute.
```html
<form action="link.html" method="get" target="_blank">
    <button type="submit">Link</button>
</form>
```
### With HTML5:
Use the formaction attribute on the button element:
```html
<form>
    <button type="submit" formaction="link.html">Link</button>
</form>
```


