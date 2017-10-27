---
title: Out Variables
---

# Out Variables

Before C# 7, if you had to pass a variable as out parameter, then the variable must had been declared before passing it to the method. But in C# 7, you can declare variable directly when you are passing it inside a method.

## Example C# 6
```
using static System.Console;  
class Program
{  
	  static void Main(string[] args)
	  {  
	      string s = "26-Nov-2016";
	      DateTime date;
	      if (DateTime.TryParse(s, out date))
	      {  
	          WriteLine(date);  
	      }  
	      WriteLine(date);  
	  }
}  
```

## Example C# 7
```
using static System.Console;  
class Program
{  
	  static void Main(string[] args)
	  {  
	      string s = "26-Nov-2016";  
	      if (DateTime.TryParse(s, out DateTime date))
	      {  
	          WriteLine(date);  
	      }  
	      WriteLine(date);  
	  }
} 
```