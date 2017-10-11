---
title: SQL Interview Questions
---
## SQL Interview Questions

**Q1.** What is the full form of SQL?

**Ans.** Structured Query Language

**Q2.** What is the difference between SQL and MySQL?

**Ans.** SQL is a language whereas MySQL is a database.

**Q3.** What is the difference between CHAR and VARCHAR datatype in SQL?

**Ans.** CHAR is fixed length whereas VARCHAR is variable length.

**Q4.** What is the difference between DELETE and TRUNCATE?

**Ans.** In DELETE we can specify a WHERE clause whereas in TRUNCATE we cannot.Another difference is that Delete is a DML(Data Manipulation Language) command whereas TRUNCATE is a DDL(Data Definition Language) 

**Q5.** What is the default order in ORDER BY clause?

**Ans.** ASC(Ascending)

**Q6.** Where NULL is placed in ASC and DESC order by?

**Ans.** NULL is placed at bottom in ASC order and at top in DESC.

**Q7.** What is NULL?

**Ans.** NULL is unknown,unavailable,unassigned and inappropriate.

**Q8.** Write a SQL query to copy the structure of a table.

**Ans.** create table copy_departments
        as select * from departments;
        
**Q9.** Write a SQL query to copy the contents of a table.

**Ans.** insert into copy_departments
        select * from departments;
 
**Q10.** Can we use column alias in ORDER BY clause?

**Ans.** Yes

**Q11.** Can we use column number in ORDER BY clause?

**Ans.** Yes

**Q12.** Can we use column alias or column number in GROUP BY clause?

**Ans.** No

**Q13.** Top-N-Analysis(Ex.:top 3 earners)

**Ans.** select rownum,column_list
        from (select column_list
              from table order by top_n_column)
        where rownum<=n;

--For largest we place DESC in ORDER BY.

Ex:select rownum,emp_name,salary
   from (select emp_name,salary
         from employees order by salary desc)
   where rownum<=3;
         
**Q14.** What is rownum?

**Ans.** It is a pseudocolumn that assigns a sequential value starting with 1 to each of the rows returned by the subquery.

**Q15.** What is the difference between rownum and rowid?

**Ans.** Rownum is temporary whereas rowid is permanent.

**Q16.** What is an inline view?

**Ans.** When the subquery is used in the from clause then it is called an inline view.

**Q17.** Concatenation operator i.e.|| and the concat() function are same,then why we have these two different?

**Ans.** First thing is that operator executes faster than function.But we also need a function because operator cannot be nested whereas a function can be nested. 

**Q18.** What is the difference between count(*) and count(columnName)?

**Ans.** Only count(*) counts NULL, but count(columnName) does not counts NULL records.

**Q19.** Is the query given below correct?
        select department_id,avg(salary)
        from employees;

**Ans.** No
Explanation: Whenever we use aggragate(group) functions we must use the GROUP BY clause.Means all the columns that are listed in the                  select statement that are not in group function must be present in group by clause for example:
         Ex.-select department_id,avg(salary)
             from employees GROUP BY department_id;
             
**Q20.** Should characters be enclosed within single quotes('')?

**Ans.** Yes

**Q21.** Should dates be enclosed within single quotes('')?

**Ans.** Yes

**Q22.** Should numeric values be enclosed within single quotes('')?

**Ans.** It is optional, and generally we do not do so.

**Q23.** Is data case-sensitive?

**Ans.** Yes

**Q24.** Are dates case-sensitive?

**Ans.** No, they are format sensitive.

**Q25.** Is query given below correct?
        select emp_name,salary
        from employees
        where commission=null;

**Ans.** No
Explanation:Null cannot be assigned.We use IS to compare values with null
       Ex.-select emp_name,salary
           from employees
           where commission IS null;

**Q26.** What are wildcards in SQL?

**Ans.** Pattern matching characters % and (underscore) are called so.

**Q27.** What does '.....where name like %a%' returns?

**Ans.** Any value with 'a' at beginning,in middle or at end.

**Q28.** Name a column level constraint?

**Ans.** NOT NULL

**Q29.** What is the difference between curdate() and sysdate()?

**Ans.** curdate() returns current date whereas sysdate() returns current date with time.

**Q30.** What is the difference between sysdate() and now()?

**Ans.** Both returns date and time, but now() gives the at which function executes and does not changes its time whereas sysdate() changes its time continuously.Example is given below:
sysdate():
>select sysdate(),sleep(2),sysdate();
output:2017-10-04 01:32:48 | 0 | 2017-10-04 01:32:50

now():
>select now(),sleep(2),now();
output:2017-10-04 01:32:48 | 0 | 2017-10-04 01:32:48

**Q31.** Name some database objects?

**Ans.** There are 5 database objects in ORACLE:
1.Tables:Basic storage unit consists of rows and columns.
2.Views:It is a virtual table.It contains the data from one or more tables.
3.Synonyms:These are the alternate names given to database objects.
4.Sequences:It is used to generate primary key values.
5.Indexes:To improve the performance of a query.

**Q32.** What are views and it types?

**Ans.** View Is Virtual table. It has two types 1.simple view 2.complex view . In simple view we create view on single base table that's why we can perform all DML operations.it also called as Updatable view. But In case of Complex view we create view on multiple base tables that's why we cannot perform DML operations It is ReadOnly View (Only Select Operation).

**Q33.** What is the difference between a primary key and a unique key?

**Ans.** A unique key may have null but a primary key cannot have null values.
