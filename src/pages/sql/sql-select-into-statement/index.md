---
title: SQL Select into Statement
---
## SQL Select into Statement

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/sql/sql-select-into-statement/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Select into is used to pipe the result of a select into one of three places:

- ```SELECT ... INTO **var_list** ``` Variables (example @myVar).
- ```SELECT ... INTO OUTFILE``` writes the selected rows into a file, much like a CSV.
- ```SELECT ... INTO DUMPFILE``` writes a single row to a file without formatting.

### Variable List

Two pre-requisites exist for selecting into variable lists:

- The number of variables given, must match the columns selected.
- The select must return exactly one row - no more.

```sql
SELECT id, name INTO @userID, @userFirstName FROM usertable LIMIT 1;
```

### OUTFILE

```SELECT ... INTO OUTFILE``` is intended primarily to let you very quickly dump a table to a text file on the server machine. An example would be:

```sql
SELECT id, name, surname, email INTO OUTFILE '/tmp/myfile.txt'
    FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
    LINES TERMINATED BY '\n'
    FROM usertable;
```

### DUMPFILE

```SELECT ... INTO DUMPFILE```: If you use ```INTO DUMPFILE``` instead of ```INTO OUTFILE```, MySQL writes only one row into the file, without any column or line termination and without performing any escape processing. This is useful if you want to store a BLOB value in a file.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
