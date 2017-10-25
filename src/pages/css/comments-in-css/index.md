---
title: Comments in CSS
---
## Comments in CSS

Comments are used in CSS to explain a block of code or to make temporary changes during development. The commented code doesn't execute. The comment syntax in CSS works for both single and multi-line comments.

``` css
    /*
        This is
        a multi-line
        comment
    */
    /* This is a single line comment*/
    .group:after {
        content: "";
        display: table;
        clear: both;
    }
```

You can add as many comments to your stylesheet as you like. It’s good practice to use CSS comments to help identify parts of any stylesheet that might be difficult to understand from a cursory glance. By using CSS comments to make your stylesheets more readable, the CSS will be easier to maintain in the future.

## Comment Formats

Comments should be used everyday in your CSS to keep in maintainable and readable by any dev who dives into said CSS.
Here are a few exmples to get you started of CSS comments you can use in your daily work to make your life that bit easier.

``` css
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   CSS TABLE OF CONTENTS
   
   1.0 - Reset
   2.0 - Fonts
   3.0 - Globals
   4.0 - Color Palette
   5.0 - Header
   6.0 - Body
       6.1 - Sliders
       6.2 - Imagery
   7.0 - Footer
   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/****************************************************************************
1.0 - Reset */

/****************************************************************************
2.0 - Fonts */

/****************************************************************************
3.0 - Globals */

/****************************************************************************
4.0 - Color Palette */

/****************************************************************************
5.0 - Header */

/****************************************************************************
6.0 - Body */

    /************************************************************************
    5.1 - Sliders */
    
    /************************************************************************
    5.2 - Imagery */
    
/****************************************************************************
7.0 - Footer */
``` css

### More Information:

MDN documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/Comments' target='_blank' rel='nofollow'>MDN</a>

CSS Comments by Adam Roberts: <a href='https://www.sitepoint.com/css-comments/' target='_blank' rel='nofollow'>Sitepoint</a>
