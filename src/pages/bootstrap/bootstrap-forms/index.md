---
title: Bootstrap Forms
---
## Bootstrap Forms

The Bootstrap framework allows for developers to create forms with simplicty and modularity.
There are 3 types of form layouts when creating a form.

* Vertical Form (Default)
* Horizontal Form
* Inline Form

Be sure to use the ```.form-group``` class for each parent ```<div>``` containing an input.

Be sure to use an appropriate ```"type"``` attribute on all inputs

#### A Quick Example:

<form>
  <div class="form-group">
    <label for="emptyEmail">What is thou email address</label>
    <input type="email" class="form-control" id="emptyEmail1" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="emptyPassword">Password</label>
    <input type="password" class="form-control" id="emptyPassword" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

```
<form>
  <div class="form-group">
    <label for="emptyEmail">What is thou email address</label>
    <input type="email" class="form-control" id="emptyEmail1" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="emptyPassword">Password</label>
    <input type="password" class="form-control" id="emptyPassword" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```
#### Form Control:

For all forms be sure to use the ```.form-control``` class for equal spacing on these elements:

* ```<input>```
* ```<select>``` 
* ```<textarea>```

##### Example:
<form>
  <div class="form-group">
    <label for="emptyLabel">Email address</label>
    <input type="email" class="form-control" placeholder="test@example.com">
  </div>
  <div class="form-group">
    <label for="emptySelect">Choose your animal</label>
    <select class="form-control">
      <option>Doggo</option>
      <option>Pupper</option>
      <option>Catto</option>
      <option>Kitteh</option>
      <option>Kitter</option>
    </select>
  </div>
  <div class="form-group">
    <label for="emptyLabel">Tell us about your children(AKA pets)</label>
    <textarea class="form-control" rows="3"></textarea>
  </div>
</form>

```
<form>
  <div class="form-group">
    <label for="emptyLabel">Email address</label>
    <input type="email" class="form-control" placeholder="test@example.com">
  </div>
  <div class="form-group">
    <label for="emptySelect">Choose your animal</label>
    <select class="form-control">
      <option>Doggo</option>
      <option>Pupper</option>
      <option>Catto</option>
      <option>Kitteh</option>
      <option>Kitter</option>
    </select>
  </div>
  <div class="form-group">
    <label for="emptyLabel">Tell us about your children(AKA pets)</label>
    <textarea class="form-control" rows="3"></textarea>
  </div>
</form>
```
### Vertical Form (Default Form)

<form>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email">
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd">
  </div>
  <div class="checkbox">
    <label><input type="checkbox"> Remember me</label>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>

```
<form>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email">
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd">
  </div>
  <div class="checkbox">
    <label><input type="checkbox"> Remember me</label>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>
```

### Inline Form

With the Bootstrap inline form all elements are inline and labels are alongside the inputs.

___BE SURE TO ADD THE___ ```.form-inline``` ___CLASS TO THE___ ```<form>``` ___ELEMENT___.

#### Example:

<form class="form-inline">
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email">
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd">
  </div>
  <div class="checkbox">
    <label><input type="checkbox"> Remember me</label>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>

```
<form class="form-inline">
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email">
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd">
  </div>
  <div class="checkbox">
    <label><input type="checkbox"> Remember me</label>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>

```

### Horizontal Form

<form class="form-horizontal">
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Email:</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" placeholder="Enter email">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="pwd">Password:</label>
    <div class="col-sm-10"> 
      <input type="password" class="form-control" id="pwd" placeholder="Enter password">
    </div>
  </div>
  <div class="form-group"> 
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label><input type="checkbox"> Remember me</label>
      </div>
    </div>
  </div>
  <div class="form-group"> 
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">Submit</button>
    </div>
  </div>
</form>

Horizontal form labels are align to the input for only medium to large screens. If the screen is smaller, then they will vertically stack onto each other.

Use the ```.form-horizontal``` class on the ```<form> ``` element and add ```.control-label``` class to all ```labels``` to make a horizontal form.

### More Information:

* [Official Docs](https://getbootstrap.com/docs/4.0/components/forms/)

* [Bootstrap Form Examples](https://www.w3schools.com/bootstrap/bootstrap_forms.asp)
