---
title: Big Omega Notation
---
## Big Omega Notation

<p  align="justify">Sometimes, we want to say that an algorithm takes at least a certain amount of time, without providing an upper bound. We use <strong>big-Ω</strong> notation; that's the Greek letter <strong>"omega"</strong>.</p>

<p  align="justify">If a running time is <strong>Ω(f(n))</strong>, then for large enough n, the running time is at least k⋅f(n)k, for some constant k. Here's how to think of a running time that is <strong>Ω(f(n)) </strong>:</p>

<p align="center">
<img src="https://s3.amazonaws.com/ka-cs-algorithms/Omega_fn.png">
</p>

<p  align="justify">We say that the running time is <strong>"big-Ω of f(n)"</strong>. We use big-Ω notation for asymptotic lower bounds, since it bounds the growth of the running time from below for large enough input sizes.</p>

<p  align="justify">Just as <strong>Θ(f(n))</strong> automatically implies <strong>O(f(n))</strong>, it also automatically implies <strong>Ω(f(n))</strong>. So we can say that the worst-case running time of binary search is Ω(lgn). We can also make correct, but imprecise, statements using big-Ω notation. For example, just as if you really do have a million dollars in your pocket, you can truthfully say "I have an amount of money in my pocket, and it's at least 10 dollars" you can also say that the worst-case running time of binary search is <strong>Ω(1)</strong>, because it takes at least constant time.</p>

### Sources
<a href='https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-omega-notation' target='_blank' rel='nofollow'>Khan Academy.</a>


