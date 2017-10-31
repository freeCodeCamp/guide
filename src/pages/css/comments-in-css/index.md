---
title: Comments in CSS
---
## Comments in CSS

Comments are used in CSS to explain a block of code or to make temporary changes during development. The commented code doesn't execute. 

The comment syntax in CSS works for both single and multi-line comments. You can add as many comments to your stylesheet as you like.

```css
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
By using CSS comments to make your stylesheets more readable, the CSS will be easier to maintain in the future for you or another developper. 
It’s good practice to use CSS comments to help identify parts of any stylesheet that might be difficult to understand for someone who didn't write the code. 

You can also make your comments more readable by stylizing it
```css
/*
***
* SECTION FOR H2 STYLE 
***
* A paragraph where I give informations
* about everything that someone who reads the code
* but didn't write it would need to know.
* The asterisk around the paragraph make it more readable.
***
*/

h2 {
    font-size: 1.2em;
    font-family: "Ubuntu", serif;
    text-transform: uppercase;
    }
```

### More Information:

* [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments)
* [CSS Comments by Adam Roberts](https://www.sitepoint.com/css-comments/)
* [CSS Guidelines](https://cssguidelin.es/#commenting) 
