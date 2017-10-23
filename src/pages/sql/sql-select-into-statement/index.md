---
title: SQL Select into Statement
---
## SQL Select into Statement

This statement is used to copy data from an existing table into a new table.
for example, the following statement will create a new table (`newtable`) and fill it with data from an existing table (`oldtable`).
```sql
SELECT *
INTO newtable
FROM oldtable
```

You can copy only certain rows by adding a `WHERE` clause:
```sql
SELECT * 
INTO Managers
FROM Employees
WHERE Role = 'Manager'
```

Also, you can copy only certain columns by selecting them in the `SELECT` clause (instead of using `*`):
```sql
SELECT ProductName, ProductPrice
INTO Prices
FROM Catalog
```
