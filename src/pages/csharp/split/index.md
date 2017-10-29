---
title: Split
---

# Split Method

The `String.Split` method parses a string. As input, it takes a character indicating the separator, and generates an array of sub strings.

## Example
```
string myText = "I like pizza";

// Split the string by ' '(space) character.
string[] splitResoult = myText.Split(' ');

// The array splitResoult, now contains 3 substrings.

// Now print the array of substrings
foreach(string x in splitResoult)
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
