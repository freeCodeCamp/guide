---
title: Button Tag
---
## Button Tag

The `<button>` tag or _button_ element causes an action to be performed, such as submitting a [form](https://guide.freecodecamp.org/html/elements/form-tag). Any text appearing between the opening and closing tags will appear as text on the button.

By default, no action occurs when a button is clicked. Actions must be added to buttons by associating the button with a form or through the use of [JavaScript](https://guide.freecodecamp.org/javascript/onclick-event).

#### Example:

```html
  <button name="button">Submit</button>
```

#### Attributes
The button element has two primary attributes: _name_ and _type_.

The _name_ attribute is used for submitting form data, and allows the server side code to identify which button was clicked, along with any form data submitted.

Possible values for the _type_ attribute are:
- Submit: Submits a form when activated. This is the default type.
- Reset: When a button is associated with a form, this type resets all form controls to their initial values.
- Button: The button has no default behavior, but Javascript can be used to associate the button with customized behavior.

#### Additional Considerations
Buttons can also be created using the [_input_](https://guide.freecodecamp.org/html/elements/input) element. However, buttons created with the button element are easier to style, and can contain inner HTML content, such as icons or images.

The [_anchor_](https://guide.freecodecamp.org/html/elements/a-tag) element can be styled to appear and behave like a button. The best practice is to use the button or input elements to create buttons.

#### More Information:

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
- [W3](https://www.w3.org/TR/html4/interact/forms.html#h-17.5)
