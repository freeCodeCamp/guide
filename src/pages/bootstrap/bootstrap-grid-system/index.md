---
title: Bootstrap Grid System
---
## Bootstrap Grid System

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/bootstrap/bootstrap-grid-system/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

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
<!-- Please add any articles you think might be helpful to read before writing the article -->


