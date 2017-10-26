---
title: Array.prototype.sort
---
## Array.prototype.sort

The `sort()` method sorts the elements of an array in place and returns the array. The default sort order is according to string Unicode code points.

#### Parameters
1. `compareFunction` - optional - Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.

#### Returns
The sorted array.  
*Note that the array is sorted in place, and no copy is made.*

#### Examples

```js
const veggies = ['cucumber', 'spinach', 'broccoli'];

veggies.sort();

console.log(veggies);
/* Results:
[ 'broccoli', 'cucumber', 'spinach' ]
*/
```

```js
const items = [
  { name: 'Sorting', value: 21 },
  { name: 'Things', value: 37 },
  { name: 'Can', value: 45 },
  { name: 'Be', value: -12 },
  { name: 'Very', value: 13 },
  { name: 'Interesting', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

console.log(items);
/* Result:
[ 
  { name: 'Be', value: -12 },
  { name: 'Very', value: 13 },
  { name: 'Sorting', value: 21 },
  { name: 'Things', value: 37 },
  { name: 'Interesting', value: 37 },
  { name: 'Can', value: 45 }
]
*/
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

