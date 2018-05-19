---
title: If-Else Statement
---

## What does an If-Else Statement do?

* The If-Else statement is an extension of the simple If statement.
* In the simple If statement, if the value of the test expression is false, then we skip the code of block and continue with our next statement.
* But many of the times we want to execute certain steps if the value of test expression is false.
* In such cases, we use the if-else statement.

### General Form of If-Else Statement


```cpp
  if (test expression) {
  //True-Block statements;
  }
  else
  {
  //False-Block statements;
  }
```
### Example of If-Else Statement

If test expression is true :

```cpp
int a=10;
if (a<20) {
  //execute code of block
}
else
{
 //skip code of block
}
//program continues
```

If test expression is false :

```cpp
int a=10;
if (a>20){
  //skip code of block
}
else
{
 //execute code of block
}
//program continues
```

### Example in C++:

```cpp
//Program to check whether number entered by user is positive or negative
#include <iostream>
using namespace std ;
int main()  
{
  int no;
  cout<<"Enter a number : "<<endl;

  cin>>no;
  //condition to check if number is positive or negative
  if (no>=0) //negative
  { //block if value is true
    cout<<"You entered a positive number : "<<no<<endl ;
  }

  else       //positive
  { //block if value is false
    cout<<"You entered a negative number : "<< no<<endl ;
  }
  //program continues
  cout<<"This step is always printed"<<endl;
  return 0 ;
  }
```

### Output

* When a positive number is entered :
```
Enter a number : 
 4
You entered a positive number : 4
This step is always printed
```

* When a negative number is entered :
```
Enter a number : 
 -200
You entered a negative number : -200
This step is always printed
```

[Try the code yourself](https://repl.it/MzBq)

_CONGRATULATIONS . This is the end of the article on the IF statement_ 

**Good Luck to all of you** 

**Happy Coding ! :)**

**Feel free to ask any queries on FreeCodeCamp's GitHub page or [FreeCodeCamp's Forum](https://forum.freecodecamp.org)

