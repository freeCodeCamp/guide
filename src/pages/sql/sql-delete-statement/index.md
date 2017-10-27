---
title: SQL Delete Statement
---
## SQL Delete Statement
### Introduction

You use the `DELETE` statement to delete records from the table. 

### Basic Syntax
```sql
DELETE FROM table_name
WHERE condition;
```
All rows that match the `WHERE` condition will be deleted.

Here is an example query that deletes from the table Person the record with Id 3:
```sql
DELETE FROM Person
WHERE Id = 3;
```

Be careful! You must use the `WHERE` condition to specify the records you want to delete.
Otherwise, all records in the table will be deleted.
The following 2 equivalent queries will delete all records from the Person table.
```sql
DELETE FROM Person;
```
```sql
DELETE * FROM Person;
```
The `DELETE` statement does not delete the table itself. The structure of the table, attributes, and indexes remain.
