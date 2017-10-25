---
title: Try-Catch
---

# Try-Catch

`try` and `catch` allow you to handle errors (exceptions) your code throws at runtime. Rather than your program crashing, try-catch allows you to "catch" these exceptions and execute code accordingly. Consider the following code:
##
```cs
Console.Write("Enter a number: ");
string input = Console.ReadLine();
int number = int.Parse(input); // Throws FormatException if the user does not input a number.
```
Our entire program will crash if the user enters anything that isn't a number. We can avoid this by using a `try` block and a `catch` clause.
##
```cs
try
{
    Console.Write("Enter a number: ");
    string input = Console.ReadLine();
    int number = int.Parse(input);
}
catch (FormatException e) // e is optional. You do not have to include it if you don't care about any of the exception's details.
{
    Console.WriteLine("That's not a number!");
}
```
With this code, if our user enters something that's not a number, our program will write `"That's not a number!"` to the console and continue execution normally.

A single `try` block can have multiple `catch` clauses for multiple exception types. Write the clause for the [most derived type](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/inheritance) first.
#
```cs
try
{
    Console.Write("Enter a number: ");
    string input = Console.ReadLine();
    int number = int.Parse(input);

    var numArray = new int[2];
    numArray[2] = number; // Throws IndexOutOfRangeException (remember arrays start at 0)
}
catch (FormatException e)
{
    Console.WriteLine("That's not a number!");
}
catch (IndexOutOfRangeException e)
{
    Console.WriteLine("The index was out of range.");
}
```
A `catch` keyword with no parenthesis after it will catch all exceptions. You can also use the `throw` keyword in a `catch` clause to re-throw the caught exception.
#
```cs
try
{
    Console.Write("Enter a number: ");
    string input = Console.ReadLine();
    int number = int.Parse(input);
}
catch
{
    throw; // Throws the FormatException we just caught. This exact code is no different than the above 3 lines without a try-catch block
}
```
See also: [try-catch-finally](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/try-catch-finally)