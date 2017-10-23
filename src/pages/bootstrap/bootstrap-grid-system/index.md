---
title: Bootstrap Grid System
---
## Bootstrap Grid System

Bootstrap uses a twelve column grid system, useful for designing a layout that will work well across different size screens from mobile and tablet to desktop.

You build your grid with containers, rows, and columns.

#### How it works

###### Container
The container is the outer most element that will *contain* your grid, use `container` for a fixed width container in the middle of the screen (extra margin on larger screens) or `container-fluid` for full width.

```
<div class="container"></div>
```

###### Row
Use `row` to group your columns, this will keep everything lined up properly and help you structure your grid.
```
<div class="row"></div>
```

###### Columns
Column classes indicate the number of columns you’d like to use out of the possible 12 per row. For example `col-sm-6` would mean your column would use up half the width of the `row` on a small screen, and `col-lg-4` would use up a third on a large screen.

Here is how you would define a class prefix to use up one column width on the various screen sizes:

- **Extra Small** `col-1`
- **Small** `col-sm-1`
- **Medium** `col-md-1`
- **Large** `col-lg-1`
- **Extra Large** `col-xl-1`

```
<div class="col-sm-1"></div>
```


#### Example

A full width grid that has four columns, that each take up a full row on xs screens, half a row on sm and md screens, and a quarter of the width of the row on screens that are large and above.

```
<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-sm-6 col-lg-4">First Column</div>
    <div class="col-12 col-sm-6 col-lg-4">Second Column</div>
    <div class="col-12 col-sm-6 col-lg-4">Third Column</div>
    <div class="col-12 col-sm-6 col-lg-4">Forth Column</div>
  </div>
</div>
```

*Note that `col-md` and `col-xl` are not defined, where a size is not defined, it will default down to the next smaller size that has been specified.*

Bootstrap provides a ready made 12 column grid system for use in layouts. Consider the following code.

```html
   <div class="container">
	<div class="row">
		<div class="col-md-6">Content</div>
		<div class="col-md-6">Content</div>
	<div>
   </div>
```

where: 

	- col = column
	- md = screen size
	- 6 = column width

As a 12 column grid system, all user defined grid column widths must add up to 12. 

Screen size values can be assigned as follows:

  - xs - < 768px Phones
  - sm - < 992px Tablets
  - md - < 1200px Laptops
  - lg - > 1200 px Desktops
 
 Bootstrap is mobile first and responsive. 
 
 Mobile first means that the grid layout will automatically be responsive for smaller screens. The HTML then defines the grid layout for larger screens. 

The following code and image shows what is possible using different column widths. 

```html
	<div class="container">
		<div class="row">
			<div class="example col-md-6">Content</div>
			<div class="example col-md-6">Content</div>
		<div>
	</div>

	<div class="container">
		<div class="row">
			<div class="example col-md-4">Content</div>
			<div class="example col-md-4">Content</div>
			<div class="example col-md-4">Content</div>
		<div>
	</div>

	<div class="container">
		<div class="row">
			<div class="example col-md-3">Content</div>
			<div class="example col-md-3">Content</div>
			<div class="example col-md-3">Content</div>
			<div class="example col-md-3">Content</div>
		<div>
	</div>

	<div class="container">
		<div class="row">
			<div class="example col-md-2">Content</div>
			<div class="example col-md-2">Content</div>
			<div class="example col-md-2">Content</div>
			<div class="example col-md-2">Content</div>
			<div class="example col-md-2">Content</div>
			<div class="example col-md-2">Content</div>
		<div>
	</div>

	<div class="container">
		<div class="row">
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
		</div>
	</div>
```


![12-col-grid](https://github.com/bflatt72/bflatt72.github.io/blob/master/img/bootstrapgrid1.png)


#### More Information:

[Bootstrap Docs - Grid system](https://getbootstrap.com/docs/4.0/layout/grid/)

*This guide is based on Bootstrap v4 (it will work with v3 accept extra small screens are defined as `xs` and there is no `xl` size)*



