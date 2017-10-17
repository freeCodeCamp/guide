---
title: The Monty Hall Problem
---


# The Monty Hall Problem

The Monty Hall Problem is a counter-intuitive puzzle based on Probability.

## The Puzzle:

Suppose you're on a game show, and the host of the game, Monty, has given you the choice to select one of three doors. Whichever door you select and open, you will get the prize behind that door.
 
* Behind one door is a car and behind each of the others is a goat. You do not know which door conceals the car but the host (Monty) knows.
 
* You will select one door and before opening that door, the host will open one of the other two doors that contains a goat.

* The host will then give you a chance to rethink your choice.--`To Swap ` to the other unopened door or `To Stick` with the same door.


### Question:

What you should choose - `To Swap` or  `To Stick` to maximize your chances of winning the car?

 
## General Misconception:

It seems like the choice to Swap or Stick does not make a difference. As the host has already shown the one goat, there are now two doors, one concealing a goat and one concealing the car. Selecting any one will have a 50-50 probability or 1/2 probability of selecting a car. (Selecting one out of two choices).

However this assumption is incorrect!

## Correct Solution :

We should always select `To Swap`. Because it has twice the probability of winning a car.

Here is the illustration:

**The Choice `To Stick`:**

There are two considerations for this choice:

Case 1: Selecting a goat in the first round has a probability of 2/3 . (Selecting a goat out of 2 goats and 1 car) and then `To Stick`. 

Case 2: Selecting a car in the first round has a probability of 1/3 . (Selecting a car out of 2 goats and 1 car) and then `To Stick`. 

```Therefore chance of winning a car by choosing not to swap is 1/3.```

**The Choice `To Swap`:**

There can be two considerations for this choice:

Case 1: Selecting a goat in the first round has a probability of 2/3 . (Selecting a goat out of 2 goats and 1 car) and then `To Swap`
Swapping will lead you to win the car (As the other unopened door will surely conceal the car).

Case 2: Selecting a car in the first round has a probability of 1/3 . (Selecting a car out of 2 goats and 1 car) and then `To Swap` 
Swapping will lead you to the goat (As the other unopened door will surely conceal the goat).

```Therefore chance of winning a car by swapping is 2/3.```

So, you should always select `To Swap ` to maximize your chance of winning the car.

  

