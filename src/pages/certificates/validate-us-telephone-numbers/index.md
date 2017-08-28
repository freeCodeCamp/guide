---
title: Validate Us Telephone Numbers
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

The task is not that hard to understand, implementing it is the hardest part. You have a to validate a US phone number. This means there is a certain amount of numbers required, while you don't need to put the country code, you will still need the area code and use one of the few formats allowed.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp' target='_blank' rel='nofollow'>RegExp</a>
*   <a href='http://regexpal.com/' target='_blank' rel='nofollow'>regexpal.com</a>
*   <a href='https://regex101.com/#javascript' target='_blank' rel='nofollow'>regex101.com/</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

There is no way around it, you will need to brush up your regular expressions skills.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Try using a site from the previous list to test the regex live while you create it.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Start by trying to get it to validate each format from the example, each one should take a new line, once you get to select them all, then add examples that should not be selected and make sure they are not selected.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function telephoneCheck(str) {
       var regex = /^(1\s?)?(\(\d{3}\)|\d{3})<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>\s\-]?\d{3}[\s\-]?\d{4}$/;
       return regex.test(str);
    }
    telephoneCheck("555-555-5555");

![:rocket:</a> <a href='https://repl.it/CLo9/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   `^` denotes the beginning of the string `(1\s?)?` checks allows for a "1" or a "1 " at the beginning.
*   `\d{n}` checks for exactly n number of digits so `(\(\d{3}\)|\d{3})` checks for three digits that are allowed to be between parenthesis.
*   `<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:"' target='_blank' rel='nofollow'>\s\-]?` checks for spaces or dashes between the groups of digits.
*   `
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

The task is not that hard to understand, implementing it is the hardest part. You have a to validate a US phone number. This means there is a certain amount of numbers required, while you don't need to put the country code, you will still need the area code and use one of the few formats allowed.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp' target='_blank' rel='nofollow'>RegExp</a>
*   <a href='http://regexpal.com/' target='_blank' rel='nofollow'>regexpal.com</a>
*   <a href='https://regex101.com/#javascript' target='_blank' rel='nofollow'>regex101.com/</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

There is no way around it, you will need to brush up your regular expressions skills.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Try using a site from the previous list to test the regex live while you create it.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Start by trying to get it to validate each format from the example, each one should take a new line, once you get to select them all, then add examples that should not be selected and make sure they are not selected.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function telephoneCheck(str) {
       var regex = /^(1\s?)?(\(\d{3}\)|\d{3})<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>\s\-]?\d{3}[\s\-]?\d{4}$/;
       return regex.test(str);
    }
    telephoneCheck("555-555-5555");

![:rocket:</a> <a href='https://repl.it/CLo9/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   `^` denotes the beginning of the string `(1\s?)?` checks allows for a "1" or a "1 " at the beginning.
*   `\d{n}` checks for exactly n number of digits so `(\(\d{3}\)|\d{3})` checks for three digits that are allowed to be between parenthesis.
*   ` denotes the end of the string. In this case the beginning and end of the string are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. "s 555 555 5555 a").
*   Lastly we use `regex.test(str)` to test if the string adheres to the regular expression and return `true` or `false`.

#### Relevant Links

*   <a>Regex Resources</a>

## ![:sunflower:</a> Intermediate Code Solution:

    function telephoneCheck(str) {
      var re = /^(?:(?:\+?1\s*(?:<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
      return re.test(str);
    }
    telephoneCheck("555-555-5555");

![:rocket:</a> <a href='https://repl.it/CLoa/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

This is an example of a very comprehensive and robust solution to validating US phone numbers client side. In such cases it might be much better and easier to implement this library <a href='https://github.com/googlei18n/libphonenumber' target='_blank' rel='nofollow'>libphonenumber</a>.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test' target='_blank' rel='nofollow'>Regex.test()</a>
*   <a href='https://github.com/googlei18n/libphonenumber' target='_blank' rel='nofollow'>libphonenumber</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.