---
title: CSS Buttons
---
## CSS Buttons

Buttons are important design elements, and are used to allow the submission of a form or some other action to be performed.

Buttons can be represented by the [_input_](https://guide.freecodecamp.org/html/elements/input) or [_button_](https://guide.freecodecamp.org/html/elements/button-tag) elements in HTML. The CSS you use to style your button will depend on the HTML element representing it.

### Examples

When using the button element in your HTML, the button can be targetted directly by the button [type selector](https://guide.freecodecamp.org/css/selectors/general/type).

```html
<button name="button">Submit</button>
````
````css
button {
  color: #fff;
  background-color: grey;
  padding: 10px 20px;
  border: none;
}
````

When using the input element in your HTML, you can use a [class](https://guide.freecodecamp.org/css/class-selector) to target the button with your CSS. In the following example, a class of "button" is assigned to the input element.
```html
<input class='button' type='button' value='Submit'></input>
````
````css
.button {
  color: #fff;
  background-color: grey;
  padding: 10px 20px;
  border: none;
}
````

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


