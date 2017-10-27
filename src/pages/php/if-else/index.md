---
title: If-else
---

# if-else 
`if-else` select which statement to execute based on the boolean expression.

## Syntax
```
if (condition)
{
    // condition is true
}
else
{
    // condition is false
}
```

## Example
### if
Execute code if the condition is `true`

```php

<?php

//initialize
$fruit = "blueberry";

if ($fruit == "blueberry")
{
  //it's blueberry
  echo "Delicious!";
}

?>

```

### if...else
Execute code if the condition is `true` and another if condition is `false`
```php

<?php
//initialize
$isLightOn = true;

if ($isLightOn)
{
  //light is turned on
  echo"Light is on!";
}
else
{
  //light is turned off
  echo "Light is off!";
}

?>

```

### if...elseif...else
Execute different codes for more than two condition
```php

<?php

//initialize
$number = 2;

if($number == 1)
{
  echo "Number One";
}
elseif ($number == 2)
{
  echo "Number Two"; 
}
else
{
  echo "Other Number"; 
}

?>

```

### Nested if
Execute different codes with nested condition
```php

<?php

//initialize 
$unreadMessageCount = 100;

if ($unreadMessageCount > 0)
{
  //unreadMessageCount is more than 0

  if ($unreadMessageCount > 1)
  {
    //unreadMessageCount is more than 1
    if ($unreadMessageCount >= 100)
    {
      //unreadMessageCount is more than and equal to 100
      echo "You have 99+ messages.";
    }
    else
    {
      //unreadMessageCount is less than 100
      echo "You have ".$unreadMessageCount." messages.";
    }
  }
  else
  {
    //unreadMessageCount is less than 2
    echo "You have ".$unreadMessageCount." message.";
  }
}
else
{
  //unreadMessageCount is less than 1
  echo "You have no message.";
}
    
?>

```
