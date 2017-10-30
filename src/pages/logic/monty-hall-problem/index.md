---
title: Monty Hall Problem
---
## Monty Hall Problem

The Monty Hall problem is a probability puzzle named after game show host Monty Hall. It asks the following:
> Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?

While counterintuitive, the correct solution is to always switch doors in this situation.

#### Solution
Given the player initially chooses the first door, these are the possible outcomes:

|Behind door 1|Behind door 2|Behind door 3|Result if staying at door #1|Result if switching to the door offered|
|-------------|-------------|-------------|----------------------------|---------------------------------------|
|__Car__      |Goat         |Goat         |__Wins car__                |Wins goat                              |
|Goat         |__Car__      |Goat         |Wins goat                   |__Wins car__                           |
|Goat         |Goat         |__Car__      |Wins goat                   |__Wins car__                           |

As you can see, there is a ⅔ chance to win when switching doors and only a ⅓ chance to win by sticking to the same door.

Another way to think about this is to consider the two initially unchosen doors together. The initial door the player chooses has a ⅓ chance of hiding the car while the set of the other two doors has a ⅔ chance of hiding the car. Now if the the player decides to switch doors when the host reveals a goat, the player essentially gets to choose two doors (with ⅔ probability of winning) instead of the initial single door (with ⅓ probability of winning).


#### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Monty_Hall_problem)
* [Marilyn Vos Savant Column](http://marilynvossavant.com/game-show-problem/)
