---
title: Falsy Bouncer
---
<div class="lightbox-wrapper">[![](//discourse-user-assets.s3.amazonaws.com/optimized/2X/5/55dedad40d9f3f662c70d1eac4effc00c7d26bd9_1_485x500.jpg)

<div class="meta"><span class="filename">GluUbAz.jpg</span><span class="informations">497x512 53.5 KB</span><span class="expand"></span></div>](//discourse-user-assets.s3.amazonaws.com/original/2X/5/55dedad40d9f3f662c70d1eac4effc00c7d26bd9.jpg "GluUbAz.jpg") </div>

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

Remove all <a>falsy</a> values from an array.

#### Relevant Links

*   <a>Falsy Values</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Falsy is something which evaluates to FALSE. There are only six falsy values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

We need to make sure we have all the falsy values to compare, we can know it, maybe with a function with all the falsy values...

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Then we need to add a `filter()` with the falsy values function...

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function bouncer(arr) {
      return arr.filter(Boolean);
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLjU/32)

### Code Explanation:

The `Array.prototype.filter` method expects a function that returns a `Boolean` value which takes a single argument and returns `true` for [truthy](http://forum.freecodecamp.com/t/javascript-truthy-value/15975) value or `false` for <a>falsy</a> value. Hence we pass the built-in `Boolean` function.

#### Relevant Links

*   [Boolean](http://forum.freecodecamp.com/t/javascript-boolean/14311)
*   [Truthy](http://forum.freecodecamp.com/t/javascript-truthy-value/15975)
*   [Array.prototype.filter()](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:trophy:](https://forum.freecodecamp.com/images/emoji/emoji_one/trophy.png?v=3 ":trophy:") Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat:

**`Thanks @renelis @abhisekp @Rafase282 for your help with Algorithm: Falsy Bouncer`**

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) for reference.