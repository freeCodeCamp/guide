---
title: MySQLi
---
## MySQLi

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/php/working-with-databases/mysqli/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The MySQLi functions allows you to access MySQL database servers. There are many mysqli function the prominent among them are-
mysqli_connect-Connects to the database. Syntax-
<?php
$con=mysqli_connect("localhost","root","","innodev") or die("Invalid User or Password...cannot connect");
?>
mysqli_query-Performs a query against a database.Syntax-
$sql=mysqli_query($con,"query");
mysqli_fetch_array-	Fetches a result row as an associative, a numeric array, or both.Syntax-
<?php
 $rs=mysqli_fetch_array($sql)
  ?>
mysqli_error-Returns the last error description for the most recent function call.Syntax-
die('ERROR'.mysqli_error($con));
These are some of the prominnt ones which you require to create a web project initially.
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Note-The MySQLi extension is designed to work with MySQL version 4.1.13 or newer.
