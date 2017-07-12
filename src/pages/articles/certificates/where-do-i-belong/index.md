---
title: Where Do I Belong
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

This can be a tricky problem to understand. You need to find where in the array a number should be inserted by order, and return the index where it should go.

#### Relevant Links

*   [JS Array Sort](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

The first thing to do is sort the array from lower to bigger, just to make the code easier. This is where sort comes in, it needs a callback function so you have to create it.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Once the array is sorted, then just check for the first number that is bigger and return the index.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

If there is no index for that number then you will have to deal with that case too.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function getIndexToIns(arr, num) {
      arr.sort(function(a, b) {
        return a - b;
      });

      for (var a = 0; a < arr.length; a++) {
        if (arr[a] >= num)
          return a;
      }

      return arr.length;
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLjU/36)

## Code Explanation:

*   First I sort the array using `.sort(callbackFuntion)` to sort it by lowest to highest, from left to right.
*   Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index as an integer.

#### Relevant Links

*   [parseInt()](http://forum.freecodecamp.com/t/javascript-parseint/14686)

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function getIndexToIns(arr, num) {
      // Find my place in this sorted array.
      var times = arr.length; // runs the for loop once for each thing in the array
      var count = 0; 
      for (i=0;i<times;i++){
        if(num>arr[i]){count++;} } // counts how many array numbers are smaller than num
        return count; // the above equals num's position in a sorted array
    }

    getIndexToIns([40, 60], 50);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLjU/2547)

## Code Explanation:

*   I do not sort the arr input array
*   I run a for loop counting whenever the num input is bigger than an arr input number.
*   This number is equivalent to what num's position would be in a sorted array.

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

by [@HarinaPana](/u/harinapana)

    function getIndexToIns(arr, num) {

      arr.sort(function(a, b) {
      return a - b;
      });

      var i = 0;
      while (num > arr[i]) {
      i++;
      }

      return i;
    }

    getIndexToIns([40, 60], 50);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLjU/4135)

## Code Explanation:

*   Sort existing array.
*   Iterate through the array while checking if _num_ is bigger.
*   The loop will stop when _num_ isn't bigger than _i_ and return the last element checked.

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

by [@faustodc](/u/faustodc)

    function getIndexToIns(arr, num) {
      arr.push(num);
      arr.sort(function(a, b){return a-b});
      return arr.indexOf(num);
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/EB10/1)

## Code Explanation:

*   First we add the number `num` to the array using `push()` which adds it as the last element of the array.
*   Then we use `sort()` with the callback function `function(a, b){return a-b}` to sort the numbers in ascending order.
*   Lastly we return the postion or index of `num` in the array with the `indexOf()` function.

#### Relevant Links

*   [push()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
*   [indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

**Using `.findIndex()`**

    function getIndexToIns(arr, num) {
      // sort and find right index
      var index = arr.sort((curr, next) => curr > next)
        .findIndex((currNum)=> num <= currNum);
      // Returns proper answer
      return index === -1 ? arr.length : index;
    }

    getIndexToIns([40, 60], 500);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLjU/63)

## Code Explanation:

*   First sort the array in ascending order, this is currently done using array functions for minimal footprint.
*   Once the array it is sorted, we directly apply the `.findIndex()` where we are going to compare every element in the array until we find where `num <= currNum` meaning where the number we want to insert is less or equal to the current number number in the iteration.
*   Then we use ternary operations to check whether we got an index returned or `-1`. We only get `-1` when the index was not found meaning when we get a false for all elements int he array, and for such case, it would mean that `num` should be inserted at the end of the list hence why we use `arr.length`.

#### Relevant Links

*   [Array.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
*   [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
*   [Ternary Operator](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

by [@nivrith](/u/nivrith)

    function getIndexToIns(arr, num) {

    return arr.concat(num).sort((a,b) => a-b).indexOf(num);

    }

    getIndexToIns([1,3,4],2);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/IUJE/0)

## Code Explanation:

*   We use method-chaining to invoke one method after another to solve the problem in a single line. First we merge `arr` and `num` by invoking the arr.concat(num) method
*   Then we use `sort()` with the callback **arrow function** `(a, b) => return a-b` to sort the numbers in ascending order
*   Lastly we return the postion or index of `num` in the array with the `indexOf()` method

#### Relevant Links

*   [Method chaining in JavaScript](https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html)
*   [concat()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=example)
*   [Arrow functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) for reference.