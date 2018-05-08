---
title: JavaScript
---

# Javascript(ES6) split() method

The **split()** method splits a **string** object into an **array** of strings by separating the string into substrings, using a specified _separator_ string to determine where to make each split.

## syntax

```myString.split(separator, limit);
```


```

// example

function splitString (myString, separator, limit) {
  return myString.split(separator, limit);
}

```

## separator


**split(" ")**

When found, separator is **removed** from the string and the substrings are returned in an array. 

```

splitString("foxes on boxes", " ");

// ["foxes", "on", "boxes"]
// array.length: 3

```


**split("")** 

If an empty string is used as the separator, the string is split between each character.

```

splitString("foxes on boxes", "");

// ["f", "o", "x", "e", "s", " ", "o", "n", " ", "b", "o", "x", "e", "s"]
// array.length: 14

```


**split()**

If separator is not found or is omitted, the returned array contains one element consisting of the entire string.

```

splitString("foxes on boxes");

// ["foxes on boxes"]
// array.length: 1

```


## limit

Integer specifying a limit on the number of splits to be found. When this parameter is provided, the ```split()``` method splits the string at each occurence of the specified separator but stops when **limit** entries have been placed into the array. It may still contain fewer entries than limit if the end of the string is reached before the specified limit is reached. The left-over text is not returned in the new array.

```

splitString("foxes on boxes", " ", 1);

// ["foxes"]
// array.length: 1

```

_source and more reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split_
