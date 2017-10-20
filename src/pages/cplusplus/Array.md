# Arrays
* Arrays is consisting of or broken down into equal sized elements indexed by contiguous integers starting from index 0 to n-1  
* Array is data structure to store values (int,double,char and etc)  
* So if we assume that those nuumbers in memory as array: 5 8 3 0 7 1 2 of size 7  
      value   	5	8	3	0	7	1	2  
	    index	    0 1	2	3	4	5	6  

  * We say 5 is in index 0 not 1, 2 is in index 6 not 7 because array zero index and so on.  
  * Declaration array in C++:  
```
int arr[7]={5,8,3,0,7,1,2};   //7 is the size of the array  
int x=arr[0];                 //x=5  
int x=arr[1];                 //x=8  
int y=arr[2];                 //y=3   
int z=arr[6];                 //z=2  
```

# What’s Special About Arrays?

The key point about array is we have random access that is we have constant time access to any particular element in an array
* Constant time access to read   
* Constant time access to write 
		

# Times for Common Operations
First let me tell you that we can make two operations in the array (add or remove element) and we can do those operations on the beginning or end or middle of the array.  
The standard feature of arrays, we already said to read any element is O(1) and to write any element is O(1)

* To add element on the End of the array, It takes O(1).   
* To remove element on the End of the array, It takes O(1).  
---
* To add element on the Beginning of the array, It takes O(n) time  
* To remove element on the Beginning of the array, It takes O(n) time  
#### WHY??
We remove the first element and it takes O(1) time or operation and we have got holes left and this wrong!  
We don't want to have holes left in it, So we need to move all the number on the right of (deleted element) to left and that's O(n) operation.  
Same thing would happern if we wanted to insert at the beginning ,we would need to move all number starting from second element (index 1) to the right to make space for the new element so that's also would be O(n).  
    
---

* To add element on the Middle of the array, It takes O(n).   
* To remove element on the Middle of the array, It takes O(n).  
#### WHY??

If we want to add in the middle,we have to move n/2 items which is O(n) and same thing for removal  

---

# Summary
Array: contiguous area of memory consisting of equal-size elements indexed by contiguous integers.  
Constant-time access to any element.  
Constant time to add/remove at the end, It's cheap.  
Linear time to add/remove at an arbitrary location, It's expensive.   
So arrays are great if we want to add or remove at the end but it's expensive if we want to add or remove in the middle or at the biginning.  
  

|           | Add   | Remove|
| ----------|:-----:| -----:|
| Beginning | O(n   |  O(n) |
| End       | O(1)  |  O(1) |
| Middle    | O(n)  |  O(n) |

  

