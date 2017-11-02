---
title: Backtracking Algorithms
---
## Backtracking Algorithms

<!--This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/backtracking-algorithms/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.-->

<!--<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.-->

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

When a function calls itself, its called `Recursion`. It will be easier for those who have seen the movie `Inception`, `Leonardo` had a dream, in that dream he had another dream, in that dream he had yet another dream, and that goes on. So it's like there is a function called `dream()`, and we are just calling it in itself.
```c++
function dream(){
  print "dreaming";
  dream();
}
```
*Example*

Finding the factorial of a number `n`:

```c++
function factorial(n){
    if n is 0                    // base case
        return 1
    return n*factorial(n-1)       // break into smaller problem(s)
}
```

*Backtracking:*

So, while solving a problem using `recursion`, we break the given problem into smaller ones. Let's say we have a problem A and we divided it into three smaller problems B, C and D. Now it may be the case that the solution to A does not depend on all the three subproblems, in fact we don't even know on which one it depends.
Let's take a situation. Suppose you are standing in front of three tunnels, one of which is having a bag of gold at its end, but you don't know which one. So you'll try all three. First go in tunnel 1, if that is not the one, then come out of it, and go into tunnel 2, and again if that is not the one, come out of it and go into tunnel 3. So basically in backtracking we attempt solving a subproblem, and if we don't reach the desired solution, then undo whatever we did for solving that subproblem, and try solving another subproblem. 

*Generalized Algorithm*

```c++
Pick a problem.
while(Problem is not solved) {
  For each subproblem of the problem {
    check if subproblem is safe, if yes select it {
      and make recursive call to rest of the problem
		  If recursive calls returns true, then {
        return true.
      }
	    else {
        undo the current subproblem and return false.
      }
    }
  }
  If none of the subproblem works out, return false, NO SOLUTON.
}
```


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

![Backtracking Wikipedia](https://en.wikipedia.org/wiki/Backtracking)
