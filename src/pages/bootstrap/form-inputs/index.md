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


```<div class="checkbox">
  <label><input type="checkbox" value="">Option 1</label>
</div>
<div class="checkbox">
  <label><input type="checkbox" value="">Option 2</label>
</div>
<div class="checkbox disabled">
  <label><input type="checkbox" value="" disabled>Option 3</label>
</div>```
