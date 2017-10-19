---
title: Error Handling
---
## Error Handling
Error handling is very important while doing programming. Here ill explain how to handle error in C# programming with try-catch block. Try-catch block available in all the major programming languages and has similar syntax as well.
  
 +####Try-catch block

whatever the code you written in the try block executes as similar like the source code executes out of try block. But, when any exception occurs inside the try block it will handle/catch by catch block. The advantages of having the try-catch block in programs make sure that unexpected termination of program will not happen even a run time exception occur.

Try-catch block also has finally block which gets executed always. Exceptions occurs or not finally block will get executes. 

Below I've given a program which handles the divide by zero exception using predefined methods in C# library. 

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
 in the above program im passing 0 as second parameter which will through DivideByZeroExceptions. This exception will handle by catch block which has DivideByZeroException. If any exception other than DivideByZeroExceptions occurs it will handle by Exception catch block.
 
 Exception is the base class for all the exceptions. Even if you want to write your own exception you have to inherits Exception base class into your program.
