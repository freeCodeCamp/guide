---
title: Assignment with Plus Equals
---
Everything to the right of the equals sign is evaluated first, so we can say `myVar = myVar + 5;` to add `5` to `myVar`. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the `+= operator`.

`myVar += 5;` will add 5 to myVar instead of using any of the follwoing:

    myVar = 5 + myVar;
    myVar = myvar + 5;