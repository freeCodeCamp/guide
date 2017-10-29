---
title: Split
---

# Split Method
<code>String.Split</code> breaks a string into sub-strings. it takes a character as input, which is used as a separator. the method  returns an array - each element of that array a part of the original string.

<code>String.Split</code> can be used for turning a sentence into its word components:
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
