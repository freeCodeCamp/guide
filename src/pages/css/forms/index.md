# Forms

The ```<form>``` element sets the form on a web page. The form is designed to send data to the server.

A page can contain any number of forms, but only one can be sent in one time unit. Forms must be independent of each other.

To submit the form to the server, use the Submit button - ```<input type = "submit">```.

When the form is submitted to the server, control is transferred to the script, which is specified in the action attribute of the form. This can be sent using ```GET``` or ```POST```. When the GET method is used, all form data is encoded into the URL as parameters of the query string. In POST, the form data appears in the body of the HTTP request message.

## Attributes of the ```<form>``` tag
* ```action``` - the script that processes the data.
* ```autocomplete``` - auto-complete form.
* ```enctype``` - is a way to encode form data.
* ```method``` - HTTP protocol method. GET or POST.
* ```name``` - the name of the form
* ```novalidate``` - does not check the entered data for correctness.
* ```target``` - the name of the window / frame where the script will return the result.

Also available for ```<form>``` are universal HTML attributes.
