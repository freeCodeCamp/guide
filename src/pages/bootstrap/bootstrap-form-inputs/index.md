---
title: Bootstrap Form Inputs
---
## Bootstrap Form Inputs
Form Inputs(Form Controls) are used to collect information from user.

### What are the form controls?

* Input => Defines an input field depends on the type attribute (text, email, radio, checkbox...)
* Textarea => Defines a multiple text field area
* Select => Defines a dropdown list

Bootstrap supports all the HTML5 input types.

## Input

### What are Input types?

* text
* email
* password
* number
* radio
* checkbox
* submit
* reset
* color
* date
* datetime-local
* month
* range
* search
* tel
* time
* url
* week

**Note:** Inputs will NOT be fully styled if their type is not properly declared!

These are plain Html form controls, right? How does Bootstrap come into play? It easily styles them and add extra functionality to them with its classes.

## How to Use?

1. Wrap your user input and labels with div element which uses `.form-group`. It adds optimum spacing between these form groups.
2. Add `.form-control` class to your textual user input(form controls) elements. It adds styling to the form control which makes it display as block element, take 100% width, add some padding, border-radius etc...

```html
<div class="container" style="margin-top: 16px">

   <h5>1. Without form-group and form-control</h5>
   <hr>
   <form>
     <div>
       <label>Name</label>
       <input type="text" placeholder="Enter your name here.">
     </div>
      <div>
       <label>Surname</label>
       <input type="text" placeholder="Enter surname here.">
     </div>
   </form>

   <br>

   <h5>2. Without form-group, with form-control</h5>
   <hr>
   <form>
     <div>
       <label>Name</label>
       <input type="text" placeholder="Enter your name here." class="form-control">
     </div>
     <div>
       <label>Surname</label>
       <input type="text" placeholder="Enter your surname here." class="form-control">
     </div>
   </form>


   <br>

  <h5>3. With form-group and form-control</h5>
   <hr>
   <form>
     <div class="form-group">
       <label>Name</label>
       <input type="text" placeholder="Enter your name here." class="form-control">
     </div>
     <div class="form-group">
       <label>Surname</label>
       <input type="text" placeholder="Enter your surname here." class="form-control">
     </div>
   </form>

 </div>
```

![alt text](https://github.com/figengungor/Image/blob/master/freeCodeCamp/bootstrap/form-inputs/form-group-and-form-control.png
 "Form group and form control")
 
 
## Example Code Snippet for CheckBoxes

Checkboxes are used if you want the user to select any number of options from a list of preset options.

The following example contains three checkboxes. The last option is disabled:


```html
<div class="checkbox">
  <label><input type="checkbox" value="">Option 1</label>
</div>
<div class="checkbox">
  <label><input type="checkbox" value="">Option 2</label>
</div>
<div class="checkbox disabled">
  <label><input type="checkbox" value="" disabled>Option 3</label>
</div>
```



#### More Information:
(https://getbootstrap.com/docs/4.0/components/forms/)




