---
title: SQL or Operator
---
## SQL or Operator

You can use the `OR` operator in the `WHERE` clause of `SELECT` statement. You use it when you want to select a record that satisfies at least one of the conditions.

Here is an example that selects all records from the Person table who are either male or who have the name “Mary”:

```sql
SELECT Id, Name, DateOfBirth, Gender
FROM Person
WHERE Gender = “M” OR Name = “Mary”
```

You can combine others operators in the `WHERE` clause (use parenthesis to indicate the order of operations) like in this example:

```sql
SELECT Id, Name, DateOfBirth, Gender
FROM Person
WHERE Gender = “M” AND (Name = “Peter” OR Name = “John”)
```


