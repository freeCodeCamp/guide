---
title: Infinite Loops
---
# Infinite Loops

If you want your loop to go on for ever, you can use the `while`, `do while` and `for` statement.  
The best loop is to use `while (true) {}` for readability reasons.

```java
// Infinite While Loop
while (true)
{
    // your code here
}

// Infinite For Loop
for ( ; ; )
{
    // your code here
}

// Infinite Do While Loop
do
{
    // your code here
} while (true);
```

Be aware these loops are a bit dangerous and often unnecessary. Your program could hang infinitely. You should not e.g. combine them with break to loop over collections or arrays. A valid use would be a service program you want to run for ever.
