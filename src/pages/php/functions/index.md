---
title: Functions
---
## Functions
In PHP the developer can create functions that allow them to repeat routine tasks without having to rewrite large amounts of code.

### Example Function
In this example function we take two arguments a username and the amount of points to add - we then return a string declaring that the user has been given points.
```php
<?php
function freeCodeCamp(username, pointsToAdd){
  $msg = "You gave ".$username." ".$pointsToAdd." points";
  return $msg;
}
```

#### More Information:
* <a href="https://secure.php.net/manual/en/functions.user-defined.php">php.net user defined functions manual</a>
