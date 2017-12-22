---
title: Infinite Loops
---
# Infinite Loops

An infinte loop is a loop statement (`for`, `while`, `do-while`) which does not end on its own.

The test condition of a looping statement decides whether the loop body will execute or not. So a test condition which is always true will keep on executing the body of the loop, forever. That's the case in an infinte loop.

Examples:

```java
// Infinite For Loop
for ( ; ; )
{
    // some code here
}

// Infinite While Loop
while (true)
{
    // some code here
}

// Infinite Do While Loop
do
{
    // some code here
} while (true);
```

But a program stuck in such a loop will keep using computer resources indefinitely. This is undesirable, and is a type of 'run-time error'.

To prevent the error, programmers use a break statement to break out of the loop. The break executes only under a particular condition. Use of a selection statement like if-else ensures the same.
```java
while (true)
{
    // do something
    
    if(conditionToEndLoop == true)
        break;
    
    // do more
}
```

The main advantage of using an infinite loop over a regular loop is readability.

Sometimes, the body of a loop is easier to understand if the loop ends in the middle, and not at the end/beginning. In such a situation, an infinite loop will be a better choice.
