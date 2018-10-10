---
title: All
---

# All

Returns true if all the elements in the collection matches the predicate.
### Signature
```csharp
public static bool All<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate);
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

var hasLotsOfFruits = fruits.All(f => f.Quantity > 4); // False

var hasLotsOfRedFruits = fruits.Where(f => f.Color == "Red")
                             .All(f => f.Quantity > 4); // True
```
