---
title: Any
---

# Any

Returns true if there is at least one element that matches the predicate.
When using an empty predicate (just .Any() without anything between the parantheses) it will return true if the collection is not empty.
### Signature
```csharp
public static bool Any<TSource>(this IEnumerable<TSource> source);
public static bool Any<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate);
```

## Example
```csharp
var fruits = new List<Fruit>() {
    new Fruit() { Id = 1, Name = "Orange",     Color = "Orange", Quantity: 3   },
    new Fruit() { Id = 2, Name = "Strawberry", Color = "Red",    Quantity: 12  },
    new Fruit() { Id = 3, Name = "Grape",      Color = "Purple", Quantity: 25  },
    new Fruit() { Id = 4, Name = "Pineapple",  Color = "Yellow", Quantity: 1   },
    new Fruit() { Id = 5, Name = "Apple",      Color = "Red",    Quantity: 5   },
    new Fruit() { Id = 6, Name = "Mango",      Color = "Yellow", Quantity: 2   }
};

var hasFruits = fruits.Any(); // True

var hasYellowFruit = fruits.Any(f => f.Color == "Yellow"); // True
```
