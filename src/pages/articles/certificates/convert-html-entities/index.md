---
title: Convert HTML Entities
---
<div class="lightbox-wrapper">[![](//discourse-user-assets.s3.amazonaws.com/optimized/2X/f/fc44d1dfbd3910e574cdedb0f05162f65b4cb7c4_1_690x198.jpg)

<div class="meta"><span class="filename">g7sWL1I.jpg</span><span class="informations">800x230 48.4 KB</span><span class="expand"></span></div>](//discourse-user-assets.s3.amazonaws.com/original/2X/f/fc44d1dfbd3910e574cdedb0f05162f65b4cb7c4.jpg "g7sWL1I.jpg") </div>

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

*   You have to create a program that will convert HTML entities from string to their corresponding HTML entities. There are only a few so you can use different methods.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

*   You can use regular Expressions however I didn't in this case.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

*   You will benefit from a chart with all the html entities so you know which ones are the right ones to put.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

*   You should separate the string and work with each character to convert the right ones and then join everything back up.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function convertHTML(str) {
      // Split by character to avoid problems.

      var temp = str.split('');

      // Since we are only checking for a few HTML elements I used a switch

      for (var i = 0; i < temp.length; i++) {
        switch (temp[i]) {
          case '<':
            temp[i] = '&lt;';
            break;
          case '&':
            temp[i] = '&amp;';
            break;
          case '>':
            temp[i] = '&gt;';
            break;
          case '"':
            temp[i] = '&quot;';
            break;
          case "'":
            temp[i] = "&apos;";
            break;
        }
      }

      temp = temp.join('');
      return temp;
    }

    //test here
    convertHTML("Dolce & Gabbana");

### Code Explanation:

Explain solution here and add any relevant links

#### Relevant Links

*   [str.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [arr.join()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
*   [switch statement](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch)

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLnP/0)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    function convertHTML(str) {
    //Chaining of replace method with different arguments
      str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
    return str;
    }

    // test here
    convertHTML("Dolce & Gabbana");

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLnQ/0)

### Code Explanation:

Explain solution here and add any relevant links

#### Relevant Links

*   [str.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
*   [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function convertHTML(str) {
      // Use Object Lookup to declare as many HTML entities as needed.
      htmlEntities={
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '\"':'&quot;',
        '\'':"&apos;"
      };
      //Use map function to return a filtered str with all entities changed automatically.
      return str.split('').map(function(entity){
        return htmlEntities[entity] || entity;
      }).join('');
    }

    // test here
    convertHTML("Dolce & Gabbana");

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLnR/0)

### Code Explanation:

*   Create a object to use the Lookup functionality to easily find the characters.
*   Split the original string by characters and use map to check for the changed html entity or use the same one. Alternatively you could use Regex `str.replace(/&|<|>|"|'/gi`.
*   The a function is added which is what returns the converted entity or the original one if there is no conversion. If you go the regex route then you just have to return the matched hits. `return html[entity];`
*   Lastly we join all the characters once again.

**Note** that if you went the regex route then you don't need to join anything, just make sure you return the whole operation or save it to a variable and then return it.

#### Relevant Links

*   [str.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [arr.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [arr.join()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) for reference.