---
title: Array.prototype.push
---
## Array.prototype.push

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/array/array-prototype-push/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

### Basic Information:
This is a method on Array's to add elements on the end of the an array.

`var myStarkFamily = ['John', 'Sansa', 'Brian'];`

### Explanation:
Now I have an array which contains members of Stark family from Game of thrones. But you can see that one of the member is missing.
That is **Arya** and I want to add it.
At this moment I know the length of an Array which is 3.
So I can add it as follows:

`myStarkFamily[3] = 'Arya';`

Yes you can add it this way. But what if you donot know the length of and Array and want to add an element at the end.
Then you do it as follows:

`myStackFamily.push('Arya');`
This returns you the new length of the array i.e. 4 and **Arya** is added to your Stark Family Array.
Hence when you `console.log(myStarkFamily);` Your output is: `['John', 'Sansa', 'Brian', 'Arya'];`

### In which case to use it:
From above explanation it is clear that, you can use it in following case:
1) When you want to add an element at the end of an Array.
2) And you do not know how many elements are there in an array. So you can use push() on the array an pass the value you want to add.
