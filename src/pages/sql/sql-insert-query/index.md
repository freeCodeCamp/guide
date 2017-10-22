---
title: SQL Insert Query
---
## SQL Insert Query


Insert queries are a way to insert data into a table. Lets say we have created a table using
`CREATE TABLE table_name( col1_name datatype, col2_name datatype)`

Now to add some data to this table , we'll use **INSERT** in following way:
`INSERT INTO table_name(col2,col4) VALUES (1,2)`

Even follwoing will work but it's always a good practice to specify which data is going into which column.
`INSERT INTO table_name VALUES (1,2)`

*Please note the queries provided above are for MSSQL.*
