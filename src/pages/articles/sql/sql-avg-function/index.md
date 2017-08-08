---
title: SQL Average (AVG) Function
---
## SQL Average (AVG) Function

"Average" is an Aggreaget (Group By) Function.  It's used to calculate the average of a numeric column from the set of rows returned by the SQL statement.

*Here is the syntax for using the function*
```sql
seleted groupingField, avg(num_field)
from table1
group by groupingField
```

*An example using the student table*
 
```sql
select studentID, FullName, avg(sat_score) 
from student 
group by studentID, FullName;
```
![image-1](https://github.com/SteveChevalier/guide-images/blob/master/avg_function01.JPG?raw=true)

