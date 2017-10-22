---
title: Control Statements
---
# Control Statements

Loop control statements change execution from its normal sequence. When execution leaves a scope, all automatic objects that were created in that scope are destroyed.

Java supports the following control statements:

*   <a href='http://forum.freecodecamp.com/t/java-loops-break-control-statement' target='_blank' rel='nofollow'>break</a>
*   <a href='http://forum.freecodecamp.com/t/java-loops-continue-control-statement' target='_blank' rel='nofollow'>continue</a>

The 'break' control statement breaks out of the loop when the condition is met. This means the rest of the loop will not run.
For example, in the loop below if i reaches 5, the loop breaks, so it does not continue on.

```java
for(int i=0;i<10;i++){

  if(i == 5){ //if i is 5, break out of the loop.
    break;
  }

System.out.println(i);
}

```

Output:
```
    0 1 2 3 4 
```

The 'continue' control statement is the less intense version of 'break'. It only breaks out of the current instance of the loop and continues on. In the loop below, if i is 5, the loop continues, so it will skip over the print statement below and move on until i reaches 10 and the loop stops.

```java
for(int i=0;i<10;i++){

  if(i == 5){ //if i is 5, break out of the current instance loop.
    continue;
  }

System.out.println(i);
}

```

Output:
```
    0 1 2 3 4 6 7 8 9
```
