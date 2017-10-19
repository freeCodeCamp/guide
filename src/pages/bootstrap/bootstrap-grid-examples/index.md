---
title: Bootstrap Grid Examples
---
# Bootstrap Grid Examples

Bootstrap styling uses a grid system which contains containers, rows, columns, and grid tiers to make it easy to implement in any project.

## Container

Containers are the first layer in using Bootstrap's Grid System.  They allow the developer to choose if they want their site's contents centered using the full width of the display or a fixed width.

Containers can be implemented by adding a class name to the element that you want to encompass the content you want using the grid system.

The class names are:

1. `.container`
    - uses fixed width
2. `.container-fluid`
    - uses full width

## Rows

Rows are horizontal groups/containers of columns that guarantee your columns are properly aligned.

Rows can be implemented by adding a class name to the element that you want to encompass your columns.

The class name is:

1. `.row`

## Columns

Columns are used to equally space out the content within them based on the width of the container.  The max amount of columns per row is 12.  Column widths are set in percentages, so they're always fluid and sized relative to their parent element.  Columns also have horizontal padding to space them out from other columns within the same row.  Columns are used in relation to the **grid tiers**.  Bootstrap was developed to be mobile first, so breakpoints were created for different layouts and interfaces.  The breakpoints are based on minimum viewport widths which allow for the ability to scale up elements as the viewport changes.  So, there are 5 grid tiers to accomodate viewport width:

1. Extra Small
2. Small
3. Medium
4. Large
5. Extra Large

Columns can be implemented by adding a class name to the element that you want to space out across your page.

The class names can range from:

1. `.col-` - Extra Small
2. `.col-sm-4`  - Small
3. `.col-md-4` - Medium
4. `.col-lg-4` - Large
5. `.col-xl-4` - Extra Large

-----------------------------------------------------------------------------------------------------------------------------------
## Examples

###### Example 1 - Equal Width

    <div class="container">
      <div class="row">
        <div class="col">
          1 of 2
        </div>
        <div class="col">
          2 of 2
        </div>
      </div>
      <div class="row">
        <div class="col">
          1 of 3
        </div>
        <div class="col">
          2 of 3
        </div>
        <div class="col">
          3 of 3
        </div>
      </div>
    </div>
    
###### Example 2 - Setting One Column Width

    <div class="container">
      <div class="row">
        <div class="col">
          1 of 3
        </div>
        <div class="col-6">
          2 of 3 (wider)
        </div>
        <div class="col">
          3 of 3
        </div>
      </div>
      <div class="row">
        <div class="col">
          1 of 3
        </div>
        <div class="col-5">
          2 of 3 (wider)
        </div>
        <div class="col">
          3 of 3
        </div>
      </div>
    </div>
    
###### Example 3 - Variable Width Content
*Use `col-{breakpoint}-auto` classes to size columns based on the natural width of their content*

    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-2">
          1 of 3
        </div>
        <div class="col-md-auto">
          Variable width content
        </div>
        <div class="col col-lg-2">
          3 of 3
        </div>
      </div>
      <div class="row">
        <div class="col">
          1 of 3
        </div>
        <div class="col-md-auto">
          Variable width content
        </div>
        <div class="col col-lg-2">
          3 of 3
        </div>
      </div>
    </div>
    
###### Example 4 - Horizontal Alignment

    <div class="container">
      <div class="row justify-content-start">
        <div class="col-4">
          One of two columns
        </div>
        <div class="col-4">
          One of two columns
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-4">
          One of two columns
        </div>
        <div class="col-4">
          One of two columns
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-4">
          One of two columns
        </div>
        <div class="col-4">
          One of two columns
        </div>
      </div>
      <div class="row justify-content-around">
        <div class="col-4">
          One of two columns
        </div>
        <div class="col-4">
          One of two columns
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-4">
          One of two columns
        </div>
        <div class="col-4">
          One of two columns
        </div>
      </div>
    </div>
    
###### Example 5 - Column Wrapping
*If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.*

    <div class="row">
      <div class="col-9">.col-9</div>
      <div class="col-4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
      <div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
    </div>
    
    
 More examples/information can be found [here]!(https://getbootstrap.com/docs/4.0/layout/grid/)
