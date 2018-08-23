---
Entity Framework Core : Introduction
---

---
![logo](https://www.ryadel.com/wp-content/uploads/2015/03/entity-framework-logo.jpg)

*** Will be focused on EF Core 2.X and later ***

Entity Framework or EF is an Object/Relational Mapping (O/RM) framework, 
based on the ADO.NET and simplify tasks like sooring and accessing data in the Database.

EF is a cross-platform and open source framework.

[EF Core On GitHub] (https://github.com/aspnet/EntityFrameworkCore/)

[EF Core Official Documentation] (https://docs.microsoft.com/ef/core/)

Support databases available :
SQL Server	
MySQL	
PostgreSQL	
SQLite	
SQL Compact	
In-memory

EF Core supports 2 approaches:
1. Code First
2. Database-First

Code First:
EF will create the database and views through the migrations options based on POCO/domain classes. 

Database-First:
EF will create the POCO/domain classes based on an existing database.
* please note this approache doesn't the designer.

