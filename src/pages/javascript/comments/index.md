---
title: Comments
---
## Comments

Programmers use comments to add hints, notes, suggestions, or warnings to their source code, they have no effect on the actual output of the code. Comments can be very helpful in explaining the intent of what your code is or should be doing. Adding comments to your code is especially important if you are working on a project with other programmers. It improves both readability and maintainability of your code.

JavaScript has two ways of assigning comments in its code.

The first way is the `//` comment, this makes all text following it on the same line into a comment. For example:
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
A shortcut to comment out a section of javascript in many code editors is to highlight the lines of code you want to comment out, then press `Cmd/Ctrl + /`.

Comments are also very helpful for code testing as you can prevent a certain code-line/block from running

```javascript
function hello() {
  // The statement below is not going to get executed
  // console.log('hi')
  }
hello();
```
```
function hello() {
  // The statements below are not going to get executed
  /*
  console.log('hi');
  console.log('code-test');
  */
}
hello();
```

#### More Information:
<a href='https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript' target='_blank' rel='nofollow'>How To Write Comments in JavaScript</a>
