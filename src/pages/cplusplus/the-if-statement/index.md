---
title: C++ If Statement
---

# The IF statement.

**What does an If Statement do?**

* The ***if*** statement evaluates your test expression present inside the parenthesis.
* The if statement uses relational and logical operators to make logical expressions.

  -----------------------------------------------
  The general form of if statement:

 if (Test Expression / Condition )
  {
   // Block of statement if test expression is True
  }
  -----------------------------------------------

If the value of your test expression is ***true***, then the block of
code inside the if statement is executed.

If the value of your test expression is ***false***, then the block of
code inside the if statement is skipped and your code continues.

Example of If Statement:
```C++

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
```

//program continues   //program continues

Example In C++ :
  ```C++
 //Program to check if number entered by the user is positive
  //If negative, the block of code is skipped

  #include <iostream>
  using namespace std;
  int main()

  {

  int no ;
  cout<<"Enter a number : ";
  cin>>no ;

  //If Statement to check if the number is positive
  if (no>0)
  {
  cout<<"You have entered a positive number : "<<no<<endl ;
  }
  //If number is not positive, then if statement is skipped a program continues
  cout<<"This step is always printed"<<endl ;

  return 0 ;
  }
  ```

**Output :**

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


_CONGRATULATIONS . This is the end of the article on the IF statement_ 
 
 **Good Luck to all of you** 
 
 **Happy Coding ! :)**
 
 **Feel free to ask any queries on FreeCodeCamp's GitHub page or [FreeCodeCamp's Forum .](https://forum.freecodecamp.org/)**

By : Jaithra Bhatia and Hitarth Asrani




### Switch Statement
A switch statement allows a variable to be tested for equality against a list of values. Each value is called a case, and the variable being switched on is checked for each case.
### Syntax
The syntax for a switch statement in C++ is as follows −
```C++
switch(expression) {
   case constant-expression  :
      statement(s);
      break; //optional
   case constant-expression  :
      statement(s);
      break; //optional
  
   // you can have any number of case statements.
   default : //Optional
      statement(s);
}
```
The following rules apply to a switch statement −

* The expression used in a switch statement must have an integral or enumerated type, or be of a class type in which the class has a single conversion function to an integral or enumerated type.

* You can have any number of case statements within a switch. Each case is followed by the value to be compared to and a colon.

* The constant-expression for a case must be the same data type as the variable in the switch, and it must be a constant or a literal.

* When the variable being switched on is equal to a case, the statements following that case will execute until a break statement is reached.

* When a break statement is reached, the switch terminates, and the flow of control jumps to the next line following the switch statement.

* Not every case needs to contain a break. If no break appears, the flow of control will fall through to subsequent cases until a break is reached.

* A switch statement can have an optional default case, which must appear at the end of the switch. The default case can be used for performing a task when none of the cases is true. No break is needed in the default case.
### Example
```C++
#include <iostream>
using namespace std;
 
int main () {
   // local variable declaration:
   char grade = 'D';

   switch(grade) {
      case 'A' :
         cout << "Excellent!" << endl; 
         break;
      case 'B' :
      case 'C' :
         cout << "Well done" << endl;
         break;
      case 'D' :
         cout << "You passed" << endl;
         break;
      case 'F' :
         cout << "Better try again" << endl;
         break;
      default :
         cout << "Invalid grade" << endl;
   }
   cout << "Your grade is " << grade << endl;
 
   return 0;
}
```
This would produce the following result −
```
You passed
Your grade is D
```
By: Suhit Kumar
