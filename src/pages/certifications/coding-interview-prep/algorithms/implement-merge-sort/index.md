# Implement Merge Sort

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/coding-interview-prep/algorithms/implement-merge-sort/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.


## What is the Merge Sort Algorithm?

  Merge sort is an algorithm which can sort things like javascript arrays in very quick time compared to other algorithms like bubble sort. It is a stable sorting algorithm which is to say that if an array of the same elements but not neccessarily the same order were to be sorted by this algorithm the sorted arrays would have the same elements in the smae place. This is not gauranteed by an unstable sort, here is a nice [explanation](https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important).

## What happens when you Merge Sort?

  Merge sort splits an array of elements in half until its down to single elements, and then reassembles the array in the correct order! This is a simple but unintuitive solution to sorting an array. What makes this it nice and fast, O(nlog(n)) is that we don't nest loops. Instead, our loops are done inside our decomposition of our array when we split it in logarithmic time. This logarithmic time doesn't seem like a big difference but it increases much more slowly than linear.
  
## How do we implement?

  This solution for implementing the mergeSort algorithm can be broken into two parts the 'mergeSort' function and its 'merge' helper function. The 'mergeSort' function is recursive while the 'merge' helper function is iterative.
  First: We will break the N length array apart by splitting it in two until we N arrays with one element in each.
  Second: We will merge the arrays together in order.
  Lastly: We will continued coupling and merging the arrays until we have one sorted array.
### Assumptions for out merge function:
  We will assume that our merge function takes in two sorted arrays. Our merge function takes them and merges them into a bigger sorted array. Concatenation only works in certain situation, so our merge function is going to be more sophisticated than that. But, there is a question you should be asking yourself, and it is – How can we be sure that the array is going to be sorted the first time we implement merge?
  
  The solution is a bit of a technicality, a single element array is already sorted! And that is exactly what we break up our unsorted array into, N single element arrays, before we begin merging.
  
### Merge function
  Remember the mergeSort take in two sorted arrays and returns a sorted combined array:
  ```javascript 
  function merge(array1, array2) {
  // Start at the begining of each array
    let index1 = 0
    let index2 = 0
  // New array we will return
    let mergedArray = []
  // Continue until we reach the end of either array
    while(index1 < array1 && index2 < array2) {
      if(array1[index1] < array2[index2]) {
        mergedArray.push(array1[index1])
        index1 += 1
      } else {
        mergedArray.push(array2[index2])
        index2 += 1
      }
    }
    // We exit when one of the indices reach the end of their array
    // This means we're leaving out the last elements of the larger of the two arrays
    // We concatenate to the end of our mergedArray the sub array to the right of bother index1 and index2 
    // of array1 and array2 respectively.
    
    // Notes: if we slice starting at the end of an array we get an empty array
    return mergedArray.concat(array1.slice(index1)).concat(array2.slice(index2))
    
  }
  ```
  
  ## Time to Merge Sort!
    Now that we have our merge helper function, we can use it in our recursive mergesSort function
    
    ```javascript 
    function mergeSort(array) {
    // If the array is of length 1 or empty we return the original array
    // This is what stops our recursive call
      if(array.length < 2) return array
    // The half way point of the array
      let mid = Math.floor(array.length / 2)
    // Recursive calls which continue sub dividing the array
      let left = mergeSort(array.slice(0,mid))
      let right = mergeSort(array.slice(mid))
    // Where we call our merge function and effectively where the sorting is truly done
      return merge(left,right)
    }
    // Our helper function 
   function merge(array1, array2) {
      let index1 = 0
      let index2 = 0

      let mergedArray = []

      while(index1 < array1 && index2 < array2) {
        if(array1[index1] < array2[index2]) {
          mergedArray.push(array1[index1])
          index1 += 1
        } else {
          mergedArray.push(array2[index2])
          index2 += 1
        }
      }
      return mergedArray.concat(array1.slice(index1)).concat(array2.slice(index2))
    
   }```
    
  
