---
title: C++ If Statement
---

# The IF statement.

**What does an `If` Statement do?**

* The `if` statement evaluates your test expression present inside the parenthesis.
* The `if` statement uses relational and logical operators to make logical expressions.

-----------------------------------------------
  
The general form of an `if` statement:

 if (Test Expression / Condition )
 {
    // code block if test expression is True
 }
  
-----------------------------------------------

If the value of your test expression is `true`, then the block of
code inside the if statement is executed.

If the value of your test expression is `false`, then the block of
code inside the if statement is skipped and your code continues.

Example of `if` Statement:
```cpp

  int a= 10;
  
  //TRUE STATEMENT
  if (a<20)
  {
  //execute block of code
  }
//FALSE STATEMENT
if (a<0)
 {
   //Skip block of code.
 }

//program continues   //program continues
```

Example in C++ :
  ```cpp
 //Program to check if number entered by the user is positive
  //If negative, the block of code is skipped

  #include <iostream>
  using namespace std;
  int main()

  {

  int no ;
  cout << "Enter a number : ";
  cin >> no ;

  //If Statement to check if the number is positive
  if (no>0)
  {
  cout << "You have entered a positive number : "<< no << endl ;
  }
  //If number is not positive, then if statement is skipped a program continues
  cout<<"This step is always printed"<<endl ;

  return 0 ;
  }
  ```

### Output :

  OUTPUT 1 :
```
Enter a number :  5
You have entered a positive number : 5
This step is always printed 
 ```
  This is the output when the number entered is positive.

  OUTPUT 2 :
```
Enter a number :  -1
This step is always printed
```
  This is the output when the number entered is negative.

<a href='https://repl.it/Mg9X' target='_blank' rel='nofollow'>Try the code yourself ! :) </a>

