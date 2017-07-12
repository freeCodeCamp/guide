---
title: javaScript Stringprototypesubstr
---
Gets a substring beginning at the specified location and having the specified length.

## Syntax

    str.substr(start[, length])

## Parameters

**start**

Location at which to begin extracting characters. If a negative number is given, it is treated as strLength + start where strLength is the length of the string (for example, if start is -3 it is treated as strLength - 3.)

**length**

Optional. The number of characters to extract.

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr) | [MSDN link](https://msdn.microsoft.com/en-us/LIBRary/0esxc5wy%28v=vs.94%29.aspx)

## Returns

The characters in a string beginning at the specified location through the specified number of characters.

## Description

`start` is a character index. The index of the first character is 0, and the index of the last character is 1 less than the length of the string. `substr()` begins extracting characters at start and collects length characters (unless it reaches the end of the string first, in which case it will return fewer).

If `start` is positive and is greater than or equal to the length of the string, `substr()` returns an empty string.

If `start` is negative, `substr()` uses it as a character index from the end of the string. If `start` is negative and `abs(start)` is larger than the length of the string, `substr()` uses 0 as the start index. Note: the described handling of negative values of the start argument is not supported by Microsoft JScript.

If `length` is 0 or negative, `substr()` returns an empty string. If length is omitted, `substr()` extracts characters to the end of the string.

## Examples

    var str = 'abcdefghij';

    console.log('(1, 2): '   + str.substr(1, 2));   // '(1, 2): bc'
    console.log('(-3, 2): '  + str.substr(-3, 2));  // '(-3, 2): hi'
    console.log('(-3): '     + str.substr(-3));     // '(-3): hij'
    console.log('(1): '      + str.substr(1));      // '(1): bcdefghij'
    console.log('(-20, 2): ' + str.substr(-20, 2)); // '(-20, 2): ab'
    console.log('(20, 2): '  + str.substr(20, 2));  // '(20, 2): '

    var s = "The quick brown fox jumps over the lazy dog.";
    var ss = s.substr(10, 5);  
    document.write("[" + ss + "] <br>");

    ss = s.substr(10);
    document.write("[" + ss + "] <br>");

    ss = s.substr(10, -5);
    document.write("[" + ss + "] <br>");

    // Output:
    // [brown] 
    // [brown fox jumps over the lazy dog.] 
    // []