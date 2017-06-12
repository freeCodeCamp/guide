---
title: "Everything Be True"
parent: "certificates-guide"
---

![](//discourse-user-assets.s3.amazonaws.com/original/2X/d/d69c7f2d86b8902a9bc83653d95932115de47e6a.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

The program needs to check if the second argument is a [truthy](http://forum.freecodecamp.com/t/javascript-truthy-value/15975) element, and it must check this for each object in the first argument.

#### Relevant Links

*   [JavaScript Truthy](http://forum.freecodecamp.com/t/javascript-truthy-value/15975)
*   [JavaScript Arguments](http://forum.freecodecamp.com/t/javascript-arguments/14283.md)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Remember to iterate through the first argument to check each object.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Only if all of them are truth will we return true, so make sure all of them check.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

> _try to solve the problem now_

You could use loops or callbacks functions, there are multiple ways to solve this problem.

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solutions ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

**Using for-in loop & hasOwnProperty**

    function truthCheck(collection, pre) {
      // Create a counter to check how many are true.
      var counter = 0;
      // Check for each object
      for (var c in collection) {
        // If it is has property and value is truthy
        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
          counter++;
        }
      }
      // Outside the loop, check to see if we got true for all of them and return true or false
      return counter == collection.length;
    }

    // test here
    truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLnw/0)

### Code Explanation:

*   First I create a counter to check how many cases are actually true.
*   Then check for each object if the value is truthy
*   Outside the loop, I check to see if the counter variable has the same value as the length of **collection**, if true then return **true**, otherwise, return **false**

#### Relevant Links

*   [JS Loops](http://forum.freecodecamp.com/t/javascript-loops/14681)
*   [Object.prototype.hasOwnProperty()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

**Using Array.every()**

    function truthCheck(collection, pre) {
      return collection.every(function (element) {
        return element.hasOwnProperty(pre) && Boolean(element[pre]);
      });
    }

    // test here
    truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLny/0)

### Code Explanation:

*   Uses the native "every" method to test whether all elements in the array pass the test.
*   This link will help [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

#### Relevant Links

*   [JS Array.prototype.every()](http://forum.freecodecamp.com/t/javascript-array-prototype-every/14287)
*   [MDN Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function truthCheck(collection, pre) {
      // Is everyone being true?
      return collection.every(obj => obj[pre]);
    }

    truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/E2u6/0)

### Code Explanation:

*   For _every_ object in the `collection` array, check the truthiness of object's property passed in `pre` parameter
*   `Array#every` method internally checks if the value returned from the callback is truthy.
*   Return `true` if it passes for _every_ object. Otherwise, return `false`.

#### Relevant Links

*   [`Array#every`](http://devdocs.io/javascript/global_objects/array/every)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) for reference.
