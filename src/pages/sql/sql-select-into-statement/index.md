---
title: SQL Select into Statement
---
## SQL Select into Statement

To copy one table's records into a new table, use the `SELECT INTO` statement.

Caution is needed as this statement creates a new table. If the destination table already exists, use the `INSERT INTO SELECT` statement instead.

The basic syntax is the following.

```sql
SELECT *
INTO newtable
FROM oldtable;
```

You can also specify specific columns, or also use a `WHERE` condition.

```sql
SELECT column1, column2, column3
INTO newtable
FROM oldtable
WHERE condition;
```
