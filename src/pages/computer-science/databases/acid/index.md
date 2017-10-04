---
title: ACID
---
## ACID

In computer science, ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties of a database intended to guarantee transaction validity.

* __Atomicity__
This means that a complex transaction will either be processed completely, or not at all. The database is left unchanged in the event of an error, power failure etc.

* __Consistency__
Any data entered into the database must be valid and permitted according to any combination of constraints that have been specified. It ensures that any transaction will bring the database from one valid state to another.

* __Isolation__
If two transactions are executed concurrently, the resulting database is in a state which would be obtained if the transactions had been run serially, i.e one after the other. The effects of an incomplete transaction will not affect another transaction.

* __Durability__
This ensures that once a transaction has been committed, it will remain so, even in the event of power loss or errors. It guarantees that all of the changes have been made to a non-volatile storage medium (such as a hard disk), and a record of the transaction completed is made.
