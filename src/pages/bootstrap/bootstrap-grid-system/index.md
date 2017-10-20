---
title: Bootstrap Grid System
---
## Bootstrap Grid System

Bootstrap's grid system allows up to 12 columns across the page.

If you do not want to use all 12 column individually, you can group the columns together to create wider columns.

Bootstrap's grid system is responsive, and the columns will re-arrange depending on the screen size: On a big screen it might look better with the content organized in three columns, but on a small screen it would be better if the content items were stacked on top of each other.

###Grid Classes

The Bootstrap grid system has four classes:

    xs (for phones)
    sm (for tablets)
    md (for desktops)
    lg (for larger desktops)

The classes above can be combined to create more dynamic and flexible layouts.

Tip: Each class scales up, so if you wish to set the same widths for xs and sm, you only need to specify xs.

###Grid System Rules

Some Bootstrap grid system rules:

    Rows must be placed within a .container (fixed-width) or .container-fluid (full-width) for proper alignment and padding
    Use rows to create horizontal groups of columns
    Content should be placed within columns, and only columns may be immediate children of rows
    Predefined classes like .row and .col-sm-4 are available for quickly making grid layouts
    Columns create gutters (gaps between column content) via padding. That padding is offset in rows for the first and last column via negative margin on .rows
    Grid columns are created by specifying the number of 12 available columns you wish to span. For example, three equal columns would use three .col-sm-4

###Basic Structure of a Bootstrap Grid

The following is a basic structure of a Bootstrap grid:
<div class="container">
  <div class="row">
    <div class="col-*-*"></div>
  </div>
  <div class="row">
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
  </div>
  <div class="row">
    ...
  </div>
</div>

So, to create the layout you want, create a container (<div class="container">). Next, create a row (<div class="row">). Then, add the desired number of columns (tags with appropriate .col-*-* classes). Note that numbers in .col-*-* should always add up to 12 for each row.
  
###Examples

The next chapters shows examples of grid systems for different devices:

Stacked-to-horizontal: https://www.w3schools.com/bootstrap/bootstrap_grid_stacked_to_horizontal.asp
Small devices: https://www.w3schools.com/bootstrap/bootstrap_grid_small.asp
Medium devices: https://www.w3schools.com/bootstrap/bootstrap_grid_medium.asp
Large devices: https://www.w3schools.com/bootstrap/bootstrap_grid_large.asp

#### More Information:
http://getbootstrap.com/
https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp
