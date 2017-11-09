---
title: Input and Output
---

## Input and Output

Input stream objects in C++ use 'cin'. This is pronounced "see in". This is used to input user data into the program.

Output stream objects use 'cout', as shown in the first introduction of C++, to print out statements to the console. As you may have guessed, this is pronounced "see out". 

```C++
# include<iostream>
using namespace std;

int main(){
int x;
cin >> x;
cout << "The output value of int x" << x << endl;

```

* The header file <iostream> is required for stream objects.
* After declaring a variable, using the 'cin' object, input data can be saved into the variable.
* The 'cout' object prints the data saved into the variable to the console.

The operators '<<' and '>>' are used to point in the direction of the data.
For 'cin', the '>>' operator is used.
For 'cout', the '<<' operator is used.
