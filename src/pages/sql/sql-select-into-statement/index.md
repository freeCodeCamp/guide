---
title: SQL Select into Statement
---
## SQL Select into Statement

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Selecting Into is a great way to quickly backup a table or insert some rows from another table. As a first example we can show how you can create a new table called `students_bkp` and insert in all rows from the `students` table.

```sql
SELECT * INTO students_bkp FROM students
```

After this you can somewhat safely make alterations to the students table knowing there is a backup. If any problem does come up though you can always restore a row from the backup table with `SELECT INTO`.

```sql
SELECT * INTO students FROM students_bkp WHERE student_id = 1
```

Also possible is to easily move rows from one or more tables to a new or existing table in the database. This is very useful when you're baking up data that was lost, or if you need to create a new specialized table.

```sql
SELECT student_name, date_of_graduation INTO graduated_students FROM students WHERE date_of_graduation < GETDATE()
```

#### Things to Note:
Using the wildcard `*` may not always work when a table has `SET IDENTITY_INSERT ON` which stops you from being able to manually insert when a new ID is required. This ID is usually the primary key on the table.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Microsoft Docs on SELECT INTO](https://docs.microsoft.com/en-us/sql/t-sql/queries/select-into-clause-transact-sql)

