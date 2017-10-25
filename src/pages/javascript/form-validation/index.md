---
title: Form Validation
---
## Form Validation

Javascript provide way to validate form's data on client side. 

### Basic Validation

HTML Form
```
<form action="form" onsubmit="return validateForm()" method="post">
  <input type="text" name="name" placeholder="name">
  <input type="text" name="address" placeholder="adress">
  <textarea name="description"></textarea>
  <input type="submit" value="Submit">
</form>
```

Javascript 
```
function validateForm() 
{
  if(document.form.name.value == "") {
    alert("Name is required");
    return false;
  }
  
  if(document.form.address.value == "") {
    alert("Address is required");
    return false;
  }
}
```

### Data Validation

Is the process of ensuring that user input is correct form and value. Validation can be defined by many different methods. 

For [more info](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation)





