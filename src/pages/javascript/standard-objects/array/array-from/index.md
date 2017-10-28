---
title: Array from
---
## Array from

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/array/array-from/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
`Array.from()` is a JavaScript method that allows you to create a new array from "array-like" objects that 1) have a length property as well as indexed elements (such as strings), or 2) are "iterable", meaning that the object's elements can be publicly accessed (such as when using a for loop to `console.log` all of the elements in an array). Unlike true arrays, however, these "array-like" objects do not have any of `Array`'s functions. 

Examples of "array-like" objects from which a new array can be returned, using Array.from() include:
      <ul>
  <li>Strings</li>
  <li>The `arguments` variable associated with any function</li>
  <li>NodeList</li>
      </ul>

<h4>Converting A String to An Array</h4>

```js
let arrayFromString = Array.from('Coding');
console.log(arrayFromString) // ['C','o','d','i','n','g']
```

<h4>Converting Arguments to An Array</h4>

```js
function arrayFromArgs() {
  return Array.from(arguments)
}

arrayFromArgs('dave', 1987, true) // ['dave', 30, true]
```

<h4>Converting A NodeList to An Array</h4>

```js
let arrayFromHTML = Array.from(document.querySelectorAll('h1'));
console.log(arrayFromHTML) // This would return an array containing all of the `h1` elements from a webpage.
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from</a>
<a href="http://www.nfriedly.com/techblog/2009/06/advanced-javascript-objects-arrays-and-array-like-objects/">http://www.nfriedly.com/techblog/2009/06/advanced-javascript-objects-arrays-and-array-like-objects/</a>

