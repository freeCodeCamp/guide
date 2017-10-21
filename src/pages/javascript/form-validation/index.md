## Form Validation

HTML form validation can be done by JavaScript.

If a form field (fname) is empty, this function alerts a message, and returns false, to prevent the form from being submitted:
### Javascript Example
```
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
```
The function can be called when the form is submitted:
### HTML Form Example
```
<form name="myForm" action="/action_page_post.php" onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>
```

### Data Validation

Data validation is the process of ensuring that user input is clean, correct, and useful.

Typical validation tasks are:
   * has the user filled in all required fields?
   * has the user entered a valid date?
   * has the user entered text in a numeric field?
  
Most often, the purpose of data validation is to ensure correct user input.

Validation can be defined by many different methods, and deployed in many different ways.

**Server side validation** is performed by a web server, after input has been sent to the server.

**Client side validation** is performed by a web browser, before input is sent to a web server.

### HTML Constraint Validation

HTML5 introduced a new HTML validation concept called constraint validation.

HTML constraint validation is based on:
   * Constraint validation **HTML Input Attributes**
   * Constraint validation **CSS Pseudo Selectors**
   * Constraint validation **DOM Properties and Methods**


#### More Information:

<a href='https://www.w3schools.com/js/js_validation.asp'>Javascript Forms</a>

