---
title: "DNA Pairing"
parent: "certificates-guide"
---

<div class="lightbox-wrapper">[![](//discourse-user-assets.s3.amazonaws.com/optimized/2X/2/2798a83aaaa34ec2b18f4b8ec122b76c264a9d67_1_368x500.jpg)

<div class="meta"><span class="filename">usiNBDU.jpg</span><span class="informations">450x611 47.1 KB</span><span class="expand"></span></div>](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2798a83aaaa34ec2b18f4b8ec122b76c264a9d67.jpg "usiNBDU.jpg") </div>

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

*   You will get a DNA strand sequence and you need to get the pair and return it as a 2D array of the base pairs. Keep in mind that the provided strand should be first always.

#### Relevant Links

*   [Array.push()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [String.split()](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

*   There are two base case, A-T and C-G, these go both way. You can use regular expression, if statements of anything that you can think of.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

*   I would recommend using a switch, as it makes things a lot smoother.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

*   The result must be an array of arrays, so keep that in mind when pushing things.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function pairElement(str) {
      // Return each strand as an array of two elements, the original and the pair.
      var paired = [];

      // Function to check with strand to pair.
      var search = function(char) {
        switch (char) {
          case 'A':
            paired.push(['A', 'T']);
            break;
          case 'T':
            paired.push(['T', 'A']);
            break;
          case 'C':
            paired.push(['C', 'G']);
            break;
          case 'G':
            paired.push(['G', 'C']);
            break;
        }
      };

      // Loops through the input and pair.
      for (var i = 0; i < str.length; i++) {
        search(str[i]);
      }

      return paired;
    }

    // test here
    pairElement("GCG");

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLmz/0)

### Code Explanation:

*   The program is very simple, the best solution that I have come up with is to use a switch to catch all the possible four elements. Using if statements would take too much code. You could also use Regular Expressions.
*   Since we have to the original and the pair, I decided to take all four cases instead of the base two.
*   Create an empty array and use the `search` function to push the right values to the array and return them.

#### Relevant Links

*   <a>Switch Statements</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    function pairElement(str) {
      //define a map object with all pair possibilities 
      var map = {T:'A', A:'T', G:'C', C:'G'};
      //split str into a char Array
      strArr = str.split('');
      //replace each Array item with a 2d Array using map
      for (var i=0;i<strArr.length;i++){
        strArr[i]=[strArr[i], map[strArr[i]]];
      }
     return strArr;
    }

    // test here
    pairElement("GCG");

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLnA/0)

## Code Explanation:

*   First define an object with all pair possibilities, this allows us to easily find by key or value.
*   Split `str` into a characters array so we can use each letter to find its pair.
*   Use a loop to go throw the array of characters and replace each character by an array of the pair, thus creating 2d arrays.

#### Relevant Links

*   <a>Bracket Notation for objects</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) for reference.
