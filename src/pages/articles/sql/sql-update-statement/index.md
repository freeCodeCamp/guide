---
title: SQL Update Statement
---
## SQL Update Statement

To update a record in a table you use the `UPDATE` statement. 

Be careful. You can update all records of the table or just a few. Use the `WHERE` condition to specify which records do you want to update. It is possible to update one or more columns at a time. The syntax is:

```sql
UPDATE table_name
SET column1 = value1, 
    column2 = value2, ...
WHERE condition;
```

Here is an example updating the Name of the record with Id 4:

```sql
UPDATE Person
SET Name = “Elton John”
WHERE Id = 4;
```



