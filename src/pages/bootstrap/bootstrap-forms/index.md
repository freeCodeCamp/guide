---
title: Bootstrap Forms
---
## Bootstrap Forms
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Bootstrap forms are pre-written css classes which give Forms tags a better-looking layout with very minimized effort and is already Cross Browser compatible.

Bootstrap documentation recommends the correctly use of input types such as "email", "number", etc. This helps for a better control of the client inputs information and comes as default within 
the browsers functionality.

In this example we can see a basic structure using the forms classes which are, '.form-group' for the input or inputs wrapper and '.form-control' for the inputs itself.

```html
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input">
      Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```
### Form Controls
this class ('.form-control') can be added to <input>s, s and <textarea>s; and give them a basic style. For <input>s of type “file” there is an extra class '.form-control-file' which replace the '.form-control' one for this element.

### Sizing 
'.form-control' comes with a default size (padding), but there are 2 more sizing options, '.form-control-lg' and '.form-control-sm'

```html
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
<input class="form-control" type="text" placeholder="Default input">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
```
these can be applied to every element that accepts this classes. 

### Readonly 
This is a parameter that Bootstrap (V.4) use as an Attribute to disable the input function and to display it as an Info field. There is also an option to add no styles for 'readonly' fields by adding the class '.form-control-plaintext' to it. 

```html
<form>
  <div class="form-group row">
    <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Readonly input here…" readonly> 
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
  </div>
</form>
```

### Checkboxes and radios 
These are standard html elements. Bootstrap has extra classes for these, '.form-check', 'form-check-label' -> which wraps the input field and the text that explain what for, it is and ','.form-check-input' for the input itself.

```html
<div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" value="">
    I learn a lot with freecodecamp.org
  </label>
</div>
<div class="form-check disabled">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" value="" disabled>
    I want to keep learning with freecodecamp.org
  </label>
</div>
```

### Inline 
There is an option to set checkboxes or radio buttons in a line. This can get done by adding an extra class to the wrapper div ('.form-check') , '.form-check-inline'.

```html
<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> 1
  </label>
</div>
<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"> 2
  </label>
</div>
<div class="form-check form-check-inline disabled">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled> 3
  </label>
</div>
```


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


