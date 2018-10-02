---
title: Any
---

# Any

Returns true if any element in the sequence satisfies a condition

### Signature
```csharp
Enumerable.Any<TSource> Method (IEnumerable<TSource>, Func<TSource, Boolean>)
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

// Check if any Fruits have a quantity greater than 20
var anyFruitGreaterThanTwenty = fruits.Any(f => f.Quantity > 20); // true

// Any Fruit with color Green
var anyGreen = fruits.Where(f => f.Color == "Green"); // false
```
