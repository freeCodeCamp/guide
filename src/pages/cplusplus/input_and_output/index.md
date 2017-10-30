---
title: Input and Output
---

## Input and Output

Input stream objects in C++ use 'cin', which is pronounced "see in". This is used to save input data, from the keyboard, into the program.

Output stream objects use 'cout'. As you guessed, it's pronounced "see out". As shown in the introduction of C++, to print out statements to the console 'cout' was used.

```C++
# include <iostream>
using namespace std;

int main(){
int x;
cin >> x;
cout << "The output value of int x" << x << endl;

```

* The header file iostream is required for stream objects.
* After declaring a variable, using the 'cin' object, input data can be saved into the variable x.
* The 'cout' object prints the data saved into x to the console.

The operators '<<' and '>>' are used to point in the direction of the data.
For 'cin', the '>>' operator is used. Remember, data is going in ">>" to x (from the example above).
For 'cout', the '<<' operator is used. Data is going out "<<" to the console.
