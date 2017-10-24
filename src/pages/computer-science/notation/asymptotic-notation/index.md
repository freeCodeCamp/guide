﻿---
title: Asymptotic Notation
---
#**Asymptotic Notation**

###**Asymptotic notation measures the growth rate of an algorithm**

####**Introduction**
Asymptotic notation is commonly used to compare the efficiency and speed of algorithms for a given task. 

[Algorithms](https://guide.freecodecamp.org/algorithms) are a series of steps which are necessary to accomplish a specific task. You can think of it as a recipe for a dish you want to prepare for dinner. For the same dish, there can be more than one recipe, maybe each prescribed by a different chef. So how do you, the chef decide which recipe is the best suited one for you? 

To compare two different items or in this case, a recipe, you need a basis of comparison. Are you looking for the recipe which will consume the least amount of money, or the one which is easiest to execute? Depending on your answer to this question, your choice for the recipe will differ. Similarly, if we need to compare algorithms, we need a common point of reference. Programmers need to find out which algorithm is the fastest or occupies the least amount of space, to decide which algorithm to solve the problem with.

TL;DR: What asymptotic notation denotes is how an algorithm scales in proportion to it's inputs, especially large ones.

####**Why Large Inputs**

Programs are generally speaking, so fast that there is barely any noticable difference between the fastest algorithms and the slowest ones when the input is very small.
For example, if someone needs to search for an element in a list of sorted elements, there are two popular algorithms that can be used for the task.
  
[Linear search](https://repl.it/NHmR/6) 
[Binary search](https://repl.it/NIdF/4)

If you run the two programs, you can see that there is barely any difference between the running times for the two methods.
However, imagine that the input is suddenly now a list of a million numbers. In real life, companies like netflix have to run search operations on about 500 million people again and again so these differences can add up very quickly and can cost them millions in cost and days in wasted time. That is why need to choose the fastest ones and choose them before they are implemented, that is, on paper.

![Run-time vs size of input](http://yaunch.io/images/asymptotic_graph.png)
 Run-time vs size-of-input

TL;DR: Large inputs differentiate a good algorithm from a poor one because 
for small inputs, running times are barely different. 

####**How to use asymptotic notations**

To use asymptotic notations would be to basically compare two algorithms. To compare two things, we need a measure to compare with. Let us say, we want to compare on the basis of time. Since time of a program is directly proportional to the sum of the time taken by each line of code, it is easy to predict how much time a program might take.

Remember that asymptotic notation calculates **how much time a program takes in proportion to it's inputs**. So depending on how we look at inputs, the measurement measure for asymptotic notation also changes. Three good measures are -
		1.  Big Ω(Omega)
		2. Big 0
		3.  Θ(Theta)
	
####**Big Ω**

Big Omega gives us the asymptotic lower bound for the growth rate of an algorithm.
It is the asymptotic notation for the best case scenario. 

[Read in detail here](https://guide.freecodecamp.org/computer-science/notation/big-omega-notation)
![Big Omega](http://www.geeksforgeeks.org/wp-content/uploads/BigOmega.png)
####**Big 0**

Big O gives us the asymptotic upper bound for the growth rate of an algorithm.
It is the asymptotic notation for the worst case scenario. 
[Read in detail here](https://guide.freecodecamp.org/computer-science/notation/big-o-notation)

![Big-0](http://www.geeksforgeeks.org/wp-content/uploads/BigO.png)

####**Θ(Theta)**
Theta, commonly written as Θ, is an Asymptotic Notation to denote the asymptotically tight bound on the growth rate of runtime of an algorithm.
This is basically saying that the function, f(n) is bounded both from the top and bottom by the same function
[Read in detail here.](https://guide.freecodecamp.org/computer-science/notation/big-theta-notation)
![Theta](http://www.geeksforgeeks.org/wp-content/uploads/thetanotation.png)
####**Reading the three measures**

Saying that an algorithm (Algo1) is **0**(log n) is saying that in the worst case scenario, the algorithm will run at _**log n**_ times the size of the input _**n**_. Another algorithm (Algo2) with a running time of **0**(n^2) will run at _**n^2**_ times the size of the input _**n**_. Therefore, Algo1's running time will grow slower (in fact, much slower) than that of Algo2 and is going to be much faster for larger inputs. Hence, Algo1 is faster than Algo2. 
It is important to note that, we can compare the worst case running time of one algorithm to only the worst case of some other algorithm. Otherwise, it is not a fair comparison.

####**Worst-case, Best-case**

You were probably confused by what worst case and best case scenarios mean while comparing algorithms. See the example of searching for an element in a sorted array, in that case, it is easy to understand the problem won't run for long if the element to be searched is the first or the minimal element. This is the best case scenario as any algorithm will give it's best running time in this scenario. Similarly, the worst case would be if the element was the last element to be searched. Because any algorithm would give it's worst performance then.

####**Summary**

In summary, the asymptotic notation is the growth rate of an algorithm in comparison to it's input size. It is used to decide which is the best suited algorithm amongst our choices.Does the algorithm suddenly become incredibly slow when the input size grows? Does it mostly maintain its quick run time as the input size increases? Asymptotic Notation gives us the ability to answer these questions.

####**Good Resources**

[Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation)
Video by the brilliant Doug Lloyd
[![Video by the brilliant Doug Lloyd](https://img.youtube.com/vi/IM9sHGlYV5A/0.jpg)](https://www.youtube.com/watch?v=IM9sHGlYV5A)]

[geeksforgeeks](http://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/)
