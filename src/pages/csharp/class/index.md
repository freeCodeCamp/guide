---
title: Class
---
## Class
	
A class is a prototype or blueprint from which objects are created. In C#, the class is defined by using the keyword class. A class is used to combine together some methods,properties,fields,events,delegates and methods into a single unit. A class may contain nested classes too.
eg: consider the case of Employee Class below:

```csharp
using System;

namespace CPrograms
{
    class Employee
    {
        private string name;
        private int employeeId;

        public Employee(string name, int employeeId)
        {
            this.name = name;
            this.employeeId = employeeId;
        }
        public void PrintEmployee()
        {
            Console.WriteLine("Employee Name: {0} , Employee ID: {1}", this.name, this.employeeId);
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Employee employeeObject = new Employee("John Doe", 420156);
            employeeObject.PrintEmployee();
        }
    }
}
```

A class can inherit from one base class only. However, it can implement from more than one interface.

## More Information
Read more about classes [here](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)

