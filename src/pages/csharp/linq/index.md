---
title: LINQ
---
## LINQ

Language Integrated Query, or LINQ, is a querying syntax built into the .NET Framework. It can greatly simplify and bring SQL-like querying capabilities to certain tasks, such as searching through a list of data for some value or querying a database.

### Collections

Let's look at an example. First, let's assume an "Employee" class and a list of Employees with their names and ages.

```csharp
class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
}
	
List<Employee> employees = new List<Employee>()
{
    new Employee { Id = 1, Name = "Bob" },
    new Employee { Id = 2, Name = "Mary" },
    new Employee { Id = 3, Name = "Tina" }
};
```

Traditionally, searching for a particular value involves multiple lines of code, including a loop to iterate through the collection, as well as logic to check each item in the collection and break out of the loop when a match is found.

```csharp
public string GetName(int id)
{
    string name = null;
    foreach(var emp in employees)
    {
        if (emp.Id == id)
        {
            name = emp.Name;
            break;
        }
    }
    return name;
}
```

Using LINQ, you can write shorter and more direct code. The following query searches the collection for the single item with an Id of 2 and returns the name, or `null` if nothing is found.

```csharp
var name = employees.SingleOrDefault(x => x.Id == 2)?.Name;
```

### Databases

LINQ also allows you, with the help of code built-in to the .NET Framework as well as additional drivers supported by various database providers, to query databases right from your code.

Let's assume a new `Employee` class that looks a little different than before.

```csharp
class Employee
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime HireDate { get; set; }
}
```

Here's how you might query a database and iterate through the results _without_ LINQ, populating a list of some class.

```csharp
private List<Employee> GetEmployees(string firstName)
{
    var command = new SqlCommand("SELECT * FROM employees WHERE first_name = @FIRST_NAME", connection);
    command.Parameters.Add("@FIRST_NAME", SqlDbType.VarChar);
    command.Parameters["@FIRST_NAME"].Value = firstName;
    connection.Open();
    var reader = command.ExecuteReader();

    var employees = new List<Employee>();    
    while (reader.Read())
    {
        var emp = new Employee();
        emp.Id = reader.GetFieldValue<int>(0);
        emp.FirstName = reader.GetFieldValue<string>(1);
        emp.LastName = reader.GetFieldValue<string>(2);
        emp.HireDate = reader.GetFieldValue<DateTime>(3);
        employees.Add(emp);
    }
    return employees;
}
```

Setting up a connection to a database to allow for querying with LINQ is beyond the scope of this guide, and it varies by database. But once setup, your code becomes much more SQL-like and usually shorter as well.

There are two flavors of LINQ syntax - query and method. Here is the above code, translated into LINQ "query" syntax. The `db` variable represents a connection to the database and is usually configured elsewhere within your code.

```csharp
private List<Employee> GetEmployees(string firstName)
{
    var employees = from emp in db.Employees
                    where emp.FirstName == firstName
                    select emp;
    return employees.ToList();
}
```

Finally, here is the same code again, but written in "method" syntax this time. Most of the time, you can execute the same query in either query or method syntax, but which one you'll end up using is often a matter of personal preference.

```csharp
private List<Employee> GetEmployees(string firstName)
{
    return db.Employees.Where(emp => emp.FirstName == firstName).ToList();
}
```

LINQ is available for the .NET Framework - not just the C# language - so you can find documentation online for other languages like VB.NET and F# too.

#### More Information:
* [Getting Started with LINQ in C#](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/getting-started-with-linq)
* [101 LINQ Samples](https://code.msdn.microsoft.com/101-LINQ-Samples-3fb9811b) @ MSDN
* [LINQ to SQL](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/sql/linq/)
* [Query Syntax and Method Syntax in LINQ](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/query-syntax-and-method-syntax-in-linq)
