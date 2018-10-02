---
title: All
---
 # Any
 Returns true if all elements in the sequence satisfy a condition.
 ### Signature
```csharp
Enumerable.All<TSource> Method (IEnumerable<TSource>, Func<TSource, Boolean>)
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
 // All Fruit have a quantity greater than 0.
var allFruitsHaveAQuantity = fruits.All(f => f.Quantity > 0); // true
 // All Fruit have the Color Yellow
var allYellow = fruits.All(f => f.Color == "Yellow"); // false
```
