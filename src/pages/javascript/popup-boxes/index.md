---
title: Popup Boxes
---
## Popup Boxes
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
### Alert
Alerts are the simplest type of popup box. They simply pop up and alert you of something, and then you can close them. The syntax is like so:
```javascript
alert("There is ice cream on offer.");
```
### Confirm
A confirm lets the user choose either yes or no, by clicking OK or Cancel. Here is an example:
```javascript
if(confirm("Would you like ice cream?")) {
  alert("Here is your ice cream! o>");
} else {
  alert("Yay, more for me!");
}
```

### Prompt
A prompt lets the user input text. Here is an example:
```javascript
var flavor = prompt("What flavor of ice cream would you like?");
alert("Here is your " + flavor + " flavored ice cream! o>");
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[JavaScript Popup Boxes on w3schools](https://www.w3schools.com/js/js_popup.asp)
