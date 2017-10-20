---
title: SQL Select into Statement
---
## SQL Select into Statement

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/sql/sql-select-into-statement/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The SELECT INTO statement copies a data into a new table.  It's different from the INSERT statement in that you are not constrained by an existing table's columns and defined datatypes.  The SELECT INTO statement uses the source column's datatype to define the new column's datatype in the destination table.

Example:
'''SQL
SELECT INTO Column1, Column2, Column3 [IN externaldb]
INTO NewTable
FROM OldTable
WHERE condition;

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


