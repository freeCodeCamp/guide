---
title: Bootstrap Grid System
---
## Bootstrap Grid System

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/bootstrap/bootstrap-grid-system/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
### Containers

Containers are the first required, basic building block for building a responsive website. There are two types of containers:
* A fixed-width container
* A fluid-width container

These containers are set by adding the appropriate class name to the contaier element, usually a `<div>` tag.

```html
<div class="container">
  Your HTML content goes here ...
</div>
```

A *fixed width* container has a set value for the width, based on the width of the users screen or browser window. The fixed width value is set using Responsive Breakpoint or what is more commonly referred to as "Media Queries".

```html
<div class="container-fluid">
  Your HTML content goes here ...
</div>
```

A *fluid width* container is set to the full width of the screen or browser window.

### Responsive Breakpoints and Media Queries

Bootstrap is designed to display mobile first. This means less CSS code should load on mobile devices allowing the page to load quicker. Additional Breakpoins or Media queries are added as the screen size and/or browser window get larger in width.

The default values for these breakpints are set as follows:

* Mobile phones and devices smaller than 576px in width
* Small deives with a width of 576px and up
* Medium devices (tablets) with a width of 768px and up
* Large devices (desktops, laptops with a width of 992px and up
* Extra large devices with a width of 1200px and up

For developers, there are additional classes and breakpoints defined. But for now, we will keep it simple and stick with these basic breakpoints.

### The Basics

The second building block for building a responsive web page is the content *row*. The row is defined inside of the container. The row is then divided into columns that scale depending on the users screen size.

Here is a basic example:

```html
<div class="container">
  <div class="row">
    <div class="col-sm">
      Column one of three
    </div>
    <div class="col-sm">
      Column two of three
    </div>
    <div class="col-sm">
      Column three of three
    </div>
  </div>
</div>
```

This example creates three, equal-width columns on small, medium, large, and extra large devices using Bootstrap's predefined grid classes. The columns are centered in the page with the parent `.container` class.

In the Grid System, Bootstrap divides each row into 12 columns. The width of these columns varies depending on the width set by the `.col-` class and the devices screen width.

If we wanted a narrower column on both the left and the right, with a large column in the middle, we would change the HTML to look like this:

```html
<div class="container">
  <div class="row">
    <div class="col-sm-3">
      Column one of three
    </div>
    <div class="col-sm-6">
      Column two of three
    </div>
    <div class="col-sm-3">
      Column three of three
    </div>
  </div>
</div>
```

Notice how we simply added a number to the end of each class to indicate the number of columns? Notice also how the numbers with the row total to 12. The max number of columns used by Bootstrap.

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


