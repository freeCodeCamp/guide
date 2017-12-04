---
title: Tokens Part 2
---

# Operators :

* Operators let you perform operations on your data.
* The data that is being operated on is called the  _operand_ .
* The different types of operators in C++ are : 
* *OPERANDS* are the data on which the operator performs certain commands.
* Operators are of 3 types : unary(works on 1 operand), binary(works on 2 operands) , ternary(works on 3 operands).

### 1 The I/O operators -

* These operators allow you to direct input and output.
 ## The Input oerator ">>" ## 
 is used to read data from standard iinput (the "cin" statement) .  

 ##The Output operator "<<"##
 is used to send output in the `cout` stateement.

### 2 The Arithmetic operators -

* These operators allow you to perform basic arithmeic operations.
 1. The `+` operator *adds* the 2 operands.
 2. The `-` operator *subtracts* the 2 operands.
 3. The `*` operator *multiplies* the 2 operands.
 4. The `/` operator *divides and gives the quotient* of the 2 operands.
 5. The `%` operator *divides and gives the remainder* of the 2 operands.

 ### Example of using arithmetic operators :
 
 ```cpp
 #include<iostream>
using namespace std;

int main()
{
  int a=5; //1st operand
  int b= 10; //2nd operand
  
  cout<<"+ operator "<<a+b<<endl; //Add
  cout<<"- operator "<<a-b<<endl; //Subtract
  cout<<"* operator "<<a*b<<endl; //Multiply
  cout<<"/ operator "<<b/a<<endl; //Find Quotient
  cout<<"modulus operator "<<b%a<<endl; //Find remainder
 return 0; 
}
 ```
 
 OUTPUT :
```
+ operator 15
- operator -5
* operator 50
/ operator 2
modulus operator 0
```

<a href='https://repl.it/Mge9' target='_blank' rel='nofollow'>Try the code yourself ! :) </a>

### The increment operator :

* `++` is known as the increment operator. It increases the value of an integer variable by 1.

The 2 types of increment : 

* Pre increment is 1st incrementing the value and then using it. Example : `int a ; ++a;`
* Post increment is 1st using the variable then incrementing it. Example : `int b; b++;`

### The decrement operator :

* `--` is known as the decrement operator. It decreases the value of an integer variable by 1.

The 2 types of decrement : 

* Pre decrement is 1st decrementing the value and then using it. Example : `int a ; --;`
* Post decrement is 1st using the variable then decrementing it. Example : `int b; b--;`

Example of Increment and decrement operators :

```cpp
#include<iostream>
using namespace std;

int main()
{ 
  int a=3,b=4;
  
  // INCREMENT
  cout<<"Value of int a PRE INCREMENTED : "<<++a<<endl;
  cout<<"Value of int b POST INCREMENTED : "<<b++<<endl;
  cout<<"Value of b is changed after using once : "<<b<<endl;
  
  // DECREMENT
  cout<<"\n"; //go to next line 
  a=10; //Assigning a new value to a
  b=10; //Assigning a new value to b
  cout<<"Value of int a PRE DECREMENTED : "<<--a<<endl;
  cout<<"Value of int b POST DECREMENTED : "<<b--<<endl;
  cout<<"Value of b is changed after using once : "<<b<<endl;
  return 0;
}
```

OUTPUT :

```
Value of int a PRE INCREMENTED : 4
Value of int b POST INCREMENTED : 4
Value of b is changed after using once : 5

Value of int a PRE DECREMENTED : 9
Value of int b POST DECREMENTED : 10
Value of b is changed after using once : 9
```

<a href='https://repl.it/Mgg4/2' target='_blank' rel='nofollow'>Try the code yourself ! :) </a>

### 3 : Relational Operators :

* These operators tell us the relation among 2 operands and return a boolean value(0 or 1). If the relation is `true` then it results into 1 . If the realtion is false then it results into 0.

* The 6 relationall operators are :
    1. Less than `<`
    2. Greater than '>'
    3. Less than or equal to `<=`
    4. Greater than or equal to `>=`
    5. Equal to `==`
    6. Not equal to `!=`


### 4 : Logical Operators : 

* These operators combine expressions for logical operations . They are :
 1. Logical AND `&&` : Evaluates to true if both values are true .
 2. Logical OR `||`  : Evaluates to true if any value is true .
 3. Logical NOT `!`  : If *expression* is true then *!expression* is false. This operator reverses the truth value and is a unary operator.

_Camper , You now know what are tokens. The next article will be about <need-to-put-topic> CONGRATULATIONS_ 
 
 **Good Luck to all of you** 
 
 **Happy Coding ! :)**
 
 **Feel free to ask any queries on FreeCodeCamp's GitHub page or <a href='https://forum.freecodecamp.org/' target='_blank' rel='nofollow'>FreeCodeCamp's Forum .</a>**