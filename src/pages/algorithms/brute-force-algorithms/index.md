---
title: Brute Force Algorithms
---
## Brute Force Algorithms

<!--This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/brute-force-algorithms/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.-->

<!--<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.-->

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Brute force means that you will go through all possible solutions extensively. Brute force is a type of algorithm that tries a large number of patterns to solve a problem. In some cases, they are extremely simple and rely on raw computing power to achieve results.

Brute force algorithm consists in checking, at all positions in the text between `0 and n-m`, whether an occurrence of the pattern starts there or not. Then, after each attempt, it shifts the pattern by exactly one position to the right.

Brute force algorithm requires no preprocessing phase, and a constant extra space in addition to the pattern and the text. During the searching phase the text character comparisons can be done in any order. The time complexity of this searching phase is `O(mn)`. The expected number of text character comparisons is `2n`.

* Pluses:  It always works (given enough time & care).
* Minuses: It can only be used for relatively small inputs.

# Main Features
* Three is no preprocessing phase
* Constant extra space needed, i.e Space Complexity: O(1)
* Always shifts the window by exactly 1 position to the right
* Comparisons can be done in any order
* Searching phase in `O(mn)` time complexity
* `2n` expected text characters comparisons

# The C++ Code

```c++
void BruteForce(string s1, int m, string s2, int n) {
   int i, j;
   
   /* Searching */
   for (j = 0; j <= n - m; ++j) {
      for (i = 0; i < m && s1[i] == s2[i + j]; ++i);
      if (i >= m)
         printf("%d\n", j);
   }
}
   
```


<!--#### More Information: -->
<!-- Please add any articles you think might be helpful to read before writing the article -->


