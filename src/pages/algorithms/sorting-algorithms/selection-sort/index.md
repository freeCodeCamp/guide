---
title: Selection Sort
---
## Selection Sort

* Selection Sort is a simple sorting technique that divides the list into two groups – Sorted and Unsorted. 
* After each pass, the element with the least value(in the unsorted group) is found and swapped with the first element in the unsorted group.
* If there are n elements in the list, a total of (n-1) passes are required to sort the list completely.

#### Example : Acsending Order

Below is the original list/array in unsorted order.

![Original List](https://github.com/abbas10m/SortingAlgorithms/blob/master/selectionSort/originalList.PNG)

At 1st pass, the least element (8) is swapped with the first element (23)

![Move least to first position at first pass](https://github.com/abbas10m/SortingAlgorithms/blob/master/selectionSort/2-OGSwap.PNG)

At 2nd pass, the least element in the unsorted list (23) is swapped with the first element in the unsorted group (78)

![At pass 2](https://github.com/abbas10m/SortingAlgorithms/blob/master/selectionSort/3-AfterPass1.PNG)

At 3rd pass, the least element in the unsorted list (32) is swapped with the first element in the unsorted group (45)

![At pass 3](https://github.com/abbas10m/SortingAlgorithms/blob/master/selectionSort/4-AfterPass2.PNG)

At 4th pass, the least element in the unsorted list (45) is swapped with the first element in the unsorted group (78)

![At pass 4](https://github.com/abbas10m/SortingAlgorithms/blob/master/selectionSort/5-AfterPass3.PNG)

At 5th pass, the least element in the unsorted list (56) is swapped with the first element in the unsorted group (78)

![At pass 4](https://github.com/abbas10m/SortingAlgorithms/blob/master/selectionSort/6-AfterPass4.PNG)

After the 5th pass, the list is sorted in acsending order.

![Sorted List](https://github.com/abbas10m/SortingAlgorithms/blob/master/selectionSort/7-AfterPass5.PNG)

 In the example ablove, 
 * `n = 6` as there are 6 data elements (23, 78, 45, 8, 32, 56)
 * It was completely sorted in `(n-1) = 5` passes




