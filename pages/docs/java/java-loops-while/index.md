---
title: "Java Loops: while"
parent: "java"
---

# Java while Loop

The `while` loop executes a group of statements / single statement till a condition evaluates to `true`. For instance:

     while(some_condition_is_true){
      //do something
     }

`Note`: For the `while` loop to start executing, you'd require the condition to be true. However, to exit the loop you must do something as given below (otherwise the loop will execute forever. Practically, it will run till the JVM runs out of memory).

    while(i<10){
        System.out.println("i :"+ i);
        i++; //<- This ensures that value of i in the while condition will become more than 10 at some point thereby breaking the condition and exiting the loop.
    }

Can you now guess the output of the following snippet?

     int i = 0;
     while( i < 10 ){
      System.out.println("Value of i is : " + i);
      i++;
     }
