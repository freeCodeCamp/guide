---
title: CSS Buttons
---


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Basic Button Styling
```
    .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
```
[Test it](https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_basic)

Use the background-color property to change the background color of a button:
```
.button1 {background-color: #4CAF50;} /* Green */
.button2 {background-color: #008CBA;} /* Blue */
.button3 {background-color: #f44336;} /* Red */ 
.button4 {background-color: #e7e7e7; color: black;} /* Gray */ 
.button5 {background-color: #555555;} /* Black */
```
[Test it](https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_color)

Use the font-size property to change the font size of a button:
```
.button1 {font-size: 10px;}
.button2 {font-size: 12px;}
.button3 {font-size: 16px;}
.button4 {font-size: 20px;}
.button5 {font-size: 24px;}
```
[Test it](https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_font)

Use the padding property to change the padding of a button:
```
.button1 {padding: 10px 24px;}
.button2 {padding: 12px 28px;}
.button3 {padding: 14px 40px;}
.button4 {padding: 32px 16px;}
.button5 {padding: 16px;}
```
[Test it](https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_padding)

Use the border-radius property to add rounded corners to a button:
```
.button1 {border-radius: 2px;}
.button2 {border-radius: 4px;}
.button3 {border-radius: 8px;}
.button4 {border-radius: 12px;}
.button5 {border-radius: 50%;}
```
[Test it](https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_round)

Use the border property to add a colored border to a button:
```
.button1 {
    background-color: white;
    color: black;
    border: 2px solid #4CAF50; /* Green */
}
```
[Test it](https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_border)

Use the :hover selector to change the style of a button when you move the mouse over it.

Tip: Use the transition-duration property to determine the speed of the "hover" effect:
```
.button {
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
}

.button:hover {
    background-color: #4CAF50; /* Green */
    color: white;
}
```
[Test it](https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_hover)

Use the box-shadow property to add shadows to a button:
```
.button1 {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
/*Shadow on hover*/
.button2:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
```
[Test it](https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_shadow)

Use the opacity property to add transparency to a button (creates a "disabled" look).

Tip: You can also add the cursor property with a value of "not-allowed", which will display a "no parking sign" when you mouse over the button:
```
.disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
```
[Test it](https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_disabled)

By default, the size of the button is determined by its text content (as wide as its content). Use the width property to change the width of a button:
```
.button1 {width: 250px;}
.button2 {width: 50%;}
.button3 {width: 100%;}
```
[Test it](https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_width)

 



