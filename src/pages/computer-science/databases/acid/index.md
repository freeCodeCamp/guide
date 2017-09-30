---
title: ACID
---
## ACID
ACID are a set of properties that can be applied to database modifications to ensure their validity even with errors, failures...
ACID is a shorthand for : Atomicity, Consistency, Isolation, Durability. 

A sequence of database operations that satisfies the ACID properties can be perceived as single logical operation on the data, is called a **transaction**. For example, a transfer of funds from one bank account to another, involves multiple changes such as debiting one account and crediting another, is considered to be a single transaction

### Atomicity
Guarantees that if one part of the transaction fails, then the whole transaction does not complete and the database is unchanged. This way, a crash, power failure or error won't allow a state in which only parts of a transaction are done.

### Consistency
Guarantees that  data will be consistent, that is, every transaction brings the database from one valid state to another valid state. None of the constraints on related data will ever be violated.

### Isolation
Ensures that one transaction cannot read data from another transaction that is not yet completed. If two transactions are executing concurrently, each one will see the database as if they were executing sequentially, and if one needs to read data that is written by another, it will have to wait until the other is finished.

### Durability 
Means that once a transaction is complete, it is guaranteed that all of the changes have been recorded to a durable medium (such as a hard disk), and the fact that the transaction has been completed is also recorded.

#### More Information:
More information can be found here:
* The [wikipedia article](https://en.wikipedia.org/wiki/ACID)
* This [12min youtube video](https://www.youtube.com/watch?v=LSB4eceRsw8)


