---
title: Big Theta Notation
---
## Big Theta Notation

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/computer-science/notation/big-theta-notation/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
When we say that a particular running time is Θ(n), we're saying that once n gets large enough, the running time is at least k​1​​⋅n and at most k​2​​⋅n for some constants k​1  ​​and k​2​​. Here's how to think of Θ(n):  
<img src="https://s3.amazonaws.com/ka-cs-algorithms/theta_n.png" />  
For small values of n, we don't care how the running time compares with k​1​​⋅n or k​2​​⋅n. But once n gets large enough—on or to the right of the dashed line—the running time must be **sandwiched** between k​1​​⋅n and k​2​​⋅n. As long as these constants k​1​​ and k​2​​ exist, we say that the running time is Θ(n).  


When we use big-Θ notation, we're saying that we have an asymptotically **tight bound** on the running time. "Asymptotically" because it matters for only large values of n. **Tight bound** because we've nailed the running time to within a constant factor above and below.  


Big O is giving upper asymptotic bound, while big Omega(Ω) is giving a lower bound. Big Theta(Θ) gives both.
In sets terminology, Ө(f(n)) is the **intersection** of O(f(n)) and Ω (f(n)).  

For example, merge sort worst case is both O(n*log(n)) and Ω (n*log(n)) - and thus is also Ө(n*log(n)), but it is also O(n²), since n² is asymptotically "bigger" than it. However, it is not Ө(n²), Since the algorithm is not Ω (n²).




#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [Big-θ (Big-Theta) notation](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation)
- <a href="http://www.youtube.com/watch?feature=player_embedded&v=OpebHLAf99Y" target="_blank"><img src="http://img.youtube.com/vi/OpebHLAf99Y/0.jpg" alt="MYCODSCHOOL Time complexity analysis" width="240" height="180" border="10" /></a>


