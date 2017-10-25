---
title: SQL Select Into Statement
---
## SQL Select Into Statement

The Select Into statement will insert data from one or more Tables and/or Views into a new Table. You can use a Where clause or Join to specifiy conditions.

This example would insert all columns from the Orders table into a new table named Archive that had been created 3 months prior to the query being run.

```sql
SELECT *
INTO Archive
FROM Orders
WHERE Created < DATEADD(MONTH,-3,GETDATE())
