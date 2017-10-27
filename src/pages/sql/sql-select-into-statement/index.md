---
title: SQL Select Into Statement
---
## SQL Select Into Statement

### Introduction
You use the `SELECT INTO` statement when you want to copy data from one table into another.

### Syntax
The `SELECT INTO` statement has the following syntax:
```sql
SELECT col1, col2, ...
INTO table_2
FROM table_1
WHERE condition
```
You can also use the `*` shorthand to select all the columns from the source table.
```sql
SELECT *
INTO table_2
FROM table_1
WHERE condition
```
The `SELECT INTO` statement is made up of the following clauses:
* `SELECT`: You use this to specify the columns that you want from the source table
* `INTO`: You specify the destination table here
* `FROM`: You specify the source table here
* `WHERE`: You specify any conditions here to exclude certain results from being copied into the destination table. You can read more about this clause in the [SQL Where Clause article](../sql-where-clause/index.md).

## Example
Imagine you have a database with a `Movies` table. Let's say that you want to make a copy of the movies that have a rating above 4.5 into a new table called `GoodMovies`. 

You can make use of a `SELECT INTO` statement:
```sql
SELECT *
INTO GoodMovies
FROM Movies
WHERE rating > 4.5
```

### Other Resources
- [SQL Select Statement](../sql-select-statement/index.md)
- [SQL Insert Query](../sql-insert-query/index.md)
- [SQL Where Clause](../sql-where-clause/index.md)
