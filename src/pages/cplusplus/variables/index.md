---
title: Variables
---

Lets discuss something know as variables. Variables are like a bucket. You can put something in it and then change it 
afterwards when needed.
In C++ there are many types of variables like Integers, Strings, Booleans and many other.
Lets look at a simple program using integer variables.Integers can store simple positive and negative values like 0, 1, -1 
and so on. Any positive or negative value without decimal is an integer. Lets look at a simple program which uses an integer 
variable.

```cpp
#include <iostream>
using namespace std ;
int main()
{
    int a;                  // Declare an integer variable a.
    float valueOfPi;        // It is better to give good names to variables so that you know exactly what value are they supposed to hold.
    valueOfPi =  3.14159;   // Assign value of 3.14159 to the variable valueOfPi. 
    a = 5;                  // Assign value of 5 to variable a.
    cout << a;              // Display the value of variable a which contains 5.
    cout << valueOfPi;      //Display the value of variable valueOfPi which contains the actual value of Pi upto 5 decimals (3.14159).
    return 0;
}
```

When you execute this program you will see 5 displayed on the screen

* Note that in the above program // is placed after the lines. Symbol "//" is for commenting our code. Code after the symbol
  "//" is not execueted in the line where its placed.
* On line 17 and 18 simple integer variable is declared.
* On line 20 the value 5 is assigned to the variable *a* and on line 19 the value 3.14159 is assigned to the variable *valueOfPi* . Now whenever we use the variable *a* in our program its value will be 5 and so is the case with the variable *valueofPi*
unless we change it.
* On line 21 and 22 we display the value of variable *a* and *valueOfPi* which displays 5 and 3.14159 on the screen respectively.
