---
title: Constructing Strings with Variables
---
Sometimes you will need to build a string, <a href='https://en.wikipedia.org/wiki/Mad_Libs' target='_blank' rel='nofollow'>Mad Libs</a> style. By using the concatenation operator `+`, you can insert one or more variables into a string you're building.

## Example

    var ourName = "Free Code Camp";
    var ourStr = "Hello, our name is " + ourName + ", how are you?";