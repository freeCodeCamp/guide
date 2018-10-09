---
title: MongoDB
---
## MongoDB

MongoDB is an open-source non-relational Database that uses a JSON like structure to store data. 
It uses a document model to store and retrieve the data instead of the table model used by sequential databases such as SQL or Oracle.

### NOSQL Vs RDBMS

| MongoDB Terms And Concepts | SQL Terms and Concepts |
| --- | --- |
| Database | Database |
| Collection | Table |
| document | Row |
| Field | Column |
| Index | Index |
| Embedded Documents | Table Joins |


### MongoDB Characteristics
1. Next Generation Database
2. No Joins
3. Clustering
4. Opensource
5. Schema less
6. No Relationships

### Features of MongoDB
1. Document Database
2. High Performance
3. Rich Query Language
4. High Availability
5. Horizontal Scalability

##Things to understand for MongodB
1. MongoDB has the same concept of a database with which you are likely already familiar (or a schema for you
Oracle folks). Within a MongoDB instance you can have zero or more databases, each acting as high-level
containers for everything else.
2. A database can have zero or more collections. A collection shares enough in common with a traditional table
that you can safely think of the two as the same thing.
3. Collections are made up of zero or more documents. Again, a document can safely be thought of as a row.
4. A document is made up of one or more fields, which you can probably guess are a lot like columns.
5. Indexes in MongoDB function mostly like their RDBMS counterparts.
6. Cursors are different than the other five concepts but they are important enough, and often overlooked, that
I think they are worthy of their own discussion. The important thing to understand about cursors is that when
you ask MongoDB for data, it returns a pointer to the result set called a cursor, which we can do things to, such
as counting or skipping ahead, before actually pulling down data
### More Information
[What is Mongo DB?](https://www.mongodb.com/what-is-mongodb)

[Wikipedia article on Document-oriented Databases](https://en.wikipedia.org/wiki/Document-oriented_database)

[SQL vs NoSQL](https://insights.dice.com/2012/07/16/sql-vs-nosql-which-is-better/)

[Learn MongoDB from MongoDB](https://university.mongodb.com/)
