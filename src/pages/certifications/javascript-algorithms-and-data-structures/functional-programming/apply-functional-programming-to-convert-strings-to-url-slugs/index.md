---
title: Apply Functional Programming to Convert Strings to URL Slugs
---
## Apply Functional Programming to Convert Strings to URL Slugs

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
return title.split(/\W/).filter((obj)=>{
    return obj !=='';
  }).join('-').toLowerCase();
  
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
