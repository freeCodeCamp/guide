---
title: Use class Syntax to Define a Constructor Function
---
## Use class Syntax to Define a Constructor Function

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/javascript-algorithms-and-data-structures/es6/use-class-syntax-to-define-a-constructor-function/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
<code>function makeClass() {
  "use strict";
  /* Alter code below this line */

   class Vegetable {
     constructor(Vegetable){
       this.Vegetable = Vegetable;
  
     }
   }

    

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
</code>
