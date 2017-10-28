## Form Validation

Form validation is usually checking user input to ensure that it can be accepted by the application in need of data.  This validation can occur on the client side (in the browser with javascript) or on the server side (after the data has been submitted).  Generally validation should occur on the client side when possible.
This helps helps reduce the amount of <a href='https://en.wikipedia.org/wiki/Principle_of_least_astonishment' target='_blank' rel='nofollow'>surprise</a> a user experience when their data is not accepted by the server as well as reducing network traffic and server load with requests that will be rejected.

Some common types of form validation are:
- Required field empty ( username cannot be blank )
- Number field had letters ( phone number )
- Minimum length not met ( password )
- Dependant field is in inconsistent ( postal code doesn't match city/state)

Javascript is used on the client side to handle most validation tasks.  The html form element's "onsubmit" attribute used to call validation scripts before data is sent to the server and stop the submission (by returning false) if the form data does not pass the validation tests.
But form validation need not wait until just before the form is submitted.  Form validation can happen with every mouse click on press of a key.  This often yeilds better user experience as it can be used to make it more obvious where the validation error is.
There are many popular libraries to make validation as easy as specifying your rules are even simply the type of field data.  And of course you can always write your own form validation in javascript!

#### More Information:
- [parsleyjs.org](http://parsleyjs.org/) - [github](https://github.com/guillaumepotier/Parsley.js/ )
- [formvalidation.io/](http://formvalidation.io/) - [github](https://github.com/formvalidation/formvalidation)
- [You Tube](https://www.youtube.com/watch?v=w8BEI5THbxY) No Libraries (roll your own)

