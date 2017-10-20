---
title: Divide and Conquer Algorithms
---
## Divide and Conquer Algorithms
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Divide and Conquer is an algorithm design technique based on recursion. 

The main approach taken by Divide and Conquer algorithms is to recursively split the task into smaller sub-tasks, until you reach a set of single items that easily sorted. The sorted sub-tasks are then put back together to give back the final, sorted solution.

### How it works
<a href='https://guide.freecodecamp.org/algorithms/sorting-algorithms' target='_blank' rel='nofollow'>Sorting Algorithms</a> use the Divide and Conquer Algorithm approach.

The underlying idea is that it usually is easier (and more efficient!) to sort many smaller collections of items than a big one. So, Divide and Conquer Algorithms make use of the programming technique called __recursion__ to split a given problem into  two (or more) smaller parts. After we sort the smaller problems, we merge them back together.

#### There are two main approaches to splitting a problem:

* If you have an array `Array` of size `N`, one idea is to just split it in half. That would leave you with two, smaller arrays: 
      1. The first half of `Array`, with elements from `Array[0]` to `Array[(N-1)/2]`;
      2. The second half of `Array`, with elements from `Array[(N+1)/2]` to `Array[N-1]`;
   This approach has the advantage of splitting a collection into two collections of equal (or nearly equal, depending on the initial input) size. However, the two resulting sub-collections need to be carefully merged back together in the final step, for the algorithm to be efficient and have the desired result. This approach is used by the <a href='https://guide.freecodecamp.org/algorithms/sorting-algorithms/merge-sort' target='_blank' rel='nofollow'>Merge Sort</a> algorithm.

* Another approach is to split your collection in such a way, that the elements in the first sub-collection will always be less than the elements in the second sub-collection. This is a more complicated approach, however, at the end, it is fairly easy to merge the two sub-collections back. Since the first sub-collection has elements that are less than (or equal) to the elements in the second sub-collection, all we have to do is just paste the second sub-collection at the end of the first one, to produce your sorted solution. This approach is used by the <a href='https://guide.freecodecamp.org/algorithms/sorting-algorithms/quick-sort' target='_blank' rel='nofollow'>Quick Sort</a> algorithm.

### Algorithms that use the Divide and Conquer idea
The algorithms that implement the Divide and Conquer idea, are usually comparison-based sorting algorithms (or in short, <a href='https://guide.freecodecamp.org/algorithms/sorting-algorithms' target='_blank' rel='nofollow'>Sorting Algorithms</a>).
They all implement the basic idea of recursiveness, however, each individual algorithm uses a different approach to how it splits its collection (as stated in the above section).

Some of the more popular algorithms that use Divide and Conquer are:
* <a href='https://guide.freecodecamp.org/algorithms/sorting-algorithms/merge-sort' target='_blank' rel='nofollow'>Merge Sort</a>

*  <a href='https://guide.freecodecamp.org/algorithms/sorting-algorithms/quick-sort' target='_blank' rel='nofollow'>Quick Sort</a> algorithm

It is important to note that both algorithms are really efficient. Their Time Complexity in the average / best case is O(nlogn) (where N is the input size of our collection), but both can be tweaked further to provide better results.
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* <a href='https://www.youtube.com/watch?v=wVPCT1VjySA'>Animated story about the Divide and Conquer algorithm idea</a>
* <a href="https://en.wikipedia.org/wiki/Divide_and_conquer_algorithm"> Wikipedia, a more theoretical, academic approach to the subject </a> 
