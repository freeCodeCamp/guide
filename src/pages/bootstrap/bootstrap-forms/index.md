---
title: Bootstrap Forms
---
## Bootstrap Forms
Bootstrap forms are pre-written css classes which give Forms tags a better-looking layout with very minimized effort and is already Cross Browser compatible.


Bootstrap framework provides a form feature which a programmer can use to create beautiful html forms easily. Using the bootstrap form gives each individual form element a unified global style. Bootstrap form adds the right spacing and look to each element. 

Each bootstrap form element should have a class *form-control*. This class is how bootstrao knows which elements to style. All textual elements like **input**, **textarea** and **select** that has *form-control* class will have 100% width by default. In this example we can see a basic structure using the forms classes which are, *.form-group* for the input or inputs wrapper and *.form-control* for the inputs itself.

### Example of a basic form

```html
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <p class="help-block">Example block-level help text here.</p>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>
```

Individual form fields and the associated label should be wrapped in a `<div>` with a class of `form-group`. One exception to this is when using checkbox field where `form-check` should be used instead of `form-group`.

The `<input>` tag should be given a class of `form-control`.

The `<button>` tag should be given the classes of `btn btn-primary`. 

**Note:** Bootstrap documentation recomends the correctly use of input types such as "email", "number", etc. This helps for a better control of the clients inputs information and comes as default within the browsers.

There are two types of Bootstrap forms, which are:

* Inline form - creates the form on a single line. Useful for login forms in a nav bar
* Horizontal form - creates a form with each element in a different row

### Example of an inline form

```html
<form class="form-inline">
  <div class="form-group">
    <label for="exampleInputName2">Name</label>
    <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail2">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com">
  </div>
  <button type="submit" class="btn btn-default">Send invitation</button>
</form>
```

### Example of horizontal form

```html
<form class="form-horizontal">
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
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
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> Remember me
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">Sign in</button>
    </div>
  </div>
</form>
```

![Inline Form 2](https://github.com/TroyB12/Pictures/blob/master/Inline%20Form2.PNG)

```html
<form class="form-inline">
  <div class="form-group">
    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
    <div class="input-group">
      <div class="input-group-addon">$</div>
      <input type="text" class="form-control" id="exampleInputAmount" placeholder="Amount">
      <div class="input-group-addon">.00</div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Transfer cash</button>
</form>
```

Bootstrap forms allow the programmer to use classes to easily make HTML forms presentable and responsive.

Take the following simple form:

![](https://siamcomm.com/wp-content/uploads/2017/10/Forms-·-Bootstrap.png)

```html
<form>
  <div class="form-group">
    <label for="EmailField">Email address</label>
    <input type="email" class="form-control" id="EmailField" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="PasswordField">Password</label>
    <input type="password" class="form-control" id="PasswordField" placeholder="Password">
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

#### Horizontal Form with Grid
In combination with Bootstrap's predefined grid classes to align labels and groups of form controls in a horizontal layout by adding *.form-horizontal* to the form. Doing so changes *.form-group*s to behave as grid rows, so no need for *.row*.

```html
<form class="form-horizontal">
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> Remember me
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">Sign in</button>
    </div>
  </div>
</form>
```

## Additional Modifiers

### Sizing 
'.form-control' comes with a default size (padding), but there are 2 more sizing options which are, '.form-control-lg' and '.form-control-lg'

```html
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
<input class="form-control" type="text" placeholder="Default input">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
```
these can be applied to every element that accepts this classes. 

### Readonly 
This is a parameter that Bootstrap () use as an Atribute to disable the input function and to display it as an Info field. There is also an option to add no styles for 'readonly' fields by adding the class '.form-control-plaintext' to it. 

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
This are standard html elements. Bootstrap has extra classes for these, '.form-check', 'form-check-label' -> which wrapps the input field and the text that explain what for it is, and ','.form-check-input' for the input itself. 

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
There is an option to set the checkboxes or radio buttons in a line. This can get done by adding an extra class to the wrapper div ('.form-check') , '.form-check-inline'.

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
![Horizontal Form](https://github.com/TroyB12/Pictures/blob/master/Horizontal%20Form.PNG)


## More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[The official BootStrap documentation is very helpful](http://getbootstrap.com/docs/4.0/components/forms/)

![Inline Form 3](https://github.com/TroyB12/Pictures/blob/master/Inline%20Form3.PNG)
