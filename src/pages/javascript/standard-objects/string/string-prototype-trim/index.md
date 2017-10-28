---
title: String.prototype.trim
---
## String.prototype.trim

The `trim()` method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).<sup>1</sup>

## Syntax

```javascript
str.trim()
```

### Return value
A new string representing the calling string stripped of whitespace from both ends.

## Description
The `trim()` method returns the string stripped of whitespace from both ends. `trim()` does not affect the value of the string itself.

## Examples

**Using trim()**
The following example displays the lowercase string `'foo'`:

```javascript
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

// Another example of .trim() removing whitespace from just one side.

var orig = 'foo    ';
console.log(orig.trim()); // 'foo'
```

#### More Information:
It is possible that the method won't work with older browsers. MDN docs suggests:

### Polyfill

```javascript
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
```

You could also look up on [StackOverflow](https://stackoverflow.com/) or from other fellow developers/websites.

#### Source
1. MDN Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim. Accessed: October 28, 2017

