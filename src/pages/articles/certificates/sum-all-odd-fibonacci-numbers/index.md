---
title: Sum All Odd Fibonacci Numbers
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

You will need to gather all the **Fibonacci** numbers and then check for the odd ones. Once you get the odd ones then you will add them all. The last number should be the number given as a parameter if it actually happens to be an off Fibonacci number.

#### Relevant Links

*   [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

To get the next number of the series, you need to add the current one to the previous and that will give you the next one.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

To check if a number is even all you have to check is if `number % 2 == 0`.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

As you get the next odd one, don't forget to add it to a global variable that can be returned at the end. `result += currNumber;` will do the trick.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function sumFibs(num) {
        var prevNumber = 0;
        var currNumber = 1;
        var result = 0;
        while (currNumber <= num) {
            if (currNumber % 2 !== 0) {
                result += currNumber;
            }

            currNumber += prevNumber;
            prevNumber = currNumber - prevNumber;
        }

        return result;
    }

    // test here
    sumFibs(4);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLnV/0)

### Code Explanation:

*   Create a variable to keep record of the current and previous numbers along with the result that will be returned.
*   Use a while loop to make sure we do not go over the number given as parameter.
*   We use the modulo operand to check if the current number is odd or even. If it is even, add it to the result.
*   Complete the Fibonacci circle by rotating getting the next number and swapping values after.
*   Return the result.

#### Relevant Links

*   <a>JS while Loop</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    function sumFibs(num) {
      // create an array of fib numbers till num
      var arrFib = [1];
      for (var i = 1; i <=num;) {
          arrFib.push(i);
          i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
      }

      // return the sum of odd numbers from the array
      var res = arrFib.reduce(function(prev, curr) {
          if (curr%2 !== 0) return prev + curr;
          else return prev;
        });

      return res;
    }

    // test here
    sumFibs(4);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLnW/0)

### Code Explanation:

*   Create an array of fibonacci numbers till **num**.
*   Use `reduce()` method to find the sum of odd members of array.
*   Return the sum.

#### Relevant Links

*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS For Loops Explained](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [JS Array Prototype Reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) for reference.