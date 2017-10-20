---
title: SQL Intersect Operator
---

## SQL Intersect Operator

### Description
For this guide we'll discuss the Intersect Operator section of the SQL statement.

The Intersect Operator is used to return the results of multiple Select statements. However, it only returns the rows selected by all queries. If a record is returned by one query and not by the other, it will not included in the final result.


### Basic Example

SQL Statement
```sql
SELECT 'aaaaa'
INTERSECT
SELECT 'bbbbbbbbb';
```

Output
```text
+-----------+
| aaaaa     |
+-----------+|
+-----------+
0 rows in set (0.00 sec)
```


As with all of these SQL things there is MUCH MORE to them than what's in this introductory guide.  

I hope this at least gives you enough to get started.  

Please see the manual for your database manager and have fun trying different options yourself.



