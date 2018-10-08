---
title: For Loop
---

# For Loop
A For Loop is a repetitive statement that is used to check for some condition and then based upon the condition a block of code is executed repeatedly until the specified condition is satisfied.

## Syntax :
for ( initialization; condition; update )
{
   //Body of the expression
}

### initilization
This step allows you to declare and initialize any loop control variables.This step is performed first and only once.

### condition
Next the condition is evaluated. If it holds true, the body of the loop is executed. If it holds false, the body of the loop does not execute and flow of control jumps to the next iteration(repetition of a process).

### update
The update statement is used to alter the loop variable by using simple operations like addition,subtraction,multiplication or division.
The update statement excutes after the execution of the body of the loop.

## IMPLEMENTATION:
```C++
#include <iostream>
using namespace std;
 
int main () 
{
   // for loop execution
   for( int a = 10; a <20; a = a + 1 )
   {                                      
      cout << "Value of a: " << a << ;
   }

   return 0;
}```

Output:
Value of a: 10
Value of a: 11
Value of a: 12
Value of a: 13
Value of a: 14
Value of a: 15
Value of a: 16
Value of a: 17
Value of a: 18
Value of a: 19

-----Explanation-----
Here's the initilization condition is first set to a=10.The loop first checks for this condition.It then checks for the condition expression i.e a<20 which holds true as 10<20(for the first case).Now the body of the loop is executed and we get the output "Value of a: 10".Then the update expression is executed which adds the number 1 to 'a' and the value of 'a' get's updated to 11 and the same steps are followed(as above) until the value of v reaches less than 20 i.e 19. 

