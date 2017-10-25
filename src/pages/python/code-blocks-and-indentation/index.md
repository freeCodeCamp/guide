---
title: Python Code Blocks and Indentation
---
<a href='https://docs.python.org/3/reference/lexical_analysis.html#indentation' target='_blank' rel='nofollow'>Indentation</a>

Code Blocks and Indentation are extremely important in Python.  Take a look at this example code:
 
     if(val > 10):                     # 1
         print("Value is too large")   # 2
         val = -1                      # 3
     else:                             # 4
         print("Value is OK")          # 5
         
 Python uses indentation-based syntax, meaning Python uses indentation to group statements together.  
 For example, lines 2 and 3 both execute when the expression `val > 10` is true.  While other 
 languages often use `{` and `}` to distinguish sections of code, Python uses indentation instead.  
 Programmers generally refer to these sections of code as "Code Blocks".
 
 

**TODO: NOTE**

*   Should this go here? What should be discussed at this point?
*   Might be more suited for when functions are introduced."
