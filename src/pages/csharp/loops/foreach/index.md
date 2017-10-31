---
title: ForEach Loop
---

## ForEach Loop

The ForEach loop executes a block of code for each item in a collection.

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
