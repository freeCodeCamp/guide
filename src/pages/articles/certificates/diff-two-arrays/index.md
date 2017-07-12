---
title: Diff Two Arrays
---
<div class="lightbox-wrapper">[![](//discourse-user-assets.s3.amazonaws.com/optimized/2X/2/24043ff6eaf64c58ca15936ec29bd7c22809c9de_1_690x379.gif)

<div class="meta"><span class="filename">HkEgef5.gif</span><span class="informations">698x384 72.4 KB</span><span class="expand"></span></div>](//discourse-user-assets.s3.amazonaws.com/original/2X/2/24043ff6eaf64c58ca15936ec29bd7c22809c9de.gif "HkEgef5.gif") </div>

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

Check two arrays and return a new array that contains only the items that are not in either of the original arrays.

#### Relevant Links

*   [for Loop (Devdocs)](https://devdocs.io/javascript/statements/for)
*   [Array.prototype.includes (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)
*   [Array.prototype.filter (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.concat (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Merge the list to make it easy to compare functions.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Use filter to get the new array, you will need to create a callback function.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

The best way to go about the callback function is to check if the number from the new merged array is not in **both** original arrays and return it.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution (Imperative Solution):

    function diffArray(arr1, arr2) {
      var newArr = [];

      function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
        for (var i=0;i<first.length;i++) {
          if (second.indexOf(first[i]) === -1) {
            // Pushing the elements unique to first to newArr
            newArr.push(first[i]);
          }
        }
      }

      onlyInFirst(arr1, arr2);
      onlyInFirst(arr2, arr1);

      return newArr;
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

[<kbd>![](//discourse-user-assets.s3.amazonaws.com/original/2X/6/6d6bf8d908c0577924495e89482c7163190c3856.png) **Run Code** ![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:")</kbd>](https://repl.it/CLme/0)

### Code Explanation:

Read the comments in the code.

#### Relevant Links

*   [for Loop (Devdocs)](https://devdocs.io/javascript/statements/for)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution (Declarative Solution):

    function diffArray(arr1, arr2) {
      return arr1
        .concat(arr2)
        .filter(
            item => !arr1.includes(item) || !arr2.includes(item)
        )
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

[<kbd>![](//discourse-user-assets.s3.amazonaws.com/original/2X/6/6d6bf8d908c0577924495e89482c7163190c3856.png) **Run Code** ![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:")</kbd>](https://repl.it/CNYb/0)

### Code Explanation:

Explain solution here and add any relevant links

#### Relevant Links

*   [Array.prototype.concat (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)
*   [Array.prototype.filter (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.includes (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution (Declarative Solution):

    function diffArray(arr1, arr2) {
        return arr1
          .filter(el => !arr2.includes(el))
          .concat(
            arr2.filter(el => !arr1.includes(el))
          )
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

[<kbd>![](//discourse-user-assets.s3.amazonaws.com/original/2X/6/6d6bf8d908c0577924495e89482c7163190c3856.png) **Run Code** ![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:")</kbd>](https://repl.it/CNYU/0)

### Code Explanation:

Explain solution here and add any relevant links

#### Relevant Links

*   [Array.prototype.includes (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)
*   [Array.prototype.filter (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.concat (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories -- **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) for reference.