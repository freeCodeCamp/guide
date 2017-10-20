---
title: Bootstrap Grid System
---
## Bootstrap Grid System

Bootstrap’s Grid System uses containers, rows, and columns to create an aligned and responsive webpage layout.

Responsive webpages are aesthetically and interactively pleasing regardless of the device and screen size used to access the webpage.
This gives you full command on how the webpage should render on a mobile phone versus a tablet versus a small laptop versus a large desktop.

#### Containers

Containers are the top-level HTML ```<div>``` tags when creating a page. They **contain** other HTML elements. Containers are written as:

``` 
<div class=“container”>
	Stuff goes here
</div>
```

#### Rows

Rows are the next-level HTML ```<div>``` tags. They are used to place elements on separate lines. Rows are written as:

```
<div class=“container”>
	<div class=“row”>
		This will be the first line
	</div>
	<div class="row">
		This will be the second line 
	</div>
</div>
```

A container can have an unlimited number of rows, but it’s best practice to use containers to divide your page into separate sections.

For example, you can break down a personal one-page site into several sections: (1) a Landing section, (2) an About section, (3) a Projects section, and (4) a Contact section. Each one of these sections will have its own container.


#### Columns

Columns are the final piece of the puzzle -- and these are what make Bootstrap's grid system so powerful and responsive.

Columns are created as ```<div>``` tags with classes:
* ```col-*```
* ```col-sm-*```
* ```col-md-*```
* ```col-lg-*```
* ```col-xl-*```

Bootstrap's Grid System creates every row with 12 columns of equal width. As the developer, you can group these columns however you want. The `*` above are placeholders for values between 1 and 12. 

Do you want 3 columns of width 4?

```
<div class="container">
	<div class="row">
    	<div class="col-4">
        	This is the first column.
        </div>
		<div class="col-4">
        	This is the second column.
        </div>
        <div class="col-4">
        	This is the third column.
        </div>
    </div>
</div>
```

Note that `3 columns * width 4 per column = 12 columns`.

The `sm | md | lg | xl` in the columns reference the width of the screen.

![Bootstrap Column Breakdowns][column-breakdowns]

If you want 3 columns on equal width on all devices, you would use the HTML in the above code block. However if you want 3 columns of equal width on screens smaller than 576px wide, but then 3 columns of width 3, 6, 3 (these sum to 12!) on screens greater than 576px, you can do the following:

```
<div class="container">
	<div class="row">
    	<div class="col-4 col-sm-3">
        	This is the first column.
        </div>
        <div class="col-4 col-sm-6">
        	This is the second column.
        </div>
        <div class="col-4 col-sm-3">
        	This is the third column.
        </div>
    </div>
</div>
```

---

Please read the Official Bootstrap Documentation linked below for a more comprehensive understanding of Bootstrap's versatile grid system.

##### Other Resources

* [Official Bootstrap Documentation](https://getbootstrap.com/docs/4.0/layout/grid/)
* [Boostrap Grid Examples](https://guide.freecodecamp.org/bootstrap/bootstrap-grid-examples)


[//]: <> (IMAGE REFERENCES)
[column-breakdowns]: https://raw.githubusercontent.com/rahrang/open-source/master/freeCodeCamp_guide/bootstrap-grid-column-breakdowns.png
