---
title: Python Keywords
---
Python has a list of <a href='https://docs.python.org/3/reference/lexical_analysis.html#keywords' target='_blank' rel='nofollow'>keywords</a> that cannot be used as identifiers (variable names). Trying to use any of these keywords as variables will create a <b>Syntax Error</b> and your Python script will not be run:

    >>> False = "Hello campers!"
    File "<stdin>"
    SyntaxError: can't assign to keyword

    >>> break = "Hello campers!"
    File "<stdin>", line 1
        break = "Hello campers!"
                ^
        SyntaxError: invalid syntax
