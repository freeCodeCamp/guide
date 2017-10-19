---
title: Insertion Sort
---
## Insertion Sort
Insertion sort is one of the simplest sorting algoritm to sort an array.This works the way many people sort a hand of playing cards.
We start with an empty left hand and the cards face down on the table.Then we remove one card at a time from the table and insert it
into the respective position in the left hand.To find the currect position of the card , we compare it with each cards already in the
hand from right to left.

### pseudo Code:

```c
InsertionSort(A)  // A is an array
{
for j=2 to A.length
   {
      key = A[j];
      //insert A[j] into the sorted sequence A[1...j-1]
      i = j-1;
      while(i>0 and A[i] > key)
        {
           A[i+1] = A[i];
           i = i-1;
        }
      A[i+1] = key 
    }
}
```
### Example:

( 6 9 5 0 8 2 7 1 ) –> ( 6 9 5 0 8 2 7 1 ), Here, as 9 is not less than 6 so no movement.

( 6 9 5 0 8 2 7 1 ) –> ( 5 6 9 0 8 2 7 1 ), Here, as 5 is less than 6,9 so put 5 before 6 .

( 5 6 9 0 8 2 7 1 ) –> ( 0 5 6 9 8 2 7 1 ), Here, as 0 is less than 9,6,5 so put 0 before 5.

( 5 6 9 0 8 2 7 1 ) –> ( 0 5 6 8 9 2 7 1 ), Here, as 8 is less than 9 but greater than 0,5,6 so put 8 between 6 and 9.

( 5 6 9 0 8 2 7 1 ) –> ( 0 2 5 6 8 9 7 1 ), Here, as 2 is less than 9,8,6,5 but greater than 0 so put 2 between 0 and 5.

( 5 6 9 0 8 2 7 1 ) –> ( 0 2 5 6 7 8 9 1 ), Here, as 7 is less than 9,8 but greater than 0,2,5,6 so put 7 between 6 and 8.

( 5 6 9 0 8 2 7 1 ) –> ( 0 1 2 5 6 7 8 9 ), Here, as 1 is less than 9,8,7,6,5,2 but greater than 0 so put 1 between 0 and 2.

### Time and space Complexity
* Best case Time Complexity: Ω(n) //when the array is already sorted
* worst case Time Complexity: O(n^2) //when the array is in reverse order
* Space Complexity: O(1)
* Sorting In Place: Yes
* Stable: Yes

### Relavant videos on freeCodeCamp YouTube channel
* <a href='https://www.youtube.com/watch?v=i-SKeOcBwko&list=PL2_aWCzGMAwKedT2KfDMB9YA5DgASZb3U&index=4'>Merge Sort algorithm - MyCodeSchool</a>






