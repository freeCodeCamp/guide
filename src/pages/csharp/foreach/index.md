---
title: ForEach Loop
---

## ForEach Loop

The ForEach loop executes a block of code for each item in an array or collection that implements the System.Collections.IEnumerable or System.Collections.Generic.IEnumerable<T> interface.<sup>1</sup>

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
### Sources
1 https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/foreach-in
