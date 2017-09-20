---
title: SQL Union Operator
---

## SQL Union Operator

### Description
For this guide we'll discuss the UNION Operator section of the SQL statement.

The UNION Operator is used to combine the results of multiple select statements into one result set.

The SQL statements must have the same number of columns in their Select Statement.

### Basic Example

SQL Statement
```sql
SELECT 'aaaaa'
UNION
SELECT 'bbbbbbbbb';
```

Output
```text
+-----------+
| aaaaa     |
+-----------+
| aaaaa     |
| bbbbbbbbb |
+-----------+
2 rows in set (0.00 sec)
```

### Example using the student tables

SQL Statement
```sql
SELECT StudentID, FullName FROM student WHERE studentID BETWEEN 1 AND 5
UNION
SELECT studentID, studentEmailAddr FROM `student-contact-info` WHERE studentID BETWEEN 7 AND 8;
```

Output
``` text
+-----------+--------------------------------+
| StudentID | FullName                       |
+-----------+--------------------------------+
|         1 | Monique Davis                  |
|         2 | Teri Gutierrez                 |
|         3 | Spencer Pautier                |
|         4 | Louis Ramsey                   |
|         5 | Alvin Greene                   |
|         7 | Maximo.Smith@freeCodeCamp.org  |
|         8 | Michael.Roach@freeCodeCamp.ort |
+-----------+--------------------------------+
7 rows in set (0.00 sec)
```

As with all of these SQL things there is MUCH MORE to them than what's in this introductory guide.  

I hope this at least gives you enough to get started.  

Please see the manual for your database manager and have fun trying different options yourself.



