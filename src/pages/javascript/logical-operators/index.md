---
title: Logical Operators
---
## Logical Operators

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/logical-operators/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Logical operators are typically use with Boolean values in JavaScript.

| AND | NOT |OR |
| --- | --- | --- |
| &&  |  !  |Vertical lines |



Programmers write the AND operator with two ampersands "&&".
If one of the values given runs falsey. 
Then the statement below will alert 
our driver in our program to STOP.

```javascript
if (stopLight === 'green' && pedestrians === false) {
  console.log('Go!');
} else {
  console.log('Stop');
}

```
Programmers write the NOT operator with an Exclamation mark "!". 
This operator flips the value given to it. 
By placing the "!" infront of the "=" the statement will return True becuase X does not equal 3. 

```javascript
var x = 3

if (x != 1){
return console.log(true);
}
```
Programmers write the OR operator with two vertical lines as shown here "||"
If one of the given values evaluate to false. 
You will still recieve the first console.log as shown below.
Only when both values given are false will the second console.log run.

```javascript
if (username === true || email === true){
	console.log("Great! Your almost done signing up! Please add a password to complete your account information");
} else{
	console.log("Please create an username or password to complete your account information");
}

```
#### More Information:


<!-- Please add any articles you think might be helpful to read before writing the article -->
[Eloquent JavaScript](http://eloquentjavascript.net/01_values.html),

[Codeburst](https://codeburst.io/javascript-and-logical-operators-89b2ac3409f8),

[Codeburst](https://codeburst.io/javascript-and-logical-operators-89b2ac3409f8),
and
[Tutorials Point](https://www.tutorialspoint.com/javascript/javascript_operators.htm),
