---
title: Python Keywords
---


Python has a list of <a href='https://docs.python.org/3/reference/lexical_analysis.html#keywords' target='_blank' rel='nofollow'>keywords</a> that cannot be used as identifiers. (variable names) You can see a full list of these keywords below:

        False      class      finally    is         return
        None       continue   for        lambda     try
        True       def        from       nonlocal   while
        and        del        global     not        with
        as         elif       if         or         yield
        ssert     else       import     pass
        break      except     in         raise


When using these keywords in a python file, you will receive an error similar to the one below: 

    >>> False = "Hello campers!"
    File "<stdin>"
    SyntaxError: can't assign to keyword

    >>> break = "Hello campers!"
    File "<stdin>", line 1
        break = "Hello campers!"
                ^
        SyntaxError: invalid syntax