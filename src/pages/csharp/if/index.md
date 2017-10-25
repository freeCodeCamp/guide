---
title: If
---

# If

The if statement executes different blocks of code based on conditions.

```
if (condition)
{
	// Do something when `condition` is true
}
else
{
	// Do something when `condition` is false
}
```

When `condition` is true, code inside the `if` section executes, otherwise `else` executes. Sometimes you would need to add a second condition. For readability, you should use a `else if` rather than nesting `if` statements.

```
if (condition)
{
	// Do something if `condition` is true
}
else if (anotherCondition)
{
	// Do something if `anotherCondition` is ture
}
else
{
	// Do something if `condition` AND `anotherCondition` is false
}
```

Note that the `else` and `else if` sections are not required, while `if` is mandatory.


## Example
```
	Console.WriteLine("Who are you? ");
	string name = Console.ReadLine();
	
	if (name == "John")
	{
		Console.WriteLine("Hi John!");
	}
	else if (name == "Fabio")
	{
		Console.WriteLine("Oh, it's you Fabio :)");
	}
	else
	{
		Console.WriteLine("Oh! I thought you were John or Fabio. Anyway, nice to meet you {0}!", name);
	}
	
	/* Run and type some names:
		-> If name is "John", then output is "Hi John!"
		-> If name is "Fabio", then output is "Oh, it's you Fabio :)"
		-> If name is neither "John" nor "Fabio", output is "Oh! I thought you were John or Fabio. Anyway, nice to meet you {0}!" where {0} contains the name.
	*/
```
