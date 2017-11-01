---
title: LinQ library
---

# LinQ

LinQ stands for .NET Language-Integrated Query. It is used for SQL like operations on C# objects.

## Main functions

Select()
Where()
OrderBy()
ToList()

Example:

```
List<object> objects = new List<object>();
var sortedObjects = objects.Where(s => s.Length == 5)
                           .OrderBy(s => s)
                           .Select(s => s.ToUpper())
                           .ToList();
```
