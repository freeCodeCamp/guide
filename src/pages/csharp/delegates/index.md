---
title: Foreach Loop
---

# Foreach Loop

The `foreach` loop repeats a group of statements enclosed within its block, for each element of a collection. 

The collection must implement the IEnumerable or IEnumerable<T> interface.

The 'foreach' loop can be used to display the contents of the collection, but cannot be used to add or delete items from the collection.

## Example
```
int[] array = { 1, 2, 3, 4, 5 };
foreach(var item in array)
{
	Console.WriteLine(item);
}
```

## Output:
```
> 1
> 2
> 3
> 4
> 5
```
