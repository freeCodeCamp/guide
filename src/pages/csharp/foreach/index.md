---
title: Foreach Loop
---

# Foreach loop

The `foreach` loop evaluate each element in a collection.

## Example
```
IList<string> ListOfItems = new List<string>();
ListOfFruits.Add("Pen");
ListOfFruits.Add("Apple");
ListOfFruits.Add("ApplePen");

foreach(string item in ListOfItems)
{
	Console.WriteLine("I have " + value + "!");
}
```

## Output:
```
> I have Pen!
> I have Apple!
> I have ApplePen!
```
