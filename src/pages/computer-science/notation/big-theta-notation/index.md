---
title: Big Theta Notation
---
## Big Theta Notation

<p  align="justify"> Let's look at a simple implementation of linear search:</p>

```java
  static int doLinearSearch (int [] knowledgeDomain, int targetValue)
  {
      for (int ii = 0; ii < knowledgeDomain.length; ii++) {
          if (knowledgeDomain[ii] == targetValue) { 
              return ii;  // found it!
          }
      }
      return -1;  // didn't find it
  }
```
![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/NXQ1/14' target='_blank' rel='nofollow'>Run Code</a>

<p  align="justify"> Let's denote the size of the knowledgeDomain (knowledgeDomain.length) by n. The maximum number of times that the for-loop can run is n, and this worst case occurs when the value being searched for is not present in the array. Each time the for-loop iterates, it has to do several things: compare ii with knowledgeDomain.length; compare knowledgeDomain[ii] with targetValue; possibly return the value of ii; and increment ii. Each of these little computations takes a constant amount of time each time it executes. If the for-loop iterates n times, then the time for all n iterations is c1⋅nc, where c1 is the sum of the times for the computations in one loop iteration. Now, we cannot say here what the value of c​1 is, because it depends on the speed of the computer, the programming language used, the compiler or interpreter that translates the source program into runnable code, and other factors. This code has a little bit of extra overhead, for setting up the for-loop (including initializing ii to 0) and possibly returning -1 at the end. Let's call the time for this overhead c2, which is also a constant. Therefore, the total time for linear search in the worst case is c1⋅n+c2.</p>

<p  align="justify"> As we've argued, the constant factor c1 and the low-order term c2 don't tell us about the rate of growth of the running time. What's significant is that the worst-case running time of linear search grows like the array size n. The notation we use for this running time is Θ(n). That's the Greek letter "theta," and we say "big-Theta of n" or just "Theta of n."</p>

<p  align="justify"> When we say that a particular running time is Θ(n), we're saying that once n gets large enough, the running time is at least k​1⋅n and at most k2⋅n for some constants k1 and k2. Here's how to think of Θ(n):</p>

<p align = "center"><img src="https://s3.amazonaws.com/ka-cs-algorithms/theta_n.png">
</p>

<p  align="justify"> For small values of n, we don't care how the running time compares with k​1⋅n or k2⋅n. But once n gets large enough—on or to the right of the dashed line—the running time must be sandwiched between k1⋅n and k2⋅n. As long as these constants k​1 and ​2 exist, we say that the running time is Θ(n).

We are not restricted to just n in big-Θ notation. We can use any function, such as n^2, nlgn, or any other function of n. Here's how to think of a running time that is Θ(f(n)) for some function f(n):
</p>

<p align = "center"><img src="https://s3.amazonaws.com/ka-cs-algorithms/theta_fn.png">
</p>

Once n gets large enough, the running time is between k​1⋅f(n) k, and k​2⋅f(n).

<p  align="justify"> In practice, we just drop constant factors and low-order terms. Another advantage of using big-Θ notation is that we don't have to worry about which time units we're using. For example, suppose that you calculate that a running time is 6n^2 + 100n + 300 microseconds. Or maybe it's milliseconds. When you use big-Θ notation, you don't say. You also drop the factor 6 and the low-order terms 100n + 300 and you just say that the running time is Θ(n^2).</p>

<p  align="justify"> When we use big-Θ notation, we're saying that we have an asymptotically tight bound on the running time. "Asymptotically" because it matters for only large values of n. "Tight bound" because we've nailed the running time to within a constant factor above and below.</p>

#### More Information:
<a href='https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation' target='_blank' rel='nofollow'>Khan Academy.</a>



