---
title: Throw expressions
---

# Throw expressions

It is easy to throw an exception in the middle of an expression: just call a method that does it for you! But in C# 7.0 we are directly allowing throw as an expression in certain places.

## Example
```

class Person
{
    public string Name { get; }
    public Person(string name) => Name = name ?? throw new ArgumentNullException(nameof(name));
    public string GetFirstName()
    {
        var parts = Name.Split(" ");
        return (parts.Length > 0) ? parts[0] : throw new InvalidOperationException("No name!");
    }
    public string GetLastName() => throw new NotImplementedException();
}
```