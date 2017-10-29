---
title: SQL General Data Types
---

## SQL General Data Types

Data Type define the type of data being used, i.e. integer (numbers), stings (characters), Boolean (true or false), etc.
In SQL, each column can have a unique data type. Different SQL Database Management Systems (like mySQL, OracleDB, maria, Postgres, etc) have slightly different implementations. Refer documentations for your DBMS for more information.

### Basic datatypes

#### Numeric Types

##### Integer
Integer or int values are used to store whole numeric values (eg. 1, -5, 17, 42, 0, etc.) in database. They dont allow fractional or floating point numbers.

##### Bit
  This allows values sizes to be defined in bit format.

##### Decimal
  Decimal allows defining a fixed point number, i.e. the place of decimal is predetermined and fixed.

  SYNTAX:
  ```SQL
  Decimal(m,d)
  ```
  m is the total number of digits (the precision) and d is the number of digits after the decimal point (the scale).
  According to mmySQL documentation:
  The decimal point and (for negative numbers) the - sign are not counted in M.
  > If D is 0, values have no decimal point or fractional part. The maximum number of digits for DECIMAL is 65.
  The maximum number of supported decimals (D) is 30. If D is omitted, the default is 0. If M is omitted, the default is 10.

##### Float or Floating point numbers
  These values allow fractions or decimal values. According to mySQL documentation:
  >  permissible values are -3.402823466E+38 to -1.175494351E-38, 0, and 1.175494351E-38 to 3.402823466E+38.

  These values depend on your OS installation, configuration and hardware. That means it could be slightly smaller than theoritical values.
##### Double
  It is a type of floating point value that can handle large values.
  According to mySQL documentation:
  > Permissible values are -1.7976931348623157E+308 to -2.2250738585072014E-308, 0, and 2.2250738585072014E-308 to 1.7976931348623157E+308.

  These values depend on your OS installation, configuration and hardware. That means it could be slightly smaller than theoritical values.

##### Boolean
Boolean type has only two values: either 0 or 1. It can also be represented as false for 0 and true for 1. It is a synonym for TINYINT(1).

#### String Types

##### CHAR
Character type defines fixed size for a character array. I.e. everytime a new entry is added, all space required for the maximum possible value is allocated.
  SYNTAX:
  ```SQL
    CHAR(size)
  ```

##### VARCHAR
Charater array / string where only size required for stored value is reserved.
  SYNTAX:
  ```SQL
  VARCHAR(size)
  ```

##### TEXT
Long text strings can be handled in a database with text datatype. It allows you to use different character sets

  SYNTAX:
  ```SQL
  TEXT CHARACTER SET <characterset>
  ```

### Other or Custom Types
There are types based on basic datatypes (see above) that can be used instead. They are usually the most commonly used configurations used. Defining them as custom times saves time and prevents trivial errors.

#### BINARY
  Binary data can directly be stored in most databases using binary datatype. This can be done by specifying "binary" character set in any string type. mySQL has shorthand datatypes that can be used too:

  * CHAR -> BINARY
  * VARCHAR -> VARBINARY
  * TEXT -> BLOB

#### PREDEFINED SIZES
SQL has predefined sizes for many datatypes.
By default, if no size is defined manually, medium variant is used. To use predefined size, prefix the size to the type eg. INT becomes TINYINT.

##### TINY
  In mySQL, tiny is defined as size 255 (28 − 1) (or -128 to 127 for signed int type) and 64 for bit.
  Tiny predefined sizes exist for integer, char, text, bit(M) and blob in mySQL.

##### SMALL
In mySQL, small is defined as -32768 to 32767 for signed range or 0 to 65535 for unsigned range.
Small predefined sizes exist for integer in mySQL.

##### MEDIUM
  In mySQL, tiny is defined as size 16,777,215 (224 − 1) for string and unsigned integer. The signed range is -8388608 to 8388607.
  Medium predefined sizes exist for integer, char, text and blob in mySQL.

##### LONG
  In mySQL, long or BIG is defined as size 4,294,967,295 or 4GB (232 − 1).For integers, the unsigned range is 0 to 16777215.
  LONG predefined sizes exist for integer (BIGINT), char, text and blob in mySQL.
  NOTE: It is the default integer size.

##### BIG
  For integers, the signed range is -9223372036854775808 to 9223372036854775807 and the unsigned range is 0 to 18446744073709551615. No equivalant exist for string type in mySQL.

#### Other Alias
  * SERIAL : BIGINT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE.

#### Sources
  1. https://dev.mysql.com/doc/refman/5.7/en/data-types.html
