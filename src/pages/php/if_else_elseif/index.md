---
title: Conditional Statements
---
## Conditional Statements

Often, when you write code in `PHP`, you want to perform different actions for different conditions. You can use `Conditional Statements` in your code to do this.

In `PHP` we have the following `Conditional Statements`:

- `if` -> Exec some code if one condition is true;
- `if/else` -> Exec some code if a condition is true and another code if that condition is false;
- `if/elseif/else` -> executes different codes for more than two conditions.

[`IF Statements`]
- Syntax:
```PHP
<?php
if (condition)
{
	# Code to be executed if condition is true;
}
?>
```

- Example:
```PHP
<?php
$var1 = 1;

if ($var1 == 1)
{
	echo "The value of var1 equals 1";
}
?>
```

[`IF/ELSE Statements`]
- Syntax:
```PHP
<?php
if (condition)
{
	# Code to be executed if condition is true.
}
else
{
	# Code to be executed if condition is false.
}
?>
```

- Example:
```PHP
<?php
$var1 = 1;

<?php
if ($var1 == 1)
{
	echo "The value of var1 equals 1";
}
else
{
	echo "The value of var1 is different from 1";
}
?>
```

[`IF/ELSEIF/ELSE Statements`]
- Syntax:
```PHP
<?php
if (condition)
{
	# Code to be executed if this condition is true.
}
elseif (condition)
{
	# Code to be executed if this condition is true.
}
else
{
	# Code to be executed if all conditions are false.
}
?>
```

- Example:
```PHP
<?php
$var1 = 1;

if ($var1 == 1)
{
	echo "The value of var1 equals 1";
}
elseif ($var1 == 3)
{
	echo "The value of var1 equals 3";
}
else
{
	echo "The value of var1 is different from 1";
}
?>
```
