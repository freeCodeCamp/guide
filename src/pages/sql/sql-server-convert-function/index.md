---
title: SQL Server Convert Function
---
## SQL Server Convert Function

The CONVERT() function converts an expression from one data type to another data type.

**Note:** Using the CONVERT() function to convert a float or numeric data type to an integer will truncate the result. Other conversions will be rounded.

### Syntax:
```sql
  CONVERT(data_type(length), expression, style)
```

### Parameter Values

#### data_type

*Required*. The datatype to convert expression to. Can be one of the following: *bigint, int, smallint, tinyint, bit, decimal, numeric, money, smallmoney, float, real, datetime, smalldatetime, char, varchar, text, nchar, nvarchar, ntext, binary, varbinary, or image*.

#### length
*Optional*. The length of the resulting data type (for *char, varchar, nchar, nvarchar, binary and varbinary*)

#### expression
*Required*. The value to convert to another data type.

#### style 
*Optional*. The format used to convert between data types, such as a date or string format. Can be one of the following values: 

Converting datetime to character:

Value(without century) | Value(with century) | Input/Output | Standard
:----------------:|:--------------:|:--------------:|:---------:
0 | 100 | mon dd yyyy hh:miAM/PM | Default
1 | 101 | mm/dd/yyyy | US
2 |	102	| yyyy.mm.dd | ANSI
3 |	103	| dd/mm/yyyy | British/French
4 |	104 | dd.mm.yyyy | German
5 |	105 | dd-mm-yy | Italian 
6 |	106 | dd mon yy | ---
7 |	107	| Mon dd, yy | ---
8 |	108	| hh:mi:ss | ---
9 |	109	| mon dd yyyy hh:mi:ss:mmmAM/PM | Default + millisec
10 | 110 | mm-dd-yy | US 
11 | 111 | yy/mm/dd | Japan
12 | 112 | yymmdd | ISO 
13 | 113 | dd mon yyyy hh:mi:ss:mmm | Europe (24 hour clock)
14 | 114 | hh:mi:ss:mmm | 24 hour clock
20 | 120 | yyyy-mm-dd hh:mi:ss | ODBC canonical (24 hour clock)
21 | 121 | yyyy-mm-dd hh:mi:ss:mmm | ODBC canonical (24 hour clock)
---  | 126 | yyyy-mm-ddThh:mi:ss:mmm | ISO8601
---  |	127	| yyyy-mm-ddThh:mi:ss:mmmZ | ISO8601
---  |	130	| dd mon yyyy hh:mi:ss:mmmAM/PM | Hijri
---  | 131	| dd/mm/yy hh:mi:ss:mmmAM/PM | Hijri 

Converting float to real:

Value | Explanation
:----:|:----------:
0 | Max. 6 digits (default)
1 | 8 digits
2 |	16 digits

Converting money to character:

Value | Explanation
:----:|:----------:
0 | No comma delimiters, 2 digits to the right of decimal
1 | Comma delimiters, 2 digits to the right of decimal
2 | No comma delimiters, 4 digits to the right of decimal
