---
title: SQL
---
## SQL

SQL stands for Structured Query Language. It is the most common tool used to manipulate data in a relational database (often referred to as a "SQL database"). It is a querying language, not a programming language. The main function of SQL is to insert, update, delete and query data. 

SQL is commonly pronounced as "sequel." Its most popular variants are Oracle, Sybase, Microsoft Access, MySQL, PostgreSQL, and SQLite - a version of SQL which is commonly used for prototyping.

## SQL Query Table


Operator	Meaning
Select 	Selects columns from a relation or set of relations.Note: As opposed to Relational Algebra, it may give duplicate tuples for repeated value of an attribute.
From	From is used to give input as relation or set of relations from which data needs to be selected.
where	Where is used to give condition to be used to filter tuples
Group By	Group By is used to group the tuples based on some attribute or set of attributes like counting the no. of students group by department.
Aggregate functions	Find the aggregated value of an attribute. Used mostly with group by. e.g.; count, sum, min max. select count(*) from student group by dept_idNote: we can select only those columns which are part of group by.
Nested Queried	When one query is a part of other query. Solving nested queries questions can be learnt in http://quiz.geeksforgeeks.org/nested-queries-sql/
