---
Title: Creating a Helper Class to store methods and connections
---


# Creating a Helper Class
To Create a helper class, create first and App_Code Folder in your solution if there isn't one yet.
After creating the folder simply create a new class, and name it to whatever you want.

For convienience sake, we'll name it Helper for now.

Make sure to declare your System.Configuration.
```
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;

public class Util
{
    public Util()
    {
        
    }
    
     public static string GetConnection()
    {
        return ConfigurationManager.ConnectionStrings["con"].ConnectionString;
    }
}

```

By creating the method GetConnection(), you can call it for your connecting your .cs file to your database.

```
using (SqlConnection Rikka = new SqlConnection(Util.GetConnection()))

```
