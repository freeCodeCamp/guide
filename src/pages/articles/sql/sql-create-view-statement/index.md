---
title: SQL Create View Statement
---
## SQL Create View Statement

## What is a View?
A View is a database object that presents data existing in one or more tables. Views are used in a similar way as tables but the don't contain any data, they just "point" to the data that exists elsewhere (tables or views, for example).

## Why do we like them?
* Views are a way to limit the data presented. For example, Human Resource filtered to only only present non-sensitve information. Sensitive information would be social security numbers, sex of employee, payrate, physical (home) address etc...)
* Complex data across more than one table can be combined into a single "view" and make life easier on your business analysists, programmers etc...

## Important Safety Tips
* Views are managed by the system. When data in the related tables are changed, added, or updated the View is updated by the system.  We want to use these only when needed to manage use of system resources.
* In MySQL, changes to the table design (i,e. new or dropped columns) made AFTER the view is created are not updated in the view itself.  The view would have to be updated or recreated. 
* Views are one of the four standard database object types; Tables; Views; Stored Procedures and Functions.  
* Views can usually be treated as you would a table but updates are limited or not available when the view contains more than one table.
* There are many other details about views that are beyond the scope of this introductory guide. Spend time with your database managers manual and have fun with this powerful SQL object.

## Syntax of the Create View Statement (MySQL)
```sql
CREATE
    [OR REPLACE]
    [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}]
    [DEFINER = { user | CURRENT_USER }]
    [SQL SECURITY { DEFINER | INVOKER }]
    VIEW view_name [(column_list)]
    AS select_statement
	[WITH [CASCADED | LOCAL] CHECK OPTION]
```
*This guide will cover this part of of the statement....*
```sql
CREATE
    VIEW view_name [(column_list)]
    AS select_statement
```

## Sample View creation from the student tables
Note; The name of the view has a "v" at the end.  It's recommend that the View name indicate that it's a view in some way to make life more simple on the DBAs and programmers (your IT shop should have it's own rules on naming objects). 
Note; 
* The columns in the view are limited by the SELECT and the rows of data by the WHERE clause.
* the "`" character around the view names is required because of the "-" in the names. MySQL reports an error without them.

```sql
create view `programming-students-v` as
select FullName, programOfStudy 
from student 
where programOfStudy = 'Programming';

select * from `programming-students-v`;
```
![image-1](https://github.com/SteveChevalier/guide-images/blob/master/create-view-statement01.JPG?raw=true)

## Sample of using a View to combine data from more than one table
A Student Demographics Table was added to the database to demonstrate this usage. This view will combine these tables.
Notes;
* To "join" tables, the tables must have fields in common (usually primary keys) that uniquely identity each rows. In this case it's the student ID. (more on this in the Join guide)
* Notice the "alias" given to each table (s for student and sc for student contact).  This is a tool to shortent the table names and make it easier to identify what table is being used. It's easier than table long table names repeatedly.  In this example it was required because studentID is the same column name in both tables and the system would present an "ambiguos column name error" without spedificing the table to use.

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/create-view-statement02.JPG?raw=true)

*As with all of these things there is MUCH MORE to Views.  Please see the manual for your database manager and have fun trying different options yourself.*


