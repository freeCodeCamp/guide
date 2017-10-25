---
title: Null-conditional Operator
---

# Null-conditional Operator

Null-conditional operators allow for null checking with a minimal amount of code. For example, if you had
an employee variable of type Employee with a property of type Address, you might do null checking as follows:
```cs
Address address = null;
if (employee != null)
{
    address = employee.Address;
}
```
You could use a standard conditional operator to make that check more concise:
```cs
Address address = employee != null ? employee.Address : null;
```
However, in C# 6.0 null-conditional operators were introduced, so now the above line can simply
be represented as follows:
```cs
Address address = student?.Address;
```
If employee is null, address will simply be assigned null, and no NullReferenceExeception will occur.
This becomes more useful with deeper object graphs, as you can handle a chain of conditional member access.

For example:
```cs
string city = student?.Address?.City;
```
Null-conditional operators are short-circuiting, so as soon as one check of conditional member access
returns null, the rest do not take place.

Also worth noting is the null-coalescing operator (`??`). Consider the following code:
```cs
Address address = null;
if (employee.Address == null)
{
    address = new Address("123 Main Street");
}
else
{
    address = employee.Address;
}
```
This code can be condensed into one line using the null-coalescing operator:
```cs
Address address = employee.Address ?? new Address("123 Main Street");
```
If `employee.Address` is not null, we assign it to `address`. If `employee.Address` is null, we assign a new `Address` object to `address`. This is very useful to condense the 9 lines of code above into a single, easily readable line.