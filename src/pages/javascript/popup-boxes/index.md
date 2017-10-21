---
title: Popup Boxes
---
## Popup Boxes
Popup boxes (or dialog boxes) are modal windows used to notify or warn the user, or to get input from the user.

Popup boxes prevent the user from accessing other aspects of a program until the popup is closed, so they should not be overused. 

There are three different kinds of popup methods used in JavaScript: [window.alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert), [window.confirm()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) and [window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt). 

### Alert
The [alert method](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) displays messages that don't require the user to enter a response. Once this function is called, an alert dialog box will appear with the specified (optional) message. Users will be required to confirm the message before the alert goes away. 

### Example:
`window.alert("Welcome to our website");`

![MDN Alert Example](https://mdn.mozillademos.org/files/130/AlertHelloWorld.png)

### Confirm
The [confirm method](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) is similar to `window.alert()`, but also displays a cancel button in the popup. The buttons return boolean values: true for OK and false for Cancel. 

### Example:
```javascript
var result = window.confirm('Are you sure?');
if (result === true) {
    window.alert('Okay, if you're sure.');
} else { 
    window.alert('You seem uncertain.');
}
```

![MDN Confirm Example](https://mdn.mozillademos.org/files/7163/firefoxcomfirmdialog_zpsf00ec381.png)

### Prompt
The [prompt method](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) is typically used to get text input from the user. This function can take two arguments, both of which are optional: a message to display to the user and a default value to display in the text field. 

### Example:
`var age = prompt('How old are you?', '100');`

![MDN Prompt Example](https://mdn.mozillademos.org/files/11303/prompt.png)

#### More Information:

* [MDN window.alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
* [MDN window.confirm()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
* [MDN window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
