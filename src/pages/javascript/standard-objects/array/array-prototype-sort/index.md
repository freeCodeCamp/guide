---
title: Array.prototype.sort
---
## Array.prototype.sort
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The <b>`sort()`</b> method returns an array. How that array is sorted depends upon you, the programmer. The <b>`sort()`</b> method can either use:
  1. <b>DEFAULT METHODS TO SORT</b></br>
          <i>With this syntax:</i> `array.sort()` or</br>
  
  2. <b>A COMPARE FUNCTION TO SORT.</b></br> 
          <i>With this syntax:</i> `array.sort(compareFunction)`

<b>USING DEFAULT METHODS TO SORT:</b></br>
This array <b><i>by default</b></i> is sorted by <a href='http://www.unicode.org/charts/' target='_blank' rel='nofollow'>Unicode code points</a>. For example:
```javascript
var greetings = [" Hi ", " Hello ", " Good Morning ", " good Afternoon ", " Good Evening "];

greetings.sort();

\\ returns [" Good Evening " , " Good Morning " , " Hello " , " Hi ", " good Afternoon "]
```
An example of how the default sorts an array of numbers:
```javascript
var numbers = [9,10,20,555,293,7065];

numbers.sort();

\\ returns [10,20,293,555,7065,9]
```
What about a mixed array of special characters, numbers, and letters?
```javascript
var mix = [" ! ", " A ", " a "," @ ", " 5x ", " Z ", " z ", " 12x ", " H "," h ", " & ", " : "];

mix.sort();

\\ returns [" ! " , " & " , " 12x " , " 5x " , " : " , " @ " , " A " , " H " , " Z " , " a " , " h " , " z "];
```
<b>USING A COMPARE FUNCTION TO SORT:</b></br>
```javascript
var music = [" Reggae ", " Pop ", " Hip-hop ", " Swing ", " Country ", " Dubstep ", " Jazz ", " Classical "];
function compareMe(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a equals b
  return 0;
}

music.sort(compareMe);

\\ returns [" Classical " , " Country " , " Dubstep " , " Hip-hop " , " Jazz " , " Pop " , " Reggae " , " Swing "]
```
How we can easily sort numbers:
```javascript
var scores = [18,24,200,1,8,5000,44];
function compareScores(a, b) {
  return a - b;
}

scores.sort(compareScores);

\\ returns [1,8,18,24,44,200,5000];
```
A few notes about using <b>sort()</b>. It is not a <a href='https://en.wikipedia.org/wiki/Sorting_algorithm#Stability' target='_blank' rel='nofollow'>stable</a> method. You will notice <a href='https://medium.com/@fsufitch/is-javascript-array-sort-stable-46b90822543f' target='_blank' rel='nofollow'>differences</a> in how browsers will handle the sort() method. The <b>sort()</b> method is also considered an <a href='https://en.wikipedia.org/wiki/In-place_algorithm' target='_blank' rel='nofollow'>in-place algorithm</a>.

#### More Information:
<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort' target='_blank' rel='nofollow'>MDN Web Docs Array.prototype.sort()</a></br>
<a href='https://medium.com/@fsufitch/is-javascript-array-sort-stable-46b90822543f' target='_blank' rel='nofollow'>Is Javascript Array.sort() Stable?</a></br>
<h4>References Regarding Sorting Algorithms:</h4>
<a href='https://xlinux.nist.gov/dads/' target='_blank' rel='nofollow'>Dictionary of Algorithms and Data Structures -NIST</a></br>
<a href='https://www.youtube.com/watch?v=kPRA0W1kECg' target='_blank' rel='nofollow'>15 Sorting Algorithms in 6 Minutes (youtube video)</a></br>
<h4>International Unicode Reference:</h4>
<a href='http://www.unicode.org/charts/' target='_blank' rel='nofollow'>Worldwide Unicode chart</a></br>
<h4>Simple Unicode Reference for English Keyboard:</h4>
<a href='http://jrgraphix.net/r/Unicode/0020-007F' target='_blank' rel='nofollow'>Unicode chart</a></br>
