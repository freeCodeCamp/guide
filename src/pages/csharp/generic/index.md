---
title: Generics
---
## Generics

Generics were added to version 2.0 of the C# language and the common language runtime (CLR). Generics make it possible to design classes and methods that defer the specification of one or more types until the class or method is declared and instantiated by client code.

### Example
For example, by using a generic type parameter T you can write a single class that other client code can use without incurring the cost or risk of runtime casts or boxing operations:

```
// Declare the generic class.
public class GenericList<T>
{
    void Add(T input) { }
}

public class TestGenericList
{
    private class ExampleClass { }
    static void Main()
    {
        // Declare a list of type int.
        GenericList<int> list1 = new GenericList<int>();

        // Declare a list of type string.
        GenericList<string> list2 = new GenericList<string>();

        // Declare a list of type ExampleClass.
        GenericList<ExampleClass> list3 = new GenericList<ExampleClass>();
    }
}
```


#### More Information:

<a href='https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/introduction-to-generics' target='_blank' rel='nofollow'>Introduction to Generics (C# Programming Guide</a>
