---
title: While Loop
---
# While Loop

The `while` loop executes the a group of statements until the given boolean condition evaluates to `false`. For instance:

```java
while (some_condition_is_true)
{
    // do something
}
```

**Note**: For the `while` loop to start executing, the condition has to be `true`. To exit the loop the condition has to evaluate to `false` or use a break statement (otherwise the loop will execute forever. Practically, it will run until the JVM runs out of memory).  

## Example
In the following example, the expression `iter_While < 10` is given. As we increment `iter_While` by `1` each time the loop is executed, the `while` loop will keep going until `iter_While` reaches `10` (where the condition evaluates to `false`).

```java
int iter_While = 0;
while (iter_While < 10)
{
    System.out.print(iter_While + " ");
    // Increment the counter
    // Iterated 10 times, iter_While 0,1,2...9
    iter_While++;
}
System.out.println("iter_While Value: " + iter_While);
```

Output:
```
0 1 2 3 4 5 6 7 8 9
iter_While Value: 10
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJYj/0' target='_blank' rel='nofollow'>Run Code</a>
