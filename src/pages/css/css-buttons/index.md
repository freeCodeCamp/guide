---
title: CSS Buttons
---
## CSS Buttons

* You can style any clickable button (HTML `<button>` element)

`<button>Click Me</button>`

* The default button looks like the following:

![Default Button Style](https://image.ibb.co/kCweAm/button.png "Default Button Style")


## Styling a Button

You can change several properties of a button in order to change its appearance.


### Button Color

To change the background color of a button, use the background-color property:

`button {background-color: #6ba0f4;}`

![Button Background-Color](https://image.ibb.co/f5Xpt6/button_bg_blue.png "Button Background-Color")

To add a colored border to a button, use the border property:

```
button {
  background-color: #FFF;
  color: #FFF;
  border: 2px solid #6ba0f4;
}
```

![Button Border](https://image.ibb.co/kUqymR/button_border_blue.png "Button Border")


### Button Text Size

To change the text font size of a button, use the font-size property:

`button {font-size: 20px;}`

![Button Text Size](https://image.ibb.co/gM9r6R/button_fontsize.png "Button Text Size")


### Button Padding

To change the padding of a button, use the padding property:

`button {padding: 15px 30px;}`

![Button Padding](https://image.ibb.co/fKer6R/button_padding.png "Button Padding")


### Button Width

To change the width of a button, regardless the text content, use the width property:

`button {width: 250px;}`

![Button Width](https://image.ibb.co/cDgSfm/button_width.png "Button Width")


### Rounded Buttons

To create rounded buttons, use the border-radius property:

`button {border-radius: 50%;}`

![Rounded Buttons](https://image.ibb.co/cfH00m/button_bradius.png "Rounded Buttons")


### Hoverable Buttons

To change the style of a button when you move the mouse over it, use the :hover selector:

```
button:hover {
  background-color: #0E2C5B;
  color: #FFF;
}
```

![Hoverable Buttons](https://image.ibb.co/hxQnfm/button_hover.png "Hoverable Buttons")


### Disabled Buttons

To disable a button, use the cursor property:

```
button {
  cursor: not-allowed;
}
```

#### More Information:
* https://www.w3schools.com/css/css3_buttons.asp
* https://www.w3schools.com/howto/howto_css_animate_buttons.asp
