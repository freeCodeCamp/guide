---
title: Error Handling
---

## Error Handling
Error Handling, and to a larger extent, Exception Handling, are programs written into methods to return important information about the manipulation of data. Error handling is often used alongside Promises and Callbacks.
Error handling is very important thing every developer should care about while doing programming. Here I'll explain how to handle errors which occurs run-time using try-catch block with an example in C# programs. Try-catch block available in all the major programming languages and has similar syntax as well.
  
### How try-catch block works.

Whatever the code available in the try block executes as similar like the source code executes out of try block. Try block means that your trying to execute some code which may throw exceptions. When a code in try block throws any exception, the same can handle/catch by catch block. The advantages of having the try-catch block is, it make sure that unexpected termination of program will not happen at run time.

Try-catch block syntax included an optional block called finally. Which gets executed always, whether the try blocks throws error or not.

Below I've given a program which handles the divide by zero exception using predefined class in C# library. Exception is the base class for all the exception.

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

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://quizlet.com/135129010/computer-science-error-handling-flash-cards/
https://en.wikipedia.org/wiki/Exception_handling