## Implement Bubble Sort

## Method:
* BubbleSort is one of the easiest algorithms to understand and implement.
* The idea is to loop through the array multiple times, and at each time move the highest element to the end of the array.
* In worst case it has quadratic complexity **O(n²)**

## Solution:
```
function bubbleSort(array) {

  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length-1; j++){
      
      if(array[j] > array[j+1]){
        array[j] += array[j+1];
        array[j+1] = array[j] - array[j+1];
        array[j] -= array[j+1];
      }

    }
  }

  return array;
}
```

## References:
* Read about [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort)