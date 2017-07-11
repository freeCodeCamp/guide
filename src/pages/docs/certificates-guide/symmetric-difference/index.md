---
title: "Symmetric Difference"
parent: "certificates-guide"
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

Symmetric difference is the difference between two sets i.e., the collection of elements which are members of either set but not both.

In the symmetric difference algorithm, you would work through the arrays of numbers in this manner: `sym(A, B, C)` translates to `sym(sym(A, B), C)` i.e., the symmetric difference of set A and set B is found first and then, the symmetric difference of the resultant set and set C is found.

Example: `sym([1, 2, 5], [2, 3, 5], [3, 4, 5])` equals `[1, 4, 5]`.

#### Relevant Links

*   [YouTube - Symmetric difference](https://www.youtube.com/watch?v=PxffSUQRkG4)
*   [Symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
*   [JS Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
*   [JS Arguments](http://forum.freecodecamp.com/t/javascript-arguments/14283)
*   [JS Array Prototype Reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [JS Reduce Made Easy](http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

The **arguments** object is not an array. It is similar to an array, but does not have any array properties except length. For example, it does not have the `pop` method. However, it can be converted to a real array: `var args = Array.prototype.slice.call(arguments);`

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Write a function that returns the symmetric difference of the two arrays: `yourFunction([1, 2, 3], [2, 4, 6])` must return `[1, 3, 4, 6]`

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Use `Array.prototype.reduce` along with `yourFunction` to repeat the process on multiple arguments

Something strange about the definition of symmetric difference is that if one identical item occurs in three different sets, it is a member of the symmetric difference. For example:

    a = [1, 2, 5]
    b = [2, 3, 5]
    c = [3, 4, 5]

    sym(a, b) = [1, 3]
    sym([1, 3], c) = [1, 4, 5]

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function sym() {
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
        }

        function symDiff(arrayOne, arrayTwo) {
            var result = [];

            arrayOne.forEach(function(item) {
                if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                    result.push(item);
                }
            });

            arrayTwo.forEach(function(item) {
                if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                    result.push(item);
                }
            });

            return result;
        }

        // Apply reduce method to args array, using the symDiff function
        return args.reduce(symDiff);
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/C4II/0)

### Code Explanation:

*   `push()` is used to break down the **arguments** object to an array, **args**.
*   The `symDiff` function finds the symmetric difference between two sets. It is used as a callback function for the `reduce()` method called on **args**.
*   `arrayOne.forEach()` pushes the elements to **result** which are present only in **arrayOne** as well as not already a part of **result**.
*   `arrayTwo.forEach()` pushes the elements to **result** which are present only in **arrayTwo** as well as not already a part of **result**.
*   The **result**, which is the symmetric difference is returned. This solution works for any number of sets.

#### Relevant Links

*   [JS For Loops Explained](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS Array Prototype ForEach](http://forum.freecodecamp.com/t/javascript-array-prototype-foreach/14290)
*   [JS Array Prototype IndexOf](http://forum.freecodecamp.com/t/javascript-array-prototype-indexof/14291)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    function sym() {

      // Convert the argument object into a proper array
      var args = Array.prototype.slice.call(arguments);

      // Return the symmetric difference of 2 arrays
      var getDiff = function(arr1, arr2) {

        // Returns items in arr1 that don't exist in arr2
        function filterFunction(arr1, arr2) {
          return arr1.filter(function(item) {
            return arr2.indexOf(item) === -1;
          });
        }

        // Run filter function on each array against the other
        return filterFunction(arr1, arr2)
          .concat(filterFunction(arr2, arr1));
      };

      // Reduce all arguments getting the difference of them
      var symarray = args.reduce(getDiff, []);

      // Run filter function to get the unique values
      var unique = symarray.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
        });
      return unique;
    }

    // test here
    sym([1, 2, 3], [5, 2, 1, 4]);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLoc/0)

### Code Explanation:

*   The `slice()` method is used to break down the **arguments** object to an array, **args**.
*   The `getDiff` function finds the symmetric difference between two sets, **arr1** and **arr2**. It is used as a callback function for the `reduce()` method called on **args**.
*   The first `filterFunction()` returns elements in **arr1** that don't exist in **arr2**.
*   The next `filterFunction()` is run on each array against the other to check the inverse of the first check for uniqueness and concatenate it.
*   **symarray** consists of the reduced arguments.
*   `filter()` is used on **symarray** to keep only the unique values and **unique** is returned.

#### Relevant Links

*   [JS Array Prototype Slice](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)
*   [JS Array Prototype Filter](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)
*   [JS Array Prototype Concat](http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function sym() {
      // difference between set A and set B
      const diff = (A, B) => new Set([...A].filter(n => !B.has(n)));
      // spread operator to convert array like object to array
      const result = [...arguments]
        // map elements in arguments (array) to Set
        .map(arr => new Set(arr))
        // using the formula in https://en.wikipedia.org/wiki/Symmetric_difference
        // i reduce it by uniting the diff(A, B) and diff(B, A)
        .reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)]));

      // convert the set to array by using spread operator again
      return [...result];
    }

    // test here
    sym([1, 2, 3], [5, 2, 1, 4]);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLod/0)

### Code Explanation:

*   **diff** consists of the difference between set A and set B.
*   **result** holds the object which has been converted to an array using the spread operator.
*   `map()` is used to populate the new set object with elements from **arr** using the symmetric difference formula.
*   Before returning, the set is converted to an array using the spread operator.

#### Relevant Links

*   [Set object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
*   [Set.prototype.has()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has)
*   [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
*   [JS Array Prototype Map](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)
*   [Map.prototype.has()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) for reference.
