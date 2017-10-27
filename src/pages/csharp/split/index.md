---
title: Split
---

# Split Method

`String.Split` method can parse a string: As input, Split takes a character that indicates which the separator in the string, generating an array of the substrings.

## Example
```
string myText = "I like pizza";

// Split the string by ' '(space) character.
string[] splitResult = myText.Split(' ');

// The array splitResult, now contains three substrings.

// Now print the array of substrings
foreach(string x in splitResult)
{
    // Write On Console
    Console.WriteLine(x);
}

```

## Output:
```
> I
> like
> pizza
```
