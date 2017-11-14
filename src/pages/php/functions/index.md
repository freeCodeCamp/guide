---
title: Functions
---

# Functions

Without functions. Everytime you have to define variables.

```php
$a = 1;
$b = 2;

// returns 3
echo $a + $b;
// ...
$a = 4;
$b = 2;

// returns 6
echo $a + $b;
```

Functions way, better, you can reuse them

```php
function sum($a, $b)
{
    return $a + $b;
}

// return 3
echo sum(1,2);

//return 10
echo sum(2,8);
```
