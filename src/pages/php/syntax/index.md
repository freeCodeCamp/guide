---
title: Syntax
--- 

## Standard PHP Syntax

PHP scripts are included between the ```<?php``` and  ```?>``` tags.

Every PHP statement ends with a semicolon. ```;```


---
##### Example
```php

<?php
echo 'Hello World!';
?>
```
---

## Comments

Comments are lines of code that will be ignored by the PHP interpreter.
Their main purpose is to help keeping code readable.

Single-line comments can be in the double slash or hash format ```//single line comment``` ```#another single line comment```

Comments can also be splitted in multiple lines. All text between ```/*``` and ```*/``` will be considered a comment.

---
##### Example
```php

<?php
 //this is a single line comment
 # this is another single line comment
 /*This 
   is
   a
   multi-line
   comment
 */
echo 'Hello World!';
?>
```

---

## Case Sensitivity in PHP

Variable's names are case-sensitive in PHP. Names like ```$Variable```  ```$variable``` and ```$variAble``` will reference different variables.
