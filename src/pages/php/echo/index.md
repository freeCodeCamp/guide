---
title: Echo Statements
---
## Echo Statements

The `echo statement` can output one or more `strings`. In general terms, the echo statement can display anything that can be displayed to the browser, such as `string`, `numbers`, `variables values`, the `results of expressions`, etc.

[`Display Text`]
The following example will show you how to display a string of text with the `echo` statement:

- Example:

```PHP
<?php
	echo "<h1>HTML && PHP s2</h1>";
	echo "Hello";
	echo "This ", "string ", "was ", "made ", "with multiple parameters.";
?>
```

[`Display Variables`]
The following example shows how to output text and variables with the `echo` statement:

- Example:

```PHP
<?php
	$name = "Dunha";

	$var1 = 12;
	$var2 = 103;

	echo "<h2> Hello ".$name."</h2>";
	echo $var1 + $var2;
?>
```
