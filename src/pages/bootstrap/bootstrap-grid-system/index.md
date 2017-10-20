---
title: Bootstrap Grid System
---
## Bootstrap Grid System

Bootstrap's grid system allows up to 12 columns across the page.

If you do not want to use all 12 column individually, you can group the columns together to create wider columns:

ROW1 : span 1	span 1	span 1	span 1	span 1	span 1	span 1	span 1	span 1	span 1	span 1	span 1
ROW2: span 4	 span 4	 span 4
ROW3: span 4	span 8
ROW4: span 6	span 6
ROW5: span 12

Bootstrap's grid system is responsive, and the columns will re-arrange depending on the screen size: On a big screen it might look better with the content organized in three columns, but on a small screen it would be better if the content items were stacked on top of each other.

Tip: Remember that grid columns should add up to twelve for a row. More than that, columns will stack no matter the viewport.


The Bootstrap grid system has four classes:

xs (for phones)
sm (for tablets)
md (for desktops)
lg (for larger desktops)
The classes above can be combined to create more dynamic and flexible layouts.

Tip: Each class scales up, so if you wish to set the same widths for xs and sm, you only need to specify xs. 


Some Bootstrap grid system rules:

*Rows must be placed within a .container (fixed-width) or .container-fluid (full-width) for proper alignment and padding
*Use rows to create horizontal groups of columns
*Content should be placed within columns, and only columns may be immediate children of rows
*Predefined classes like .row and .col-sm-4 are available for quickly making grid layouts
*Columns create gutters (gaps between column content) via padding. That padding is offset in rows for the first and last column via negative margin on .rows
*Grid columns are created by specifying the number of 12 available columns you wish to span. For example, three equal columns would use three .col-sm-4
