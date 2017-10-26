---
title: Python Code Blocks and Indentation
---
<a href='https://docs.python.org/3/reference/lexical_analysis.html#indentation' target='_blank' rel='nofollow'>Indentation</a>

**TODO: NOTE**

*   Should this go here? What should be discussed at this point?
*   Might be more suited for when functions are introduced."

###Indentation
Leading blank spaces in a line, marks indentation. It also tells us, in which code block a statement belongs to. The user can write a statement in multiple logical lines rather than one physical line. There are two methods of doing so:
* Explicit joining of logical lines: using *backslash*
```python
if 1900 < birth_year < 2100 and 1 <= birth_month <= 12 \
   and 1 <= birth_day <= 31 and 0 <= birth_hour < 24 \
   and 0 <= birth_minute < 60 and 0 <= birth_second < 60:  
        return 1
```
* Implicit joining of logical lines: using *paranthesis*
```python
Continents=["Asia", "Africa", "North America",
            "South America", "Antarctica", "Europe",
            "Australia"]
```
             
### Comments
In python, one can add comments in single line or mutli-line.
For single line comment use *#* operator at the start of the line.
```python
# This is a single line comment.
```
For multi line comment use *'''*, three single quotes at the start and end of the commented lines.
```python
'''This is
   a multi line
   comment.'''
```
