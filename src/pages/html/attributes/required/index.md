---
title: Required
---
## Required

The required attribute is a boolean attribute.

The presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value. If the attribute is present, its value must either be the empty string or a value that is a case-insensitive match for the attribute’s canonical name, with no leading or trailing whitespace.
i.e.
```html
/* "The presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value." */
<input type="name" required>

/* "If the attribute is present, it's value must either be the empty string..." */
<input type="name" required="">

/* "...or a value that is a case-insensitive match for the attribute's canonical name" */
<input type="name" required="required">
```

#### Usage:
The required attribute can be used on the following elements:
* `<input>`
* `<select>`
* `<textarea>`

#### Example:
```html
<select required>
  <option value="">None</option>
  <option value="apple">Apple</option>
  <option value="mango">Mango</option>
  <option value="orange">Orange</option>
  <option value="grapes">Grapes</option>
</select>
```
