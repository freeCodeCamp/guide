---
title: Variables
---

Lets discuss something know as variables. Variables are like a bucket. You can put something in it and then change it 
afterwards when needed.
In C++ there are many types of variables like Integers, Strings, Booleans and many other.
Lets look at a simple program using integer variables.Integers can store simple positive and negative values like 0, 1, -1 
and so on. Any positive or negative value without decimal is an integer. Lets look at a simple program which uses an integer 
variable.

```C++
#include <iostream>
using namespace std ;
int main()
{
    int a;          // Declare an integer variable a
    a = 5;          // Assign value of 5 to variable a
    cout << a;      // Display the value of variable a which contains 5
    return 0;
}
```
When you execute this program you will see 5 displayed on the screen

* Note that in the above program // is placed after the lines. Symbol "//" is for commenting our code. Code after the symbol
  "//" is not execueted in the line where its placed.

* On line 5 n simple integer variable is declared.
* On line 6 the value 5 is assigned to the variable a. Now whenever we use the variable a in our program its value will be 5
  unless we change it.
* On line 7 we display the value of variable a and 5 is printed on the screen.
