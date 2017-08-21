---
title: SQL Joins
---

## SQL Joins

## Example of use
For this guide we'll discuss the Join section of the SQL statement

## SQL syntax with focus on Join

```sql
Select col1, col2, col3, etc....
FROM  tableNameOne as a
Join tableNameTwo as b on a.primeKey = b.primeKey 
etc...
```
The Join statement could be just Join or Inner Join which are the same or Left Join (described below). 
Here are a description and examples of each.  Compare to the complete tables below.

## Join
The student table will be in the FROM clause so it will be a starting or LEFT table.

We'll JOIN this to the student contact table or RIGHT table.

You'll see that all of the students appear that ALSO are in the contact table.  

As shown in the tables below, studentID 9 is in the student table but NOT in the contact table so won't appear in a join.

SQL Statement
```sql
select a.studentID, a.FullName, a.programOfStudy,
b.`student-phone-cell`, b.`student-US-zipcode`
from student as a
join `student-contact-info` as b on a.studentID = b.studentID;
```

"Joined" data
``` text
+-----------+------------------------+------------------+--------------------+--------------------+
| studentID | FullName               | programOfStudy   | student-phone-cell | student-US-zipcode |
+-----------+------------------------+------------------+--------------------+--------------------+
|         1 | Monique Davis          | Literature       | 555-555-5551       |              97111 |
|         2 | Teri Gutierrez         | Programming      | 555-555-5552       |              97112 |
|         3 | Spencer Pautier        | Programming      | 555-555-5553       |              97113 |
|         4 | Louis Ramsey           | Programming      | 555-555-5554       |              97114 |
|         5 | Alvin Greene           | Programming      | 555-555-5555       |              97115 |
|         6 | Sophie Freeman         | Programming      | 555-555-5556       |              97116 |
|         7 | Edgar Frank "Ted" Codd | Computer Science | 555-555-5557       |              97117 |
|         8 | Donald D. Chamberlin   | Computer Science | 555-555-5558       |              97118 |
+-----------+------------------------+------------------+--------------------+--------------------+
```

## Left Join
Using the keyword LEFT before join causes the system to start with the student (LEFT) table but will return NULL from the RIGHT table if there are no rows for the LEFT table student. 

Note that studentID 9 appears here but the data from the contact table is just shown as NULL.

```sql
select a.studentID, a.FullName, a.programOfStudy,
b.`student-phone-cell`, b.`student-US-zipcode`
from student as a
left join `student-contact-info` as b on a.studentID = b.studentID;
```
``` text
+-----------+------------------------+------------------+--------------------+--------------------+
| studentID | FullName               | programOfStudy   | student-phone-cell | student-US-zipcode |
+-----------+------------------------+------------------+--------------------+--------------------+
|         1 | Monique Davis          | Literature       | 555-555-5551       |              97111 |
|         2 | Teri Gutierrez         | Programming      | 555-555-5552       |              97112 |
|         3 | Spencer Pautier        | Programming      | 555-555-5553       |              97113 |
|         4 | Louis Ramsey           | Programming      | 555-555-5554       |              97114 |
|         5 | Alvin Greene           | Programming      | 555-555-5555       |              97115 |
|         6 | Sophie Freeman         | Programming      | 555-555-5556       |              97116 |
|         7 | Edgar Frank "Ted" Codd | Computer Science | 555-555-5557       |              97117 |
|         8 | Donald D. Chamberlin   | Computer Science | 555-555-5558       |              97118 |
|         9 | Raymond F. Boyce       | Computer Science | NULL               |               NULL |
+-----------+------------------------+------------------+--------------------+--------------------+
9 rows in set (0.00 sec)
```

## Complete table listings for reference
Student table listings

```sql
select a.studentID, a.FullName, sat_score, a.programOfStudy, schoolEmailAdr 
from student as a;
```

student or LEFT table
```text
+-----------+------------------------+-----------+------------------+------------------------+
| studentID | FullName               | sat_score | programOfStudy   | schoolEmailAdr         |
+-----------+------------------------+-----------+------------------+------------------------+
|         1 | Monique Davis          |       400 | Literature       | Monique@someSchool.edu |
|         2 | Teri Gutierrez         |       800 | Programming      | Teri@someSchool.edu    |
|         3 | Spencer Pautier        |      1000 | Programming      | Spencer@someSchool.edu |
|         4 | Louis Ramsey           |      1200 | Programming      | Louis@someSchool.edu   |
|         5 | Alvin Greene           |      1200 | Programming      | Alvin@someSchool.edu   |
|         6 | Sophie Freeman         |      1200 | Programming      | Sophie@someSchool.edu  |
|         7 | Edgar Frank "Ted" Codd |      2400 | Computer Science | Edgar@someSchool.edu   |
|         8 | Donald D. Chamberlin   |      2400 | Computer Science | Donald@someSchool.edu  |
|         9 | Raymond F. Boyce       |      2400 | Computer Science | Raymond@someSchool.edu |
+-----------+------------------------+-----------+------------------+------------------------+
9 rows in set (0.00 sec)
```sql
select * from `student-contact-info` as b;
```

student contact or RIGHT table
``` text
+-----------+----------------------------------+--------------------+--------------------+
| studentID | studentEmailAddr                 | student-phone-cell | student-US-zipcode |
+-----------+----------------------------------+--------------------+--------------------+
|         1 | Monique.Davis@freeCodeCamp.org   | 555-555-5551       |              97111 |
|         2 | Teri.Gutierrez@freeCodeCamp.org  | 555-555-5552       |              97112 |
|         3 | Spencer.Pautier@freeCodeCamp.org | 555-555-5553       |              97113 |
|         4 | Louis.Ramsey@freeCodeCamp.org    | 555-555-5554       |              97114 |
|         5 | Alvin.Green@freeCodeCamp.org     | 555-555-5555       |              97115 |
|         6 | Sophie.Freeman@freeCodeCamp.org  | 555-555-5556       |              97116 |
|         7 | Maximo.Smith@freeCodeCamp.org    | 555-555-5557       |              97117 |
|         8 | Michael.Roach@freeCodeCamp.ort   | 555-555-5558       |              97118 |
+-----------+----------------------------------+--------------------+--------------------+
8 rows in set (0.00 sec)
```



## Conclusion


*As with all of these SQL things there is MUCH MORE to them than what's in this introductory guide.  

I hope this at least gives you enough to get started.  

Please see the manual for your database manager and have fun trying different options yourself.

