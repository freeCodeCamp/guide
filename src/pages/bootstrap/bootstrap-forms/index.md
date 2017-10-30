---
title: Bootstrap Forms
---
## Bootstrap Forms

Bootstrap offers several classes for quickly building responsive forms. By using an appropriate `type` you can also take advantage of input controls like email verification, number selection, and more.

Below is an example to demonstrate Bootstrap’s form styles.

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

#### More Information:
To learn more about all of Bootstrap's form options, visit <a href="http://getbootstrap.com/docs/4.0/components/forms/" target="_blank">http://getbootstrap.com/docs/4.0/components/forms/</a>
