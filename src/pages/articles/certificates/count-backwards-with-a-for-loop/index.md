---
title: Count Backwards with A for Loop
---
A for loop can also count backwards, so long as we can define the right conditions.

In order to count backwards by twos, we'll need to change our `initialization`, `condition`, and `final-expression`.

We'll start at `i = 10` and loop while `i > 0`. We'll decrement `i` by `2` each loop with `i -= 2`.

    var ourArray = [];

    for(var i = 10; i > 0; i -= 2) {

      ourArray.push(i);

    }

ourArray will now contain `[10,8,6,4,2]`