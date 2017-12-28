---
Title: Setting up your Connection String to SQL
---


### Connection String
Think of a connection string as the bridge between your program and your database. In this case, between Visual Studio and SQL.
It sites the needed parameters to set a connection, namely; The Source Server, Database Name, UID(User ID), and PWD(Password).

Here's how to do it.

First, go to your Web.config found in your solution.
You'll be greeted by a page like the one found below.

```
<?xml version="1.0"?>

<!--
  For more information on how to configure your ASP.NET application, please visit
  http://go.microsoft.com/fwlink/?LinkId=169433
  -->


<configuration>

    <system.web>
      <compilation debug="true" targetFramework="4.5.2" />
      <httpRuntime targetFramework="4.5.2" />
    </system.web>

  
    
  
  

</configuration>
```

So simply add this line of code in side the <configuration> tags.

```
    <add name="Con" connectionString="SERVER=SQLSERVER; DATABASE=Sample; UID=sa; PWD=1234;"/>

```
Name refers to the name you'll be assigning your connection.

Meanwhile connectionString refers to the server name you're using in SQL, to find out the name of your server in SQL
simply open a new instance of SQL and when promted to log in you'll see the server name above the log in fields.

UID, or UserID refers to the User ID you use to log in SQL, and PWD, or password refers to the password accompanied by said UID.

So the expected output should be this:

### Output
```
<?xml version="1.0"?>

<!--
  For more information on how to configure your ASP.NET application, please visit
  http://go.microsoft.com/fwlink/?LinkId=169433
  -->


<configuration>

    <system.web>
      <compilation debug="true" targetFramework="4.5.2" />
      <httpRuntime targetFramework="4.5.2" />
    </system.web>

  
     <add name="Con" connectionString="SERVER=SQLSERVER; DATABASE=Sample; UID=sa; PWD=1234;"/>
  
  

</configuration>
```
