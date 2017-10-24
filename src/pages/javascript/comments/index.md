---
title: Comments
---
## Comments

programmers use comments to add hints, notes, suggestions, or warnings to their source code, they have no effect on the actual output of the code. Comments can be very helpful in explaining the intent of what your code is or should be doing.

JavaScript has two ways of assigning comments in its code.

the first way is the `//` comment, this makes all text following it on the same line into a comment. For example:
```javascript
function hello() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
hello();
```

The second way is the `/* */` comment, you can use it for single line or multi-line comments. For example:
```javascript
function hello() {
  /* This is a one line JavaScript comment */
  console.log("Hello world!");
}
hello();
```
```javascript
function hello() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
hello();
```

#### More Information:
<a href='https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript' target='_blank' rel='nofollow'>How To Write Comments in JavaScript</a>
<h3>Many IDEs come with a keyboard shortcut to comment out lines. </h3>
<ol>
  <li>Highlight text to be commented</li>
  <li>Mac: Push Command(Apple Key) & "/"</li>
  <li>Windows: Push Control & "/"</li>
  <li>You can also uncomment code by doing the same steps</li>
</ol>

