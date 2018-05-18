---
title: php data types
---

## PHP Data Types

The values assigned to a PHP variable may be of different data types including simple string and numeric types to more complex data types like arrays and objects.
PHP supports total eight primitive data types:

* <a href="#php-integer">Integer</a>
* <a href="#php-float">Floating point number or Float</a>
* <a href="#php-string">String</a>
* <a href="#php-boolean">Boolean</a>
* <a href="#php-array">Array</a>
* <a href="#php-object">Object</a>
* <a href="#php-resource">Resource</a>
* <a href="#php-null">NULL</a>

## PHP Integer

Integers are whole numbers, without a decimal point (..., -2, -1, 0, 1, 2, ...).

#Code Example:

```php
<?php
$a = 123; // decimal number
echo $a;
 
$b = -123; // a negative number
echo $d;

```

## PHP Float
Floating point numbers (also known as "floats", "doubles", or "real numbers") are decimal or fractional numbers.

#Code Example:

```php
<?php
$a = 1.023; 
echo $a;
 
$b = 10.2e3;; 
echo $d;

```

## PHP String
Strings are sequences of characters, where every character is the same as a byte.
A string can hold letters, numbers, and special characters and it can be as large as up to 2GB (2147483647 bytes maximum).

#Code Example:

```php
<?php
$a = 'Hello world!';
echo $a;
echo "<br>";
 
$b = "Hello world!";
echo $b;

```
You can learn more about PHP functions <a href="http://php.net/manual/en/ref.strings.php" target="_blank">here.</a>

## PHP Boolean
Booleans are like a switch it has only two possible values either 1 (true) or 0 (false).

#Code Example:

```php
<?php
// Assign the value TRUE to a variable
$show_error = true;
echo $show_error;

?>
```

## PHP Array
An array is a variable that can hold more than one value at a time. 
It is useful to aggregate a series of related items together, for example a set of country or city names.

#Code Example:

```php
<?php
$colors = array("Red", "Green", "Blue");
var_dump($colors); // to view the variable

```

## PHP Object
An object is a data type which stores data and information on how to process that data.
In PHP, an object must be explicitly declared.

#Code Example:

```php
<?php
class foo{
    function do_foo(){
        echo "Doing foo."; 
    }
}

$bar = new foo;
$bar->do_foo();

```


## PHP Resource
A resource is a special variable, holding a reference to an external resource.
Resource variables typically hold special handlers to opened files and database connections.

#Code Example:

```php
<?php
// Open a file for reading
$handle = fopen("note.txt", "r");
var_dump($handle);
echo "<br>";
 
// Connect to MySQL database server with default setting
$link = mysql_connect("localhost", "root", "");
var_dump($link);

```
## PHP NULL
The special NULL value is used to represent empty variables in PHP. A variable of type NULL is a variable without any data.

#Code Example:

```php
<?php
$a = NULL;
var_dump($a);
echo "<br>";

```
