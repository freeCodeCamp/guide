---
title: Add Font Awesome Icons to all of our Buttons
---
## Add Font Awesome Icons to all of our Buttons

### Problem explanation:
Use Font Awesome to add an info-circle icon to your info button and a trash icon to your delete button.

#### Extra
* Logos and the relevant CSS classes for the logos can be found [here](https://fontawesome.com/icons?d=gallery) .
* Adding a space between the `<i>` tag and the text will give it a nice spacing.

## Spoiler alert!

**Solution ahead!**

```javascript
<div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
    </div>
 </div>

```
