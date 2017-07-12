---
title: Iterate Odd Numbers with A for Loop
---
For loops don't have to iterate one at a time. By changing our `final-expression`, we can count by even numbers.

We'll start at `i = 0` and loop while `i < 10`. We'll increment `i` by 2 each loop with `i += 2`.

    var ourArray = [];

    for(var i = 0; i < 10; i += 2) {

      ourArray.push(i);

    }

ourArray will now contain `[0,2,4,6,8]`