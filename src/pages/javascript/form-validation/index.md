---
title: Form Validation
---
## Form Validation

HTML form validation can be done by JavaScript.
If a form field (fname) is empty, this function alerts a message, and returns false, to prevent the form from being submitted:

```javascript
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
```

<a href='https://www.w3schools.com/js/js_validation.asp'>Read more</a>
