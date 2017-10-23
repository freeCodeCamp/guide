---
title: SQL Select into Statement
---
## SQL Select into Statement
You can create a new table using data that are already stored in the database.


The `SELECT INTO` statement is like a `SELECT` statement, but with the output redirected to a table named after `INTO`. The syntax is:


```sql
SELECT column1, column2, column3, ...
INTO table2 (column1, column2, column3, ...)
FROM table1
WHERE condition;
```


Here is an example that creates the table Students01 with all the students born in 2001

```sql
SELECT Id, Name, DateOfBirth, Gender
INTO Students01(Id, Name, DateOfBirth, Gender)
FROM Students
WHERE YEAR(DateOfBirth) = 2001
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://docs.microsoft.com/en-us/sql/t-sql/queries/select-into-clause-transact-sql

