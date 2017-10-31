---
title: Error Handling
---

## Error Handling

Error handling is the process of handling runtime errors caused by your code. Here I'll explain how to handle these errors through the use of a **try-catch statement** . Try-catch statements are available in all the major programming languages with similar syntax.
  
### How the try-catch block works.

The try-catch statement consists of a **try** block and a **catch** block. Code that could throw an exception should be put in the try block. The catch block takes the exception that could be thrown as a parameter and then handles that exception inside the block. During runtime, the code in the try block is first executed. If an exception is thrown, it will be thrown to the catch block to be handled. If there is no catch block, the program will display an unhandled exception error and stop running. Multiple catch blocks are used if code in the try block could throw more than one exception. There is also an optional **finally** block that will execute the code in it regardless of whether or not an exception is thrown.

Below is an example program that handles the divide by zero exception using predefined class in C# library. Exception is the base class for all the exception.

```c#
using System;
namespace ErrorHandling
{
   class DivideByZero
    {
       int result;
       DivideByZero()
       {
          result = 0;
       }
       public void division(int num1, int num2)
       {
          try
          {
             result = num1 / num2;
          }
          catch (DivideByZeroException e)
          {
             Console.WriteLine("Exception caught: {0}", e);
          }
          catch(Exception ex)
          {
              Console.WriteLine("Exception caught: {0}", ex);
          }
          finally
          {
             Console.WriteLine("Result: {0}", result);
          }
       }
       static void Main(string[] args)
       {
          DivideByZero d = new DivideByZero();
          d.division(10, 0);
          Console.ReadKey();
       }
    }
 }
 ```
 * In the above program passing 0 as second parameter will throw DivideByZeroExceptions. 
 * This exception will handle by the catch block which has DivideByZeroException class. If any exceptions other than DivideByZeroExceptions occurs it will handle by Exception catch block.
 
 Exception is the base class for all the exceptions class available in C# library. Even if you want to write your own exception you have to inherits Exception base class into your program.
