---
title: Binary Search
---
## Binary Search
<p>A binary search locates an item in a sorted array by repeatedly dividing the search interval in half.</p>

How do you search a name in a telephone directory?

One way would be to start from the first page and look at each name in the phonebook till we find what we are looking for. But that would be an extremely laborious and inefficient way to search.

Because we know that names in the phonebook are sorted alphabetically, we could probably work along the following steps:
1. Open the middle page of the phonebook.
2. If it has the name we are looking for, we are done!
3. Otherwise, throw away the half of the phonebook that does not contain the name.
4. Repeat until you find the name or there are no more pages left in the phonebook.

This is the binary search algorithm. It is elegant and efficient but for it to work correctly, the array must be **sorted**.

<hr>

Find 5 in the given array of numbers using binary search.

![Binary Search 1](https://i.imgur.com/QAuugOL.jpg)

Mark low, high and mid positions in the array.

![Binary Search 2](https://i.imgur.com/1710fEx.jpg)

Compare the item you are looking for with the middle element.

![Binary Search 3](https://i.imgur.com/jr4icze.jpg)

Throw away the left half and look in the right half.

![Binary Search 4](https://i.imgur.com/W57lGsk.jpg)

Again compare with the middle element.

![Binary Search 5](https://i.imgur.com/5Twm8NE.jpg)

Now, move to the left half.

![Binary Search 6](https://i.imgur.com/01xetay.jpg)

The middle element is the item we were looking for!

The binary search algorithm takes a divide-and-conquer approach where the array is continuously divided until the item is found or until there are no more elements left for checking.
Hence, this algorithm can be defined recursively to generate an elegant solution.
The two base cases for recursion would be:
* No more elements left in the array.
* Item is found.

The code for recursive binary search is shown below:
```javascript
function binarySearch(arr, item, low, high) {
    if (low > high) { // No more elements in the array.
        return null;
    }
    
    // Find the middle of the array.
    var mid = Math.ceil((low + high) / 2);

    if (arr[mid] === item) {// Found the item!
        return mid;
    }
    
    if (item < arr[mid]) {// Item is in the half from low to mid-1.
        return binarySearch(arr, item, low, mid-1);
    }
    
    else { // Item is in the half from mid+1 to high.
        return binarySearch(arr, item, mid+1, high);
    }
}

var numbers = [1,2,3,4,5,6,7];
print(binarySearch(numbers, 5, 0, numbers.length-1));
```

### More Information
<a href="https://youtu.be/P3YID7liBug">Binary search (YouTube video)</a>

<a href='https://www.youtube.com/watch?v=5xlIPT1FRcA' target='_blank' rel='nofollow'>Binary Search - CS50</a>

