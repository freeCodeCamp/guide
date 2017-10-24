---
title: SQL General Data Types
---
## SQL General Data Types

In SQL, each column must have both a name and a data type. Data types specify the format of the information being stored in the database. 

| Data Type        | Description
| ------------- |:-------------|
| CHARACTER(n) or CHAR(n)     | Character string. Fixed-length n |
| VARCHAR(n) or CHARACTER VARYING(n)	      | Character string. Variable length. Maximum length n |
|BINARY(n)	|Binary string. Fixed-length n
|BOOLEAN	|TRUE or FALSE values
|VARBINARY(n) or BINARY VARYING(n)	| Binary string of variable length, with maximum length n
|SMALLINT	|Integer (stored in 2 bytes)
|INTEGER or INT	|Integer (stored in 4 bytes)
|BIGINT	|Integer (stored in 8 bytes)
|DECIMAL(p,s)	|Exact numerical, precision p, scale s. A decimal with `p` digits before the decimal and `s` digits after.
|NUMERIC(p,s)|Exact numerical, precision p, scale s. A decimal with `p` digits before the decimal and `s` digits after.
|FLOAT(p)	|Approximate numerical, mantissa precision p. A floating number in base 10 exponential notation. `p` notates the minimum precision. 
|REAL	|Approximate numerical, mantissa precision 7
|FLOAT	|Approximate numerical, mantissa precision 16
|DOUBLE PRECISION	|Approximate numerical, mantissa precision 16
|DATE	|Includes year, month, and day
|TIME	|Includes hours, minutes, and seconds
|TIMESTAMP	|Includes year, month, day, hour, minutes, and seconds
|INTERVAL	|Integer fields that notate a period of time
|ARRAY	|An ordered collection of elements with a set length
|MULTISET	|An unordered collection of elements of varying length
|XML	|Stores XML data

