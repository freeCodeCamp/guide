---
title: SQL Injection
---
## SQL Injection

Injection attacks occur when data from users is used in commands or database queries without control. SQL Injection attacks also allow sql queries to be executed without authorization in the database used by the target website.

By leveraging an SQL Injection vulnerability, given the right circumstances, an attacker can use it to bypass a web application’s authentication and authorization mechanisms and retrieve the contents of an entire database. SQL Injection can also be used to add, modify and delete records in a database, affecting data integrity.

In order to run malicious SQL queries against a database server, an attacker must first find an input within the web application that is included inside of an SQL query.

```
# Define POST variables
uname = request.POST['username']
passwd = request.POST['password']

# SQL query vulnerable to SQLi
sql = “SELECT id FROM users WHERE username=’” + uname + “’ AND password=’” + passwd + “’”

# Execute the SQL statement
database.execute(sql)
```
The above script is an example of authenticaton mechanism for a database with a table named users, and a username and password column. The script is vulnerable to SQL Injection because an attacker could submit malicious input to alter the SQL statement which is going to be executed by the database server.

If attacker is able to send below command to database for execution, ze can easily exploit it. 
```
SELECT id FROM users WHERE username=’username’ AND password=’password’ OR 1=1’ #
```
After execution finished, the result is returned to the application to be processed, and it would return to attacker with authentication bypass.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
