---
title: C# Logic Conditions
---

Programming Logic: Execute code based on conditions.

### The If Condition

C# lets you execute code based on conditions.

To test a condition you use an **if statement**. The if statement returns true or false, based on your test:

The if statement starts a code block
The condition is written inside parenthesis
The code inside the braces is executed if the test is true

#### Example
```
@{var price=50;}
<html>
<body>
@if (price>30)
    {
    <p>The price is too high.</p>
    }
</body>
</html>
```

### The Else Condition

An if statement can include an **else condition**.

The else condition defines the code to be executed if the condition is false.

#### Example
```
@{var price=20;}
<html>
<body>
@if (price>30)
  {
  <p>The price is too high.</p>
  }
else
  {
  <p>The price is OK.</p>
  } 
</body>
</html>
```

**Note:** In the example above, if the first condition is true, it will be executed. The else condition covers "everything else".

### The Else If Condition

Multiple conditions can be tested with an else if condition:

#### Example
```
@{var price=25;}
<html>
<body>
@if (price>=30)
  {
  <p>The price is high.</p>
  }
else if (price>20 && price<30) 
  {
  <p>The price is OK.</p>
  }
else
  {
  <p>The price is low.</p>
  }    
</body>
</html>
```

In the example above, if the first condition is true, it will be executed.

If not, then if the next condition is true, this condition will be executed.

You can have any number of else if conditions.

If none of the if and else if conditions are true, the last else block (without a condition) covers "everything else".

### Switch Conditions

A **switch block** can be used to test a number of individual conditions:

#### Example
```
@{
var weekday=DateTime.Now.DayOfWeek;
var day=weekday.ToString();
var message="";
}
<html>
<body>
@switch(day)
{
case "Monday":
    message="This is the first weekday.";
    break;
case "Thursday":
    message="Only one day before weekend.";
    break;
case "Friday":
    message="Tomorrow is weekend!";
    break;
default:
    message="Today is " + day;
    break;
}
<p>@message</p>
</body>
</html>
```

The test value (day) is in parentheses. Each individual test condition has a case value that ends with a colon, and any number of code lines ending with a break statement. If the test value matches the case value, the code lines are executed.

A switch block can have a default case (default:) for "everything else" that runs if none of the cases are true.
