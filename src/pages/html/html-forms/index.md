---
title: HTML Forms
---
## HTML Forms

Basically, forms are used to collect data entered by a user, which are then sent to the server for further processing. They can be used for different kinds of user inputs, such as name, email etc. 

Form contains control elements which are wrapped around ```<form></form>``` tags, like ```input```, which type can be:

- ```text```
- ```email```
- ```password```
- ```checkbox```
- ```radio```
- ```submit```

Code example:
```html
<form>
    <label for="username">Username:</label>
    <input type="text" name="username" id="username">
    <label for="password">Password:</label>
    <input type="password" name="password" id="password">
    <input type="radio" name="gender" value="male">Male<br>
    <input type="radio" name="gender" value="female">Female<br>
    <input type="radio" name="gender" value="other">Other
    <input type="submit" value="Submit">
</form>
```

Other elements that form can contain:

- ```textarea``` - is a multiline box which is most often used for adding some text eg. comment. Size of textarea is defined by number of rows and columns.
- ```select``` - together with ```<option></option>``` tag creates drop-down select menu.


SOME MORE INFORMATION ON HTML FORMS.

HTML Forms are required, when you want to collect some data from the site visitor. For example, during user registration you would like to collect information such as name, email address, credit card, etc.

A form will take input from the site visitor and then will post it to a back-end application such as CGI, ASP Script or PHP script etc. The back-end application will perform required processing on the passed data based on defined business logic inside the application.

There are various form elements available like text fields, textarea fields, drop-down menus, radio buttons, checkboxes, etc.

The HTML <form> tag is used to create an HTML form and it has following syntax −
    
    <form action = "Script URL" method = "GET|POST">
         form elements like input, textarea etc.
    </form>

#The Action Attribute

The action attribute defines the action to be performed when the form is submitted.

Normally, the form data is sent to a web page on the server when the user clicks on the submit button.

In the example above, the form data is sent to a page on the server called "/action_page.php". This page contains a server-side script that handles the form data:

    <form action="/action_page.php">
    
If the action attribute is omitted, the action is set to the current page.

#The Target Attribute
 The target attribute specifies if the submitted result will open in a new browser tab, a frame, or in the current window.

The default value is "_self" which means the form will be submitted in the current window.

To make the form result open in a new browser tab, use the value "_blank":

    <form action="/action_page.php" target="_blank">    
 
The method attribute specifies the HTTP method (GET or POST) to be used when submitting the form data.

The default method when submitting form data is GET.
However, when GET is used, the submitted form data will be visible in the page address field.
Always use POST if the form data contains sensitive or personal information. The POST method does not display the submitted form data in the page address field.

Notes on GET:

Appends form-data into the URL in name/value pairs
The length of a URL is limited (about 3000 characters)
Never use GET to send sensitive data! (will be visible in the URL)
Useful for form submissions where a user want to bookmark the result
GET is better for non-secure data, like query strings in Google

Notes on POST:

POST has no size limitations, and can be used to send large amounts of data.
Form submissions with POST cannot be bookmarked


 
