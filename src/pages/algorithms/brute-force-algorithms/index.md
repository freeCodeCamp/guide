---
title: Brute Force Algorithms
---
## Brute Force Algorithms

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/brute-force-algorithms/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Brute force alogorithm is a very general problem-solving technique that consists of systematically enumerating all possible candidates for the solution and checking whether each candidate satisfies the problem's statement.

While a brute-force search is simple to implement, and will always find a solution if it exists, its cost is proportional to the number of candidate solutions – which in many practical problems tends to grow very quickly as the size of the problem increases. Therefore, brute-force search is typically used when the problem size is limited, or when there are problem-specific heuristics that can be used to reduce the set of candidate solutions to a manageable size. The method is also used when the simplicity of implementation is more important than speed.

<h4>Basic algorithm</h4>

In order to apply brute-force search to a specific class of problems, one must implement four procedures, first,next, valid, and output. These procedures should take as a parameter the data P for the particular instance of the problem that is to be solved, and should do the following:

    first (P): generate a first candidate solution for P.
    next (P, c): generate the next candidate for P after the current one c.
    valid (P, c): check whether candidate c is a solution for P.
    output (P, c): use the solution c of P as appropriate to the application.

The next procedure must also tell when there are no more candidates for the instance P, after the current one c. A convenient way to do that is to return a "null candidate", some conventional data value Λ that is distinct from any real candidate. Likewise the first procedure should return Λ if there are no candidates at all for the instance P. The brute-force method is then expressed by the algorithm
    c ← first(P)
    while c ≠ Λ do
    if valid(P,c) then output(P, c)
      c ← next(P,c)
    end while
   

