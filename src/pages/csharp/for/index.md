---
title: For Loop
---

# For Loop

The `for` loop is used to execute a block of code multiple times. They look like this:
#
```cs
for (int i = 0; i < 5; i++)
{
	Console.WriteLine("hello");
	Console.WriteLine($"I've said hello {i + 1} times!");
}
```
Outputs:
```
hello
I've said hello 1 times!
hello
I've said hello 2 times!
hello
I've said hello 3 times!
hello
I've said hello 4 times!
hello
I've said hello 5 times!
```
Let's look at how a `for` loop works, piece-by-piece.

### `int i = 0`
This declares `i` as a control variable for our loop and sets it to 0. The use of `i` will become clear as this article continues, but keep in mind that `i` can be set to anything, such as `2`, `-5`, or the value of another variable.

### `i < 5`
This asserts our condition: `i` being less than 5. This means that our loop will continue to run until `i` is not less than 5.

### `i++`
This means that, every time the code in our loop has completed, `i` will be incremented by 1. Similar to the first part of our loop, you can increment `i` by any value you want by writing `i += someValue`, or even decrement it (`i -= somevalue` or `i--`).

### Putting it All Together
Here's what's going on behind the scenes of a `for` loop:
```cs
for (int i = 0; i < 5, i++) // Create a new variable, i, and set it equal to 0.
// Is i < 5? If so, run this code. If not, break out of this loop.
{
	Console.WriteLine("hello");
	Console.WriteLine($"I've said hello {i + 1} times!");
} // Increment i by 1
```

### `break`
The `break` keyword is used to "break" out of a loop at any time. This means that no code past `break;` will run, and your program will jump to the first line of code after your loop's closing curly brace.
```cs
for (int i = 0; i < 5; i++)
{
	Console.WriteLine("hello");
	break;
	Console.WriteLine($"I've said hello {i + 1} times!");
}
Console.WriteLine("Tada!");
```
Outputs:
```
hello
Tada!
```