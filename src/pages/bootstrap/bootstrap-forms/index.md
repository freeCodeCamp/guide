---
title: Bootstrap Forms
---
## Bootstrap Forms

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/bootstrap/bootstrap-forms/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

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

Individual form fields and the associated label should be wrapped in a `<div>` with a class of `form-group`. One exception to this is when using checkbox field where `form-check` should be used instead of `form-group`.

The `<input>` tag should be given a class of `form-control`.

The `<button>` tag should be given the classes of `btn btn-primary`. 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[The official BootStrap documentation is very helpful](http://getbootstrap.com/docs/4.0/components/forms/)

