---
title: Python Code Blocks and Indentation
---
<a href='https://docs.python.org/3/reference/lexical_analysis.html#indentation' target='_blank' rel='nofollow'>Indentation</a>

**TODO: NOTE**

*   Should this go here? What should be discussed at this point?
*   Might be more suited for when functions are introduced."

Although, this should be discussed when you are learning if and else's or functios 
Let's have brief introduction  about indentations. Python takes Indentation very seriously. 
For eg 
```
a = 11
if a > 10: # This is wrong. There is no white space/indentation. Second line starts right below the first line - wrong.
print("Greater than 10") 

if a > 10:  # This is correct and Notice the 'white space' in the second line. It now feels like second line is under the 'if'
  print ("Greater than 10") 
```
If you don't take care of your indentation then python will throw up indentation errors. And same goes for functions and if's and else's 
