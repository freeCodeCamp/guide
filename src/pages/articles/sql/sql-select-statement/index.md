---
title: SQL Select Statement
---

## SQL Select Statement

## Select and From clauses

The Select part of a query is normally to determine which columns of the data to show in the results. There are also options you can apply to show data that is not a table column.

This example shows two columns selected from the "student" table and two calculated columns. The first of the calculated columns is a meaningless number, and the other is the system date. 

```sql
select studentID, FullName, 3+2 as five, now() as currentDate
from student;
```

```text
+-----------+------------------------+------+---------------------+
| studentID | FullName               | five | currentDate         |
+-----------+------------------------+------+---------------------+
|         1 | Monique Davis          |    5 | 2017-08-18 13:42:38 |
|         2 | Teri Gutierrez         |    5 | 2017-08-18 13:42:38 |
|         3 | Spencer Pautier        |    5 | 2017-08-18 13:42:38 |
|         4 | Louis Ramsey           |    5 | 2017-08-18 13:42:38 |
|         5 | Alvin Greene           |    5 | 2017-08-18 13:42:38 |
|         6 | Sophie Freeman         |    5 | 2017-08-18 13:42:38 |
|         7 | Edgar Frank "Ted" Codd |    5 | 2017-08-18 13:42:38 |
|         8 | Donald D. Chamberlin   |    5 | 2017-08-18 13:42:38 |
|         9 | Raymond F. Boyce       |    5 | 2017-08-18 13:42:38 |
+-----------+------------------------+------+---------------------+
9 rows in set (0.00 sec)
```

*As with all of these SQL things there is MUCH MORE to them than what's in this introductory guide.  

I hope this at least gives you enough to get started.  

Please see the manual for your database manager and have fun trying different options yourself.
