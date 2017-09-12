---
title: SQL Delete Statement
---
## SQL Delete Statement

To delete a record in a table you use the `DELETE` statement. 

Be careful. You can delete all records of the table or just a few. Use the `WHERE` condition to specify which records do you want to delete. The syntax is:

```sql
DELETE FROM table_name
WHERE condition;
```

Here is an example deleting from the table Person the record with Id 3:

```sql
DELETE FROM Person
WHERE Id = 3;
```



