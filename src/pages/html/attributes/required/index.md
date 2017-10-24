---
title: Required
---
## Required

If you want to specify a element must be filled out before submitting the form, use this `< Required>` attribute.
The `< Required>` attribute is applicable to `<input>` , `<select>` , `<textarea>`. 

Input Example:
```html
<form action="/action.php">
  Password: <input type="text" name="password" required>
  <input type="submit">
</form>
```
Select Example:
```html
<form action="/action.php">
<select required>
  <option value="">None</option>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
</form>
```
Text Area Example:
```html
<form action="/action.php">
  <textarea name="comment" required></textarea>
  <input type="submit">
</form>
```



