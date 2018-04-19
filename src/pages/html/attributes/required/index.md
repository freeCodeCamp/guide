---
title: Required
---
## Required

The HTML required attribute is used in an input element to make the input field in a form required to submit the form.
If the user does not fill in the input field the form will not submit and it will give a message asking the user to fill out the field. 

For example: 
```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Required Attribute</title>
  </head>
  <body>
    <form action="/">
      Text Field: <input type="text" name="textfield" required>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```

Simply add `required` to an input element 

The HTML required attribute indicates an input or list of options a user must fill out or choose from before submitting a form. You might have come across an online registration form with input fields that have asterisks ( * ) and marked as required.

#### Which input types work with the required attribute?
"The required attribute works with the following input types: text, search, url, tel, email, password, date pickers, number, checkbox, radio, and file."<sup>1</sup>

#### How to use the "required" attribute in HTML
For every `form` element(s) you need a user fill out (for example, name, address etc), add the required attribute before you close the open tag like this:
```html
<form action="url-you-want-to-submit-user-input">
  Full Name: <input type="text" name="full_name" required>
  <input type="submit">
</form>
```

If you have a list of options from which the user must choose at least one, it is best to include the required attribute in all the options like this:
```html
<form action="url-you-want-to-submit-user-input">
  Gender: <label><input type="radio" name="gender" value="male" required>Male</label>
  <label><input type="radio" name="gender" value="female" required>Female</label>
</form>
```
#### And voila! Your required input fields are ready! Cheers!

*Note: This does not work in the Safari browser.*<sup>2</sup>. 

### Sources
1. <a href="https://www.freecodecamp.org/challenges/use-html5-to-require-a-field"><em>Free Code Camp. </em> Accessed: October 25, 2017
2. <a href="https://www.w3schools.com/tags/att_input_required.asp"><em>W3Schools. </em> Accessed: October 25, 2017
  
#### More Information:
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" target="_blank">MDN article on the input element</a>
