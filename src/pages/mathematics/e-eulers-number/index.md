---
title: E Eulers Number
---
## E Eulers Number


Accessing Euler's Number

Euler's number is useful in various ways, especially when considering rate of change. 
It is also known as 2.718281828459045...


Java
Importing "java.lang.math" should give you access to the constant E, which will be a static double. Probably one of the easier ones out there.

C++
This code takes the function e^n, where we set n as 1.0. "Setprecicion" is used to show more or less digits.

```c++
#include <iostream>
#include <iomanip>
#include <math.h>

double e = exp (1.0);
cout << setprecicion(20) << e;
```


Python:
An easy and accessible way to get e. It uses the e^n, where we here take n as 1, which returns e. 

```Python
import math
math.exp( 1 )
```
