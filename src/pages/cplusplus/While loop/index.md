# While Loop
<p>While loop is used to execute a given block of statements repeatedly as long as a given condition is TRUE</p>

### Syntax

```cpp

while(condition)
{
  //code statements
}

```

<p>The condition is checked in every iteration and the loop executes as long as the condition is true. When the condition returns false, the control breaks out of the loop and goes to the next line of the code after the loop.<p>
<p>Do not forget to update the value of loop counter in the loop body otherwise the loop may execute infinitely.<p>
<p><emp>Note:</emp> The control will not enter the wile loop for even once if the condition is false already.<p>

### Example-1

```cpp

int i=5
while(i!=0)
{
  cout<<"Hello World!";
  i--;
}

```
#### Output:

```cpp

Hello World!
Hello World!
Hello World!
Hello World!
Hello World!

```

### Example-2

```cpp

int i=-1
while(i!=0)
{
  cout<<"Hello World!";
  i--;
}

```
#### Output:

```
```
No Output
