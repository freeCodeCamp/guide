---
title: Capitalize the First Letter of a String
---
To capitalize the first letter of a random string, you should follow these steps:

1.  Get the first letter of the string;
2.  Convert the first letter to uppercase;
3.  Get the remainder of the string;
4.  Concatenate the first letter capitalized with the remainder of the string and return the result;

## 1\. Get the First Letter of the String

You should use <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932' target='_blank' rel='nofollow'>charAt()</a> method, at _index 0_, to select the first character of the string.

    var string = "freeCodecamp";

    string.charAt(0); // Returns "f"

> NOTE: `charAt` is preferable than using `<a href='http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950' target='_blank' rel='nofollow'> ]` (bracket notation) as `str.charAt(0)` returns an empty string (_`''`_) for `str = ''` instead of `undefined` in case of `''[0]`.

## 2\. Convert the First Letter to uppercase

You may use [toUpperCase()</a> method and convert the calling string to upper case.

    var string = "freeCodecamp";

    string.charAt(0).toUpperCase(); // Returns "F"

## 3\. Get the Remainder of the String

You may use <a href='https://github.com/freecodecamp/freecodecamp/wiki/js-array-prototype-slice' target='_blank' rel='nofollow'>slice()</a> method and get the remainder of the string (from the second character, _index 1_, to the end of the string).

    var string = "freeCodecamp";

    string.slice(1); // Returns "reeCodecamp"

## 4\. Return the result adding the first letter and the remainder of the string

You should create a function that accepts a string as only argument and returns the concatenation of the first letter capitalized `string.charAt(0).toUpperCase()` and the remainder of the string `string.slice(1)`.

    var string = "freeCodecamp";

    function capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    capitalizeFirstLetter(string); // Returns "FreeCodecamp"

Or you may add that function to the `String.prototype` for using it directly on a string using the following code (_so that the method is not enumerable but can be overwritten or deleted later_):

    var string = "freeCodecamp";

    /* this is how methods are defined in prototype of any built-in Object */
    Object.defineProperty(String.prototype, 'capitalizeFirstLetter', {
        value: function () {
            return this.charAt(0).toUpperCase() + this.slice(1);
        },
        writable: true, // so that one can overwrite it later
        configurable: true // so that it can be deleted later
    });

    string.capitalizeFirstLetter(); // Returns "FreeCodecamp"

### Source

<a href='http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript/1026087#1026087' target='_blank' rel='nofollow'>stackoverflow - Capitalize the first letter of string in JavaScript</a>