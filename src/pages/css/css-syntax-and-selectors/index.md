--- 
title: CSS Syntax and Selectors 
--- 
## CSS Syntax 
 
CSS is a declarative language, a style of programming where you describe the desired result without explicitly listing commands or steps that must be performed. 
 
CSS is made up of two things: 
* **Property**: an identifier that describes what you would like to change (e.g. opacity, background-color, font-size) 
* **Value**: each property is given a value, which specifies how you want to change those stylistic features. 
 
![alt text](https://stuyhsdesign.files.wordpress.com/2015/09/syntax-css1.png "CSS Syntax") 
 
A property paired with a value is called a CSS Declaration. A CSS declaration is put into a declaration block and paired with a selector (we will get to selectors a bit later) to produce CSS Rulesets (or CSS Rules). 
 
## CSS declaration blocks 
 
Declarations are grouped into blocks. Each block must be wrapped in curly braces, an opening `{` and a closing `}`. Each property and value must be separated by a colon `:`. Each declaration must be separated by a semi-colon `;`, the last declaration of a block does not need to have a semi-colon but it is good practice to include it anyway. 
 
![alt text](https://mdn.mozillademos.org/files/3667/css%20syntax%20-%20declarations%20block.png "CSS declaration blocks") 
 
## CSS Selectors 
 
So we have our properties and our values laid out but how do we tell the computer where these styles should go? We do this by prefixing our declaration with a **Selector**, this could be an html tag name (div, p, span) or a class name (.header, .title, .footer) or even an ID (#main-nav). The associated styles will only be applied to the Selectors you tell them to. Selectors can get very complicated, for example, if you want to target only the second `p` tag inside of a `div` with the class of `.main-content`. If you want to read more about selectors you can visit [MDN web docs article about selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors)   
 
#### More Information: 
In-depth article on MDN about CSS syntax [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Syntax)
