---
title: "Pairwise"
parent: "certificates-guide"
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

The program should look for pairs of numbers in the array whose sum equal the second argument **arg**. Then instead of adding those numbers up, their indices are to be added.

Remember that arrays start at index 0 and go from there so from [1,4,2,3,0,5] if we switch to their indices it would be [0,1,2,3,4,5]. Then, we add indices 1 + 2 + 3 + 5 and we get 11\. That is what we need to return.

#### Relevant Links

*   <a>JS For Loops Explained</a>
*   <a>JS Array Prototype Reduce</a>
*   <a>JS Reduce Made Easy</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Remember to return the smaller sum if multiple are possible. This means `([1,1,1], 1)` should use `0 + 1` instead of `0 + 1` & `1 + 1`.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Try using an array of indices to track whether an index has been used or not.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

It is easy to confuse indices as being numbers, but since you will be interacting with them, make sure to work with them as integers to prevent the code from behaving erratically.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLpD/0)

### Code Explanation:

*   The variable **sum** holds the sum of indices.
*   The outer `for` loop starts from the first element of **arr**.
*   The inner `for` loop starts from the second element of **arr**.
*   If the sum of an element and the element succeeding it is equal to **arg**:
    *   The sum of the indices of these elements is added to **sum**.
    *   These elements are set to `NaN` so that they're not used in the next iteration.
*   After the loops are completed, the **sum** is returned.

#### Relevant Links

*   <a>String.length</a>
*   [Global NaN property](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NaN)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLpC/0)

### Code Explanation:

*   First, an empty array **index** is created to store the indices that will be added.
*   The outer loop gets the first number.
*   The inner loop gets the second number.
*   The following has to be made sure:
    *   The two numbers add to **arg** that was passed as a parameter to the function.
    *   The index from the second loop is greater than the one from the first loop. This avoids adding wrong indices.
    *   The indices are not already part of the **index** array.
*   If all the conditions are true, the two indices are added as integers using `+` or `parseInt()`. The inner loop is hence stopped; everything else would be redundant.
*   After all the loops are over, it is checked if **index** is empty:
    *   If it is empty, then 0 is returned.
    *   Otherwise, the sum of all the integers in it is returned. This is done using the `reduce()` method.

#### Relevant Links

*   <a>JS For In Loop</a>
*   <a>JS Array Prototype IndexOf</a>
*   <a>JS Array Prototype Push</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function pairwise(arr, arg) {
      // search array for elements that when paired, equal the second argument, then sum their indices
      // make a local copy of the arguments object so we don't modify it directly
      var pairArr = arr.slice();
      return pairArr.reduce( function (a,b,index){ // use native reduce to collect running total of summed indices
          var search = arg - b; // get difference of current item so we know what value will sum to arg

          // check if search value in rest of the array, but also make sure it doesn't match current search index
      if ( pairArr.indexOf(search) != -1 && pairArr.indexOf(search) != index ){ 
         var total = index + pairArr.indexOf(search);  // if found, add to the runnning total
         pairArr.splice(index,1,NaN); // remove current index from the array
         pairArr.splice(pairArr.indexOf(search),1,NaN); // remove the other matched element from the array
         return a + total; //return the running total back to reduce for next item
      }
      return a; // simply return previous total if no operations needed
      },0);
    }
    // test here
    pairwise([1,4,2,3,0,5], 7);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLpC/2)

### Code Explanation:

See comments in code  
This code takes advantage of the fact that the native Array.prototype.indexOf() method will return the lowest index of the value it finds, a requirement of the challenge. Given that you start with the first item in the array (automatically the lowest of it's value), you're guaranteed to always find the lowest pairs, before removing them from the search space.

#### Relevant Links

*   <a>JS Array Prototype Reduce</a>
*   <a>JS Array Prototype IndexOf</a>
*   [JS Array Prototype Splice](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
*   [Global NaN property](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NaN)
*   <a>JS Reduce Made Easy</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) for reference.
