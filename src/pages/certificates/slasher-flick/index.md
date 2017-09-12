---
title: Slasher Flick
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

For example: `slasher(<a href='http://forum.freecodecamp.com/t/javascript-array-prototype-splice/14307' target='_blank' rel='nofollow'>1, 2, 3], 2);` must return [3].

#### Relevant Links

*   [JS Array Prototype Splice</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302' target='_blank' rel='nofollow'>JS Array Prototype Slice</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

*   We need only the remaining part of an array, so we can just remove what we don't.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

*   `splice()` function can be used.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

*   `slice()` function can be used.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function slasher(arr, howMany) {
      // remove the head
      arr.splice(0, howMany);
      // return the remaining or the tail
      return arr;
    }
    slasher(<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>1, 2, 3], 2);

![:rocket:</a> <a href='https://repl.it/CLjU/28' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   This solution uses the `splice()` function.
*   First argument, **arr** is the array to be modified.
*   Second argument, **howMany** is the number of elements to be removed starting with **arr<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:"' target='_blank' rel='nofollow'>0]**.
*   Modify the array with `splice()` and return it.

## ![:sunflower:</a> Intermediate Code Solution:

    function slasher(arr, howMany) {

      // Return string after the amount chopped off.
      return arr.slice(howMany);

    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/29' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   This solution uses the `slice()` function.
*   The argument **howMany** is the number of elements to be removed starting with **arr<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:"' target='_blank' rel='nofollow'>0]**.
*   Modify the array with `slice()` and return it.

## ![:clipboard:</a> NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.