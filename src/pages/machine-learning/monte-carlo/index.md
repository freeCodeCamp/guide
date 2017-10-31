---
title: Monte Carlo
---
## Monte Carlo

You can think of MC as the “trial and error” approach to solving a problem, when you just don’t know any better. You draw many random samples (in a semi-guided way), and hope you get a solution. And sure enough, you will get a solution, if you keep sampling long enough, potentially for infinite time - still (often) better than brute force search - which is why its used at all.

However, if you memorized and generalized from enough data to have a forward model for inference e.g. passing a road image through a deep CNN and getting the parameters for the road “state” in a single forward pass [1] (as opposed to needing to play “hypothesize-and-verify” as in [2]). Or if first-order (gradient descent) or second order optimization algorithms are applicable e.g. the former for training deep NNs; there is no point in doing semi-blind search (MC)!

So I would say that deep learning techniques are precisely there to avoid having to do random search. Ofcourse, then you can go one abstraction level up, and think about another problem that we don’t yet know how to formulate to solve by 1st or 2nd order optimization: the problem of automatically coming up with good neural network architectures for a given problem, and you are back in the “trial and error” domain - and zeroth order search techniques (like MC) might start having some utility again!

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/machine-learning/monte-carlo/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


