# Functions in C++

There are many built in functions in C++ which you can use by including a library. Let us take at one example.
There is a built in function to find square root of a number. The code is given below
```
#include <iostream>
#include<math.h>
using namespace std;

int main()
{
   cout << sqrt(34) << endl;  // sqrt is a built in function
   return 0;
}
```
* Note that you include the library "math.h" in order to use the square root of a number.
* On running the above program you will get 5.83095 as output which is square root of 34

You can also make your own functions in order to perform a task and it is also a good programming practice to
make functions if you think that the code will be needed multiple times or you think that this task should have
its own function. Suppose you are writing your own function in which an integer parameter will be passed to function
and you return square of that number.

C++ program to do so is given below

```
#include <iostream>
using namespace std;

int findSquare(int number)      // The function is declared outside main.
{
    return number * number;
}

int main()
{
   cout << findSquare(8) << endl;     // You call the square function. Output will be 64 
   
   return 0;
}
```

* You can give any name to your function like I have named my function "findSquare"
* Before giving name to function you define the return type. It can be any data type or if you don't want to return
  anything then you write void. 
* After giving data type and defining the name of function, you give parameter list. If you don't want to pass any
  parameters then you keep the brackets empty
* Below are given different functions with various return types.
  
```
#include <iostream>
using namespace std;

float findSquare(double number)      // Here the return type is float and parameter it accepts is a double
{
    return number * number;
}

int main()
{
   cout << findSquare(8.7) << endl;     // Output will be 75.69
   
   return 0;
}
```

Suppose you print square inside the function and don't return anything.

```
#include <iostream>
using namespace std;

void findSquare(double number)      // Nothing is returned. So we write void before naming our function
{
    cout << number * number;
}

int main()
{
   findSquare(7.1);     // Output will be 50.41
   
   return 0;
}
```
Similarly you can return String, Boolean or any aother data type.
