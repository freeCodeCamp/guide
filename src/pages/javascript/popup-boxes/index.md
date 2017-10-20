---
title: Popup Boxes
---
## Popup Boxes

JavaScript has three kind of popup boxes: **Alert box**, **Confirm box**, and **Prompt box**.

### Alert Box
An alert box is often used if you want to make sure information comes through to the user.

When an alert box pops up, the user will have to click "OK" to proceed.

#### Syntax
```javascript
    window.alert("text");
```
**Note:** The **window.alert()** method can be written without the window prefix.

Example:
```javascript
    alert("Warning!");
```

### Confirm Box
A confirm box is often used if you want the user to verify or accept something.

When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.

If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.

#### Syntax
```javascript
    window.confirm("text");
```
**Note:** The **window.confirm()** method can be written without the window prefix.

Example:
```javascript
    if (confirm("Press a button!") == true) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
```

### Prompt Box
A prompt box is often used if you want the user to input a value before entering a page.

When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.

If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.

#### Syntax
```javascript
    window.prompt("text","defaultText");
```

**Note:** The **window.prompt()** method can be written without the window prefix.

Example:
```javascript
    var person = prompt("Please enter your name", "Harry Potter");

    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person + "! How are you today?";
    }
```

### Line Breaks
To display line breaks inside a popup box, use a back-slash followed by the character n.

Example:
```javascript
    alert("Hello\nHow are you?");
```