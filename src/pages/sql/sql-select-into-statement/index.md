---
title: SQL Select into Statement
---
## SQL Select into Statement

A Select Into statement combines a Select statement and an Insert statement. It is an efficient way to create many records in one table based on the contents of another table.

For example, let's say you have this `user` table.

```text
+-----------+------------------------+---------+--------+
| userID    | FullName               | balance | level  |
+-----------+------------------------+---------+--------+
|         1 | Monique Davis          |       1 | junior |
|         2 | Teri Gutierrez         |       4 | senior |
|         3 | Spencer Pautier        |       2 | senior |
|         4 | Louis Ramsey           |       8 | senior |
|         5 | Alvin Greene           |       7 | junior |
|         6 | Sophie Freeman         |       3 | junior |
|         7 | Edgar Frank "Ted" Codd |       3 | junior |
+-----------+------------------------+-------+----------+
```

To insert a record into the `players` table for each of these users, you could run a Select Into statement like so:

`insert into players (userId, Name, level, active) select userID, FullName, level, 1 from users`

The result would be 7 new records in your `players` table, like so...

```text
+-----------+------------------------+--------+--------+
| userID    | FullName               |  level | active |
+-----------+------------------------+--------+--------+
|         1 | Monique Davis          | junior |      1 |
|         2 | Teri Gutierrez         | senior |      1 |
|         3 | Spencer Pautier        | senior |      1 |
|         4 | Louis Ramsey           | senior |      1 |
|         5 | Alvin Greene           | junior |      1 |
|         6 | Sophie Freeman         | junior |      1 |
|         7 | Edgar Frank "Ted" Codd | junior |      1 |
+-----------+------------------------+-------+----------+
```

The syntax may vary between SQL implementation, so check the appropriate documentation. This example uses MySQL syntax.

#### More Information:
* [MySQL Select Into](https://dev.mysql.com/doc/refman/5.7/en/ansi-diff-select-into-table.html)
* [T-SQL Select Into](https://docs.microsoft.com/en-us/sql/t-sql/queries/select-into-clause-transact-sql)


