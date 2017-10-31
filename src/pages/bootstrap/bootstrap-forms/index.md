---
title: Bootstrap Forms
--- 
## Bootstrap Forms 
The Bootstrap framework provides you with various components, forms are part of the components. You have several form control styles, layout options, and custom components for creating a wide variety of forms. Bootstrap utilizes the HTML5 doctype, so all inputs must have a type attribute. Use an appropriate type attribute on all inputs (e.g., email for email address or number for numerical information) to take advantage of newer input controls like email verification, number selection, and more. 
 
**Code Example:**
The example form below demonstrates common HTML form elements that receive updated styles from Bootstrap with additional classes. 
 
`<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input">
      Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`

#### Form Controls: 
The form controls expand on the <a href="https://v4-alpha.getbootstrap.com/content/reboot/#forms">Rebooted form styles</a> with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices. 
 
Textual form controls—like <input>s, <select>s, and <textarea>s—are styled with the .form-control class. Included are styles for general appearance, focus state, sizing, and more.


*List of form controls supported by Bootstrap 4.* 
 
| Classes	| Used for | Supported variations
| .form-group | Any group of form controls |	Use with any block-level element like <fieldset> or <div>
|.form-control | Textual inputs	 |text, password, datetime-local, date, month, time, week, number, email, url, search, tel, color
| | Select menus |	multiple, size |
| | Textareas	| N/A |
| .form-control-file | File inputs | file |
.form-check | Checkboxes and radios	N/A | 
 
**Code Example:** 
`<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>`
 
For file input, use .form-control-file instead of .form-control. 

#### Sizing 
Set heights using classes like .form-control-lg and .form-control-sm. 



