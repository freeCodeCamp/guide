---
title: Pairwise
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/" rel="help">**`Read-Search-Ask`**</a> if you get stuck. Try to pair program![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

The algorithm should look for pairs of numbers in the first argument *arr* which sum equates to the second argument *arg*. Then, the tally of respective indices should be aggregated.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

Note: JavaScript arrays are zero-indexed - the first element of an array is at index 0, and the last element is at the index equal to the value of the array's length property minus one.

#### Relevant Links

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" rel="nofollow">JavaScript Array</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" rel="nofollow">JavaScript Array.prototype.reduce()</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

The adjacent pair should be the very first element starting from current position.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Consider using the value or its index to keep track of the elements already been used.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Instead of itterating through the array to find a matching pair consider using simple arithmetic to find the needing pair and then evaluate its existence within the array.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

```javascript
    function pairwise(arr, arg) {
      // Set sum of indices to zero
      var sum = 0;
      // make a local copy of the arguments object so we don't modify it directly
      var pairArr = arr.slice();
      // looping from first element
      for(i = 0; i < pairArr.length; i++) {
        //Looping from second element by setting first element  constant
        for(j = i + 1; j < pairArr.length; j++) {
          // Check whether the sum is equal to arg
          if(pairArr[i] + pairArr[j] == arg) {
            //Add the indices
            sum += i + j;
            //Set the indices to NaN so that they can't be used in next iteration
            pairArr[i] = pairArr[j] = NaN;
          }
        }
      }
      return sum;
    }

    // test here
    pairwise([1,4,2,3,0,5], 7);
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLpD/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

* The variable *sum* holds the sum of indices.
* The outer `for` loop starts from the first element of *arr*.
* The inner `for` loop starts from the second element of *arr*.
* If the sum of an element and the element succeeding it is equal to *arg*:
  * The sum of the indices of these elements is added to *sum*.
  * These elements are set to `NaN` so that they're not used in the next iteration.
* After the loops are completed, the *sum* is returned.

#### Relevant Links

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length">JavaScript string.length</a>
* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NaN" target="_blank" rel="nofollow">JavaScript NaN</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

```javascript
    function pairwise(arr, arg) {
      // Create empty array to keep the arrays we will add.
      var index = [];

      // Loop to check the first number.
      for (var a in arr) {
      // temporal first number.
      var temp = arr[a];

      // Second loop to check against the first number.
      for (var i = 1; i < arr.length; i++) {
        // temporal second number.
        var temp2 = arr[i];

        // Key element, this check to make sure that the numbers add to arg
        // also that the second index is greater than the first, and that neither
        // of those indices are already on the array.
        if (temp + temp2 === arg && i > a && index.indexOf(+a) === -1 && index.indexOf(+i) === -1) {
          // if true then add both indices as integers then stop checking to avoid repeats.
          index.push(+a, +i);
          break;
        }
      }
    }

    // After the two loops are done, check if index is empty to return 0
    // or if it is not, then use Array.reduce(callbackFunc) to return the sum
    // of the numbers.
    if (index.length >= 1) {
      var addAll = function(a, b) {
        return a + b;
      };

      return index.reduce(addAll);
      } else
      return 0;
    }

    // test here
    pairwise([1,4,2,3,0,5], 7);
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href="https://repl.it/CLpC/0" target="_blank" rel="nofollow">Run Code</a>

### Code Explanation:

* First, an empty array *index* is created to store the indices that will be added.
* The outer loop gets the first number.
* The inner loop gets the second number.
* The following has to be made sure:
  * The two numbers add to *arg* that was passed as a parameter to the function.
  * The index from the second loop is greater than the one from the first loop. This avoids adding wrong indices.
  * The indices are not already part of the *index* array.
* If all the conditions are true, the two indices are added as integers using `+` or `parseInt()`. The inner loop is hence stopped; everything else would be redundant.
* After all the loops are over, it is checked if *index* is empty:
  * If it is empty, then 0 is returned.
  * Otherwise, the sum of all the integers in it is returned. This is done using the `reduce()` method.

#### Relevant Links

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/for" rel="nofollow">JavaScript for</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" rel="nofollow">JavaScript Array.prototype.indexOf()</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" rel="nofollow">JavaScript Array.prototype.push()</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

```javascript
    function pairwise(arr, arg) {
      return arr.reduce((accumulator, value, index, array) => {

        const pair = array.indexOf(arg - value , index + 1);

        if (pair > -1) {
          delete array[pair];
          delete array[index];
          accumulator += index + pair;
        }

        return accumulator;

      }, 0);
    }

    // test here
    pairwise([1,4,2,3,0,5], 7);
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/NtYt/latest' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

* The variable *pair* resolves to the index of first element (the element with least index in case of multiple matches) otherwise `-1`.
* If any matching element exists (if value of *pair* greater than `-1`) remove current and matching element from the array (the array length is not affected) and sum respective indices to *accumulator*.
* The initial value of *accumulator* would be zero.

#### Relevant Links

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete">JavaScript delete operator</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">JavaScript Array.prototype.reduce()</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

* ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
* Add an explanation of your solution.
* Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
* Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
