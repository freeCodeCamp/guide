---
title: Bootstrap Grid Examples
---
## Bootstrap Grid Examples

The Bootstrap grid system has four classes:

* xs (for phones)
* sm (for tablets)
* md (for desktops)
* lg (for larger desktops)

To use 12 column grid system, you use `col-*-*` class. First asterisk is grid system class mentioned above, second asterisk is the number of columns.

**col-*** => for every screen, split * columns.

**col-xs-*** => starting at mobile phone and scaling to large desktop, split * columns.

**col-sm-*** => starting at tablets and scaling to large desktop, split * columns.

**col-md-*** => starting at desktop and scaling to large desktop, split * columns.

**col-xs-*** => starting at mobile phone and scaling to large desktop, split * columns.

**col-lg-*** => large desktop, split * columns.


## 1. Two Equal Columns Always

```html
<div class="row">
   <div class="col-6">col-6</div>
   <div class="col-6">col-6</div>
</div>
```


## 2. Two Equal Columns for tablets, desktop and larger desktop

```html
<div class="row">
   <div class="col-sm-6">col-sm-6</div>
   <div class="col-sm-6">col-sm-6</div>
</div>
```

* On mobile phones, the columns will automatically stack.

## 3. Three Equal Columns for desktop and larger desktop

```html
<div class="row">
   <div class="col-md-4">col-md-4</div>
   <div class="col-md-4">col-md-4</div>
   <div class="col-md-4">col-md-4</div>
</div>
```

* On mobile phones and tablets, the columns will automatically stack.




#### More Information:
[https://getbootstrap.com/docs/4.0/layout/grid/]


