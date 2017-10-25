---
title: Form Validation
---
## Form Validation

You can validate a form directly with JavaScript.

### Code Example to validate numbers

```html
<!DOCTYPE html>
<html>
<body>

<h1>Form Validation</h1>

<p>Input a number between 1 and 10:</p>

<input id="number">
<button type="button" onclick="formValidation()">Submit</button>

<script>
function formValidation() {
  
    // Get the value of the input field with id="number"
    var x = document.getElementById("numb").value;

    // If x is Not a Number or less than 1 or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        alert("Input NOT valid");
    } else {
        alert("Input OK");
    }
}
</script>
</body>
</html> 
```

#### More Information:
[Form Validation — MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation)

