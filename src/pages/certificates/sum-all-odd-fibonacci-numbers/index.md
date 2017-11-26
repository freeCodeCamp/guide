---
title: Sum All Odd Fibonacci Numbers
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

You will need to gather all the **Fibonacci** numbers and then check for the odd ones. Once you get the odd ones then you will add them all. The last number should be the number given as a parameter if it actually happens to be an off Fibonacci number.

#### Relevant Links

*   <a href='https://en.wikipedia.org/wiki/Fibonacci_number' target='_blank' rel='nofollow'>Fibonacci number</a>

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

![:warning:](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

```javascript
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
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnV/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Create a variable to keep record of the current and previous numbers along with the result that will be returned.
*   Use a while loop to make sure we do not go over the number given as parameter.
*   We use the modulo operand to check if the current number is odd or even. If it is even, add it to the result.
*   Complete the Fibonacci circle by rotating getting the next number and swapping values after.
*   Return the result.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/while' target='_blank' rel='nofollow'>JS while</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

```javascript
    function sumFibs(num) {
        // create an array of fib numbers till num
        var arrFib = 1;
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
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnW/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Create an array of fibonacci numbers till **num**.
*   Use `reduce()` method to find the sum of odd members of array.
*   Return the sum.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/for' target='_blank' rel='nofollow'>JS for</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push' target='_blank' rel='nofollow'>JS Array.prototype.push()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce' target='_blank' rel='nofollow'>JS Array.prototype.reduce()</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

```javascript
    function sumFibs(num) {

        let current = 1;
        let adjacent = 1;
        let accumulate = current;

        while (adjacent <= num) {
            accumulate += (adjacent % 2 !== 0) ? adjacent : 0;
            adjacent += current;
            current = adjacent - current;
        }

        return accumulate;

    }

    // test here
    sumFibs(4);

```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/NYSe/latest' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:
*   The variables `current` and `adjacent` are initialised with the first two Fibonacci numbers and will hold the runtime Fibonacci pair **F<sub>n</sub>, F<sub>n+1</sub>** respectively.
*   The `while` statement iterates over the integer series starting from `adjacent` to `num` (inclusive).
*   The following statement adds `adjacent` to `accumulator` if its an even number.
*   The subsequent two statements reinitialise `current` and `adjacent` to succeeding sequence pair.

#### Relevant Links
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/while' target='_blank' rel='nofollow'>JS while</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()' target='_blank' rel='nofollow'>JS modulo</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
