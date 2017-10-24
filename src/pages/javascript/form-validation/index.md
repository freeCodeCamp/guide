---
title: Form Validation
---
# Form Validation

Form validation is essential to modern web applications that require users' input and feedback. Not only that it helps us to collect the right data in the right format, it also enforce users to provide the data that we require. Furthermore, form validation can be a security measure to counter malicious users.

## Types of Form Validation

There are generally two different types of form validation -- client-side validation and server-side validation.

Client-side validation primarily occurs in the browser and prior to the form data being submitted to the server. It can be generally achieved using JavaScript and/or the HTML5 built-in form constraint validation.

Server-side validation, in contrast, occurs on the server and after the form data having been submitted. Server-side code is used to validate the data and to send feedback messages back to the browser in the event of validation errors.

## HTML5 Form Constraints

Some of commonly used HTML5 constraints for `<input>` are the `type` attribute (e.g. `type="password"`), `maxlength`, `required`and `disabled`. A less commonly used constraint is the `pattern` attrinute that takes JavaScript regular expression.

## Using JavaScript

Custom validations and customized error messages (and their visual styling) are usually the reasons to use JavaScript in form validation. Furthermore, modern browsers provide a list of the constraint validation API properties and methods to be accessed by JavaScript. In the event the constraint validation API is not used, the heavy lifting of form validation will be done in the JavScript code. Luckily, there are many libraries available to perform generic form validation so that you don't need to reinvent the wheel. Some of the examples are:
* [Validate.js](http://rickharrison.github.com/validate.js/)
* [Validation](http://bassistance.de/jquery-plugins/jquery-plugin-validation/)
* [Valid8](http://unwrongest.com/projects/valid8/)


## More Information:

[Constraint validation | MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation)

[Form data validation | MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation)


