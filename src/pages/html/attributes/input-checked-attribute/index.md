---
title: Input Checked Attribute
---
## Input Checked Attribute

The `<input checked>` attribute is a boolean attribute.

When present, it specifies that the `<input>` element should be pre-selected when the page loads. It can also be set after page load with JavaScript. 

The checked attribute can be used with `<input type="checkbox">` and `<input type="radio">`.

### Example

```javascript
<form action="submit_page.php">
  <input type="checkbox" value="adult" checked> I am over 18<br />
  <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female" checked> Female
</form>
```
[x] I am over 18

[ ] Male [x] Female

#### More Information:

[HTML <input> checked attribute](https://www.w3schools.com/tags/att_input_checked.asp) on w3schools.com

[HTML input tag](https://www.w3schools.com/tags/tag_input.asp) on w3schools.com
