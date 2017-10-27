---
title: SQL Select into Statement
---
## SQL Select into Statement

The SELECT INTO statement copies data from one table into a new table.
The new table will be created with the column-names and types as defined in the old table.

### Syntax:

```SELECT *
INTO newtable [IN externaldb]
FROM oldtable
WHERE condition; ```

### Example:

```SELECT *
INTO PATIENTDETAILSBKP
FROM PATIENTDETAILS
WHERE RECORDINSERTDT BETWEEN #01/01/2017# AND #12/01/2017#; ```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[For more detailed information, please visit:] (https://www.w3schools.com/sql/sql_select_into.asp)
---
title: SQL Select into Statement
---
## SQL Select into Statement

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/sql/sql-select-into-statement/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


