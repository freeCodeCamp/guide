---
title: SQL UNION ALL Operator
---

## SQL UNION ALL Operator

### Description
For this guide we'll discuss the UNION ALL Operator section of the SQL statement.

The UNION ALL Operator is used to combine the results of multiple select statements into one result set just as the SQL UNION operator but the difference between the two is that UNION ALL permits duplicate rows in the result set whereas UNION gives only distinct rows in the output even if the rows are derived from two separate tables.

The SQL statements in the UNION ALL must have the same number of columns in their Select Statement.

### Basic Example

SQL Statement
```sql
SELECT 'aaaaa'
UNION ALL
SELECT 'aaaaa';
```

Output
```text
+-----------+
| aaaaa     |
+-----------+
| aaaaa     |
| aaaaa     |
+-----------+
2 rows in set (0.00 sec)
```

### Example 
```text
Customer Table
+-------------+---------------------------------+
| customer_id | customer_name    | State        |    
+-------------+---------------------------------+
|         C1  | Alex Equipments  |   NY         |
|         C2  | T Groceries      |   TX         |
|         C3  | PS Plastics      |   WA         |
|         C4  | PR Ceramics      |   MI         |
+-------------+---------------------------------+

Supplier Table
+-------------+---------------------------------+
| supplier_id | supplier_name    | State        |    
+-------------+---------------------------------+
|         S1  | Hammer Inc.      |   NY         |
|         S2  | SRP Metals       |   CA         |
|         S3  | PS Plastics      |   NY         |
|         S4  | LK MetalWorks    |   AR         |
+-------------+---------------------------------+
```

SQL Statement
```sql
SELECT customer_name FROM Customer WHERE state='WA'
UNION ALL
SELECT supplier_name FROM Supplier WHERE state='NY';
```

Output
``` text
+--------------------------------+
| customer_name                  |
+--------------------------------+
| PS Plastics                    |
| Hammer Inc.                    |
| PS Plastics                    |
+--------------------------------+

```
The use of UNION ALL or UNION depends upon your requirements. If you need duplicate or redundant rows from your query UNION ALL would be a better approach for writing your query.

As with all of these SQL things there is MUCH MORE to them than what's in this introductory guide.  

I hope this at least gives you enough to get started.  

Please see the manual for your database manager and have fun trying different options yourself.



