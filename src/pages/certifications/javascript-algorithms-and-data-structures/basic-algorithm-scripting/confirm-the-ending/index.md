---
title: Confirm the Ending
---
## Confirm the Ending

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:
```javascript
    function confirmEnding(str, target) {
	  let a = str.split("");
	  let b = target.split("");
	  let c = [];
	  for(let i=a.length-1; i>=a.length - b.length; i--){
	    for (let j=b.length-1; j>=0; j--){
	      if(c.length != b.length){
	        if(a[i] == b[j]){
	        c.unshift(a[i]);
	      }
	      }
	    }
	  }
	  if(c.join("") === b.join("")){
	    return true;
	  } else {
	    return false;
	  }
	}
	confirmEnding("Bastian", "n");
```