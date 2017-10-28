---
title: Array.prototype.sort
---
## Array.prototype.sort

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/array/array-prototype-sort/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

---
title: Array.Prototype.Sort()
---
The Javascript array method `.sort()` rearranges the elements of an array according to their Unicode point values. The method returns the array in place, it does not create a new array like some of the other methods.

***Syntax***
arr.sort()
```javascript
	var chipmunks = ['Simon', 'Alvin', 'Theodore'];
	chipmunks.sort();  // ['Alvin', 'Simon', 'Theodore']
```

A compare function is an optional parameter that can be passed into the `sort()` method if you did not want to sort by the default Unicode point value. The method essentially compares two values at time and iterates through the array.

***Syntax***
arr.sort(compareFunction)
```javascript
	var numbers = [1, 5, 51, 15];
	numbers.sort();  // [1, 15, 5, 51]


	function compareNumbers(a, b) {
	  if(a > b){
			return true
		} else {
			return false
		}
	}
	numbers.sort(compareNumbers); // [1, 5, 15, 51]
```

Source : <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)' target='_blank' rel='nofollow'>MDN</a>

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


