---
title: Big O Notation
---
## Big O Notation

Big O notation is used in Computer Science to describe the performance or complexity of an algorithm. Generally, Big O describes the worst-case scenario for the execution time required or space used by an algorithm. A great way to understand Big O is to produce some examples in code, as shown below.

### O(1)
O(1) describes an algorithm that will execute in the same time and occupy the same space regardless of the input data set. For example, accessing an element in an array will always take the same time regardless of the size of the array.
```
let x = myArray[0];
```

### O(N)
O(N) describes an algorithm whose performance is linearly (or directly) proportional to the input size. For example, iterating of all elements of an array will take longer for arrays with more elements.
```
foreach(let element in elements){
  //do something
}
```

### O(N<sup>2</sup>)
O(N<sup>2</sup>) describes an algorithm whose performance is directly proportional to the square of the size of the input data set. For example, nested iterations over the data set will increase this order of proportion. Deeper nested iterations will result in O(N<sup>3</sup>), O(N<sup>4</sup>, and so on.)
```
foreach(let element in elements){
  foreach(let element2 in elements){
    //do something
  }
}
```

### Generalizing
In this way, Big O is used to describe the performance of any algorithm in regards to time & space complexity. It can take the form of the above examples as well as logarithmic, exponential, factorial equations, or more.
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[More information and examples about Big](https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity)
[Cheat Sheet for Big O Complexities](http://bigocheatsheet.com/)



