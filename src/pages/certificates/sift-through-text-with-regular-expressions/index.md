---
title: Sift Through Text with Regular Expressions
---
`Regular expressions` are used to find certain words or patterns inside of strings.

Regular expressions are usually surrounded by `/` symbols.

For example, if we wanted to find the number of times the word the occurred in the string The dog chased the cat, we could use the following regular expression: `/the+/gi`

Let's break this down a bit:

the is the pattern we want to match.

*   `+` means we want to find one or more occurrences of this pattern.
*   `g` means that we want to search the entire string for this pattern.
*   `i` means that we want to ignore the case (uppercase or lowercase) when searching for the pattern.