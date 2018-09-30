---
title: For Loop
---


For loop is a programming language conditional iterative statement which is used to check for certain conditions and then repeatedly execute a block of code as long as those conditions are met.

The for loop is distinguished from other looping statements through an explicit loop counter or loop variable which allows the body of the loop to know the exact sequencing of each iteration.

Hence a for loop is a repetition control structure that allows you to efficiently write a loop that needs to execute a specific number of times.

Syntax:
for ( init counter; condition for counter; change counter ) {
   statement(s);
}
init: this is execute once only.This step allows you to declare and initialize any loop control variables

condition:Next, the condition is evaluated. If it is true, the body of the loop is executed. If it is false, the body of the loop does not execute and flow of control jumps to the next statement just after the for loop.

increment:After the body of the for loop executes, the flow of control jumps back up to the increment statement.This can be used to alter the  counter variable by simple addition,subtraction,multiplication,division.

Example:
```C++
#include <iostream>
using namespace std; // Here we use the scope resolution operator to define the scope of the standar functions as std::
 
int main () {
   // for loop execution
   for( int a = 10; a < 20; a = a + 1 ) { // The loop will run till the value of a is less than 20
      cout << "value of a: " << a << endl;
   }

   return 0;
}```

Output:
value of a: 10
value of a: 11
value of a: 12
value of a: 13
value of a: 14
value of a: 15
value of a: 16
value of a: 17
value of a: 18
value of a: 19
