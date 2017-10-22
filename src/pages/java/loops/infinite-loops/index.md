---
title: Infinite Loops
---
# Infinite Loops

If you want your loop to go on infinitely, you can use the `while`, `do while` and `for` statement.

```java
// Infinite For Loop
for ( ; ; )
{
    // your code here
}

// Infinite While Loop
while (true)
{
    // your code here
}

// Infinite Do While Loop
do
{
    // your code here
} while (true);
```


Normally, if your loop is running infinitely, it is an error that should not occur as an infinite loop does not stop and prevents the rest of the program from running.

```java

for(int i=0;i<100;i++){

    if(i==49){
    i=0;
    }

}

```
The loop above runs infinitely because every time i approaches 49, it is set to be 0. i never reaches 100 to terminate the loop, so the loop is an infinite loop. 
