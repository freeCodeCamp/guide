---
title: The Random Method
---
<h1>The Random Method</h1>

One of those useful methods in JavaScript is the Math.random() function. This function when invoked returns a random floating point number from 0 up to but not including 1; that is in the range [0,1).
This function stands as the basic block in random number generation algorithm.

<h3>Syntax:</h3>
<code>
  Math.random();
</code>

<h3>Return value:</h3>
A floating point from 0 (inclusive) up to 1 (exclusive).

<h3>Examples:</h3>

<h4>Getting random number between two values:</h4>
This example returns a random real value between the given min (inclusive) and max (exclusive) value.
  <pre class="language-none">
  <code>
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }</code>
  </pre>

<h4>Getting random integer between two values:</h4>
This example returns a random integer between given min (inclusive) and max (exclusive) value.
Assuming min and max are real values.
  <pre class="language-none">
  <code>
  function getRandomInteger(min, max){
    min = Math.ceil();
    max = Math.floor();
    return Math.random() * (max - min) + min;
  }</code>
  </pre>
  
  <b>More information:</b><br/>
  <a href="https://www.w3schools.com/jsref/jsref_random.asp" target="_blank">Math.random()</a><br/>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil" target="_blank">Math.ceil()</a><br/>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor" target="_blank">Math.floor()</a><br/>
  Try your code in <a href="https://repl.it/languages/javascript" target="_blank">repl.it</a>.
  



