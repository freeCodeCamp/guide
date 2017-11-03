---
title: SQL Minus Operator
---

## SQL Minus Operator

### Description
For this guide we'll discuss the MINUS Operator section of the SQL statement.

The MINUS Operator is used to return all rows in the first SELECT statement that are not returned by the second SELECT statement.

The MINUS Operator will fetch all records from the first query and then remove the records that are also returned by the second query.

It is not supported in all SQL databases. You can use EXCEPT Operator to perform such type of queries in that case.

### Basic Example

SQL Statement
```sql
SELECT 'exp1', 'exp2', 'exp3' 
from tables
[where conditions]
MINUS
SELECT 'exp1', 'exp2', 'exp3' 
from tables
[where conditions];
```


### Example using the student tables

SQL Statement
```sql
SELECT StudentID, FullName FROM `student` WHERE studentID BETWEEN 1 AND 5
MINUS
SELECT studentID, FullName FROM `student` WHERE studentID BETWEEN 3 AND 8;
```

Output
``` text
+-----------+--------------------------------+
| StudentID | FullName                       |
+-----------+--------------------------------+
|         1 | Monique Davis                  |
|         2 | Teri Gutierrez                 |
+-----------+--------------------------------+
2 rows in set (0.00 sec)
```

As with all of these SQL things there is MUCH MORE to them than what's in this introductory guide.  

I hope this at least gives you enough to get started.  

Please see the manual for your database manager and have fun trying different options yourself.



