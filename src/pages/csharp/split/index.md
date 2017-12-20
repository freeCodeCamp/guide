---
title: Split
---

# Split Method

`String.Split` method can parse a string: As input, Split takes an characters that indicate which characters is the separator generating an array of the sub strings.

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
