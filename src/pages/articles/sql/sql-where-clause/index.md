---
title: SQL Where Clause
---

## SQL Where Clause

### Where Clause (and / or, IN, BETWEEN and LIKE)

The WHERE clause is used to limit the number of rows returned.  

In this case all five of these will be used is a some what ridiculous Where clause. 

Here is the current full student list to compare to the WHERE clause result set:

```sql
select studentID, FullName, sat_score, rcd_updated from student;
```

```text
+-----------+------------------------+-----------+---------------------+
| studentID | FullName               | sat_score | rcd_updated         |
+-----------+------------------------+-----------+---------------------+
|         1 | Monique Davis          |       400 | 2017-08-16 15:34:50 |
|         2 | Teri Gutierrez         |       800 | 2017-08-16 15:34:50 |
|         3 | Spencer Pautier        |      1000 | 2017-08-16 15:34:50 |
|         4 | Louis Ramsey           |      1200 | 2017-08-16 15:34:50 |
|         5 | Alvin Greene           |      1200 | 2017-08-16 15:34:50 |
|         6 | Sophie Freeman         |      1200 | 2017-08-16 15:34:50 |
|         7 | Edgar Frank "Ted" Codd |      2400 | 2017-08-16 15:35:33 |
|         8 | Donald D. Chamberlin   |      2400 | 2017-08-16 15:35:33 |
|         9 | Raymond F. Boyce       |      2400 | 2017-08-16 15:35:33 |
+-----------+------------------------+-----------+---------------------+
9 rows in set (0.00 sec)
```

Rows will be presented that....
* Have Student IDs between 1 and 5 (inclusive) 
* OR studentID = 8 
* or have "Maxmimo" in the name

Here's an updated query, where any record that has an SAT score that's in this list (1000, 1400) will not be presented:

```sql
select studentID, FullName, sat_score, recordUpdated
from student
where ( studentID between 1 and 5 or studentID = 8 or FullName like '%Maximo%'
) and 
sat_score NOT in (1000, 1400);
```

```text
+-----------+----------------------+-----------+---------------------+
| studentID | FullName             | sat_score | rcd_updated         |
+-----------+----------------------+-----------+---------------------+
|         1 | Monique Davis        |       400 | 2017-08-16 15:34:50 |
|         2 | Teri Gutierrez       |       800 | 2017-08-16 15:34:50 |
|         4 | Louis Ramsey         |      1200 | 2017-08-16 15:34:50 |
|         5 | Alvin Greene         |      1200 | 2017-08-16 15:34:50 |
|         8 | Donald D. Chamberlin |      2400 | 2017-08-16 15:35:33 |
+-----------+----------------------+-----------+---------------------+
5 rows in set (0.00 sec)
```

*As with all of these SQL things there is MUCH MORE to them than what's in this introductory guide.  

I hope this at least gives you enough to get started.  

Please see the manual for your database manager and have fun trying different options yourself.
