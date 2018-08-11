---
title: Use Destructuring Assignment to Assign Variables from Arrays
---
## Use Destructuring Assignment to Assign Variables from Arrays

Remember that you can assign these variables to arrays.

freeCodeCamp Algorithm Challenge Template Guide
freeCodeCamp Algorithm Challenge Template Guide
This is the template that you should follow when writing new algorithm solutions or adding content, always make sure the latest version of this template is implemented on your pull request

Algorithm [Steamroller]
:triangular_flag_on_post: Remember to use Read-Search-Ask if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

:checkered_flag: Problem Explanation:
Inside the callback you need to write code which swaps the value of a and b.

Relevant Links
Link Title 1
Link Title 2
Link Title 3
:speech_balloon: Hint: 1
You need to use Destructuring assignment.
something of the sort of const [a,b]=[b,a];

try to solve the problem now

:speech_balloon: Hint: 2
Find a way to preserve the swapping beyond the scope of callback.


try to solve the problem now

:speech_balloon: Hint: 3
use return to export swapped values beyond the scope of callback.

try to solve the problem now

Spoiler Alert!
687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif

Solution ahead!

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  return [b,a]=[a,b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
:rocket: Run Code

Code Explanation:
It is self explanatory.

Relevant Links
Link Title 1
Link Title 2
Link Title 3
:sunflower: Intermediate Code Solution:
use [a,b]=[b,a];
:rocket: Run Code

Code Explanation:
swapping using Destructuring assignment.

Relevant Links
Link Title 1
Link Title 2
Link Title 3
:rotating_light: Advanced Code Solution:
function translatePigLatin(str) {
// checking if the string starts with vowel or not
if (‘aeoiu’.includes(str[0])) {
return str + ‘way’;
} else {
// using regex replace remove consonant cluster and add the same cluster to the end
return str.replace(/[^aeiou]+/, ‘’) +
str.match(/[^aeiou]+/) + ‘ay’;
}
}

translatePigLatin(“consonant”);
:rocket: Run Code

Code Explanation:
Explain solution here and add any relevant links

Relevant Links
Link Title 1
Link Title 2
Link Title 3
:clipboard: NOTES FOR CONTRIBUTIONS:
:warning: DO NOT add solutions that are similar to any existing solutions. If you think it is similar but better, then try to merge (or replace) the existing similar solution.
Add an explanation of your solution.
Categorize the solution in one of the following categories — Basic, Intermediate and Advanced. :traffic_light:
Please add your username only if you have added any relevant main contents. (:warning: DO NOT remove any existing usernames)
See :point_right: Wiki Challenge Solution Template for reference.
