---
title: Bootstrap Form Inputs
---
## Bootstrap Form Inputs

Bootstrap supports the following form controls:

input
textarea
checkbox
radio
select

Bootstrap supports all the HTML5 input types: text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color.

Note: Inputs will NOT be fully styled if their type is not properly declared!

EXAMPLE CODE SNIPPET FOR CHECK BOXES

Checkboxes are used if you want the user to select any number of options from a list of preset options.

The following example contains three checkboxes. The last option is disabled:


```html
<div class="checkbox">
  <label>Option 1</label>
  <input type="checkbox" value="">
</div>
<div class="checkbox">
  <label>Option 2</label>
  <input type="checkbox" value="">
</div>
<div class="checkbox disabled">
  <label>Option 3</label>
  <input type="checkbox" value="">
</div>
```

### How to make Bootstrap Inputs Accessible utilizing Native HTML Parameters.

Input fields should have labels or some other form of identifier such as WAI-ARIA tags to meet the Web Content Accessibility Guidelines or [WCAG](https://www.w3.org/WAI/tutorials/forms/) for short. In order for screen readers to accurately convey to a user what labels are associated with which inputs the labels should reference the corresponding input.

This can be done by utlizing the <code>for</code> parameter in the HTML:
```html
<label for="email-input">Enter Email</label>
<input type="email" class="form-control" id="email-input" placeholder="Enter Email">

```

The label <code>for</code> attribute **always** references the input field by its **ID**. This tells the screen reader that this label is definitely for this input field which will minimize confusion for any users who are using a screen reader to visit a web site.
