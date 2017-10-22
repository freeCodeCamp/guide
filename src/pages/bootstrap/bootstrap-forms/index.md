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

### Layout 

As it is set as default a 'with:100%' and 'display:block', Bootstrap created other classes to help vary this without breaking out the design. 

As mentioned above, '.form-group' should be applied to the labels and inputs that belong together. This class control padding and margins on these elements. 

```html
<form>
  <div class="form-group">
    <label class="col-form-label" for="formGroupExampleInput">What do you think about FreeCodeCamp.org?</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="write you thoughts here">
  </div>
  <div class="form-group">
    <label class="col-form-label" for="formGroupExampleInput2">What did you lerned so far?</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="write your skills here">
  </div>
</form>
```

### Form grid

There is a way to apply the Bootstrap grid into forms, this help to better control the way the fields are aligned. To achieve this, it is need to set a '.form-row' wrapper into the <form> tag like this: 

```html
<form>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
</form>
```

To better understand the grid functionality please refer to <a href="https://guide.freecodecamp.org/bootstrap/bootstrap-grid-system">, or to the Bootstrap Documentation <a href="http://getbootstrap.com/docs/4.0/layout/grid/"> 

It can also set the grids after breakpoints, this is a good example of a complex form using breakpoints grid classes:

```html
<form>
  <div class="form-row">
    <div class="form-group col-sm-6 col-md-6 col-lg-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-sm-6 col-md-6 col-lg-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-sm-6 col-md-6 col-lg-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-sm-6 col-md-4 col-lg-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-sm-6 col-md-2 col-lg-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox"> Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
```

#Horizontal form 

Adding the '.row' class to the '.form-group's give you the possibility to add grid breakpoints. The code must be structured as following: 

```html
<form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  </form>
  ```

###

If there is a need to display a input field with a wished width in a specified breakpoint, you can add the columns you need that element to take and to the other elements just give a '.col' so they fill the space. 

```html
<form>
  <div class="form-row">
    <div class="col-7">
      <input type="text" class="form-control" placeholder="City">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="State">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Zip">
    </div>
  </div>
</form>
```
### Auto-sizing

There is also the option to give every element a '.col-auto' class so they take as much space they need, or to mix this also with size-specific columns : 

```html
<form>
  <div class="form-row align-items-center">
    <div class="col-sm-3">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <input type="text" class="form-control mb-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe">
    </div>
    <div class="col-sm-3">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2 mb-sm-0">
        <div class="input-group-addon">@</div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
      </div>
    </div>
    <div class="col-auto">
      <div class="form-check mb-2 mb-sm-0">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox"> Remember me
        </label>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
```

### Inline forms 

Use the '.form-inline' class to display a series of labels, form controls, and buttons on a single horizontal row (Controls only appear inline in viewports that are at least 576px wide). Custom form controls and selects are also supported. The way to implement this is like shown below: 

```html
<form class="form-inline">
  <label class="sr-only" for="inlineFormInputName2">Name</label>
  <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Jane Doe">

  <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
  <div class="input-group mb-2 mr-sm-2 mb-sm-0">
    <div class="input-group-addon">@</div>
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
  </div>

  <div class="form-check mb-2 mr-sm-2 mb-sm-0">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox"> Remember me
    </label>
  </div>

   <label class="mr-sm-2" for="inlineFormCustomSelectPref">Preference</label>
  <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelectPref">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

  <label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
    <input type="checkbox" class="custom-control-input">
    <span class="custom-control-indicator"></span>
    <span class="custom-control-description">Remember my preference</span>
  </label>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```




#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


