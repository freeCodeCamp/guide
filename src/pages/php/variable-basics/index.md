---
title: PHP Variable Basics
---
Variables allow programmers to use data throuhgout a PHP script.

In PHP, variables always start with a `$` symbol and are followed by the name of the variable. Only letters, numbers, and underscores can be used to name a variable (although the name cannot start with a number).

For example, `$my_variable`, `$anotherVariable`, and `$the2ndVariable` are allow valid variable names.

Variable names are case-sensitive. `$my_variable` is different from `$My_Variable` which is different from `$mY_vARiAblE`.

Before a variable can be used, it must be assigned.

````PHP
    <?php
    $my_number = 1;
    echo($my_number);
    
    >>> 1
````

In the example above, the variable is `$my_number`. The value being assigned is the number 1. The variable was then passed to the `echo` function which output the value of `$my_number` to the command line, which in this example would be the number `1`.
