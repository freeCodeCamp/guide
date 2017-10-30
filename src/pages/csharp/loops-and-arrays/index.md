---
title: C# Loops and Arrays
---

Statements can be executed repeatedly in loops.

### For Loops

If you need to run the same statements repeatedly, you can program a loop.

If you know how many times you want to loop, you can use a for loop. This kind of loop is especially useful for counting up or counting down:

#### Example
```
<html>
<body>
@for(var i = 10; i < 21; i++)
    {<p>Line @i</p>}
</body>
</html>
```

### For Each Loops

If you work with a collection or an array, you often use a for each loop.

A collection is a group of similar objects, and the for each loop lets you carry out a task on each item. The for each loop walks through a collection until it is finished.

The example below walks through the ASP.NET Request.ServerVariables collection.

#### Example
```
<html>
<body>
<ul>
@foreach (var x in Request.ServerVariables)
    {<li>@x</li>}
</ul>
</body>
</html>
```

### While Loops

The while loop is a general purpose loop.

A while loop begins with the while keyword, followed by parentheses, where you specify how long the loop continues, then a block to repeat.

While loops typically add to, or subtract from, a variable used for counting.

In the example below, the += operator adds 1 to the variable i, each time the loop runs.

#### Example
```
<html>
<body>
@{
var i = 0;
while (i < 5)
    {
    i += 1;
    <p>Line @i</p>
    }
}
</body>
</html>
```

### Arrays

An array is useful when you want to store similar variables but don't want to create a separate variable for each of them:

#### Example
```
@{
string[] members = {"Jani", "Hege", "Kai", "Jim"};
int i = Array.IndexOf(members, "Kai")+1;
int len = members.Length;
string x = members[2-1];
}
<html>
<body>
<h3>Members</h3>
@foreach (var person in members)
{
<p>@person</p>
}
<p>The number of names in Members are @len</p>
<p>The person at position 2 is @x</p>
<p>Kai is now in position @i</p>
</body>
</html>
```
