---
title: SQL Insert Query
---
## SQL Insert Query
**What does a SQL Insert Query do exactly?**

SQL  ***Insert Query*** allows us to insert records into our tables.


### Syntax of Insert Query
--------------------------------------------------------------------------------------------------------
***INSERT INTO*** table_name (column1,cloumn2,column2,...) ***VALUES*** (value1,value2,value3,....);

and

***INSERT INTO*** table_name  ***VALUES*** (value1,value2,value3,....);

--------------------------------------------------------------------------------------------------------
There are two ways to through which you can insert your record into your table.
If you want the insert  specific record into your table then the first syntax is used. 

For example

I have this table 

|Name  |Age|City|
|------|---|----|
|Oliver|15|Paris|

Lets add a record into this table

```
INSERT INTO ExampleTable (Name,Age,City) VALUES ('Steven',16,'Tokoyo');
```

Our table would look like this now.

|Name  |Age|City |
|------|---|-----|
|Oliver|15|Paris |
|Steven|16|Tokoyo|

As you can see all the records are inserted according to the mentioned table columns .

Lets look at another example
```
INSERT INTO ExampleTable(Name,Age) VALUES('Mike',13);
```
Result 


|Name  |Age|City |
|------|---|-----|
|Oliver|15|Paris |
|Steven|16|Tokoyo|
|Mike|13||

As you can see our values got inserted only into our mentioned table columns and hence that's the reason why City Column is empty in our last record.

If you want to Insert record in all of the Columns in your table,you can do this with the second syntax of insert query.
```
INSERT INTO exampleTable('Graham',16,'London');
```
Our table would look like this now.

|Name  |Age|City |
|------|---|-----|
|Oliver|15|Paris |
|Steven|16|Tokoyo|
|Mike|13||
|Graham|16|London|


### Things to watch out for 

If your inserting tables in all columns of your table then you must insert record according to the order of the column in the table .

```
INSERT INTO ExampleTable ('New York',13,'Fallon');

```

|Name  |Age|City |
|------|---|-----|
|Oliver|15|Paris |
|Steven|16|Tokoyo|
|Mike|13||
|Graham|16|London|
|New York|13|Fallon|

As you can see the the record is inserted according to the order of the columns .To avoid this I would recommend to use the first syntax of Insert query .

_CONGRATULATIONS . This is the end of the article :D_ 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Read this link ](https://www.w3schools.com/sql/sql_insert.asp)

 **Feel free to ask any queries on FreeCodeCamp's GitHub page or [FreeCodeCamp's Forum .](https://forum.freecodecamp.org/)**
 By : Muhammad Ali Khan 
