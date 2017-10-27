---
title: HTML Forms
---
## HTML Forms

HTML forms are a useful point of contact between a website and its users. When a user successfully fills out a form, the form data is generally submitted to a server for further processing.

The first element in every form is easy to remember: `<form>`.
```
<form action="/my-handling-form-page" method="post">

</form>
```
Source: [MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form)

The `action` attribute specifies where the data should go, while the `method` attribute specifies the type of HTTP request being made.

It's common to find these elements nested within a form:
* `label`: Labels describe what kind of user input is expected.
* `input`: An input field provides space for a single line of text.
* `textarea`: A textarea provides several lines of space for the user.

```
<form action="/" method="post">
    <label for="username">Username:</label>
    <input type="text" name="username" id="username">
    <label for="password">Password:</label>
    <input type="password" name="password" id="password">
    <input type="submit" value="Submit">
</form>
```

In the example login form above, each label is linked to the appropriate input element using the `for` attribute. 

Each input field has a `type` attribute, which affects the field's behavior and sometimes its appearance. For example, an input type with a value of `password` will obscure each keystroke automatically.

The last input field has a `submit` type. It appears as a button to the user. Upon clicking this input field, the data is sent to the location specified by the form's `action`.
