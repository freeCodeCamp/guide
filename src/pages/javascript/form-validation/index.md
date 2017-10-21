---
title: Form Validation
---
## Form Validation

Form validation is the process of making sure the user enters data that meets criteria set for collecting data from the user.  If your using a registration from that needs an email address you must use code to make sure there is a proper email address entered.

Non empty field:
function required(inputtx)   
   {  
     if (inputtx.value.length == 0)  
      {   
         alert("message");        
         return false;   
      }       
      return true;   
    } 

Form validation for email id with regex:
function ValidateEmail(mail)   
{  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))  
  {  
    return (true)  
  }  
    alert("You have entered an invalid email address!")  
    return (false)  
}  

## Resources
- JavaScript HTML Form Validation: [W3resource](https://www.w3resource.com/javascript/form/javascript-form-validation.php)
