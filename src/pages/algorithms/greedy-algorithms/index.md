---
title: Greedy Algorithms
---
## Greedy Algorithms

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->]

A greedy algorithm chooses the best locally available option, that is to say, what appears to be the best choice at that specific time. A change-making algorithm can be perfectly implemented with a greedy algorithm. This is because the best locally available option is always the largest coin, which results in the least number of coins dispenced. 

For example, to dispence $0.68 using quarters ($0.25), dimes ($0.10), nickels ($0.05), and pennies ($0.01), a greedy alorithm would first dispence a quarter, as it is the largest, and is less than the total to be dispenced. The change left to be dispenced is now $0.43, so a second quarter is dispenced. Now the change is less than a quarter, at $0.18, but a dime is less than the change, and so it is dispenced. At $0.08, a dime can no longer be used, however a nickel will work. Finally, at $0.03, the change left can only be met using three pennies.

<img src="https://s1.postimg.org/6ha5jbf5j3/Tree.png" border="0"></a>

While a greedy algorithm works in change-making, in most situations a greedy algorithm will not result in **_the best_** solution. The image above is an example of this. A greedy algorithm, looking for the largest number, would go from 20 to 25 as it is the larger locally. This would result in its solution being 17, rather than 46, which is the true solution. That being said, a greedy alorithm is easy to implement, and can often result in a decent solution.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<ul>
  <li><a href="https://en.wikipedia.org/wiki/Greedy_algorithm">Wikipedia: Greedy alorithm</a></li>
  <li><a href="https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/tutorial/">Basics of Greedy Algorithms</a></li>
</ul>



