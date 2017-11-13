---
title: Hello World
---

# Hello World

To write some text on console we use the `Console.WriteLine()`. This method as input takes a string.

## Example
```csharp
using System;

namespace HelloWorld
{
    class Hello
    {
        static void Main()
        {
            // Write "Hello World!" on console
            Console.WriteLine("Hello World!");

            // Keep the console window open in debug mode.
            System.Console.WriteLine("Press any key to exit.");
            System.Console.ReadKey();
        }
    }
}

```

## Output:
```sh
> Hello World!
> Press any key to exit.
```
