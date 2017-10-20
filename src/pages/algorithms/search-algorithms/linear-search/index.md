---
title: Linear Search
---
## Linear Search

Suppose you are given a list or an array of items. You are searching for a particular item. How do you do that?

Find the number 13 in the given list.

![Linear Search 1](https://i.imgur.com/ThkzYEV.jpg)

You just look at the list and there it is!

![Linear Search 2](https://i.imgur.com/K7HfCly.jpg)

Now, how do you tell a computer to find it.

A computer cannot look at more than the value at a given instant of time. So it takes one item from the array and checks if it is the same as what you are looking for.

![Linear Search 3](https://i.imgur.com/ZOSxeZD.jpg)

The first item did not match. So move onto the next one.

![Linear Search 4](https://i.imgur.com/SwKsPxD.jpg)

And so on...

This is done till a match is found or until all the items have been checked.

![Linear Search 5](https://i.imgur.com/3AaViff.jpg)

In this algorithm, you can stop when the item is found and then there is no need to look further.

So how long would it take to do the linear search operation?
In the best case, you could get lucky and the item you are looking at maybe at the first position in the array!
But in the worst case, you would have to look at each and every item before you find the item at the last place or before you realize that the item is not in the array.

The complexity therefore of the linear search is: O(n).

The code for a linear search function in JavaScript is shown below. This function returns the position of the item we are looking for in the array. If the item is not present in the array, the function would return null.

```javascript
function linearSearch(arr, item) {
  // Go through all the elements of arr to look for item.
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) { // Found it!
      return i;
    }
  }
  
  // Item not found in the array.
  return null;
}
```

#### Relevant Video:
<!-- Please add any articles you think might be helpful to read before writing the article -->

<a href='https://www.youtube.com/watch?v=vZWfKBdSgXI' target='_blank' rel='nofollow'>Linear Search - CS50</a>
