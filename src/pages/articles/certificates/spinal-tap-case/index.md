---
title: Spinal Tap Case
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

Convert the given string to a lowercase sentence with words joined by dashes.

#### Relevant Links

*   [String global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   <a>JS Regex Resources</a>
*   [JS String Prototype Replace](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)
*   [JS String Prototype ToLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Create a regular expression for all white spaces and underscores.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

You will also have to make everything lowercase.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

The tricky part is getting the regular expression part to work, once you do that then just turn the uppercase to lowercase and replace spaces with underscores using `replace()`.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function spinalCase(str) {
      // Create a variable for the white space and underscores.
      var regex = /\s+|_+/g;

      // Replace low-upper case to low-space-uppercase
      str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

      // Replace space and underscore with -
      return str.replace(regex, '-').toLowerCase();
    }

    // test here
    spinalCase('This Is Spinal Tap');

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLnS/0)

### Code Explanation:

*   **regex** contains the regular expression `/\s+|_+/g`, which will select all white spaces and underscores.
*   The first `replace()` puts a space before any encountered uppercase characters in the string **str** so that the spaces can be replaced by dashes later on.
*   While returning the string, another `replace()` replaces spaces and underscores with dashes using **regex**.

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    function spinalCase(str) {
      // Replace low-upper case to low-space-uppercase
      str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
      // Split on whitespace and underscores and join with dash
      return str.toLowerCase().split(/(?:_| )+/) .join('-');
    }

    // test here
    spinalCase('This Is Spinal Tap');

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLnT/0)

### Code Explanation:

*   Similar to the first solution, the first `replace()` puts a space before any encountered uppercase characters in the string **str** so that the spaces can be replaced by dashes later on.
*   Instead of using `replace()` here to replace whitespace and underscores with dashes, the string is `split()` on the regular expression `/(?:_| )+/` and `join()`-ed on `-`.

#### Relevant Links

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS Array Prototype Join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function spinalCase(str) {
      // "It's such a fine line between stupid, and clever."
      // --David St. Hubbins

      return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/EUZV)

### Code Explanation:

*   Split the string at one of the following conditions (_converted to an array_)
    *   a whitespace character [`\s`] is encountered
    *   underscore character [`_`] is encountered
    *   or is followed by an uppercase letter [`(?=[A-Z])`]
*   Join the array using a hyphen (`-`)
*   Lowercase the whole resulting string

#### Relevant Links

*   [String#split](http://devdocs.io/javascript/global_objects/string/split)
*   [RegExp](http://devdocs.io/javascript/global_objects/regexp)
*   [Arrray#join](http://devdocs.io/javascript/global_objects/array/join)
*   [String#toLowerCase](http://devdocs.io/javascript/global_objects/string/tolowercase)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) for reference.