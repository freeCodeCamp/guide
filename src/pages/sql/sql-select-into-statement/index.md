---
title: SQL Select into Statement
---
## SQL Select Into Statement

A SQL SELECT INTO statement enables you to copy data from an existing table into a new table. 

### Basic Syntax
The mandatory statements for this action are SELECT, INTO (with an IN statement in brackets to specify where this new table is being created), and FROM. A basic example of this statement is as follows:

```
  SELECT
    *
   INTO
    newtable [IN example_db]
   FROM
    oldtable
   ;
```
### Additional Syntax
The two most common statments to add to this are WHERE and JOIN. WHERE limits what data is being copied from the existing table to the new table (only moving records that fit the criteria in your WHERE statement). JOIN expands what data is being copied into the new table, by bringing records from all tables referenced in the JOIN statement. Basic examples of both statements are as follows:

```
  SELECT
    *
   INTO
    GERMAN_CUSTOMERS_TABLE
   FROM
    WORLDWIDE_CUSTOMERS_TABLE
   WHERE
    Country = 'Germany'
   ;

  SELECT
    WORLDWIDE_CUSTOMERS_TABLE.Customer_Name,
    WORLDWIDE_ORDERS_TABLE.Order_ID
   INTO
    CUSTOMER_ORDER_BACKUP
   FROM
    WORLDWIDE_CUSTOMERS_TABLE
   LEFT JOIN
    WORLDWIDE ORDERS TABLE
    ON
      WORLDWIDE_CUSTOMERS_TABLE.Customer.ID = WORLDWIDE_ORDERS_TABLE.Customer_ID
    ;
  
```


