---
title: Monty Hall Problem
---
# Monty Hall Problem

The Monty hall Problem, that owes its name to Let's Make a deal TV show host, is a brain teaser that can be considered a paradox due to its correct answer, that seems to contradict intuition. It became famous after appearing in the Marilyn Von Savantś column in Parade magazine with the following postulate:

"Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?"

## The solution

Most people would say that the probabilities are 50% for each remaining door, but the fact is that door No. 2 hides the car 2/3 times. Why?

You have to consider that in the moment of making your first choice there were 3 avilable doors, so the possibilities of picking the right door were 1/3 and the possibilities of picking the wrong door were 2/3:

![Doors_1](https://upload.wikimedia.org/wikipedia/commons/7/79/Monty_closed_doors.svg)

When the host, that knows what is behind the doors, chooses the second door (which necessarily has to hide a goat), he has to choose between the two remaining doors that represent the 2/3 possibilities:

![Doors_2](https://upload.wikimedia.org/wikipedia/commons/9/9e/Monty_open_door_chances.svg)

1/3 times you'll pick the right door in your first choice (and the host will open randomly one of the other doors), so switching in the second instance would change a win into a loss. But the other 2/3 times your first decition would be incoorect (and the host will be forced by the rules to leave the car hidden), so switching would change a loss into a win:

Door No. 1 | Door No. 2 | Door No. 3 | Stay in No. 1 | Change to the other door
:---: | :---: | :---: | :---: | :---:
**Car** | Goat | Goat | **Win a car** | Win a goat
Goat | **Car** | Goat | Win a goat | **Win a car**
Goat | Goat | **Car** | Win a goat | **Win a car**
 | | | | **1/3** | **2/3**

After opening the first door, reamining with your first pick would make you win 1/3 times, but changing would change a loos into a win 2/3 times. Knowing that, you should allways change your first decision when the host makes his offer.
