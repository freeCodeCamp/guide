---
title: Bootstrap Grid Examples
---
## Bootstrap Grid Examples

### Classes used:
```
xs
```
Extra small devices
```
sm
```
Tablets
```
md
```
Desktops
```
lg
```
Wide Screens

##### Three Equal Columms

These will always be three columns starting fromm mobile to desktop

<div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
</div>

```
<div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
</div>
```
### Three Unequal Columms

These columns start from tablet then scales to desktop

<div class="row">
  <div class="col-sm-2">.col-sm-3</div>
  <div class="col-sm-7">.col-sm-6</div>
  <div class="col-sm-3">.col-sm-3</div>
</div>

```
<div class="row">
  <div class="col-sm-2">.col-sm-3</div>
  <div class="col-sm-7">.col-sm-6</div>
  <div class="col-sm-3">.col-sm-3</div>
</div>
```

### Two Columns

<div class="row">
  <div class="col-sm-2">.col-sm-3</div>
  <div class="col-sm-8">.col-sm-6</div>
</div>

```
<div class="row">
  <div class="col-sm-2">.col-sm-3</div>
  <div class="col-sm-8">.col-sm-6</div>
</div>
```

### Nesting Columns
Nesting is really easy all you have to do is make sure to have a larger column and then use the ```row``` class inside

<div class="row">
  <div class="col-md-8">
   Large Column
    <div class="row">
      <div class="col-md-6">smaller columns</div>
      <div class="col-md-6">smaller columns</div>
    </div>
  </div>
  <div class="col-md-4">just a column</div>
</div>

```
<div class="row">
  <div class="col-md-8">
   Large Column
    <div class="row">
      <div class="col-md-6">smaller columns</div>
      <div class="col-md-6">smaller columns</div>
    </div>
  </div>
  <div class="col-md-4">just a column</div>
</div>
```

### Mixing columns with different screen sizes

  <div class="row">
    <div class="col-12 col-md-8">.col-12 .col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>
  <div class="row">
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>

```
  <div class="row">
    <div class="col-12 col-md-8">.col-12 .col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>
  <div class="row">
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>
```

### Bootstrap Examples

* https://getbootstrap.com/docs/4.0/examples/grid/
* https://www.w3schools.com/bootstrap/bootstrap_grid_examples.asp


