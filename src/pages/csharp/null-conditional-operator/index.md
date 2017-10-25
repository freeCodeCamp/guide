---
title: Null-conditional Operator
---

# Null-conditional Operator

Null-conditional operators allow for null checking with a minimal amount of code. For example, if you had
an employee variable of type Employee with a property of type Address, you might do null checking as follows:
##
```
Address address = null;
if (employee != null)
{
    address = employee.Address;
}
```
You could use a standard conditional operator to make that check more concise:
##
```
Address address = employee != null ? employee.Address : null;
```
However, in C# 6.0 null-conditional operators were introduced, so now the above line can simply
be represented as follows:
##
```
Address address = student?.Address;
```
If employee is null, address will simply be assigned null, and no NullReferenceExeception will occur.
This becomes more useful with deeper object graphs, as you can handle a chain of conditional member access.
For example:
##
```
string city = student?.Address?.City;
```
Null-conditional operators are short-circuiting, so as soon as one check of conditional member access
returns null, the rest do not take place.
