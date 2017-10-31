---
title: ForEach Loop
---

## ForEach Loop

The ForEach loop executes a block of code for each item in a collection. It is similar to the for loop, but is much similar in it's syntax and implementation. It is useful for iterating through lists, arrays, datatables, IEnumerables and other list-like data structures. It can be less efficient than a very well designed for loop, but the difference is negligible in most cases.

### Example
```csharp
List<string> Names = new List<string>{ "Jim", "Jane", "Jack" }

foreach(string name in Names)
{
    Console.WriteLine("We have " + name);    
}
```

### Output:
```sh
> We have Jim
> We have Jane
> We have Jack
```
